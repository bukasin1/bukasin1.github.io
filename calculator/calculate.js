let num1 = document.querySelector('#num1'),
num2 = document.querySelector('#num2'),
action = document.querySelector('.sign'),
calculate = document.querySelector('.calculate')

calculate.addEventListener('click' , e => {
    e.preventDefault()
    if(e.target.nextElementSibling.nextElementSibling){
        e.target.nextElementSibling.nextElementSibling.remove()
    }
    let p = document.createElement('p'),
    result
    if(num1.value && num2.value){
        console.log(isNaN(Number(num2.value)))
        if(isNaN(Number(num2.value)) || isNaN(Number(num1.value))){
            result = 'Please enter a valid number'
        }else{
            switch(action.value){
                case 'add':
                    sum = Number(num1.value) + Number(num2.value)
                    result = `Result is: ${sum}` ;
                    break;
                case 'subtract':
                    result = `Result is: ${num1.value - num2.value}`;
                    break;
                case 'multiply':
                    result = `Result is: ${num1.value * num2.value}`;
                    break;
                case 'divide':
                    result = `Result is: ${num1.value/num2.value}`;
                    break;
                default:
                    result = 'Please select an operator'
            }
        }
        
    } else{
        result = 'Please make a complete entry'
    }

    p.textContent = result
   
    console.log(p)
    e.target.parentNode.appendChild(p)
})