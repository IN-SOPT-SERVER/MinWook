const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getContent = async (contentId: string) => {
  const content = await prisma.contents.findUnique({
    where: {
      id: contentId,
    },
  });
  return content;
};

const createContent = async (title: string, time: number, cag_id: number) => {
  const data = await prisma.contents.({
    data: {
      title,
      time,
      cag_id,
    },
  });
  return data;
};

export default {
  getContent,
  createContent
};
