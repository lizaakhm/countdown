const days = document.querySelector ("#days")
const hours = document. querySelector ("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector ("#seconds")

const currentYear = new Date('july 15 2023 17:08:15').getFullYear()

const newYearTime = new Date(`january 1 ${currentYear + 1} 00:00:00`);


//update countdown


function Countdown(){
    const currentTime = new Date()
    const difference = newYearTime - currentTime


    const D = Math.floor(difference / 1000 / 60 /60 / 24);
    const H = Math.floor(difference / 1000 / 60 / 60 ) % 24;
    const M = Math.floor(difference / 1000 / 60 ) % 60
    const S = Math.floor(difference / 1000) % 60

    days.innerHTML = D;
    hours.innerHTML = H < 10 ? '0' + H: H;
    minutes.innerHTML = M< 10 ? '0' + M: M;
    seconds.innerHTML = S< 10 ? '0' + S: S;
}

setInterval(Countdown, 1000);
