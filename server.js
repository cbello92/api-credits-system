const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
// const routes = require('./routes/main');
require('./config/config');

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
// app.use(routes);


app.get('/api/status', (req, res) => {
    res.status(200).send('API CREDITS SYSTEM');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running now in port ${process.env.PORT}`);
});