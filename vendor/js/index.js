
// Scroll to specific values

// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: 'smooth'
});

// Scroll to a certain element
document.querySelector('body').scrollIntoView({
  behavior: 'smooth'
});

//  Card Imag section
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
  const minPerSlide = 4
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
}

// Contact Us
// $(function () {

//   $('.form-control').each(function () {
//     changeClass($(this));
//   });

//   $('.form-control').on('focusout', function () {

//     changeClass($(this));
//   });
//   function changeClass($formcontrol) {
//     if ($formcontrol.val().length > 0) {
//       $formcontrol.addClass('has-value');
//     }
//     else {
//       $formcontrol.removeClass('has-value');
//     }
//   }
//   $('.datepicker').datepicker();
// });

'use strict';

document.querySelector('.toggle')
  .addEventListener('click', function () {
    this.classList.toggle('activate');
  });
// Dropdown Menu Fade
// jQuery(document).ready(function () {
//   $(".dropdown").hover(
//     function () {
//       $('.dropdown-menu', this).fadeIn("fast");
//     },
//     function () {
//       $('.dropdown-menu', this).fadeOut("fast");
//     });
// });
// Function to simulate fetching FAQ data from a server
async function fetchFAQData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { question: 'How can I create an account?', answer: 'You can create an account by...' },
        { question: 'What payment methods do you accept?', answer: 'We accept Visa, MasterCard, and PayPal.' },
        { question: 'Can I change my password?', answer: 'Yes, you can change your password in the account settings.' },
        // Add more FAQ items as needed
      ]);
    }, 1000); // Simulating a delay of 1 second for fetching data
  });
}

// Function to render FAQ items
async function renderFAQ() {
  const faqList = document.getElementById('faq-list');
  const faqData = await fetchFAQData();

  faqData.forEach((faq, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('faq-item');
    listItem.innerHTML = `<div>${faq.question}</div><div class="faq-answer">${faq.answer}</div>`;
    listItem.addEventListener('click', () => toggleAnswer(index));
    faqList.appendChild(listItem);
  });
}





firstText = "TO BUILT BETTER COMMUNICATION";
secondText = " AND EMPATHETIC SOLUTIONS";
thirdText = "TO TRANSLATE HUMAN NEEDS TO EXPERIENCES";
intervalTime = 1000;
window.load = displayText();
function displayText() {
  // display first text
  document.querySelector('#dynamicContent').innerText = firstText;
  // display second text
  setTimeout(() => {
    document.querySelector('#dynamicContent').innerText = secondText;
  }, intervalTime * 12);
  // display third text
  setTimeout(() => {
    document.querySelector('#dynamicContent').innerText = thirdText;
  }, intervalTime * 9);
}

setInterval(() => {
  displayText();
}, intervalTime * 12);