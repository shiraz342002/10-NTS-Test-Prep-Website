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
var result_box=document.querySelector('.quiz_result')
var result_score=document.querySelector('.display_score')
var try_again_button=document.querySelector('.try_again_btn')
var go_home_button=document.querySelector('.go_home_btn')
var stop_button=document.querySelector('.stop_quiz');
var question_counter2=1;
var question_counter=0;  
var user_score=0;
var subject=document.querySelector('.subject');


start_button.onclick=()=>{
    quiz_info.classList.add('active')   // add quiz guidelines
    container.classList.add('active')   // add background blurr
}
exit_button.onclick=()=>{
    quiz_info.classList.remove('active')  // remove the guidelines
    container.classList.remove('active') // remove the background blurr

}
continue_button.onclick=()=>{
    quiz_info.classList.remove('active')  // remove the guidelines
    container.classList.remove('active')  // remove the background blurr
    quiz_section.classList.add('active')  // Add the quiz background screen  
    quiz_box.classList.add('active')      // Display the Actual Quiz  
    display_question(0)
    display_counter(1)
    display_score_on_top(user_score)

}
next_button.onclick=()=>{
    if(question_counter<questions.length-1){
        question_counter++;
        question_counter2++;
        display_question(question_counter);
        display_counter(question_counter2)
        if(question_counter>=20){
            subject.innerHTML='Analytical'
        }
        if(question_counter>=40){
            subject.innerHTML='Quantitative'
        }
        if(question_counter>=70){
            subject.innerHTML=''
        }
        if(question_counter>=60){
            subject.innerHTML='Physics'
        }
        if(question_counter>=70){
            subject.innerHTML='Chemistry'
        }
        if(question_counter>=80){
            subject.innerHTML='Mathamatics'
        }
        if(question_counter>=90){
            subject.innerHTML='Computer Science'
        }
        next_button.classList.remove('active')
    }
    else{
    display_Result();        
    }
    
}
try_again_button.onclick=()=>{
    result_box.classList.remove('active')       // Remove the Results being displayed
    next_button.classList.remove('active')      // Remove the ability to click the  button 
    quiz_box.classList.add('active')
    user_score=0;
    question_counter2=1;
    question_counter=0;
    display_question(question_counter)
    display_counter(1)
    display_score_on_top(user_score)
    
}

go_home_button.onclick=()=>{
    result_box.classList.remove('active')       
    quiz_box.classList.add('active')
    next_button.classList.remove('active')
    quiz_section.classList.remove('active')
}

stop_button.onclick=()=>{
    quiz_box.classList.remove('active')
    result_box.classList.add('active')
    display_Result();        

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
    question_count_display.textContent=`${index} of ${questions.length} Questions`

}
function display_score_on_top(user_score){
    display_score.innerHTML = `Your Score: ${user_score}/${questions.length}`;
}
function Option_Selected(user_ans) {
    let user_answer = user_ans.textContent.trim();
    let cor_answer = questions[question_counter].answer.trim();
    let cleaned_user_answer = removeOptionLabels(user_answer);
    let all_options=option_list.children.length;
    

    // for debugging holy shit took me like an hou
    // dont' mess up anything related to comparing it will break the code

    // console.log("Original User Answer:", user_answer);
    // console.log("Cleaned User Answer:", cleaned_user_answer);
    // console.log("Correct Answer:", cor_answer);
    // console.log("Length of Cleaned User Answer:", cleaned_user_answer.length);
    // console.log("Length of Correct Answer:", cor_answer.length);

    if (cleaned_user_answer === cor_answer) {
        user_score++;
        display_score.innerHTML = `Your Score: ${user_score}/${questions.length}`;
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
function display_Result(){
    result_box.classList.add('active')
    quiz_box.classList.remove('active')
    result_score.textContent=`Your Score is ${user_score} out of ${questions.length}`

    var progress_bar=document.querySelector('.circular_progress')
    var progress_value=document.querySelector('.prog_value');
    var progress_start_val=-1;
    var progress_end_val=(user_score/questions.length)*100;
    console.log(progress_end_val);
    var speed=20;
    let progress=setInterval(()=>{
        progress_start_val++;
        progress_value.textContent = `${Math.round(progress_start_val)}%`;
        progress_bar.style.background = `conic-gradient(#e5f31a ${progress_start_val * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;
        if(progress_start_val==progress_end_val){
            clearInterval(progress)
        }
        
    },speed)
}