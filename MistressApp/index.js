
let y = document.getElementById("fullTime")
a = 0
setInterval(function(){
    if(a <= 274){
        y.textContent = a++
    }
},10)

let x = document.getElementById("fullTime1")
n = 0
setInterval(function(){
    if(n <= 421){
        x.textContent = n++
    }
},5)

let z = document.getElementById("fullTime2")
b = 700
setInterval(function(){
    if(b <= 1364){
        z.textContent = b++
    }
},0.002)

let k = document.getElementById("fullTime3")
t = 0
setInterval(function(){
    if(t <= 18){
        k.textContent = t++
    }
},100)
