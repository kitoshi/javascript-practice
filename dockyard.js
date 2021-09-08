let boxes = [2, 0, 5];

let pos = 0;

let box = false;

const dockYard = (arr, pos, box) => {
  let total = arr[0] + arr[1] + arr[2];
  let remainder = total % 3;
  let eventotal = (total - remainder) / 3;
  let evenedArr = [eventotal, eventotal, eventotal];
  if (arr.length === 1) {
    console.log(arr);
    return arr;
  }
  if (remainder === 1) {
    evenedArr = [eventotal + 1, eventotal, eventotal];
  } else if (remainder === 2) {
    evenedArr = [eventotal + 1, eventotal + 1, eventotal];
  }
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== evenedArr[i]) {
      switch (pos) {
        case 0:
          if (arr[i] > arr[i + 1] && arr[i] > arr[i + 2]) {
            console.log("Right 2 times (0)");
            arr[i] = arr[i] - 1;
            arr[i + 2] = arr[i + 2] + 1;
            console.log(pos);
            pos = 2;
            console.log(arr);
            break;
          } else if (arr[i] < arr[i + 1]) {
            arr[i] = arr[i] + 1;
            arr[i + 1] = arr[i + 1] - 1;
            console.log("Right 1 time (0)");
            console.log(pos);
            pos = 1;
            console.log(arr);
            break;
          } else if (arr[i] < arr[i + 2]) {
            arr[i] = arr[i] + 1;
            arr[i + 2] = arr[i + 2] - 1;
            console.log("Right 2 times (0)");
            console.log(pos);
            pos = 2;
            console.log(arr);
            break;
          } else {
            console.log("Right 1 time (0)");
            console.log(pos);
            pos = 1;
            console.log(arr);
            break;
          }
        case 1:
          if (arr[i + 1] < arr[i + 2]) {
            console.log("Right 1 time (1)");
            arr[i + 1] = arr[i + 1] + 1;
            arr[i + 2] = arr[i + 2] - 1;
            console.log(pos);
            pos = 2;
            console.log(arr);
            break;
          } else if (arr[i + 1] < arr[i]) {
            console.log("Left 1 time (1)");
            arr[i + 1] = arr[i + 1] + 1;
            arr[i] = arr[i] - 1;
            console.log(pos);
            pos = 0;
            console.log(arr);
            break;
          } else {
            console.log("Right 1 time (1)");
            console.log(pos);
            pos = 2;
            console.log(arr);
            break;
          }
        case 2:
          if (arr[i + 1] < arr[i + 2]) {
            console.log("Left 1 time (2)");
            arr[i + 1] = arr[i + 1] + 1;
            arr[i + 2] = arr[i + 2] - 1;
            console.log(pos);
            pos = 1;
            console.log(arr);
            break;
          } else if (arr[i + 2] < arr[i]) {
            console.log("Left 2 times (2)");
            arr[i + 2] = arr[i + 2] + 1;
            arr[i] = arr[i] - 1;
            console.log(pos);
            pos = 0;
            console.log(arr);
            break;
          } else {
            console.log("Left 2 times (2)");
            console.log(pos);
            pos = 0;
            console.log(arr);
            break;
          }
      }
    }
  }
};
dockYard(boxes, pos, box);

/* TotalEntropy: The function accepted three params, an array of integers representing the numbers of boxes per bay, the current claw position as an integer and whether the claw currently has a box as a boolean.
[10: 10 AM]TotalEntropy: Your function would return a command that is either PICK, PLACE, LEFT or RIGHT.
1 AM] TotalEntropy: If run over and over your function would stack the boxes evenly. If even if not possible the boxes should be placed left to right.*/
