/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */

//creates a function to get assignment types (keys) with the parameter assignments whivh is an object of assignments
function getAssignmentTypes(assignments) {

  //create a variable called assignKeys 
  //using the Object.keys method with pulls all the keys from assignments and assigns to the variable assignKeys
   let assignKeys = Object.keys(assignments)

   //return the variable with all assignments keys inside
    return assignKeys

}

/**
 * Returns an integer that represents the score as a percentage.
 * @param {object} score - An object representing the score of an assignment.
 * @param {number} score.received - The value received on the assignment.
 * @param {number} score.max - The maximum amount of points that could be received on the assignment.
 * @returns {number} A rounded integer, representing a percentage.
 */

//creates a function to get the perscentage of score
function getPercentageScore(score) {

  //creates a variable to hold the percentage score
  //percentage is obtained by dividing the score recieved by the max score then multiplying by 100
  //mathamatical operation () are used to define with operation to do first
  let percentageScore = (score.received / score.max) * 100

  //return the percentage score rounded to the nearest integer
  return Math.round(percentageScore)

}

/**
 * Given two score objects, returns an integer that represents the highest percentage received.
 * @param {object} score1 - An object representing the score of an assignment.
 * @param {number} score1.received - The value received on the assignment.
 * @param {number} score1.max - The maximum amount of points that could be received on the assignment.
 * @param {object} score2 - An object representing another score of an assignment. Has the same shape as `score1`.
 * @returns {number} A rounded integer, representing the highest percentage scored among the two given scores.
 */

//creates a function to get the highest of two scores with paramaters score1 and score2 which are objects
function getHighestOfTwoScores(score1, score2) {

  //create varibale to represent the high score of score1
  let highScore1 = 0; 
  //creates a variable to represent the high score of score2
  let highScore2 = 0;

  

    //give high score 1 the value in perentage of score1
    highScore1 = (score1.received / score1.max) * 100
   //give high score 2 the value in perentage of score2
    highScore2 = (score2.received / score2.max) * 100
  
    //conditional comparison if percentage version of score1 rounded to the nearest integer is greater than the percentage version of score2 
    if(Math.round(highScore1) > Math.round(highScore2)){
      //return percentage version of score1 rounded to the nearest integer
      return Math.round(highScore1);
    }else{
      //if not return percentage version of score2 rounded to the nearest integer
      return Math.round(highScore2);
    }
  
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
