const text = document.querySelector(".name-title");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

// console.log(splitText);

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}


let char = 0;
let timer = setInterval(onTick, 100);

function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.lenght) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}


button = document.getElementById(".button");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}