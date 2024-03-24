const {validateSignupInput, validateLoginInput } = require ("../utils/userutils.js")
const {saveuser, findUserByEmail} = require("../service/userService.js")
const {comparepassword} = require ("../config/bcryptConfig.js")
const jwt = require ("jsonwebtoken")


export const signUp=async(req,res)=>{
    try{
     const {email,password,name}=req.body
     const inputValidation=  validateSignupInput(email,password,name)
     if(inputValidation.errors){
        res.status(400).json(inputValidation.errors)
     }
     const exisitingUser= await findUserByEmail(email);
     if(exisitingUser){
        return res.status(400).json({message: 'User already exists'})
     }
     let role= "user";
     const companyEmailRegex = /^[^@\s]+@(?:[^.@\s]+\.)?samuel\.com$/;
      if(companyEmailRegex.test(email)){
          role= "Admin";
      }
    await saveuser(email,password,name,role);
    res.status(200).json({message:"user registered successfully"});
     }catch(error){
        console.log("Error occurred while signup",error);
        console.log(error)
        res.status(500).json({message: "Internal server error", error: error});
     }
}
export const login = async(req, res) =>{
    try{
       const {email,password}=req.body
       const inputValidation=  validateLoginInput({email,password})
       if(inputValidation.errors){
          res.status(400).json(inputValidation.errors)
       }
      const result = await comparepassword(email,password)
      if(!result){
      return res.status(400).json({message: 'Invalid password'})
      }
     const payload= {email}
     res.cookie("token", token ,{httpOnly : true})
     const token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn: '1h'})
 return res.status(200).json({message:"user successfully login",token});
    }catch(error){
       console.log("Error occurred while login",error)
       res.status(500).json({message: "Internal server error", error: error});
    }
 }


