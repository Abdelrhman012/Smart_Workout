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
    if (card.classList.contains("done")) {
        
    } else {
        card.onclick = () => {
            displayCards.style.display = " block"
            let name = card.getAttribute("data-exercise")
            displayCard.forEach(display => {
                let details = display.getAttribute("data-card")
                if (name === details) {
                    display.classList.add('active');
                    console.log(name)
                }
            })
        }
    }
})

displayCard.forEach(close => {
    close.querySelector('.backExcersize-btn').onclick = () =>{
    close.classList.remove('active');
    displayCards.style.display = 'none';
    };
})

displayCard.forEach(close => {
    close.querySelector('.stopExcersize-btn').onclick = () =>{
    close.classList.remove('active');
    };
})

let timerSwitch = false;
let timer = document.querySelectorAll(".timer");
document.querySelectorAll(".display-cards .display-card").forEach(displayCard=> {
    displayCard.addEventListener("click", function (e) {
        if (e.target.classList.contains("startExcersize-btn")) {
            let name = displayCard.getAttribute("data-card")
            timer.forEach(display => { 
                let timerTime = display.getAttribute("data-timer")
                let timerBox = document.querySelector(".counter-" + timerTime);
                let startExcersize = document.querySelector(".startExcersize-btn-" + timerTime)
                let backExcersize = document.querySelector(".backExcersize-btn-" + timerTime)
                let stopExcersize = document.querySelector(".stopExcersize-btn-" + timerTime)
                if (name === timerTime) {
                    timerSwitch = true
                    let timerCount = document.querySelector("[data-timer="+ timerTime +"]")
                    let counter = setInterval(countdown, 1000);
                    startExcersize.style.display = "none"
                    backExcersize.style.display = "none"
                    stopExcersize.style.display = "block"
                    function countdown() {
                    timerCount.innerHTML -= 1;
                    if (timerCount.innerHTML === "0") {
                        timerCount.innerHTML = 10
                        timerBox.style.display = "none";
                        clearInterval(counter);
                    }
                    else if (timerSwitch === false) {
                        timerCount.innerHTML = 10
                        clearInterval(counter);
                    }
                }
            }
        })
        }
        if (e.target.classList.contains("stopExcersize-btn")) {
            let name = displayCard.getAttribute("data-card")
            timer.forEach(display => { 
            let timerTime = display.getAttribute("data-timer")
                if (name === timerTime) {
                let timerBox = document.querySelector(".counter-" + timerTime);
                let timerCount = document.querySelector("[data-timer="+ timerTime +"]")
                let startExcersize = document.querySelector(".startExcersize-btn-" + timerTime)
                let backExcersize = document.querySelector(".backExcersize-btn-" + timerTime)
                let stopExcersize = document.querySelector(".stopExcersize-btn-" + timerTime)
                timerCount.innerHTML = 10;
                startExcersize.style.display = "block"
                backExcersize.style.display = "block"
                stopExcersize.style.display = "none"
                displayCards.style.display = "none"
                timerBox.style.display = "block";
                timerSwitch = false
            }
        })
        }
    })
})




