
document.querySelector('button').addEventListener('click',checkInputName())
function checkInputName(){
    let inputValue = document.querySelector('input').value;
    if(inputValue == 'Reza'){
    alert('yes')
    }else{
        alert('no')
    }
}
