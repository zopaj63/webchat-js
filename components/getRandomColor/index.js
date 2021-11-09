export default function getRandomColor() {
    randomColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    return randomColor;
}