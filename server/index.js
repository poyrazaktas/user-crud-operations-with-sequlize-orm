const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users.js");
const db = require("./config/database.js");

const app = express();

app.use(cors());
app.use(express.json());
db.sync().then(() => console.log("db is ready"));

app.get("/", (req, res) => {
  res.json({
    author: "Poyraz Aktaş",
    message: "Alo-Tech Node.js Proje Ödevi",
  });
});

app.use("/users", userRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
