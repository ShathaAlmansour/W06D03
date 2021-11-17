const express = require ("express")
const app = express ()
const PORT = 5000
app.use(express.json())


const information =[{
    name:"Shaden",
    age:30,
},
{
    name:"Shahad",
    age:27,
},
{
    name:"Shatha",
    age:24,
},];

// Read 
app.get("/information", (req,res) => {
    res.status(200)
    res.json(information)
});
app.get("/information", (req,res) => {
    const {name} =req.query
    const found = information.find((item) =>  {
        return item.name === name;
    }
    );
    if(found) {
        res.status(200)
        res.json(found)
    }
    else {res.status(404);
    res.json("Not Found");
}
});

// Add
app.post("/create", (res,req) => {
    const { name ,age} = req.body;
    const newInfo = {name:req.body.name,
        age: req.body.age,
        };
    information.push({name,age})
    res.status(201).json({name,age});
    });

// Put 

app.put("/update/id", (req,res) => {
    const{id} =req.params;
    const{name,age}=req.body;
    information.forEach((information) => {
        if ( informationid == id){ 
if (name != undefined) information.name=name;
if ( age != undefined) information.age=age;
    }});
        res.status(200).json(information);
});

// Delete

app.listen (PORT,() => {
    console.log (`Server is running ${PORT}`);
})