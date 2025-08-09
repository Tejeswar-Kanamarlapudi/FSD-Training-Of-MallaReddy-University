// get element by tag name
const tag_selector =  document.getElementsByTagName('h1');
console.log(tag_selector);

// by class name
const class_selector = document.getElementsByClassName('heading-2');
console.log(class_selector);

// by using id
const id_selector = document.getElementById('para');
console.log(id_selector);

// query selector
const query_select = document.querySelector('li');
const query_select_all = document.querySelectorAll('li');
// 'tag_name' , '.class_name', '#id_name'
console.log(query_select);
console.log(query_select_all);