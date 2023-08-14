const lines = document.querySelectorAll('.line');
const buttons = document.querySelectorAll('.buttons button');
const image = document.querySelector('.img-fluid'); // Get the image element

lines.forEach((line, index) => {
    const words = line.textContent.split(' ');
    line.innerHTML = '';

    words.forEach((word, index) => {
        words[index] = `<span><lineAnimation>${word}</lineAnimation></span>`;
    });

    line.innerHTML = words.join(' ');

    const children = line.querySelectorAll('span > lineAnimation');

    if (index === 0) {
        children.forEach((node, index) => {
            node.style.animationDelay = `${index * 0.2}s`;
        });
    } else {
        children.forEach((node, index) => {
            node.style.animationDelay = `${(index * 0.2) + (words.length * 0.2)}s`;
        });
    }
});

// Add an event listener to trigger button animations when the last line's animation ends
lines[1].addEventListener('animationend', () => {
    // Set a delay for button animations after the last line's animation has ended
    setTimeout(() => {
        buttons.forEach(button => {
            button.classList.add('slideCall'); // Add animation class to button
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        });
    }, 3000); // Adjust the delay as needed
});
image.classList.add('img-fade-in');
image.style.opacity = '0';
image.style.transform = 'translateY(20px)';

// Add an event listener to trigger image animation when the last line's animation ends
lines[1].addEventListener('animationend', () => {
    // Set a delay for image animation after the last line's animation has ended
    setTimeout(() => {
        image.style.opacity = '1';
        image.style.transform = 'translateY(0)';
    }, 1000); // Adjust the delay as needed
});