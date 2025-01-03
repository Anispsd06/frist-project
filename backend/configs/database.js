import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todolist'           
})          // create connection to database


connection.connect((err) => {
    return err ? console.error('connection to database err :', err) : console.log('connection to database success'); 
});

export default connection;