var start_button = document.querySelector('.start_btn');
var quiz_info = document.querySelector('.quiz-info');
var exit_button = document.querySelector('.exit-btn');
var container=document.querySelector('.container');
var continue_button=document.querySelector('.continue-btn');
var quiz_section = document.querySelector('.quiz_section');
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
    
}
