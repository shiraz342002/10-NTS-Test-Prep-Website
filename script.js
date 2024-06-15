var start_button = document.querySelector('.start_btn');
var quiz_info = document.querySelector('.quiz-info');
var exit_button = document.querySelector('.exit-btn');
container=document.querySelector('.container');
start_button.onclick=()=>{
    quiz_info.classList.add('active')
    container.classList.add('active')
}
exit_button.onclick=()=>{
    quiz_info.classList.remove('active')
    container.classList.remove('active')
}
