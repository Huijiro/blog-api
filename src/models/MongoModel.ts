import { Model } from "mongoose";
import IModel from "../interfaces/IModel";

/**
 * TODO: MongoDB ID verification.
 */

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  create(data: T): Promise<T> {
    return this._model.create(data);
  }

  read(): Promise<T[]> {
    return this._model.find().exec();
  }

  readOne(_id: string): Promise<T | null> {
    return this._model.findById(_id).exec();
  }

  update(_id: string, data: T): Promise<T | null> {
    return this._model.findByIdAndUpdate(_id, data, { new: true }).exec();
  }

  delete(_id: string): Promise<T | null> {
    return this._model.findByIdAndDelete(_id).exec();
  }
}

export default MongoModel;
