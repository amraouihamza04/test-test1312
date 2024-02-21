//////////////////////////// GAMMAR CHECKER !!


let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
console.log(storyWords); //1
console.log(storyWords.join(" ")); //2
let count = 0;
let unnecessaryWord = "literally";
storyWords.forEach(
  (W) => {}, //3
  count++ //4
);

let filteredStoryWords = storyWords.filter((word) => word !== unnecessaryWord); //5
console.log(filteredStoryWords); //6

let misspelledWord = "beautifull";
let correctWord = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "beautifull";
  } else {
    return word;
  } //7
});

let badWord = "freaking";
let badWordIndex = storyWords.findIndex((word) => word === badWord);
console.log(badWordIndex); //8

if (badWordIndex !== -1) {
  storyWords[80] = "really";
  console.log(storyWords);
} else {
  console.log("The bad word wasn't found.");
} //9

let lengthCheck = storyWords.every((word) => {
  return word.length <= 10;
});
console.log(lengthCheck); //10

let longWord = storyWords.find((word) => word.length > 10);
const replacementWord = "stunning"; //use any replacement word here
const modifiedStory = story.replace(longWord, replacementWord);

console.log(modifiedStory); //11