import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protectRoute = async (req, res, next) => {
  try {
    console.log('--- Inside protectRoute Middleware ---'); // 1. Check if it runs

    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }
    console.log('Token found:', token); // 2. Check if the token is read

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
    console.log('Decoded token payload:', decoded); // 3. Check the decoded data

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    console.log('User found in database:', user.email); // 4. Check if user is found

    req.user = user;
    next();

  } catch (error) {
    console.error('--- ERROR in protectRoute Middleware ---', error.name, error.message); // 5. Catch the specific error
    res.status(500).json({ message: "Internal Server Error" });
  }
};