import express from 'express';

//Routes
import autenthicationRoutes from './routes/autenthication.routes'


export class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', process.env.PORT || 3000);

    }

    private middlewares() {
        this.app.use(express.json());
    }

    private routes() {
        this.app.use('/login', autenthicationRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => console.log(`Server on port ${this.app.get('port')}`));

    }
}
