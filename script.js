document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('clickMe');
    let clickCount = 0;

    button.addEventListener('click', () => {
        clickCount++;
        button.textContent = `Clicked ${clickCount} times!`;
        
        // Add a fun color change effect
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        button.style.backgroundColor = randomColor;
    });
}); 