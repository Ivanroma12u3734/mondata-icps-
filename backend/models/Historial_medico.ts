import { Schema, model } from "mongoose"

const historialMedicoSchema = new Schema({ 

    ID_Año: {
        type: Date,
        required: true
    },

    Fecha_diagnostico: {
        type: Date,
        required: true
    },

    Enfermedades_id: {
        type: Date,
        required: true
    },

    Veterinario_id: {
        type: Date,
        required: true
    },
    Vacuna_id: {
        type: Date,
        required: true
    },

})
export const HIstorialMedicoModel = model('hisotry_medical', historialMedicoSchema);
