import { ChildProcess } from "child_process";
import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
export const signUp= async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const user= await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        const hashedPassword= await bcrypt.hash(password,10);
    const createdUser= new User({
        name,
        email,
        password:hashedPassword
    })
    await createdUser.save();
    res.status(201).json({message:"User created successfully",
        user:{
            _id:createdUser._id,
            name:createdUser.name,
            email:createdUser.email
        }
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
}

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(user.password);
    console.log("Password match result:", isPasswordValid);

    if(!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    return res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
