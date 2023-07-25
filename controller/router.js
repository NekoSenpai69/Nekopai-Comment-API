const nm = require("nodemailer");

const message = async(req,res) => {
  console.log("right")
const {email,name,number,message,subject} = req.query
  console.log({email,name,number,message,subject});
let transporter = await nm.createTransport({
  host:"smtp.gmail.com",
  port:587,
  auth: {
    user:"nekosenpai269@gmail.com",
    pass:"fvylevcjvagwoszz"
  }
})
let info = {
    from:"nekosenpai269@gmail.com",
    to:"nekosenpai269@gmail.com",
    subject:subject,
    text: 
      `
       From: ${email}
       
       Name: ${name}
       
       Number: ${number}
       
       Message: ${message}`
}
  await transporter.sendMail(info,function(e,i) {
    if (e) {
       res.set(400).send("Request is Unsuccessful!!");
    } else {
       res.set(200).send("Request is Successful!!");
    }
    
 })
     
}
module.exports = message