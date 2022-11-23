const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getContent = async (contentId: string) => {
  const content = await prisma.
};

const getEpisode = async (episodeId: string) => {
  return json[episodeId];
};

export default {
  getContent,
  getEpisode,
};
