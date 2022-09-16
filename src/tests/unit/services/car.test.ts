import * as sinon from 'sinon';
import { expect } from 'chai';
import { ZodError } from 'zod';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { carMock, carMockList, carMockUpdate, carMockUpdateWithId, carMockWithId } from '../../mocks/carMock';
import { ErrorTypes } from '../../../errors/catalog';

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'read')
    .onCall(0).resolves(carMockList)
    .onCall(1).resolves([]);
    sinon.stub(carModel, 'readOne')
    .onCall(0).resolves(carMockWithId)
    .onCall(1).resolves(null);
    sinon.stub(carModel, 'update').resolves(carMockUpdateWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Create Car', () => {
    it('Success', async () => {
      const carCreated = await carService.create(carMock);
      expect(carCreated).to.be.deep.equal(carMockWithId);
    });
    it('Failure', async () => {
      try {
        await carService.create({} as any);
      } catch (error) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('ReadAll Car', () => {
    it('Success', async () => {
      const cars = await carService.read();
      expect(cars).to.be.deep.equal(carMockList);
    });
    it('Failure', async () => {
      const cars = await carService.read();
      expect(cars).to.be.deep.equal([]);
    });
  });

  describe('ReadOne Car', () => {
    it('Success', async () => {
      const carFound = await carService.readOne('62cf1fc6498565d94eba52cd');
      expect(carFound).to.be.deep.equal(carMockWithId);
    });
    it('Failure', async () => {
      try {
        await carService.readOne('62cf1fc6498565d94eba52cd');
      } catch (error: any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });

  describe('Update a car', () => {
    it('Success', async () => {
      const newCar = await carService.update('62cf1fc6498565d94eba52cd', carMockUpdate);
      expect(newCar).to.be.deep.equal(carMockUpdateWithId);
    });
  });
});