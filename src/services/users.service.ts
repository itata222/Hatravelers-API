import User from "../schemas/user.schema";

interface LoginCredentials {
  email: string;
  password: string;
}

const getAllUsers = async (queryObject = {}) => {
  try {
    const users = await User.find(queryObject).limit(10);
    return users;
  } catch (err) {
    throw err;
  }
};

const createUser = async (userData: any) => {
  try {
    const newUser = await new User(userData);
    if (!newUser) {
      throw new Error("no user added");
    }
    const token = await newUser.generateAuthToken();

    return { user: newUser, token };
  } catch (err) {
    throw err;
  }
};

const loginUser = async ({ email, password }: LoginCredentials) => {
  try {
    const user = await User.findUserbyEmailAndPassword(email, password);
    const token = await user.generateAuthToken();
    return { user, token };
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const logoutUser = async (user: any, token: string) => {
  try {
    user.tokens = user.tokens.filter(
      (tokenDoc: any) => tokenDoc.token !== token
    );

    await user.save();
    return user;
  } catch (err) {
    throw err;
  }
};

const usersService = { getAllUsers, createUser, loginUser, logoutUser };

export default usersService;
