import { Schema, model } from "mongoose";

//// aqui agregamos el esquema 
const perfil_vacaSchema = new Schema ({
    Raza_vaca: {
        type: String,
        required: true
    },

    Edad_vaca: {
        type: String,
        required: true
    },

    Fecha_Nacimiento: {
        type: Date,
        required: true
    },

    Peso_vaca: {
        type: String,
        required: true
    },

    Rancho_id: {
        type: String,
        required: true
    }
})

export const RanchoModel = model('perfil_vaca', perfil_vacaSchema);
