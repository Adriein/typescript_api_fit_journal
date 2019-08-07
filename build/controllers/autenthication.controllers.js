"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        if (!email) {
            res.status(500).json({ msg: 'You must introduce your email' });
        }
        if (!password) {
            res.status(500).json({ msg: 'You must introduce your password' });
        }
        try {
            const conn = yield database_1.connect();
            const existingEmail = yield conn.query('SELECT email FROM user_profile WHERE email = ?', email);
            console.log(existingEmail[0]);
            if (!existingEmail[0]) {
                res.status(500).json({ msg: 'User with this credentials not found' });
            }
            const user = yield conn.query('SELECT id,email,first_name,rol,sex,user_status FROM user_profile WHERE password = ?', password);
            console.log(user[0]);
            /*jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
                res.json({
                  token
                });*/
            return res.json(user[0]);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    });
}
exports.login = login;
