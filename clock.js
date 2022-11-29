    
    let hourHand = document.querySelector('.hour-hand')
    let minHand = document.querySelector('.min-hand')
    let secHand = document.querySelector('.sec-hand')


function setDate() {
    const now = new Date();
    const sec = now.getSeconds();
    const secondDegree = sec * 6;
    secHand.style.transform = `rotate(${secondDegree}deg)`

    const hour = now.getHours();
    const hourDegree = (( hour / 12)*360);
    hourHand.style.transform = `rotate(${hourDegree}deg)`

    const min = now.getMinutes();
    const minDegree = ((min /60) * 360)
    minHand.style.transform = `rotate(${minDegree}deg)`
}

setInterval(() => {
    setDate()
}, 1000);

