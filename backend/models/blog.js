
const mongoose=require('mongoose')
const blogSchema =mongoose.Schema({
    
    latitude: Number,
    longitude: Number,
    image : String,
  
});
module.exports=mongoose.model("Blog", blogSchema);