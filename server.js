let express=require("express");
let app=express();
app.use(express(json());
app.get('/',(req,res)=>{
  console.log("getting data");
})        
app.listen(3000,()=>{
  console.log("server running");
})
