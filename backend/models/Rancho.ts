import { Schema, model } from "mongoose";
//agregamos el esquema 
const ranchoSchema = new Schema({
  Perfil_vaca: {
    type: String,
    required: true
  },
  Historial_medico: {
    type: Schema.Types.Mixed,
    required: true

  },
  Historial_produccion: {
    type: Schema.Types.Mixed,
    required: true
  }
});

export const RanchoModel = model('rancho', ranchoSchema);
