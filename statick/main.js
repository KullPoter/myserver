var list = []
var con = 0
    let send = document.querySelectorAll(".block5 li")
    let body = document.querySelector('.body')
    const wrap = document.querySelector('.wraps')
let opacity = document.querySelector('.container')
let summa = 0
let cancel = document.querySelector('.otmena')
let conf = document.querySelector('.confirm')
    send.forEach(e=>{
        e.addEventListener('click', ()=>{
// alert(event.target,++con)
let yo = ++con
alert(e.id)
alert(yo)
    let obj = e.id
    let cost = e.className

    let order =  {
        "name": obj,
        "cost": cost
    }
list.push(order)
    
            

        })


        
  
       
    })

let container2 =  document.querySelector('.container2 .inside ul')
let listIl = document.querySelector('.inside')
let besend = document.getElementById('besend')
besend.addEventListener('click', ()=>{

   let costs =[]
    list.forEach(e=>{
        
       
listIl.classList.remove('inside')
listIl.classList.add('open')
let li = document.createElement('li')
let li2 = document.createElement('li')
li.textContent = e.name
li2.innerHTML = e.cost


let price = e['cost']

costs.push(Number(price))




container2.append(li)
li.append(li2)

    })

    
let sum = 0
let open = document.querySelector('.open')
// if(costs){
    for(let i = 0; i<costs.length; i++){
 console.log(sum+=costs[i])
  
       
    }
    
// }else{
   
//     console.log("sleep")
    
// } 

// var typ;
// costs.reduce((acc, index)=>{
//     acc+index
// })
 let h2 = document.createElement('h2')
 h2.innerHTML =`Общая сумма ${sum}`
 summa = sum
    open.append(h2)
body.style.backgroundColor = 'black'

opacity.style.opacity = '0.2'
wrap.before(h2)
 
// }


})

cancel.addEventListener('click', ()=>{
    window.location.reload()
})
conf.addEventListener('click', ()=>{
    let date = new Date()
    console.log(summa)
    sendData(list, date, summa)
})
async function sendData(list ,date){
    const response = await fetch("/api/ord", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({date: date,
        list: list,
        sum: summa
        })
})

    if (response.ok == true){
        window.location.reload()
    }else{
        console.log("errorr")
    }
}