// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const pool = require("../db/connection");
// /api/cars/id/1 delete or get 1
export default async function handler(req, res) {
    const id = req.query.id;
  if (req.method === "GET") {

    try {
      const car = await pool.query("SELECT * FROM cars WHERE id = $1", [id]);
      console.log(car.rows[0]);
      res.json(car.rows[0]);
    } catch (e) {
      console.log(e.message);
    }
  } else if (req.method === "DELETE") {
    
    try {
      const car = await pool.query(
        "DELETE FROM cars WHERE ID = $1 RETURNING *",
        [id]
      );
      console.log(car.rows[0]);
      res.json(car.rows[0]);
    } catch (e) {
      console.log(e.message);
    }
  }else if (req.method==="PUT"){ //user needs to have id and the body of the new info
      const car = req.body; //or const {make, model, year, color} = req.body and dont need need car.make. etc just make, model, etc
    try{
        const updatedCar = await pool.query("UPDATE cars SET make=$1, model=$2, year=$3, color=$4 WHERE id = $5 RETURNING*", [car.make, car.model, car.year, car.color, id]);
        console.log(updatedCar.rows[0])
        res.json(updatedCar.rows[0])
    }catch(e){console.log(e.message)}
  }
}
