const { application } = require("express");
let express=require("express")

let app=express()
app.use(express.json());
let port=8000

let employee=[
    {empName: 'Abc',id:1},
    {empName:'DEf',id:3},
    {empName:'Ghi',id:4}
]


app.get('/empd',(req,res)=>{
    res.send(employee)
})

app.get('/empdetails/:id',(req,res)=>{
    let emp=employee.filter(c=> c.id.toString() ===req.params.id);
    if(!emp) res.status(404).send("not found")
    res.send(emp);
})

app.post('/adddata',(req,res)=>{
    const{empName,id}=req.body;
    console.log(empName,id);
    res.send('data stored')
    
})

app.delete('/del/:id',(req,res)=>{
    let emp=employee.filter(c=> c.id.toString()===req.params.id);
    res.send(emp);

    console.log("delete")
});

app.listen(port,function(){
    console.log(`Server started on port ${port}`)
})
