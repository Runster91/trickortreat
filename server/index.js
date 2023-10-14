import express from "express";


const app = express()

const data = [{
    id: 1,
    title:"reservacion1",
    descripcion: "Quiero una reservacion en terraza",
    comensales: 2,
},
    {
        id: 2,
        title:"reservacion2",
        descripcion: "Quiero una reservacion en Plancha",
        comensales: 5,
    },

    {
        id: 3,
        title:"reservacion3",
        descripcion: "Quiero una reservacion en area infantil",
        comensales: 3,
    }

]

app.get("/", (req, res)=>{
    res.json({
        msg: "Este  es un  mensaje",
        data: data
    })
})


app.post("/", (req, rest)=>{
    data.push({
        id: 4,
        title:"reservacion4",
        descripcion: "Quiero una reservacion en area de bar",
        comensales: 8,
    })

    res.json({
        msg:"Reservacion agregada",
        data: data
    })
})

app.listen(3005, ()=>console.log("servidor encendido"))
