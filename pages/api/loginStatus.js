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
                console.log(user.email)
                db.collection("Alumni").where( "email", "==", user.email).get().then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            res.status(200).json({"status":"200", "userType":"alumni"})
                        });
                    })
                db.collection("CollegeDB").where( "college id", "==", user.email).get().then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            res.status(200).json({"status":"200", "userType":"college admin"})
                        });
                    })
                db.collection("HigherAuthority").where( "email", "==", user.email).get().then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            res.status(200).json({"status":"200", "userType":"higher authority"})
                        });
                    })
            } else {
                res.status(200).json({ "status": "400" })
            }
        });
    }
}
