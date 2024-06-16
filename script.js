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
var display_score=document.querySelector('.header_score');
var question_counter2=1;
var question_counter=0;  
var user_score=0;


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
        next_button.classList.remove('active')

    }
    else{
        console.log("Question finished");
        
    }
    
}


function display_question(index){
    var question_text=document.querySelector('.questions_text');
    question_text.textContent=`${questions[index].q_num}. ${questions[index].question}`
    var optionLabels = ['(A)', '(B)', '(C)', '(D)'];
    var option_view = `<div class="option"> <span>${optionLabels[0]} ${questions[index].options[0]}</span> </div>
    <div class="option"> <span>${optionLabels[1]} ${questions[index].options[1]}</span> </div>
    <div class="option"> <span>${optionLabels[2]} ${questions[index].options[2]}</span> </div>
    <div class="option"> <span>${optionLabels[3]} ${questions[index].options[3]}</span> </div>`;
    option_list.innerHTML=option_view;
    var option=document.querySelectorAll('.option');
    for (let i = 0; i <option.length; i++) {
        option[i].setAttribute('onclick','Option_Selected(this)');
    }
                       
                       
}
function display_counter(index){
    question_count_display.textContent=`${index} of 100 Questions`

}
function Option_Selected(user_ans) {
    let user_answer = user_ans.textContent.trim();
    let cor_answer = questions[question_counter].answer.trim();
    let cleaned_user_answer = removeOptionLabels(user_answer);
    let all_options=option_list.children.length;
    

    // for debugging holy shit took me like an hour 

    // console.log("Original User Answer:", user_answer);
    // console.log("Cleaned User Answer:", cleaned_user_answer);
    // console.log("Correct Answer:", cor_answer);
    // console.log("Length of Cleaned User Answer:", cleaned_user_answer.length);
    // console.log("Length of Correct Answer:", cor_answer.length);

    if (cleaned_user_answer === cor_answer) {
        user_score++;
        display_score.innerHTML = `Your Score: ${user_score}/100`;
        user_ans.classList.add('correct');
    } else {
        user_ans.classList.add('incorrect');
    }

    // Highlight the correct answer and disable other options
    for (let i = 0; i < all_options; i++) {
        let option = option_list.children[i];
        let option_text = removeOptionLabels(option.textContent.trim());
        if (option_text === cor_answer) {
            option.classList.add('correct');
        }
        option.classList.add('rest_disable');
    }
    next_button.classList.add('active')
}
function removeOptionLabels(answerWithLabel) {
    return answerWithLabel.replace(/^\(\w\)\s*/, '').trim();
}