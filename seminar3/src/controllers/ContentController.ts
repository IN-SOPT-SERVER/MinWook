import { Request, Response } from "express";
import contentService from "../services/ContentService";

/**
 *  @route GET /content/:contentId?episodeId=1
 *  @desc Get Content
 *  @access Public
 */
const getContent = async (req: Request, res: Response) => {
  const { contentId } = req.params;
  const episodeId = req.query.episodeId as string;

  const data = await contentService.getContent(contentId);
  
  
  if(!data){
    return res.status(404).json({status: 404 ,message:`${data.title}을 찾을 수 없음`});
  }

  return res.status(200).json({status: 200 ,message: `${data.title}`, data});
};

/**
 *  @route POST /content
 *  @desc Post Content
 *  @access Public
 */
const createContent = async(req: Request, res: Response) => {
  const {title, time} = req.body;
  const cag_id = req.params.id;

  if(!title || !time) {
    return res.status(400).json({status: 404, message: "컨텐츠 생성 실패"});
  }

  const data = await contentService.createContent(title, time, +cag_id);

  if(!data){
    return res.status(400).json({status: 404, message: "컨텐츠 생성 실패"});
  }
  return res.status(200).json({status: 200, message: ""})
}


export default {
  getContent,
};
