import express from 'express';
import {
  createTable,
  getData,
  updateData,
  sendMail,
} from '../controllers/tableDataControllers.js';

const router = express.Router();

router.get('/create', createTable);
router.get('/', getData);
router.post('/', updateData);
router.post('/sendmail', sendMail);

export default router;
