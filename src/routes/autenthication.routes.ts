import { Router } from 'express';
const router = Router();

import { login } from '../controllers/autenthication.controllers'

router.route('/')
    .post(login);

export default router;




