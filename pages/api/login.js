const firebase = require("firebase");
const db = require("../../firebase-config/config")
export default async function handler(req, res) {
    if (req.method === "POST") {
        const email = req.body.email;
        const password = req.body.password;
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            res.status(200).send("user is autherized")
        }).catch((err) => {
            res.status(401).send(err.message)
        })
    }
    else {
        res.redirect("/", 302)
    }

}
