// using selectors inside the element:
const questions = document.querySelectorAll('.question');
questions.forEach( (question) => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", () => {

        //removes 'show-text' class from other questions
        questions.forEach( (item) => {
            if (item != question) {
                item.classList.remove('show-text'); 
            }
        });

        //adds class to selected question
        question.classList.toggle('show-text');

    });
});



// traversing the dom:
// const btns = document.querySelectorAll('.question-btn');
// btns.forEach( (btn) => {
//     btn.addEventListener("click", (e) => {
//         // console.log(e.currentTarget);
//         let parent = e.currentTarget.parentElement.parentElement;
//         parent.classList.toggle('show-text');
//     });
// });