"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const records_controllers_1 = require("../controllers/records.controllers");
router.route('/')
    .post(records_controllers_1.createRecord);
exports.default = router;
