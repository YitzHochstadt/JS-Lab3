/*** 1 ***/
let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-14",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    }
];
/*** 2 ***/
function addSubmission(array, newName, newScore, newDate){
    let ifPassed;
        if (newScore >= 60){
            ifPassed = true;
        } else {
            ifPassed = false;
        }
    array.push({
        name: newName,
        score: newScore,
        date: newDate,
        passed: ifPassed,
    })
        
}
addSubmission(submissions, "Bob",57,"2020-03-03");
addSubmission(submissions, "Jimmie", 98, "2020-04-03")
console.log(submissions);
/*** 3 ***/
function deleteSubmissionByIndex(array, index){
    array.splice(index, 1);
}
deleteSubmissionByIndex(submissions, 0);
/*** 4 ***/
function deleteSubmissionByName(array, name){
    const nameIndex = array.findIndex( (submission) => submission.name === name);
    array.splice(nameIndex, 1);
}
deleteSubmissionByName(submissions, "Jack");
console.log(submissions);
/*** 5 ***/
function editSubmission(array, index, score){
    let submission = array[index];
    submission.score = score;
    submission.passed = score >=60 ? true : false;
}
console.log(editSubmission(submissions, 2, 100));
/*** 6 ***/
function findSubmissionByName(array, name){
    const foundSubmission = array.find(submission => submission.name === name);
    return foundSubmission;
}
console.log(findSubmissionByName(submissions, "Jill"));
/*** 7 ***/
function findLowestScore(array){
    let lowest = array[0];
    array.forEach(function (submission) {
        if (lowest.score > submission.score){
            lowest = submission;
        }
    });
    return lowest;
}
findLowestScore(submissions);

/*** 8 ***/
function findAverageScore(array){
    let total = 0;
    let average;
    for (submission of array){
    total += submission.score
    }
    average = (total / array.length);
    return average;
}
findAverageScore(submissions);
/*** 9 ***/
function filterPassing(array){
    const passing = array.filter(submission => submission.passed);
    return passing;
}
filterPassing(submissions);
/*** 10 ***/
function filter90AndAbove(array){
    const honorRole = array.filter(submission => submission.score >= 90);
    return honorRole;
}
filter90AndAbove(submissions);


// *** HOW TO WORD IT? ***
function filterByName(array, name) {
    // Filter the array, include each element where the element name is equal to name.
    return array.filter(element => element.name === name);
  }
  function findLargeSize(array) {
    // Find in the array, choose the element where the element size is greater than 10.
    return array.find(element => element.size > 10);
  }
  function findAverageSize(array) {
    let sum = 0;
    // loop through each element in the array, one by one
    for (let element of array) {
      // add the current element's size to the sum
      sum += element.size;
    }
    return sum / array.length;
  }