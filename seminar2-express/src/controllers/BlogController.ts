import { Request, Response } from "express";
import data from "../data/blogData";

class BlogController {
  async getBlog(req: Request, res: Response) {
    return res
      .status(200)
      .json({ status: 200, message: "블로그 조회 성공", data });
  }
}

export default new BlogController();
