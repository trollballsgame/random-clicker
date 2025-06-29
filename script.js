function gebid(id) {
    return document.getElementById(id);
}

const text = gebid('text');
const og = gebid('original');
const mulButton = gebid('mul');  // this is your button element
let clicks = 0;
let multiplier = 1;

setInterval(() => {
    const cloneCount = document.querySelectorAll('.clone').length;
    if (cloneCount < 15) {
        const clone = og.cloneNode(true);
        clone.classList.add('clone');
        clone.style.display = 'block';
        clone.style.position = 'absolute';

        const x = Math.random() * (window.innerWidth - 25);
        const y = Math.random() * (window.innerHeight - 25);

        clone.style.left = x + 'px';
        clone.style.top = y + 'px';

        clone.addEventListener('click', () => {
            clone.remove();
            clicks += multiplier; 
        });

        document.body.appendChild(clone);
    }
}, 1000);

mulButton.onclick = () => {
    if (clicks >= 100) {
        multiplier++;
        clicks -= 100;
    }
};

setInterval(() => {
    const cloneCount = document.querySelectorAll('.clone').length;
    text.textContent = `Clicks: ${clicks} | Clones: ${cloneCount} | Multiplier: x${multiplier}`;
}, 16);
