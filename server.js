const express = require("express");
const app = express();
const db = require("./db.js");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// Import the router files
const clientRoutes = require("./routes/clientRoutes");
//const agentRoutes = require("./routes/agentRoutes");

// Use the routers
app.use("/client", clientRoutes);
//app.use("/agent", agentRoutes);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
