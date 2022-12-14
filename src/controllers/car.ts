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
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
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

  public async update(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    const car = req.body;
    const result = await this._service.update(id, car);
    return res.status(200).json(result);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this._service.delete(id);
    return res.sendStatus(204);
  }
}