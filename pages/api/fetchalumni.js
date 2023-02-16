const db = require("../../firebase-config/DatabaseCollection")
const firebase = require("firebase")

export default async function handler(req, res) {

                if(req.method === "GET")
                {
                            const bcp = db.collection("Alumni")
                            let allAlumni = []
                            let fetchData = await bcp.get()
                            fetchData.forEach((eachAlumni)=>{
                                    console.log(eachAlumni.data())
                                    allAlumni.push(eachAlumni.data()) 
                                })
                            res.status(200).json(allAlumni)
                        
            } else {
                res.status(400).json({ "status": "400" })
            }
}