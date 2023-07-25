const app = require("express")();
const PORT = process.env.PORT || 8080;
const message = require("./controller/router.js")

app.get("/",(req,res) => {
  res.send("Server Is ok!")
})

app.get("/message",message)

app.listen(PORT,()=> {
  console.log(`Port is Running On ${PORT}`);
})