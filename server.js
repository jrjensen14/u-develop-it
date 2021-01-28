const express = require('express');
const db = require('./db/database');
// const inputCheck = require('./utils/inputCheck');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other requests(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});







// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// return ALL the data in the candidates table
// db.all(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
//   });


// GET a single candidate
// db.get(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if(err) {
//       console.log(err);
//     }
//     console.log(row);
//   });
// Get single candidate

// // Delete a candidate
// db.run(`DELETE FROM candidates WHERE id = ?`, 1, function (err, result) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result, this, this.changes);
// });

// Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];
// // ES5 function, not arrow function, to use this
// db.run(sql, params, function(err, result) {
//   if (err) {
//     //console.log(err);
//     res.status(400).json({ error: err.message });
//     return;
//   }
// //   console.log(result, this.lastID);
// res.json({
//     message: 'success',
//     data: body,
//     id: this.lastID
//   });
// });



// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });