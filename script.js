// 1. Dark & Light Theme Toggle Logic
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        themeBtn.textContent = '🌙'; 
    } else {
        themeBtn.textContent = '☀️';
    }
});

// 2. Click to Copy Contact Information (Bulletproof Version)
function copyText(text) {
    // Check if the modern clipboard API is available (works on live HTTPS sites)
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function() {
            alert("Copied to clipboard: " + text);
        }).catch(function(err) {
            console.error("Failed to copy text: ", err);
        });
    } else {
        // Fallback for local testing (file:// protocol) or older browsers
        let textArea = document.createElement("textarea");
        textArea.value = text;
        // Make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            alert("Copied to clipboard: " + text);
        } catch (err) {
            console.error("Fallback copy failed", err);
        }
        textArea.remove();
    }
}

// 3. Smooth Fade-in Animation as you scroll down the page
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
