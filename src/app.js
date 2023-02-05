//connect to mongodb
const express = require('express');
const mongoose = require("mongoose");
// const DB_URL = "mongodb+srv://admin:1234@~101014890.ceawi2z.mongodb.net/?retryWrites=true&w=majority";
// mongoose.Promise = global.Promise;
const app = express();

const Restaurant = require('./models/Restaurants');
restaurantRouter = require('./routes/restaurant')

const uri = "mongodb+srv://admin:1234@101014890.ceawi2z.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("Connected to MongoDB"))
.catch(err=>console.log(err));



//code to seed database
// const seedDb = async () => {
//   await Restaurant.insertMany(seed);
//   console.log("DB seeded");
// };


// seedDb().then(() => {
//   mongoose.connection.close();
// });
  
  


app.use(express.json());
app.use('/', restaurantRouter);


PORT = 8080;
app.listen(PORT, ()=>console.log(`Server is running port ${PORT}`));


module.exports = app;