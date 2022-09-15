import * as sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import { carMock, carMockWithId } from '../../mocks/carMock';
import CarModel from '../../../models/Car';

describe('Car Model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Creating a car', () => {
    it('successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });
});