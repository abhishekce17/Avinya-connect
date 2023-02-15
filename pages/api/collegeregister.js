import bcrypt from "bcrypt"
const db = require("../../firebase-config/DatabaseCollection")
const saltRounds = 10
const firebase = require("firebase");

export default async function handler(req, res) {

    if (req.method === "POST") {

        const auth = firebase.auth()
        const AvinyaConnect = db.collection("CollegeDB")
        const existingUser = await AvinyaConnect.where('college id', '==', req.body['college id']).get()
        if (existingUser.empty) {
            // console.log("Auth")
            bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                firebase.auth().createUserWithEmailAndPassword(req.body['college id'], req.body.password)
                    .then((userCredential) => {
                        AvinyaConnect.add({ ...req.body, password: hash }).then(() => {
                            res.status(200).json({ "status":"200" });
                        })
                    })
                    .catch((error) => {
                        res.status(error.code).json({ errorMessage: error.message })
                    });
            })
        }
    }
    else {
        res.redirect("/", 302)
    }

}
