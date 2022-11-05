import Member from './member';

export default interface Dinner {
    member: Member[];
    menu: string[];
    shuffle(array: Member[] | string[]): Member[] | string[];
    organize(array: Member[]): void;
  }