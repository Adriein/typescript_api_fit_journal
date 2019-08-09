import { Request, Response } from 'express';
import { connect } from '../database/database'

const jwt = require('jsonwebtoken');


export async function login(req: Request, res: Response): Promise<Response | void> {

    const { email, password } = req.body;

    if (!email) {
        res.status(500).json({ msg: 'You must introduce your email' });
    }
    if (!password) {
        res.status(500).json({ msg: 'You must introduce your password' });
    }

    try {
        const conn = await connect();
        const existingEmail = await conn.query('SELECT email FROM user_profile WHERE email = ?', email);

        const stringyfiedEmail = await JSON.stringify(existingEmail[0]);
        const finalEmail = await JSON.parse(stringyfiedEmail);

        if (finalEmail.length < 1) {
            res.status(500).json({ msg: 'This email not exists in our database' });
        }

        const user = await conn.query('SELECT id, email, password, first_name, rol, sex, user_status FROM user_profile WHERE password = ?', password);

        const stringyfiedUser = await JSON.stringify(user[0]);
        const finalUser = await JSON.parse(stringyfiedUser);

        if (finalUser.length < 1) {
            res.status(500).json({ msg: 'User with this credentials not found' });
        }

        jwt.sign({ user }, 'secretkey', { expiresIn: '30s' }, (err: any, token: any) => {
            if (err) {
                console.log(err);
                res.status(500).json({ msg: 'Internal server error' });
            }
            res.json({
                token
            });
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });

    }
}