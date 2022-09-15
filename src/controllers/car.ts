import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  private _service: IService<ICar>;

  constructor(service: IService<ICar>) {
    this._service = service;
    this.create = this.create.bind(this);
    this.read = this.read.bind(this);
    this.readOne = this.readOne.bind(this);
  }

  public async create(req: Request & { body: ICar }, res: Response<ICar>) {
    const car = req.body;
    const result = await this._service.create(car);
    return res.status(201).json(result);
  }

  public async read(_req: Request, res: Response<ICar[]>) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    const result = await this._service.readOne(id);
    return res.status(200).json(result);
  }
}