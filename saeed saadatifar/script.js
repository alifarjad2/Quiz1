let click = document.querySelector('.button');
click.addEventListener("click",handler);
function handler(event){
    let input = document.querySelector('.input');
    if(input.value === ''){
        alert('khali')
    }
    else{
        alert(input.value)
    }

}