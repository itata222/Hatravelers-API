import User from "../schemas/user.schema";

const checkEmailInUse = async (email: string) => {
  try {
    const user = await User.findOne({ email }).exec();
    return !!user;
  } catch (error) {
    console.error("Error checking email:", error);
    return false;
  }
};

export { checkEmailInUse };
