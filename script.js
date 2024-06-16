var start_button = document.querySelector('.start_btn');
var quiz_info = document.querySelector('.quiz-info');
var exit_button = document.querySelector('.exit-btn');
var container=document.querySelector('.container');
var continue_button=document.querySelector('.continue-btn');
var quiz_section = document.querySelector('.quiz_section');
var quiz_box=document.querySelector('.quiz-box');
var next_button=document.querySelector('.next_button');
var question_count_display=document.querySelector('.question_count')
var option_list=document.querySelector('.options_list')
var option=document.querySelectorAll('.option');

var question_counter=0;  
var question_counter2=1;

start_button.onclick=()=>{
    quiz_info.classList.add('active')
    container.classList.add('active')
}
exit_button.onclick=()=>{
    quiz_info.classList.remove('active')
    container.classList.remove('active')

}
continue_button.onclick=()=>{
    quiz_info.classList.remove('active')
    container.classList.remove('active')
    quiz_section.classList.add('active')
    quiz_box.classList.add('active')
    display_question(0)
    display_counter(1)
}
next_button.onclick=()=>{
    if(question_counter<questions.length-1){
        question_counter++;
        question_counter2++;
        // console.log(question_counter); //added for debugging
        display_question(question_counter);
        display_counter(question_counter2)
    }
    else{
        console.log("Question finished");
        
    }
    
}


function display_question(index){
    var question_text=document.querySelector('.questions_text');
    question_text.textContent=`${questions[index].q_num}. ${questions[index].question}`
    var option_view = `<div class="option"> <span>(A) ${questions[index].options[0]}</span> </div>
    <div class="option"> <span>(B) ${questions[index].options[1]}</span> </div>
    <div class="option"> <span>(C) ${questions[index].options[2]}</span> </div>
    <div class="option"> <span>(D) ${questions[index].options[3]}</span> </div>`;
    option_list.innerHTML=option_view;
                           
                       
}
function display_counter(index){
    question_count_display.textContent=`${index} of 100 Questions`

}
for (let i = 0; i <option.length; i++) {
    option[i].setAttribute('onclick','Option_Selected(this)');
}
    