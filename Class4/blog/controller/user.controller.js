import User from "../model/user.model.js"

export const getUserById = async (req,res) =>{
    const userId = req.params.userId;
    const userDetails = await User.findById();

    res.status(200).send(userDetails);


}
export const createUser = async (req,res) =>{
    try{
        const userInput = req.body;
        const newUserData = await User.create(userInput);

        res.status(202).send(newUserData)
    }catch(e){
        res.status(500).send(e.message)
    }
    
}
export const updateUser = async (req,res) =>{
    const newUserData = req.body;
    const userId = req.params.userId;

    const updatedData = await User.findByIdAndUpdates(
        userId,
        {$set: newUserData},
        {new: true, runValidators: true}

    );

    res.status(200).send(updatedData)

    
}
export const deleteUser = async (req,res) =>{
    const userId = req.param.userId;
    const deletedUser = await User.findByIdAndDelete(userId);

    res.status(200).json({message: "User Deleted Successfully"})
    
}