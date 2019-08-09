import { Request, Response } from 'express';
import { connect } from '../database/database';

import { Record } from '../interfaces/record.interface';

export async function createRecord(req: Request, res: Response): Promise<Response | void> {

    const record: Record = req.body;
    console.log(record);
    

    try {
        const conn = await connect();
        const newRecord = await conn.query('INSERT INTO records VALUES ?', record);
        console.log(newRecord);
            

    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });

    }
}