// alert();
// window.alert();

// console.dir(document);

// const listAllElements = document.querySelectorAll('li');
const listAllElements = document.getElementsByTagName('li');

console.log(listAllElements);

for (const listItem of listAllElements) {
  //   console.log('hello');
  //   console.dir(listItem);
  console.log(listItem);
}

const h1 = document.getElementById('main-title');
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('#first-ul li:last-of-type');
li.textContent = li.textContent + ' (changed!)';

const li2 = document.querySelector('#first-ul li:nth-child(2)');
li2.textContent = li2.textContent + ' (changed!)';

const li3 = document.querySelector('ul:last-of-type li:nth-child(3)');
li3.textContent = li3.textContent + ' (new changed!)';

const body = document.body;
console.log(body);
console.dir(body);

const head = document.head;
console.log(head);
console.dir(head);
