const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const port = 4000

app.use(cors())
app.use(express.json())
app.use(require("./routes/index"))

const connect = async () => {
    await mongoose.connect(
        "mongodb+srv://tamerlan:raduev@cluster0.14x5g.mongodb.net/VirTuning"
    )
    console.log("Соединение успешно установлено")

    app.listen(port, () => {
        console.log(`Server has been started on port http://localhost:${port}`)
    })
}

connect()