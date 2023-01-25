const { Schema, model} = require('mongoose');

//const mongoose = require('mongoose');
//let Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio']

    },
    correo:{
        type:String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password:{
        type:String,
        required: [true, 'El password es obligatorio'],
        
    },
    img:{
        type:String,
                
    },
    rol:{
        type:String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE'],
       
    },
    ESTADO:{
        type: Boolean,
        default: true,
    },
    google:{
        type:Boolean,
        default:false,
    }

});

UsuariosSchema.methods.toJSON = function(){
    const {__v, password, ...usuario } = this.toObject();
    return usuario;
}

module.exports= model('Usuario', UsuariosSchema);

