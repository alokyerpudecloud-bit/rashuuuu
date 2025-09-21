// Login credentials
const CORRECT_ID = "alokrash";
const CORRECT_PASSWORD = "12032803";

// DOM elements
const loginForm = document.getElementById('loginForm');
const loginPage = document.getElementById('loginPage');
const lovePage = document.getElementById('lovePage');
const errorMessage = document.getElementById('errorMessage');
const userIdInput = document.getElementById('userId');
const passwordInput = document.getElementById('password');
const navButtons = document.querySelectorAll('.nav-btn');

// Login form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const enteredId = userIdInput.value.toLowerCase().trim();
    const enteredPassword = passwordInput.value.trim();

    // Validate credentials
    if (enteredId === CORRECT_ID && enteredPassword === CORRECT_PASSWORD) {
        // Success - show love page
        showLovePage();
    } else {
        // Error - show error message
        showErrorMessage();
    }
});

// Navigation between sections
navButtons.forEach(button => {
    button.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');

        // Remove active class from all buttons and sections
        navButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.love-section').forEach(section => section.classList.remove('active'));

        // Add active class to clicked button and corresponding section
        this.classList.add('active');
        document.getElementById(`${sectionId}-section`).classList.add('active');

        // Smooth scroll to top of content
        document.querySelector('.love-content').scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Show love page
function showLovePage() {
    loginPage.style.display = 'none';
    lovePage.style.display = 'block';

    // Add some celebration effects
    celebrateLogin();

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show error message
function showErrorMessage() {
    errorMessage.textContent = "💔 Oops! That's not our special combination. Try again, my love! 💔";
    errorMessage.style.display = 'block';

    // Clear inputs
    userIdInput.value = '';
    passwordInput.value = '';

    // Focus on first input
    userIdInput.focus();

    // Hide error after 5 seconds
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

// Celebration effects
function celebrateLogin() {
    // Create floating hearts animation
    const celebrationContainer = document.createElement('div');
    celebrationContainer.className = 'celebration-hearts';
    celebrationContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
    `;

    document.body.appendChild(celebrationContainer);

    // Create multiple hearts
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = ['💖', '💕', '💗', '💓', '💘', '💝', '🌹', '✨'][Math.floor(Math.random() * 8)];
            heart.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: 100%;
                font-size: ${Math.random() * 20 + 15}px;
                animation: celebrateFloat 3s ease-out forwards;
                opacity: 0.8;
            `;

            celebrationContainer.appendChild(heart);

            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100);
    }

    // Remove celebration container after all hearts are gone
    setTimeout(() => {
        celebrationContainer.remove();
    }, 6000);
}

// Add celebration animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes celebrateFloat {
        0% {
            transform: translateY(0) rotate(0deg) scale(0);
            opacity: 0;
        }
        20% {
            opacity: 1;
            transform: translateY(-20px) rotate(45deg) scale(1);
        }
        100% {
            transform: translateY(-100vh) rotate(720deg) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add some interactive effects to the love page
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to content cards
    const contentCards = document.querySelectorAll('.content-card');

    contentCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            // Add a subtle glow effect
            card.style.boxShadow = '0 15px 35px rgba(233, 30, 99, 0.3)';
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            card.style.boxShadow = '';
            card.style.transform = '';
        });
    });

    // Add typing effect to the intro text
    const introTexts = document.querySelectorAll('.intro-text');
    introTexts.forEach((text, index) => {
        const originalText = text.textContent;
        text.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                text.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        };

        // Start typing effect with delay for each paragraph
        setTimeout(typeWriter, 1000 + (index * 2000));
    });

    // Add typing effect to detailed text in each section
    const detailedTexts = document.querySelectorAll('.detailed-text');
    detailedTexts.forEach((text, index) => {
        const originalText = text.textContent;
        text.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                text.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 20);
            }
        };

        // Start typing effect when section becomes active
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const target = mutation.target;
                    if (target.classList.contains('active')) {
                        setTimeout(() => {
                            text.textContent = '';
                            i = 0;
                            typeWriter();
                        }, 500);
                    }
                }
            });
        });

        const section = text.closest('.love-section');
        observer.observe(section, { attributes: true });
    });
});

// Add some romantic background music suggestion
function suggestMusic() {
    const musicMessage = document.createElement('div');
    musicMessage.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.9);
        padding: 10px 15px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        font-size: 0.9rem;
        color: #e91e63;
        z-index: 100;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    musicMessage.innerHTML = '🎵 Play romantic music';
    musicMessage.title = 'Click to open romantic playlist';

    musicMessage.addEventListener('click', function() {
        window.open('https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmNBRM', '_blank');
    });

    document.body.appendChild(musicMessage);

    // Auto-hide after 10 seconds
    setTimeout(() => {
        musicMessage.style.opacity = '0';
        setTimeout(() => {
            musicMessage.remove();
        }, 300);
    }, 10000);
}

// Show music suggestion after successful login
const originalShowLovePage = showLovePage;
showLovePage = function() {
    originalShowLovePage();
    setTimeout(suggestMusic, 2000);
};
