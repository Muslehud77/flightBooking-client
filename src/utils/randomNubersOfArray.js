


export const generateRandomArray = (quantity) => {
 const patternedArray = [
   2,
   ...Array.from(
     { length: quantity - 1 },
     () => Math.floor(Math.random() * 2) + 1
   ),
 ];
 return patternedArray;
}




