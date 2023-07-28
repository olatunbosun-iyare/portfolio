const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-regular fa-lightbulb fa-lg');
    if(this.classList.toggle('fa-solid fa-lightbulb fa-lg')){
        body.style.background ='white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background='black';
        body.style.color ='white';
        body.style.transition = '2s';
    }
});