const db = require("../../firebase-config/DatabaseCollection")
const firebase = require("firebase")

export default async function handler(req, res) {
    if (req.method === "POST") {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const AvinyaConnectEvents = db.collection('Events')
                AvinyaConnectEvents.add({...req.body, "created by":user.email}).then(() => {
                    res.status(200).json({ "status": 200 })
                })
                res.status(200).json({ "status": "200" })
            } else {
                res.status(200).json({ "status": "400" })
            }
        });
    }
}
