import { Schema, model } from "mongoose"

const historialProduccionSchema = new Schema({

    Id_vaca : {
        type: String ,
        required: true
    },

    Fecha_extraccion : {
        type: Date  ,
        required: true
    },

    Cantidad: {
        type: String ,
        required: true
    },
 
    Calidad : {
        type: String ,
        required: true
    },
 
    Observacion : {
        type: String ,
        required: true
    },

    Rancho_id : {
        type: String ,
        required: true
    },

})

export const HistorialProduccionModel = model('history_production', historialProduccionSchema);
