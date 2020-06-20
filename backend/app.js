const debug = require("debug")("node-angular");
 const http = require("http");
const Blog=require('./models/blog');


 const express=require('express');
 const mongoose=require('mongoose');
 const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
const port=process.env.PORT || 5000;

app.set('port',port);
//CORS
app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers',"Origin,X-Requested-With,Content-Type,Accept");

    res.setHeader('Access-Control-Allow-Methods',"GET,POST,PATCH,DELETE,OPTIONS");
    next();
}
);
//mongodb connection

// 

app.get('/',function(req,res){
    res.send('hello prakriti');
 });


 mongoose.connect("mongodb://localhost:27017/maps")
 .then(()=>{
     console.log('conected to database');

 })
 .catch(()=>{
     console.log('connection failed');
 });



//  app.get('/posts/api', function(req, res){
//  MongoClient.connect(dburl, function(err, client) {
//      if (!err) {
//        // Get db
//       const db = client.db(dbname);

//        // Get collection
//        const collection = db.collection(collname);

//        collection.find({}).toArray(function(err, campgrounds) {
//          if (!err) {
//              console.log('connected to DB');
//         }else{
//             console.log("connection failed")};
//         });
//     }
// })

app.post("/blogs",(req,res,next)=>{
    const blog= new Blog({
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        image:req.body.image,
        //created:req.body.created,
    });
    console.log("test blog");
    console.dir(blog);
    blog.save();
    res.status(201).json(
        {
            message:"Blog added sucessfully"

        }
    );
});


app.get('/blogs',(req,res,next)=> {
Blog.find().then(documents =>{
    //console.log(documents);
    res.status(200).json({
        message:'Posts fetched successfully',
        blogs:documents,
});

    });
});


// app.delete('/posts/:id',(req,res,next) => {
//     Post.deleteOne({_id:req.params.id}).then(result =>{
//         console.log(result);
//         res.status(200).json({message:'post deleted!'});
//     })
    
// });

const server=http.createServer(app);

server.listen(port);
    //  }
