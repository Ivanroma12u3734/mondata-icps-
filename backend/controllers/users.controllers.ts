import { UserModel } from "../models/user";

export default {
    create: async (req: any, res: any) => {
        try {
            const user = req.body;
            await UserModel.create(user);
            res.status(200).json({ msg: "Informacion guardada con exito." });
            return;
        } catch (error) {
            res.status(500).json({ msg: "Hubo un error." });

        }


    },
    get: async (req: any, res: any) => {
        try {
            const users: any = await UserModel.find();
            res.status(200).json()
        } catch (error) {
            res.status(500).json({ msg: "hubo un error." });

        }


    },
}