const list_elements = document.querySelectorAll('li');

list_elements[0].style.backgroundColor = 'blue';
list_elements[0].style.color = 'white';
list_elements[0].style.fontSize = '26px';

list_elements.forEach(item => {
    item.style.backgroundColor = 'blue';
    item.style.color = 'white';
    item.style.fontSize = '26px';
});