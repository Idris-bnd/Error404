const form = {

    init: function() {
        const question = document.getElementById('question');
        const myForm = document.getElementById('myForm');
        this.insertQuestionToHTML(questionsArray, question);

        myForm.addEventListener('submit', (e) => {
            this.formSubmit(e);
        })
    },
// -------------------------------------

    insertQuestionToHTML: function(questionsArray, question) {
        const randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
        const styleElement = document.createElement('style')
        let letterNumber = 1;
        let delay = 0.1;
        randomQuestion.split('').forEach((letter) => {
            const li = document.createElement('li');
            li.innerText = letter;
            question.appendChild(li)
            li.className = "liAnimation"

            styleElement.append(`
                li.liAnimation:nth-child(${letterNumber}){
                    animation: liAnimation 1s infinite;
                    animation-delay: ${delay}s;
                }
            `)
            letterNumber++
            delay+=0.1
        })
        document.body.appendChild(styleElement)
    },
// -------------------------------------
    formSubmit: function(e) {
        e.preventDefault()
        const inputValue = e.target.response.value;

        if (inputValue === "404") {
            this.Win();
            return;
        }

        this.InsertErrorMessage();
    },
// -------------------------------------
    InsertErrorMessage: function() {
        const inputDiv = document.getElementById('inputDiv');
        const randomResponse = badResponseArray[Math.floor(Math.random() * badResponseArray.length)];
        this.RemoveErrorMessage()

        const p = document.createElement('p');
        p.className = "badResponseElement";
        p.innerText = randomResponse;
        inputDiv.appendChild(p)
    },
// -------------------------------------
    Win: function () {
        const randomResponse = goodResponseArray[Math.floor(Math.random() * goodResponseArray.length)];
        document.getElementById('myForm').remove()
        const app = document.querySelector('.app')

        const h1 = document.createElement('h1');
        h1.className = "goodh1";
        h1.innerText = randomResponse;

        const p = document.createElement('p');
        p.className = "redirectionText";
        p.innerText = "(Vous allez être redirigé vers la HomePage dans 3 secondes.)";

        app.appendChild(h1)
        app.appendChild(p)
    },
// -------------------------------------
    RemoveErrorMessage: function () {
        if (document.querySelector('.badResponseElement')) {
            document.querySelector('.badResponseElement').remove()
        }
    }
   
}