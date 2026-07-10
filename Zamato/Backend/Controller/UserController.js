// First method (both are correct)
 const User = require('../Models/UserModel');
// const CreateUser= async(req, res)=>{
//     try{
//         const{username,email,password}=req.body;
//         const newUser = await User.create({username,email, password});
//         res.status(201).json(newUser);
//     }
//     catch(error){
//         res.status(500).json({error: error.message});
//     }
// }

//2nd method

const CreateUser= async (req , res)=>{
    try{
        const newUser = await User.create(req.body);
        res.status(201).json({message:"use create succefully ",data: newUser});
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

const GetAllUser = async (req , res) => {
    try{
        const users = await User.findAll();
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({error:error.message});
    }
    
};
const DeleteUser = async (req,res)=>{
    try{
        const user = await User.findByPk(req.params.id);
        if(user){
            await user.destroy();
            res.status(200).json({message:'User Deleted'});
        }
        else{
                res.status(404).json({error:'User not found'});
            }
        } catch (error) {
            res.status(500).json({error:error.message});
        
    }
};
const Login = async (req,res)=>{
    try{
        const{mobile,password}= req.body;
        const user = await User.findOne({where:{mobile}});
        if(!user){
            return res.status(404).json({error:'User not Found'});
        }
        else if (user.password !== password){
            return res.status(401).json({error: 'Invalid password'});
        } 
        else{
            res.status(200).json({message: 'Login sucessful', user:user});
        }
        

    }catch(error){
        res.status(500).json({error:error.message});
    }
};


module.exports = { CreateUser, GetAllUser, DeleteUser,Login };