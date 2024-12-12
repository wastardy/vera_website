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