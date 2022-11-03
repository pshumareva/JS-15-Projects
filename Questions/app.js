//using selectors inside the element - BETTER WAY - using question instead of document so we dont search throughout the whole document
 const questions = document.querySelectorAll('.question');
 questions.forEach(function(question){
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', function(){
        question.classList.toggle("show-text");
    })
 })



// // traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//       e.currentTarget.parentElement.classList.toggle("show-text");
//   });
// });
