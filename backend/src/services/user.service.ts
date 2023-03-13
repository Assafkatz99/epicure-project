import { IUser, UserModel } from "../models/user.model";

export const getUser = async () => {
  try {
    const Chefs = await UserModel.find();
    return Chefs;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const createUser = async (user: IUser) => {
  try {
    await UserModel.create({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
    });
    console.log("user created");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// (async () => {
//     try {
//       await createUser({
//         first_name: "John",
//         last_name: "Doe",
//         email: "johndoe@example.com",
//         password: "password123",
//       });
//       console.log("creating user")
//     } catch (err) {
//       console.log(err);
//     }
//   })();




  
  export const checkIfUserEmailExists = async (email:string) => {
  try {
    const checking_email = await UserModel.findOne({ email });
    return checking_email
  } catch (err) {
    console.log(err);
    throw err;
  }
};
  
  
  
  