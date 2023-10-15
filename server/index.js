
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let data = [
  {
	id: 0,
    name: 'Runster91',
    date: '2023-10-16',
    time: '7:00',
    guests: '4',
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

  const { name, date, time, guests } = req.body;

  data.push({
	name,
	date,
    time,
    guests,
  });

  res.json({
	msg: "Reservation added",
	data: data,
  });
});


app.listen(3005, () => console.log("servidor encendido"));
