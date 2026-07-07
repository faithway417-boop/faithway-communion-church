const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const chatToggle = document.querySelector('.chat-toggle');
const chatModal = document.querySelector('.chat-modal');
const closeChat = document.querySelector('.close-chat');
const donateButtons = document.querySelectorAll('.donate-action, .donate-btn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

const openChat = () => chatModal?.classList.add('active');
const closeChatModal = () => chatModal?.classList.remove('active');
const openDonation = () => modal?.classList.add('active');
const closeDonation = () => modal?.classList.remove('active');

chatToggle?.addEventListener('click', openChat);
closeChat?.addEventListener('click', closeChatModal);
chatModal?.addEventListener('click', (event) => {
  if (event.target === chatModal) {
    closeChatModal();
  }
});

donateButtons.forEach((button) => button.addEventListener('click', openDonation));
closeModal?.addEventListener('click', closeDonation);
modal?.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeDonation();
  }
});

document.querySelector('.chat-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you for reaching out. Our church team will contact you shortly.');
  closeChatModal();
});
