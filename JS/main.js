let menuButton = document.querySelectorAll(".menuButton")
let menuButtonns = Array.from(menuButton)
console.log(menuButtonns)
let subMenu = document.querySelector(".sub")

menuButtonns.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        if (e.currentTarget.classList.contains("sub-menu")) {
            e.currentTarget.classList.remove("sub-menu");
        } else {
            menuButtonns.forEach((ele) => {
                ele.classList.remove("sub-menu");
            });
            e.currentTarget.classList.add("sub-menu");
        }
    })
})

let logoButton = document.querySelector(".logo")
let startButton = document.querySelector(".start-btn")
let startExcersize = document.querySelector(".startExcersize-btn")
let backExcersize = document.querySelector(".backExcersize-btn")
let stopExcersize = document.querySelector(".stopExcersize-btn")
let gymMode = document.querySelector(".mainModes-gym-mode")
let gymFreeMode = document.querySelector("gym-freemode-mode")

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("start-btn")) {
        window.open("../HTML/mainModes.html", "_self")
    }
    else if (e.target.classList.contains("mainModes-gym-mode")) {
        window.open("../HTML/gymModes.html", "_self")
    }
    else if (e.target.classList.contains("gym-freemode-mode")) {
        window.open("../HTML/gymFreeMode.html", "_self")
    }
    else if (e.target.classList.contains("logo")) {
        window.open("../HTML/index.html","_self")
    }
    else if (e.target.classList.contains("gym-challengesmode-mode")) {
        window.open("../HTML/challenges.html","_self")
    }
    else if (e.target.classList.contains("mainModes-rehab-mode")) {
        window.open("../HTML/rehabmodes.html","_self")
    }
    else if (e.target.classList.contains("rehab-wallsit-card-btn")) {
        window.open("../HTML/wallsitChallenges.html","_self")
    }
    else if (e.target.classList.contains("rehab-pelviclift-card-btn")) {
        window.open("../HTML/pelviclift.html","_self")
    }
    else if (e.target.classList.contains("rehab-bendover-card-btn")) {
        window.open("../HTML/bendover.html","_self")
    }
    else if (e.target.classList.contains("leaderboard-btn")) {
        window.open("../HTML/leaderboard.html","_self")
    }
    
});

let displayCards = document.querySelector(".display-cards")
let displayCard = displayCards.querySelectorAll(".display-card")
document.querySelectorAll(".cards .card").forEach(card => {
    card.onclick = () => {
        displayCards.style.display = " block"
        let name = card.getAttribute("data-exercise")
        displayCard.forEach(display => {
            let details = display.getAttribute("data-card")
            if (name === details) {
                display.classList.add('active');
            }
        })
    }
})

displayCard.forEach(close => {
    close.querySelector('.backExcersize-btn').onclick = () =>{
    close.classList.remove('active');
    displayCards.style.display = 'none';
    };
})


displayCard.forEach(start => {
    start.querySelector('.startExcersize-btn').onclick = () =>{
        let timer = document.querySelector(".timer");
        let timerBox = document.querySelector(".counter");
        let counter = setInterval(countdown, 1000);
        function countdown() {
        timer.innerHTML -= 1;
        startExcersize.style.display = "none"
        backExcersize.style.display = "none"
        stopExcersize.style.display = "block"
        if (timer.innerHTML === "0") {
            clearInterval(counter);
            timerBox.style.display = "none";
            timer.innerHTML = 10
            }
            document.addEventListener("click", function (e) {
                if (e.target.classList.contains("stopExcersize-btn")) {
                    clearInterval(counter);
                    displayCards.style.display = 'none';
                    startExcersize.style.display = "block"
                    backExcersize.style.display = "block"
                    stopExcersize.style.display = "none"
                    timer.innerHTML = 10
                    timerBox.style.display = "block";

                }
            })
        }
    };
})


