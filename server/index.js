
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let data = [
  {
	id: 0,
	title:"reservacion1",
   descripcion: "Quiero una reservacion en terraza",
   comensales: 2,

  },
  {
	id: 1,
       title:"reservacion2",
       descripcion: "Quiero una reservacion en Plancha",
       comensales: 5,

  },
];


app.get("/", (req, res) => {
  res.json({
	msg: "Este es un mensaje",
	data: data,
  });
});


app.post("/", (req, res) => {
  console.log("req", req.body);

  const { title, description } = req.body;

  data.push({
	title,
	descripcion,
	comensales,
  });

  res.json({
	msg: "Reservación agregada",
	data: data,
  });
});


app.listen(3005, () => console.log("servidor encendido"));
