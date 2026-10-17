import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('users are coming soon');
})



const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
    { id: 4, name: 'Alice Williams', email: 'alice.williams@example.com' }
]

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('data from client', req.body);
    const newUser  = req.body;
    // Temporary data storage
    newUser.id = users.length + 1;
    users.push(newUser);
    
    res.send({ success: true, message: 'User added successfully' });
})

app.listen(PORT, () => [
    console.log(`Server is running on port ${PORT}`)
])