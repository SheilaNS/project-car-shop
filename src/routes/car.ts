import { Router } from 'express';
import CarController from '../controllers/car';
import CarModel from '../models/Car';
import CarService from '../services/Car';

const carRoute = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

carRoute.post('/', carController.create);
carRoute.delete('/:id', carController.delete);
carRoute.get('/:id', carController.readOne);
carRoute.get('/', carController.read);
carRoute.put('/:id', carController.update);

export default carRoute;