import {arr} from "./modules/data.js";
console.log(arr);

let container = document.querySelector('.container')
let show_less = document.querySelector('.show-less')
let show_more = document.querySelector('.show-more')
let h1 = document.querySelector('center h1')

let selectorArr = []

const reload = (data) => {

  container.innerHTML = ""
  for(let item of data){   
    let div_myShop = document.createElement('div')
    let box_black = document.createElement('div')
    let padding = document.createElement('div')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let img = document.createElement('img')
    let money = document.createElement('img')
    let text_money = document.createElement('h3')
    let button = document.createElement('button')
 
   
    div_myShop.classList.add('myShop')
    box_black.classList.add('box-black')
    padding.classList.add('box-padding')
    img.classList.add('box-img')
    h3.classList.add('h3')
    p.classList.add('p')
    text_money.classList.add('money')
    money.classList.add('img-money')
    button.classList.add('btn')
 
 
    button.innerHTML = 'В избранное'
    text_money.innerHTML = item.price
    h3.innerHTML = item.category
    p.innerHTML = item.description.length > 350 ? item.description.slice(0,350) +  ' Read More...' : item.description
    img.src = item.image
    
    
    container.append(div_myShop)
    div_myShop.append(img,box_black)
    box_black.append(padding)
    padding.append(h3,p,button)



    button.onclick = () => {
      if (selectorArr.includes(item.id)) {
      button.classList.remove('button_active')
      selectorArr = selectorArr.filter(id => id !== item.id)

      } else {
        button.classList.add('button_active')
        
       
        selectorArr.push(item.id)
      }   

      h1.innerHTML = `В корзине: ${selectorArr.length} товар`
    }



    }
    
 }


reload(arr)

show_less.onclick = () => {
   reload(arr.slice(0,5))
}
show_more.onclick = () => {
  reload(arr)
}
