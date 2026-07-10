const cors = require('cors');
const express= require('express');
const db = require('./Confiq/db');
const userRoutes = require('./Routes/UserRoutes');
// const productRoutes = require('./Routes/ProductRoutes');
const app=express();
app.use(cors());
app.use(express.json());
const PORT = 8000;

app.use(express.json({limit : '10mb'}));
app.use(express.urlencoded({extended: true, limit : '10mb'}));




// const UserModel=require('./Models/UserModel')
// const Product=require('./Models/ProductModel')

app.use('/api/users',userRoutes);
// app.use('/api/products',productRoutes);
db.authenticate().then(()=>{
    console.log('Database connected sucessfully.');
    db.sync({force:false}) // set froce to true if you want to drop and recreate table

})
.catch((err)=>{
    console.error('Error connecting to the database:',err);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
