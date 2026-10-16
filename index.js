import express from "express"
const app = express()
const Port = process.env.Port || 5000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})


const about = [
    { id: 1, name: "Mizu", email: "mizu@gmail.com" },
    { id: 2, name: "Mizuahmmed", email: "Mizuahmmed@gmail.com" },
    { id: 3, name: "Mizuahmmedjim", email: "Mizuahmmedjim@gmail.com" },
    { id: 4, name: "Mizubabu", email: "mizubabu@gmail.com" }
];


app.get('/About', (req, res) => {
  res.send(about);
})
app.get('/Contact', (req, res) => {
  res.send('Hello About page!')
})


app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
})