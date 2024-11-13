import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import * as path from 'path';
import * as fs from 'fs';

const usersjson = JSON.parse(fs.readFileSync(path.join(__dirname, '../../resources/users.json'), 'utf-8'));

export class UserController extends CrudController {
  public create(req: Request, res: Response): void {
    throw new Error('Belum diimplementasikan');
  }

  public read(req: Request, res: Response): void {
    res.json(usersjson);  // Mengembalikan data JSON
  }

  public update(req: Request, res: Response): void {
    throw new Error('Belum diimplementasikan');
  }

  public delete(req: Request, res: Response): void {
    throw new Error('Belum diimplementasikan');
  }
}