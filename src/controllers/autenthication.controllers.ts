import { Request, Response } from 'express';

import { connect } from '../database/database'

export async function login(req: Request, res: Response): Promise <Response>{

    const conn = await connect;
    const user = await conn.query('SELECT * FROM user_profile');

    return res.json(user[0]);

}