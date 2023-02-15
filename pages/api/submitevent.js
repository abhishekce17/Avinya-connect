const db = require("../../firebase-config/DatabaseCollection")
const firebase = require("firebase")

export default async function handler(req, res) {
    if (req.method === "POST") {
        const AvinyaConnectEvents = db.collection('Events')
        AvinyaConnectEvents.add(req.body).then(() => {
            res.status(200).json({ "status": 200 })
        })
    }
    else {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("logged")
                res.status(200).json({ "status": "200" })
            } else {
                res.status(200).json({ "status": "400" })
            }
        });
    }
}
