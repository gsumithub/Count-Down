function updateCountdown() {
    const newYear = new Date("January 1, 2026 00:00:00").getTime();
    const now = new Date().getTime();

    const diff = newYear - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText = " Happy New Year 2026! ";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText =
        `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}

// Run immediately + update every second
updateCountdown();
setInterval(updateCountdown, 1000);
