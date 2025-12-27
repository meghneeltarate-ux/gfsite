// Ask for notification permission when the page loads
if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

// Function to send a notification
function sendReminder() {
    if (Notification.permission === "granted") {
        new Notification("💌 Sweet Reminder", {
            body: "She misses you! Time to message her ❤️",
            icon: "images/pic4.jpg" // optional
        });
    } else {
        alert("Please allow notifications to receive reminders!");
    }
}
/* ---------- DATE HELPERS ---------- */
function getNextDate(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    let target = new Date(year, month - 1, day);
    if (target < today) target.setFullYear(year + 1);
    return target;
}

/* ---------- COUNTDOWN ---------- */
function showCountdown() {
    const birthday = getNextDate(6, 5);
    const anniversary = getNextDate(10, 7);
    const today = new Date();

    const bdayDays = Math.ceil((birthday - today) / 86400000);
    const anniDays = Math.ceil((anniversary - today) / 86400000);

    document.getElementById("content").innerHTML = `
        <h2>MY BABES</h2>
        <p>HER Birthday: June 5th </p>
	<p>${bdayDays} days left</p>
        <p>OUR Anniversary: October 7th</p>
	<p>${anniDays} days remaining </p>
    `;
}

/* ---------- RANDOM KISS ---------- */
function playKiss() {
    const kisses = [
        "sounds/kiss1.mp3",
        "sounds/kiss2.mp3",
        "sounds/kiss3.mp3",
        "sounds/kiss4.mp3",
        "sounds/kiss5.mp3"
    ];

    const audio = new Audio(
       kisses[Math.floor(Math.random() * kisses.length)]

    );
    audio.play();

    document.getElementById("content").innerHTML = `
        <h2>KISSESS FOR YOU SWEETHEART</h2>
        <p>😘🥰😋</p>
    `;

    spawnEmojis();
}


/* ---------- EMOJI BOUNCING ---------- */
function spawnEmojis() {
    const emojis = ["🥵", "😋", "🥰", "😘", "😉"];

    for (let i = 0; i < 8; i++) {
        const emoji = document.createElement("div");
        emoji.className = "floating-emoji";
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 100);

        let dx = (Math.random() * 4 + 2) * (Math.random() < 0.5 ? -1 : 1);
        let dy = (Math.random() * 4 + 2) * (Math.random() < 0.5 ? -1 : 1);

        emoji.style.left = x + "px";
        emoji.style.top = y + "px";

        document.body.appendChild(emoji);

        const interval = setInterval(() => {
            x += dx;
            y += dy;

            if (x <= 0 || x >= window.innerWidth - 100) dx *= -1;
            if (y <= 0 || y >= window.innerHeight - 100) dy *= -1;

            emoji.style.left = x + "px";
            emoji.style.top = y + "px";
        }, 16);

        /* Remove emoji quickly (no glitches) */
        setTimeout(() => {
            clearInterval(interval);
            emoji.remove();
        }, 2500);
    }
}
/* ---------- PHOTOS ---------- */
function showPhotos() {
    document.getElementById("content").innerHTML = `
        <h2>MY CUTE PRINCESSs</h2>
        <img src="images/pic1.jpg">
        <img src="images/pic2.jpg">
        <img src="images/pic3.jpg">
        <div class="caption">GORGEOUS AND SO CUTEE</div>
    `;
}

function bio() {
   document.getElementById("content").innerHTML = `
        <h2>My love</h2>
        <div style="display: flex; gap: 20px; align-items: flex-start; font-family: 'Baloo', cursive;">
            
            <!-- Left side: stacked images -->
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <img src="images/pic4.jpg" style="width:300px; height:auto;">
                <img src="images/pic2.jpg" style="width:300px; height:auto;">
            </div>

            <!-- Right side: text -->
            <div>
                I wanted to take the time to tell you just how much you mean to me. You’ve become a permanent part in my life, something I will always have, something I always want to keep with me forever. Knowing you’re by my side makes me so happy and glad. I had felt happiness before, but nothing compared to happiness I feel when I’m talking to you. I don’t know what I said or did that made me lucky enough to deserve you, but I will spend the rest of my life trying to be the best man for you. I can be so that you can be proud. I love you princess. Thank you for all that you do and have done for me. You have taught me what it is to love. 
You’ve shown me how beautiful life can really be. 
Thank you sweetheart.
But we have to do some stuff you just look so tasty not even kidding babe.
            </div>
        </div>
    `;
}

