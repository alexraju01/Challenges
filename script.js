console.log("Welcome To Fortune Telling");

const randomLuck = {
  luckyNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  luckiness: [
    "misforutune",
    "greater misfurtune",
    "lucky",
    "greater luck",
    "okay luck",
    "heavens blessing",
  ],
  lucksText: ["blessed with a good job", "find your love", "fail your test", "suffer"],
};

const luckGained = [];

for (let i in randomLuck) {
  let val = randNumber(randomLuck[i].length);
  //   console.log(i);
  switch (i) {
    case "luckyNums":
      console.log(`your lucky number for today is: ${randomLuck[i][val]}`);
      break;
    case "luckiness":
      console.log(`The cosmoes of fortune inicates that you: ${randomLuck[i][val]}`);
      break;
    case "lucksText":
      console.log(`you may ${randomLuck[i][val]}`);
      break;
  }
}

function randNumber(num) {
  //   return random value
  return Math.floor(Math.random() * num);
}
