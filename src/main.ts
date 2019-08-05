import { Server } from './server'
import { connect } from './database/database'

async function main() {
    const app = new Server();
    await connect();
    await app.start();
}

main();