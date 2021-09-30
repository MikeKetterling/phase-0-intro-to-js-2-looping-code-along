// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(name, eventName) {
  const newArray = [];
    for (let i = 0; i < name.length; i++) {
      newArray.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);  
    }
    return newArray;
}

function countDown(int) {
  while (int >= 0) {
    console.log(int--);
  }
}