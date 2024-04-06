import { Server, ic } from 'azle';
import cors from "cors";
import express from 'express';
import mongoose, { mongo } from 'mongoose';
import { UserModel } from './models/user';


export default Server(() => {
    const app = express();
    mongoose.connect("mongodb://localhost:27017/Ganaderia2")
        .then(() => {
            console.log("Conexion establecida.")
        }).catch((err) => {
            console.log("Error: ", err)
        })
    app.use(cors());
    app.use(express.json());

    // app.use((req, res, next) => {
    //     if (ic.caller().isAnonymous()) {
    //         res.status(401);
    //         res.send();
    //     } else {
    //         next();
    //     }
    // });

    app.post('/api/create', async (req, res)=>{
        await UserModel.create(req.body);
        res.status(200).json({msg:"Usuario registrado con exito"})
        return;
    });

    app.post('/api/create-ARDUINO', async (req, res)=>{
        console.log(req.body)
        await UserModel.create(req.body);
        res.status(200).json({msg:"Usuario registrado con exito"})
        return;
    });

    app.get('/api/get', async (req,res)=>{
        const users = await UserModel.find();
        res.status(200).json(users)
        return;
    });


    app.get('/whoami', (req, res) => {
        res.statusCode = 200;
        res.send(ic.caller());
    });

    return app.listen();
});
