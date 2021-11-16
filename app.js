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

app.listen (PORT,() => {
    console.log (`Server is running ${PORT}`);
})