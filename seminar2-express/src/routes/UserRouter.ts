import { Router } from 'express';
import { UserController } from '../controllers';
const router: Router = Router();

router.get('/', UserController.getUser);

export default router;