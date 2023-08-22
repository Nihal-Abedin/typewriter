import { wordList } from "./wordList";
const words = [...wordList];
const genrateWord = () => {
    const index = Math.floor(Math.random() * words.length);
    return words.splice(index, 1);
};
export const genrateText = () => {
    return new Array(5).fill('').map(() => genrateWord()).join(" ");
};