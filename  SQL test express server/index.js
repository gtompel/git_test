const express = require('express');
const mssql = require('mssql');
const bodyParser = require('body-parser');
const app = express();

// Define the routes
app.get('/', async (req, res) => {
  try {
 const pool = await mssql.connect(config);
 const result = await pool.request().query('SELECT * FROM todos');
 const todos = result.recordset;
 res.render('index', { todos });
  } catch (err) {
 console.error('Error retrieving data from SQL Server:', err);
 res.status(500).send('Internal Server Error');
  }
});
app.post('/todos', async (req, res) => {
 const { text } = req.body;
  try {
 const pool = await mssql.connect(config);
 await pool
 .request()
 .input('text', mssql.NVarChar, text)
 .query('INSERT INTO todos (text) VALUES (@text)');
 res.redirect('/');
  } catch (err) {
 console.error('Error adding data to SQL Server:', err);
 res.status(500).send('Internal Server Error');
  }
});
app.post('/todos/:id', async (req, res) => {
 const { id } = req.params;
  try {
 const pool = await mssql.connect(config);
    await pool
      .request()
 .input('id', mssql.Int, id)
 .query('DELETE FROM todos WHERE id = @id');
    res.redirect('/');
  } catch (err) {
 console.error('Error deleting data from SQL Server:', err);
    res.status(500).send('Internal Server Error');
  }
});
// ... 
// Configure EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Configure SQL Server connection
const config = {
  user: 'your_username',
  password: 'your_password',
  server: 'localhost', // Update this with your SQL Server host
  database: 'todo_list_db', // Create a database for your app
};

mssql.connect(config, (err) => {
  if (err) {
    console.error('Error connecting to SQL Server:', err);
  } else {
    console.log('Connected to SQL Server');
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});