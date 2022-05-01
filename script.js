var time = 10;
const audio = document.querySelector("#soundtrack");

var timer = setInterval(async function() {
    // subtract 1 from time
    time --; 
    // show time on html
    document.querySelector('#count').textContent = time;
    // stop at zero
    if (time <= 0) {
        clearInterval(timer);
        // show bomb
        document.querySelector('.explosion').classList.add('show');
    }
},1000);