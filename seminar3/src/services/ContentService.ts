const json = require("./../database/content.json");

const getContent = async (contentId: string) => {
  return json[contentId];
};

const getEpisode = async (episodeId: string) => {
  return json[episodeId];
};

export default {
  getContent,
  getEpisode,
};
