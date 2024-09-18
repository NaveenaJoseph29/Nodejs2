import express from "express";
import hallRouter from "./Routers/hallBooking.Router.js";

const app = express();
const PORT = 7777;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200)
    .send(`<div style="text-align: center; background-color:purple;  padding: 10px;"><h1> NodeJS Hall Booking</h1></div>
    <div>
    <ul>
    <li>
    <h3><mark style="background-color:red">GET:</mark> Use the endpoint<mark style="background-color:red">/hallapi/roominfo</mark> to get the All Room Details</h3>
    </li>

    <li>
    <h3><mark style="background-color:light green">POST:</mark> Change the endpoint<mark style="background-color:light green">/hallapi/createroom</mark> to Create a New Room</h3>
    </li>

    <li>
    <h3><mark style="background-color:blue">POST:</mark> Change the endpoint<mark style="background-color:blue">/hallapi/bookroom</mark> to Book a New Room</h3>
    </li>

    <li>
    <h3><mark style="background-color:grey">GET:</mark> Change the endpoint<mark style="background-color:grey">/hallapi/bookedroomdata</mark> to retrieve all the Booked Room Data</h3>
    </li>

    <li>
    <h3><mark style="background-color:violet">GET:</mark> Change the endpoint<mark style="background-color:violet">/hallapi/customersbookeddata</mark> to retrieve all the Customers Booked Room Data</h3>
    </li>

    <li>
    <h3><mark style="background-color:orange">GET:</mark> Change the endpoint<mark style="background-color:orange">/hallapi/customerbookingcount</mark> to retrieve Booking Counts and Room Data for Booked Customers</h3>
    </li>

    </ul> 
    </div>`);
});
app.use("/hallapi", hallRouter);

app.listen(PORT, () => {
  console.log(`App Listening in ${PORT}`);
});
