const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz')
const jobsheetRoute = require('./router/jobsheet')
const museumRoute = require('./router/museum')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require('./models')
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('Quiz ExpressJS API by Peika');
});

app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)
app.use('/api/museums', museumRoute)


app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));