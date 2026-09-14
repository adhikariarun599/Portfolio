const firebaseConfig = {
    apiKey: "AIzaSyBLIgjthPddTsuf8mR4Y6fq8ETsolelhOY",
    authDomain: "arun-courses.firebaseapp.com",
    projectId: "arun-courses",
    storageBucket: "arun-courses.firebasestorage.app",
    messagingSenderId: "532244891416",
    appId: "1:532244891416:web:90b7d7c65c047d799e406d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function toggleMobileMenu() { 
    document.getElementById("navLinks").classList.toggle("active"); 
}

function closeMobileMenu() { 
    document.getElementById("navLinks").classList.remove("active"); 
}

document.addEventListener("DOMContentLoaded", async () => {
    setTimeout(typeAllRoles, 400);
    await listenToSettings();
});

async function listenToSettings() {
    db.collection("settings").doc("main").onSnapshot((doc) => {
        if (doc.exists) {
            const data = doc.data();
            const banner = document.getElementById("siteNoticeBanner");
            const nav = document.getElementById("mainNavbar");
            if (data.showNotice && data.noticeText) {
                document.getElementById("siteNoticeText").innerText = "📢 " + data.noticeText;
                banner.style.display = "block";
                nav.style.top = banner.offsetHeight + "px";
            } else {
                banner.style.display = "none";
                nav.style.top = "0px";
            }
        }
    });
}

function closeModal(id) { 
    document.getElementById(id).style.display = "none"; 
}

const roleItems = [
    { text: "Investor", class: "highlight-dark-blue" }, { text: " | ", class: "separator" },
    { text: "Trader", class: "highlight-yellow" }, { text: " | ", class: "separator" },
    { text: "Graphic Designer", class: "highlight-dark-blue" }, { text: " | ", class: "separator" },
    { text: "Web Developer", class: "highlight-yellow" }
];
let itemIndex = 0, charIndex = 0;
const container = document.getElementById("fullTypingRoles");
let currentSpan = null;

function typeAllRoles() {
    if (itemIndex >= roleItems.length) {
        setTimeout(() => { container.innerHTML = ""; itemIndex = 0; charIndex = 0; currentSpan = null; typeAllRoles(); }, 3000);
        return;
    }
    const item = roleItems[itemIndex];
    if (charIndex === 0) {
        currentSpan = document.createElement("span");
        if (item.class !== "separator") currentSpan.className = item.class;
        container.appendChild(currentSpan);
    }
    currentSpan.textContent += item.text.charAt(charIndex);
    charIndex++;
    if (charIndex < item.text.length) setTimeout(typeAllRoles, 45);
    else { charIndex = 0; itemIndex++; setTimeout(typeAllRoles, 70); }
}
