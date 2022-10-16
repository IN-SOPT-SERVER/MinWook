const json = require('./../database/content.json');

const getContent = async (contentId: string) => {
  
  return json[contentId];
};

export default {
  getContent,
};
