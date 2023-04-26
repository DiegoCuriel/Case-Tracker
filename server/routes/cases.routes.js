import { Router } from 'express';
import { methods as casesController } from '../controllers/cases.controller';

const router = Router();

router.get('/getCases', casesController.getCases);
router.get('/getCase/:id', casesController.getCase);
router.post('/createCase', casesController.createCase);
router.put('/updateCase/:id', casesController.updateCase);

export default router;
