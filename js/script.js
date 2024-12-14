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

// Video Modal
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#video-modal');
const video = document.querySelector('#video');
let videoSourse;

if (videoBtn !== null) {
    videoBtn.addEventListener('click', () => {
        videoSourse = videoBtn.getAttribute('data-bs-src');
    });
}

if (videoModal !== null) {
    videoModal.addEventListener('shown.bs.modal', () => {
        video.setAttribute(
            'src', 
            videoSourse + '?autoplay=1;modestbranding=1;showInfo=0'
        );
    });

    videoModal.addEventListener('hide.bs.modal', () => {
        video.setAttribute(
            'src', 
            videoSourse);
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', userScroll);