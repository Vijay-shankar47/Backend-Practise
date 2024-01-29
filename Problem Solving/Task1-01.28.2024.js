function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1; // Return -1 if the target is not found
}

const array = ["pen", "pencil", "stabler"];
const target = "cash";

const index = binarySearch(array, target);

if (index !== -1) {
  console.log(`The index of "${target}" is ${index}.`);
} else {
  console.log(`"${target}" not found in the array.`);
}
