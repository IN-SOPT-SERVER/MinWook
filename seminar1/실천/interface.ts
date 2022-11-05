interface SOPT {
  name: string;
  age: number;
  isSOPT: boolean;
  home: string;
  mbti: string;
  food: string;
}

const members: SOPT[] = [
  {
    name: "김민욱",
    age: 26,
    isSOPT: true,
    home: "회기",
    mbti: "ESFJ",
    food: "치킨"
  },
  {
    name: "박서원",
    age: 22,
    isSOPT: true,
    home: "용인",
    mbti: "INTJ",
    food: "마라탕",
  },
  {
    name: "김다현",
    age: 24,
    isSOPT: true,
    home: "고속터미널",
    mbti: "ESFP",
    food: "민트초코",
  }
];
console.log(members);

members.map((member)=>console.log(`이름은 ${member.name}이고, 나이는${member.age}이고, ${member.home}에 살고, mbti는 ${member.mbti}이며, 음식은 ${member.food}를 좋아해요!`));