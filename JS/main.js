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
let gymFreeExcercise = document.querySelectorAll(".free-excercise")
let gymFreeExcercises = Array.from(gymFreeExcercise)

let startExcersize = document.createElement("div")
let excerciseStart = document.createElement("div");
let backExcersize = document.createElement("div")
let subHeader = document.querySelector(".sp-subheader")
let timer = document.createElement("div")
let timerBox = document.createElement("div")
let timerBoxText = document.createElement("div")
let stopExcersize = document.createElement("div")

console.log(subHeader)

let exit = document.querySelector("backExcersize-btn")
gymFreeExcercise.forEach((ele) => 

    document.addEventListener("click", function (e) {
    
        if (e.target.classList.contains("backExcersize-btn")) {
            ele.classList.remove("hide")
            ele.classList.remove("display-card")
            let excercise = document.querySelector(".display-card .gymFreeModeCard-Text")
            excercise.removeChild(excerciseStart)
            excercise.removeChild(timerBox)
            excercise.removeChild(stopExcersize)   
            subHeader.style.display = "block"
        }
    }
    )
        
    
        
    
    )

gymFreeExcercises.forEach((ele) => {   
    ele.addEventListener("click", function (e) {
        if (e.currentTarget.classList.contains("hide")) {
            e.currentTarget.classList.remove("hide");
        } else {
            gymFreeExcercises.forEach((ele) => {
                ele.classList.add("hide");
            });
            e.currentTarget.classList.remove("hide");;
            e.currentTarget.classList.add("display-card");
            subHeader.style.display = "none"
        }
        if (e.currentTarget.classList.contains("display-card")) {
            startExcersize.style.display = "block"
            backExcersize.style.display = "block"
            let excercise = document.querySelector(".display-card .gymFreeModeCard-Text")
            excerciseStart.className = "excercise-card"
            startExcersize.innerHTML = "Start"
            startExcersize.className = "button startExcersize-btn"
            backExcersize.innerHTML = "Back"
            backExcersize.className = "button stop-exercise backExcersize-btn"
            excerciseStart.appendChild(startExcersize)
            excerciseStart.appendChild(backExcersize)
            excercise.appendChild(excerciseStart)
        }
    })

    ele.addEventListener("click", function (e) {
        if (e.target.classList.contains("startExcersize-btn")) {
            startExcersize.style.display = "none"
            backExcersize.style.display = "none"
            timer.innerHTML = "10"
            timer.className = "timer exercise-timer"
            timerBox.className = "timer-box"
            timerBoxText.innerHTML= "Will Start in"
            timerBoxText.className = "timerboxtext"
            timerBox.appendChild(timerBoxText)
            timerBox.appendChild(timer)
            stopExcersize.className = "button stop-exercise backExcersize-btn"
            stopExcersize.innerHTML = "Stop"
            let excercise = document.querySelector(".display-card .gymFreeModeCard-Text")
            excercise.appendChild(timerBox)
            excercise.appendChild(stopExcersize)
            function countdown() {
            timer.innerHTML -= 1;
            if (timer.innerHTML === "0") {
                clearInterval(counter);
                timerBox.style.display = "none"

            }
            }
            let counter = setInterval(countdown, 1000);
        }
    })
})