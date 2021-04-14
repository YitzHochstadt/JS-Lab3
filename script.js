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
console.log(submissions);
/*** 2 ***/
function addSubmission(array, newName, newScore, newDate){
    if (newScore >= 60){
        boolean = true;
    } else {
        boolean = false;
    }
    array.push({
        name: newName,
        score: newScore,
        date: newDate,
        passed: boolean,
    })
        
}
addSubmission(submissions, "Bob",57,"2020-03-03");
console.log(submissions);
/*** 3 ***/
function deleteSubmissionByIndex(array, index){
    array.splice(index, 1);
}
deleteSubmissionByIndex(submissions, 0);
console.log(submissions);
/*** 4 ***/
function deleteSubmissionByName(array, name){
    array.splice(name, 1);
}
deleteSubmissionByName(submissions, "Joe");
console.log(submissions);
/*** 5 ***/
function editSubmission(array, index, score){
    let submission = array[index];
    submission.score = score;
    if (score >= 60){
        boolean = true;
    } else {
        boolean = false;
    }
}
editSubmission(submissions, 0, 100);
console.log(submissions);
/*** 6 ***/
function findSubmissionByName(array, name){
    const found = array.find(arrayItem => arrayItem.name === name);
    console.log(found);
}
findSubmissionByName(submissions, "Jill");
/*** 7 ***/
function findLowestScore(array){
    const lowest = array.forEach(arrayItem => arrayItem.score < arrayItem.score);
    console.log(lowest);
}
findLowestScore(submissions);
// 7. Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array
/*** 8 ***/
function findAverageScore(array){
    let total = 0;
    for (arrayItem of array){
    total += arrayItem.score
    }
    console.log(total / array.length);
}
findAverageScore(submissions);
/*** 9 ***/
function filterPassing(array){
    const passing = array.filter(arrayItem => arrayItem.passed === true)
    console.log(passing);
}
filterPassing(submissions);
/*** 10 ***/
function filter90AndAbove(array){
    const honorRole = array.filter(arrayItem => arrayItem.score > 90);
    console.log(honorRole);
}
filter90AndAbove(submissions);