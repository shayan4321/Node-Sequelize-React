const express = require('express');
const cors = require('cors');

const app = express();

// var corOptions = {
//     origin: 'https://localhost:8081' // for React use
// }



//------------------------------- Middleware ---------------------------
// app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//------------------------------- Routers ------------------------------

const productRouter = require('./routes/productRouter.js');
app.use('/api/products', productRouter)


// Images Folder

app.use('/Images', express.static('./Images'));


//------------------------------ Port ---------------------------------

const PORT = process.env.PORT || 8080

//------------------------------ Server --------------------------------
app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`);
})