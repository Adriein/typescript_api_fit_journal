"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const autenthication_controllers_1 = require("../controllers/autenthication.controllers");
router.route('/')
    .post(autenthication_controllers_1.login);
exports.default = router;
