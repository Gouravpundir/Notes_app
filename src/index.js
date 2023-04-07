const express = require("express");
const app = express();
const noteRoutes = require('./routes/routes');
const cors = require('cors')
app.use(express.json());
app.use(cors())
app.use("/", noteRoutes);

app.listen(5000, () => {
  console.log("Server Started @ Port 5000");
});
