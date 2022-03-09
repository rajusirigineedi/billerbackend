const express = require('express');
// TODO: use cors in future to expect cross site requests
const cookieParser = require('cookie-parser');





//import routers at last -- just a convention
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next)=>{
    req.requestTime = new Date().toISOString();
    next();
});


// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/admin', adminRouter);

module.exports = app;