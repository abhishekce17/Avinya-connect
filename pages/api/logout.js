const firebase = require("firebase");
export default async function handler(req, res) {
    
    if (req.method === "GET") {
        firebase.auth().signOut().then((userCredential) => {
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
