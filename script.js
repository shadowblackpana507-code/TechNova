// Rotación de imágenes en la sección hero
const hero = document.querySelector('.hero');
const images = [
  'https://picsum.photos/1200/400?tech',
  'https://picsum.photos/1200/400?gadgets',
  'https://picsum.photos/1200/400?electronics'
];
let index = 0;
setInterval(() => {
  index = (index + 1) % images.length;
  hero.style.backgroundImage = `url(${images[index]})`;
}, 5000);

// Chat básico (solo visual)
const chatInput = document.querySelector('.chat-input input');
const chatBtn = document.querySelector('.chat-input button');
const chatMessages = document.querySelector('.chat-messages');
chatBtn.addEventListener('click', () => {
  if(chatInput.value.trim() !== ""){
    const msg = document.createElement('p');
    msg.innerHTML = `<strong>Tú:</strong> ${chatInput.value}`;
    chatMessages.appendChild(msg);
    chatInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});