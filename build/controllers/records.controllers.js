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
function createRecord(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const record = req.body;
        console.log(record);
        try {
            const conn = yield database_1.connect();
            const newRecord = yield conn.query('INSERT INTO records VALUES ?', record);
            console.log(newRecord);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    });
}
exports.createRecord = createRecord;
