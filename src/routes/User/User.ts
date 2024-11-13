import express, { Request, Response } from 'express';  // Tanda kutip yang benar
import { userController } from '../../controllers';  // Pastikan jalur ini benar

export const router = express.Router({
  strict: true
});

router.post('/', (req: Request, res: Response) => {
  userController.create(req, res);  // Memanggil metode create
});

router.get('/', (req: Request, res: Response) => {
  userController.read(req, res);  // Memanggil metode read
});

router.patch('/', (req: Request, res: Response) => {
  userController.update(req, res);  // Memanggil metode update
});

router.delete('/', (req: Request, res: Response) => {
  userController.delete(req, res);  // Memanggil metode delete
});
