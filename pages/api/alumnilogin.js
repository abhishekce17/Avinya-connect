const firebase = require("firebase");
export default async function handler(req, res) {
    
    if (req.method === "POST") {
        firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then((userCredential) => {
            console.log("logged")
            res.status(200).json({"status":"200"})
        })
        .catch((error) => {
            res.status(error.code).json({ errorMessage: error.message })
        });
    }
    else {
        res.redirect("/", 302)
    }

}
