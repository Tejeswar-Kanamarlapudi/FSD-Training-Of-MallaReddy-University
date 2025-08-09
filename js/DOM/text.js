const para = document.getElementById('para');
const para2 = document.getElementById('para2');


// innerText
console.log(para.innerText);
// textContent
console.log(para.textContent);
// innerHTML
console.log(para.innerHTML);

// para2.innerText = 'This is a 2nd paragraph <b>important</b>';
para2.innerHTML = 'This is a 2nd paragraph <b>important</b>';

// para.innerHTML="hello";