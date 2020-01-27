var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var provinciaScehma = new Schema({
    nombre:{type:String,trim:true},
    nroCantones:{type:Number,trim:true},
    superficie:{type:Number,trim:true},
    region:{type:String,trim:true},
    id_pais:{type:Number,trim:true}
})
var provincia = mongoose.model('provincia',provinciaScehma);

module.exports=provincia;