import { ContentInterface } from "./../interfaces/ContentInterface";
import { Request, Response } from "express";
import ContentService from "../services/ContentService";

const getContent = async (req: Request, res: Response) => {
  const { contentId } = req.params;

  const data = await ContentService.getContent(contentId);
  
  if(!data){
    return res.status(404).json({status: 404 ,message:"찾을 수 없음"});
  }

  return res.status(200).json({status: 200 ,message:"수리남 조회 성공", data});
};

export default {
  getContent,
};
