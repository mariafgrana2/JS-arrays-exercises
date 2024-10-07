// Exercise #1
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
    const resultExerciseOne = document.getElementById("result-join");
    resultExerciseOne.textContent = arr.join(' ');
}
printOutString(arr);