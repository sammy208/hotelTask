
const mongoose = require ("mongoose")

const user = new mongoose.Schema({
    
    email: {
        type: String, 
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user","admin"],
        default: "user",
    }
})

const User = mongoose.model ("User", user)
export default User