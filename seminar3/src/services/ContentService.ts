const json = require('./../database/content.json');

const getContent = async (contentId: string) => {
  console.log(json.contentId);
  console.log(contentId);
  console.log(json);
  
  
  return json[contentId];
};

export default {
  getContent,
};
