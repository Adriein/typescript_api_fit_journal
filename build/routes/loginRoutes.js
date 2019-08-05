"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class LoginRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', (req, res) => res.send('Hello'));
    }
}
const indexRoutes = new LoginRoutes();
indexRoutes.routes();
exports.default = indexRoutes.router;
