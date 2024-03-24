const {userJoiSchema, userLoginSchema} = require ("../config/joi.js")


export const validateSignupInput=(email,password,firstname,lastname)=>{
    try{
      const result= userJoiSchema.validate(email,password,firstname,lastname)
      return result;
    }catch(error){
      console.log("Error occurred during input validation",error);
      throw new Error ("invalid input",error);
    }
}

export const validateLoginInput= (email,password)=>{
  try{
    const result= userLoginSchema.validate(email,password)
    return result;
  }catch(error){
    console.log("error occured while validating joi", error)
  }
}