// Replace Text In Header
const replaceWord = document.querySelector('.replace-me');

if (replaceWord !== null) {
    const replace = new ReplaceMe(replaceWord, {
            animation: 'animated fadeIn',
            speed: 2000,
            separator: ',',
            loopCount: 'infinite',
            autoRun: true, 
        }
    );
}

function userScroll() {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add(
                'bg-dark', 
                'border-bottom', 
                'border-secondary'
                // 'navbar-bg'
            );
        } 
        else {
            navbar.classList.remove(
                'bg-dark', 
                'border-bottom', 
                'border-secondary'
                // 'navbar-bg'
            );
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', userScroll);