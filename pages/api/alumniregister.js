import bcrypt from "bcrypt"
const db = require("../../firebase-config/DatabaseCollection")
const saltRounds = 10

export default async function handler(req, res) {
    if (req.method === "POST") {
        const AvinyaConnect = db.collection('Alumni');
        const existingUser = await AvinyaConnect.where('email', '==', req.body.email).get()
        if (existingUser.empty) {
            // console.log("Auth")
            bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                const newUser = {
                    email: req.body.username,
                    password: hash
                }
                AvinyaConnect.add({...req.body, password : newUser.password}).then(() => {
                    res.status(200).json({"status":"200"});
                })
            })
        }
        else {
            res.status(200).json({"status":"400"})
        }
    }
    else {
        res.redirect("/", 302)
    }

}
