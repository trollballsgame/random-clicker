function gebid(id) {
    return document.getElementById(id);
}

const text = gebid('text');
const og = gebid('original');
let clicks = 0;

setInterval(() => {
    const cloneCount = document.querySelectorAll('.clone').length;
    if (cloneCount < 15 && cloneCount >= 0) {
        const clone = og.cloneNode(true);
        clone.classList.add('clone')
        clone.style.display = 'block';
        clone.style.position = 'absolute';

        const x = Math.random() * (window.innerWidth - 25);
        const y = Math.random() * (window.innerHeight - 25);

        clone.style.left = x + 'px';
        clone.style.top = y + 'px';

        clone.addEventListener('click', () => {
            clone.remove();
            clicks++;
        });

        document.body.appendChild(clone);
    }
}, 1000);

setInterval(() => {
    const cloneCount = document.querySelectorAll('.clone').length;
    text.textContent = `Clicks: ${clicks} Clones: ${cloneCount}`;
}, 16);