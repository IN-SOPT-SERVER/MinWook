import Dinner from "./interface/dinner";
import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

const dinner: Dinner = {
  member: [
    {
      name: "박서원",
      group: "yb",
    },
    {
      name: "전선희",
      group: "yb",
    },
    {
      name: "김민욱",
      group: "ob",
    },
  ],
  menu: ["치킨", "피자", "곱창"],
  shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  },
  organize(arr) {
    this.shuffle(this.member);
    this.shuffle(this.menu);
    const dinnerMember = arr.map((member) => member.name + `(${member.group})`);
    // console.log(
    //   `오늘의 저녁 식사 멤버는 ${dinnerMember[0]}(이)랑 ${dinnerMember[1]}(이)입니다. 저녁 식사 메뉴는 ${this.menu[0]}입니다.`
    // );
  },
};

dinner.organize(dinner.member);

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "코멘트 조회 성공",
    data: dinner
  });
});
module.exports = router;