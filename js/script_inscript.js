const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const course = document.getElementById('course').value;
  const location = document.getElementById('location').value.trim();

  const message = `Bonjour GFIM WORLD WIDE SCHOOL,

Je souhaite m'inscrire à une formation.

👤 Nom et prénom : ${name}
📞 Téléphone : ${phone}
🎓 Formation : ${course}
📍 Lieu : ${location}

💰 Frais d'inscription : 4 000 FC
📜 Brevet reconnu par l'État congolais : 22 000 FC
💵 Total à prévoir : 26 000 FC

Merci de me communiquer les prochaines étapes pour confirmer mon inscription.`;

  window.open(
    'https://wa.me/243971390573?text=' + encodeURIComponent(message),
    '_blank'
  );
});

const menu = document.querySelector('.menu');
const nav = document.querySelector('.header nav');

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  nav.style.display = open ? 'flex' : '';
  nav.style.position = open ? 'absolute' : '';
  nav.style.top = open ? '65px' : '';
  nav.style.left = open ? '0' : '';
  nav.style.right = open ? '0' : '';
  nav.style.background = open ? '#fff' : '';
  nav.style.padding = open ? '15px 6%' : '';
  nav.style.flexDirection = open ? 'column' : '';
  nav.style.gap = open ? '5px' : '';
  nav.style.boxShadow = open ? '0 10px 20px #0002' : '';
});

document.querySelectorAll('.header nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 950) nav.style.display = '';
  });
});
