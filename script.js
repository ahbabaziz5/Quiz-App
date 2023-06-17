
let questions = [{
    question : "HTML stands for  ?",
    a : 'hypertex markup language',
    b : 'hype Mearkup Language ',
    c : 'hyperText Markup Language',
    d : 'None of the above',
    answer : 'hyperText Markup Language',
},
{
    question : "CSS stands for ? ?",
    a : 'Calliber Style Sheet',
    b : 'Casing style sheet',
    c : 'Cascading Style Sheet',
    d : 'Control Style Sheet',
    answer : 'Cascading Style Sheet',
},
{
    question : "JS stands for ?",
    a : 'jungle script',
    b : 'java system',
    c : 'javasnippet',
    d : 'javaScript',
    answer : 'javaScript',
},

]
let t= document.getElementById('time');
let ques = document.getElementById("questioni")
let op1 = document.getElementById("op1")
let op2 = document.getElementById("op2")
let op3 = document.getElementById("op3")
let op4 = document.getElementById("op4")
let nxt_btn = document.getElementById("nxt_btn");
nxt_btn.disabled = true


let i = 0;
let score =0;
ques.innerHTML = i + 1+ ") " +questions[i].question;
op1.innerHTML= questions[i].a
op2.innerHTML = questions[i].b
op3.innerHTML = questions[i].c
op4.innerHTML = questions[i].d
// setInterval(function(){
//     let d = new Date()
//     t.innerHTML = d.getMilliseconds
// })

function showQues(){
i++
   
ques.innerHTML =i + 1+ ") " +questions[i].question;
op1.innerHTML= questions[i].a
op2.innerHTML = questions[i].b
op3.innerHTML = questions[i].c
op4.innerHTML = questions[i].d
nxt_btn.disabled = true

}
   
    function checkOptions(name){
        if(name.textContent == questions[i].answer){
            nxt_btn.disabled = false
            score += 5
            alert("your answer is correct" + "\n" + " score is :" + score)
            
        }
        else{
            nxt_btn.disabled = false
            alert("your answer is wrong" + "\n" + " score is :" + score)
        }}
    

  







// function navigate(){
//     let num = index++
//     ques.innerHTML=questions[num].question;
// }
// navigate()


