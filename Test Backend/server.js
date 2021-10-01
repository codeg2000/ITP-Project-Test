const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const stockRoutes = require('./routes/stocks');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(stockRoutes);

const PORT = 8000;
const ATLAS_URL= 'mongodb+srv://gishanUser:celetron123@itpproject.pg20h.mongodb.net/stock_db?retryWrites=true&w=majority';

mongoose.connect(ATLAS_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() =>{
    console.log('MongoDB database connection established successfully.!');
})
.catch((err) => console.log('MongoDB database connection error',err));


app.listen(PORT, () => {
    console.log(`Server is up and running on port no: ${PORT}`);
});

const postRoutes = require('./routes/items');
const CategoryRoute = require('./routes/Categories');

app.use(postRoutes);
app.use(CategoryRoute);