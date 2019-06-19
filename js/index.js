// Your code goes here
//Fun Bus text transformed when scrolling up and down

const titleH1 = document.querySelector('h1');

window.addEventListener('wheel', e => {
  if(e.wheelDelta === -315) {
    titleH1.textContent = 'Wheeeeelssss';
  } else {
    titleH1.textContent = 'Uppppppppppp';
  }
});

//Nav items random colors

const navItems = document.querySelectorAll('a');
navItems.forEach(item => {
  item.addEventListener('mousemove', _ => {
    item.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
  });

  item.addEventListener('click', e => {
    e.preventDefault();
  });
});


//Sign Me Up Buttons Random Colors

const btn = document.querySelectorAll('.btn');
btn[0].addEventListener('mouseover', _ => {
  btn[0].style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
});

btn[1].addEventListener('mouseover', _ => {
  btn[1].style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
});

btn[2].addEventListener('mouseover', _ => {
  btn[2].style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
});

//Double click paragraphs


const allPara = document.querySelectorAll('p');

allPara[1].addEventListener('dblclick', e => {
  allPara[1].textContent += ' DO NOT CROSS OVER '
});

//Makes sign up button functional upon double click

const button = document.querySelectorAll('.btn');
    button.forEach(node => {node.addEventListener('dblclick', function(){let name = prompt('Enter your name'); let email = prompt('Enter your email'); alert(`Thank you for signing up, ${name}! We will be contacting you shortly.`);})});


// Bottom buttons change text after mouse out

  btn[0].addEventListener('mouseout', _ => {
    btn[0].textContent = 'Move Over';
  });


  btn[1].addEventListener('mouseout', _ => {
    btn[1].textContent = 'We Got This';
  });


  btn[2].addEventListener('mouseout', _ => {
    btn[2].textContent = 'I Got This';
  });

  
//Changes text of H2 when copied

const copyTitle = document.querySelector('h2');
copyTitle.addEventListener('copy', _ => {
  copyTitle.textContent = 'THIS IS ALL YOU!'
});


// Welcome pop up window upon page load

window.addEventListener('load', e => {
    alert(`WATCH OUT! KIDDING...WELCOME...SHOES OFF PLEASE :)`)
  });


//Nav and H2 Animations

TweenMax.from('nav a', 2, { x: -600, y: -50, scale: 0, rotation: 2880, ease: SlowMo.ease.config(0.6, 0.2, false) });
TweenMax.to('nav a', { x: 0, y: 0 });

TweenMax.from('h2', 2, { x: -600, y: -50, scale: 0, rotation: 90, ease: SlowMo.ease.config(0.6, 0.2, false) });
TweenMax.to('h2', { x: 0, y: 0 });

// Changes background color upon double click

document.getElementById('body').addEventListener('dblclick', changeColor);

function changeColor() {
    this.style.backgroundColor = "yellow";
    return false;
}

//Home button click pop up

const nava = document.querySelector("a");

nava.addEventListener('click', e => {
    alert(`DOT NOT PASS`)
  });
