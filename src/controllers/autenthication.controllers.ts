import { Request, Response } from 'express';

import { connect } from '../database/database'

export async function login(req: Request, res: Response): Promise <Response>{

    const { email, password} = req.body;

    if(!email){
        res.status(500).json({ msg : 'You must introduce your email'});
    }
    if(!password){
        res.status(500).json({ msg : 'You must introduce your password'});
    }

    try{
        const conn = await connect();
        const existingEmail = await conn.query('SELECT email FROM user_profile WHERE email = ?', email);
        console.log(existingEmail[0]);
        
        if(!existingEmail[0]){
            res.status(500).json({ msg : 'User with this credentials not found'});
        }

        const user = await conn.query('SELECT id,email,first_name,rol,sex,user_status FROM user_profile WHERE password = ?', password);
        console.log(user[0]);
        
        /*jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
            res.json({
              token
            });*/
        return res.json(user[0]);
    
    }catch(err){
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error'});
        
    } 
}