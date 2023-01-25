const form = {

    init: function() {
        const question = document.getElementById('question');
        const myForm = document.getElementById('myForm');
        form.insertQuestionToHTML(questionsArray, question)
    },

// -------------------------------------

    insertQuestionToHTML: function(questionsArray, question) {
        const randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)]
        question.innerHTML = randomQuestion + " = ???"
    }
   
}