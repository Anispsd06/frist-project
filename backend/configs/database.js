import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'todo-kbtc-b799.k.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_j8vzGukcx2XbM2gTTgm',
    database: 'defaultdb',
    port: '17013',  
})          // create connection to database


connection.connect((err) => {
    return err ? console.error('connection to database err :', err) : console.log('connection to database success'); 
});

export default connection;
