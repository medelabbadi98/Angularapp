import { NextFunction, Request, Response, Router } from 'express';
import { getProductRepository, Product } from './model';

export const router: Router = Router();


router.post('/product', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const repository = await getProductRepository();
    const product = new Product();
    product.name = req.body.name;
    product.number = req.body.number;
    product.emailAdress = req.body.emailAdress;
    product.socialStatus = req.body.socialStatus;
    product.formations = req.body.formations;

    const result = await repository.save(product);
    res.send(result);
  }
  catch (err) {
    return next(err);
  }
});


