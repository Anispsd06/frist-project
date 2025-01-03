import express from 'express';
import { console } from 'inspector';
const router = express.Router();
import connection from '../configs/database.js';

router.get('/todo', async (req, res) => {
    try {
        const result = await connection.query('SELECT * FROM todo');
        res.json({
            message: 'Titles retrieved successfully',
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error retrieving titles',
            error: error
        });
    }
});

router.post('/titles',async (req, res) => {
    const { title, description } = req.body;
    console.log(title, description);
   
    let tilte = req.body
    const result = await connection.query("INSERT INTO todo (title,description) VALUES (?,?)", [title, description])
    console.log('results', result)


    res.json({
        message: 'Title added successfully',
        data: result[0]
    })

}); 

export default router;