import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'fit_journal',
        connectionLimit: 10
    });
    console.log('DB Connection created');
    
    return connection;
}