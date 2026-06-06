import jwt from "jsonwebtoken";
import { env } from "../../utils/env";
import { IUser } from "./user.model";

export const generateTokens = (user:IUser)=>{
  const accessToken = jwt.sign(
    {id:user._id, role:user.role}, env.JWT_ACCESS_SECRET, {expiresIn: "15m"}
  );
  const refreshToken = jwt.sign(
    {id: user._id}, env.JWT_REFRESH_SECRET,{expiresIn:"7d"}
  );
  return {accessToken, refreshToken}
};