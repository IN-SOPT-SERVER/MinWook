import { Request, Response } from "express";
import ContentService from "../services/ContentService";


/**
 *  @route GET /content/:contentId?episodeId=1
 *  @desc Get content
 *  @access Public
 */
const getContent = async (req: Request, res: Response) => {
  const { contentId } = req.params;
  const episodeId = req.query.episodeId as string;

  const data = await ContentService.getContent(contentId);
  const episodeIdData = await ContentService.getEpisode(episodeId);
  console.log(episodeId);
  
  
  if(!data){
    return res.status(404).json({status: 404 ,message:`${data.title}을 찾을 수 없음`});
  }
  if(!episodeIdData){
    return res.status(404).json({status: 404 ,message:`${data.title}을 찾을 수 없음`});
  }

  return res.status(200).json({status: 200 ,message: `${data.title}`, data});
};

export default {
  getContent,
};
