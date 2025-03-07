const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser");
const {sendEmail }  = require("./config/mailer");
const { sendEmailSubscribe } = require("./config/mailer");
require("dotenv").config()
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
const PORT = process.env.PORT || 8080;

app.post("/userSend", async (req, res) => {
    try {
        const { name, email, textarea,  } = req.body
        await sendEmail({ name, email, textarea,  })
    } catch (error) {
        console.log( "error" )
    }
})


app.post("/userSubscribe", async (req, res) => {
    try {
        const { subscribe } = req.body
        console.log("------>", subscribe)
        await sendEmailSubscribe({ subscribe })
    } catch (error) {
        console.log("----> ", error.message
        )
    }
})


app.get("/", (req, res) => {
    res.send(`Server is running succesfully`);
});
app.listen(PORT, () => {
    console.log(`server runing on http://localhost:${PORT}`)
})