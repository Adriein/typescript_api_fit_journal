import { Router } from 'express';
const router = Router();

import { createRecord } from '../controllers/records.controllers'

router.route('/')
    .post(createRecord);

export default router;




