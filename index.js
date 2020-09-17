const run = function () {
    // Exercise 2
    let ptag = document.getElementById('ptag-id');
    ptag.innerHTML = "Hello World!"
    ptag.style.backgroundColor = 'red';
    // Exercise 3 - Extra Credit
    const fruits = ['Apple', 'Banana', 'Orange'];
    
    // hint 1: how do we loop through items in JavaScript
    for(let i = 0; i < fruits.length; i++){
      console.log(fruits[i]);
    }
    // hint 2: use how do we create an element and append an element?
    fruits.push('Lychee')
    let shopcart = document.getElementById('shopping-cart');
    let title = document.createElement('h2');
    title.innerHTML = "Fruit Cart"
    shopcart.appendChild(title)
    let list = document.createElement('ol');
    for(let i = 0; i < fruits.length; i++){
      let f = document.createElement('li');
      f.innerHTML = fruits[i].toString();
      list.appendChild(f);
    }
    shopcart.appendChild(list);
    
    let dirlist = document.getElementById('dirlist');
    dirlist.style.setProperty("text-decoration", "line-through");

}

run()