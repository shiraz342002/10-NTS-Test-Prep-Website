var start_button = document.querySelector('.start_btn');
var quiz_info = document.querySelector('.quiz-info');
var exit_button = document.querySelector('.exit-btn');
var container=document.querySelector('.container');
var continue_button=document.querySelector('.continue-btn');
var quiz_section = document.querySelector('.quiz_section');
var quiz_box=document.querySelector('.quiz-box');
var next_button=document.querySelector('.next_button');
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
}
next_button.onclick=()=>{
    question_counter++;
    display_question(question_counter);
}
var question_counter=0;
function display_question(index){
    var question_text=document.querySelector('.questions_text');
    question_text.textContent=`${questions[index].q_num}.${questions[index].question}`
}