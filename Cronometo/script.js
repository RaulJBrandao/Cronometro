let [milisegundos, segundos, minutos, horas] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("inicio-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("resetar-timer").addEventListener("click", () => {
    clearInterval(int);
    [milisegundos, segundos, minutos, horas] = [0, 0, 0, 0];
    timeRef.innerHTML = "00:00:00:000";
});

document.getElementById("marcar-timer").addEventListener("click", () => {
    clearInterval(int);

});


function displayTimer() {
    milisegundos += 10;
    if (milisegundos === 1000) {
        milisegundos = 0;
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
            if (minutos === 60) {
                minutos = 0;
                horas++;
            }
        }
    }

    let h = horas < 10 ? "0" + horas : horas;
    let m = minutos < 10 ? "0" + minutos : minutos;
    let s = segundos < 10 ? "0" + segundos : segundos;
    let ms = milisegundos < 10 ? "00" + milisegundos : milisegundos < 100 ? "0" + milisegundos : milisegundos;

    timeRef.innerHTML = `${h}:${m}:${s}:${ms}`;
}