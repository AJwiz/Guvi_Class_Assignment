// JSON iteration over all for loops (for , for in , for of, for Each)
//FOR LOOP
var numbers = [60, 75, 45, 90, 80];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//for in loop
var myDetails = {
  Name: "AJ",
  Age: 25,
  YOB: 1997,
};

for (var key1 in myDetails) {
  console.log(myDetails[key1]);
}

//for of loop

var marks = [95, 66, 75, 90, 44];
for (var i of marks) {
  console.log(i);
}

//for each loop

var marks = [60, 75, 45, 90, 80];

marks.forEach(function (mark) {
  console.log(mark);
});
