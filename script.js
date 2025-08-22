
const timer = document.getElementById("timer");
const weddingDate = new Date("2026-11-26T00:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;

    if (distance < 0) {
        clearInterval(countdown);
        timer.innerHTML = "¡Hoy es el gran día!";
    }
}, 1000);
