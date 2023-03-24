/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.
let squareOne = document.getElementById("problem-one")
squareOne.innerText = '';
let button1 = document.createElement('button')
button1.innerText = '1'
squareOne.append(button1)
// Your code here


// Problem Two
let squareTwo = document.querySelector('.square.two')
squareTwo.style.backgroundColor = "rgb(255, 165, 0)"
squareTwo.style.color = 'white'
squareTwo.style.border = '5px dashed black'
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

// Your code here


// Problem 3
let squareThree = document.querySelectorAll('.square.plus')
for(let i = 0; i < squareThree.length; i++) {
    squareThree[i].style.width ='100px'
    squareThree[i].style.fontSize ='60px'
}
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well. 
// HINT: Check the CSS file or use younpm install -g cypress@8.7.0.r Dev Tools to find the original width and
// font-size, and then double those sizes.

// Your code here
let squareFour = document.querySelector('.square.four')
squareFour.setAttribute('id', 'problem-four')
squareFour.classList.add('round')
squareFour.classList.remove('square')




// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

// Your code here
let problemSolver = document.getElementById('root').children
for(let i = 0; i < 3; i++){
    let ele = problemSolver[4]
    ele.remove()

}
// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

// Your code here