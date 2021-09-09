import express, {Request, Response} from 'express'

import dogRoute from './Routes/Dog';


const app = express();

app.use('/dog',dogRoute);

app.listen("3000", ():void =>{
    console.log('Server running');
})