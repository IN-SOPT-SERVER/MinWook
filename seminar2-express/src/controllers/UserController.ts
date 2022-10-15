import { Request, Response } from "express";
import data from "../data/userData";

const getUser = async (req: Request, res: Response) => {
  return res
    .status(200)
    .json({ status: 200, message: "유저 조회 성공", data });
};

export default {
  getUser,
};
