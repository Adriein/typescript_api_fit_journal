"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Routes
const autenthication_routes_1 = __importDefault(require("./routes/autenthication.routes"));
const records_routes_1 = __importDefault(require("./routes/records.routes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', process.env.PORT || 3000);
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use('/login', autenthication_routes_1.default);
        this.app.use('/createRecord', records_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => console.log(`Server on port ${this.app.get('port')}`));
    }
}
exports.Server = Server;
