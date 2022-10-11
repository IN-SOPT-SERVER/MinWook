import { Request, Response } from "express";
import data from "../data/commentData";

const getComment = async (req: Request, res: Response) => {
  return res
    .status(200)
    .json({ status: 200, message: "코멘트 조회 성공", data });
};

export default {
  getComment,
};
