const nm = require("nodemailer");

const message = async(req,res) => {
  
const {email,name,number,message,subject,user, password} = req.query
  
let transporter = await nm.createTransport({
  host:"smtp.gmail.com",
  port:587,
  auth: {
    user:user,
    pass: password 
  }
})
let info = {
    from:user,
    to:user,
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