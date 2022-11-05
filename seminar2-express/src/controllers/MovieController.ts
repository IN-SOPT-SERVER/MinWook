import { Request, Response } from "express";
import data from "../data/movieData";

const getMovie = async (req: Request, res: Response) => {
  return res
    .status(200)
    .json({ status: 200, message: "영화 조회 성공", data });
};

export default {
  getMovie,
};
