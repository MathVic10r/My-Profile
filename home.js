// ===== FADE IN ===== //
const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));


// ===== TROCA DE IMAGENS (HardSkills e SoftSkills) ===== //
function changeLanguageImages(lang) {
  const hardPt = document.querySelector('#HardSkills img[src="HardSkills.png"]');
  const hardEn = document.getElementById('HardSkillsEn');
  if (hardPt && hardEn) {
    hardPt.style.display = lang === 'pt' ? 'block' : 'none';
    hardEn.style.display = lang === 'en' ? 'block' : 'none';
  }

  const softPt = document.querySelector('#SoftSkills img[src="softskills.png"]');
  const softEn = document.getElementById('SoftSkillsEn');
  if (softPt && softEn) {
    softPt.style.display = lang === 'pt' ? 'block' : 'none';
    softEn.style.display = lang === 'en' ? 'block' : 'none';
  }
}


// ===== FUNÇÃO DO MENU HAMBÚRGUER ===== //
function iniciarMenu() {
  const hamburger = document.querySelector('.hamburger');
  const lista = document.querySelector('#lista');

  if (!hamburger || !lista) return;

  // Remove listeners antigos
  const novoHamburger = hamburger.cloneNode(true);
  hamburger.parentNode.replaceChild(novoHamburger, hamburger);

  novoHamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    lista.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!lista.contains(e.target) && !novoHamburger.contains(e.target)) {
      lista.classList.remove('active');
    }
  });

  lista.addEventListener('click', (e) => e.stopPropagation());
}


// ===== TRADUÇÕES ===== //
const translations = {
  pt: {
    home: "Início",
    about: "Sobre",
    certs: "Certificações",
    hard: "HardSkills",
    soft: "SoftSkills",
    profileTitle: "Perfil Profissional",
    perfilsub:"Análise e desenvolvimento de Sistemas",
    profileText: "Este projeto tem como objetivo apresentar meu perfil profissional da área de tecnologia, destacando minhas habilidades, certificações e competências. Todo o conteúdo e as certificações aqui apresentados são verdadeiros e refletem meu conhecimento, formação e comprometimento com meu desenvolvimento pessoal e profissional.",
    profileTextsobre: "Muito prazer em conhecê-lo(a)! Meu nome é Matheus e este é meu portfólio profissional. Sou formado em Análise e Desenvolvimento de Sistemas e atualmente venho me aprimorando e expandindo meus conhecimentos nas áreas de Dados e Cibersegurança. Possuo experiência prática na indústria, atuando como analista de processos e projetos, com foco em análise direta e projeções, eficiência operacional, melhoria contínua, padronização e gestão de recursos tecnológicos. Ao longo da minha carreira, desenvolvi habilidades técnicas com ferramentas como TeamCenter, Catia V6, TiCon, CODEP e ambientes de máquinas virtuais. Dentre meus hobbies, destaco o desenvolvimento front-end, bancos de dados SQL, montagem e manutenção de computadores e o estudo de metodologias UI/UX. Dentro da segurança cibernética, chamaram-me muito a atenção as atividades de Pentesting, uso do Kali Linux, Engenharia Social, Redes de Computadores, Anonimato e Ethical Hacking. Como objetivo, desejo alcançar certificações como CISCO, ISO 27001, entre outras.",
    profileTitlecertificacao: "Certificações",
    profileTitleapp: "Esta aplicação foi desenvolvida utilizando:"
  },
  en: {
    home: "Home",
    about: "About",
    certs: "Certificates",
    hard: "HardSkills",
    soft: "SoftSkills",
    profileTitle: "Professional Profile",
    perfilsub:"Systems Analysis and Development",
    profileText: "This project aims to present my professional profile in the technology field, highlighting my skills, certifications, and competencies. All the content and certifications presented here are accurate and reflect my knowledge, education, and commitment to my personal and professional development.",
    profileTextsobre: "Nice to meet you! My name is Matheus, and this is my professional portfolio. I hold a degree in Systems Analysis and Development and have been continuously improving and expanding my knowledge in the areas of Data and Cybersecurity. I have hands-on industry experience working as a process and project analyst, focusing on direct analysis and projections, operational efficiency, continuous improvement, standardization, and the management of technological resources. Throughout my career, I have developed technical skills with tools such as TeamCenter, Catia V6, TiCon, CODEP, and virtual machine environments. Among my hobbies, I highlight front-end development, SQL databases, computer assembly and maintenance, and the study of UI/UX methodologies. In cybersecurity, I am particularly interested in Pentesting, Kali Linux, Social Engineering, Computer Networks, Anonymity, and Ethical Hacking. My goal is to achieve certifications such as CISCO, ISO 27001, and others.",
    profileTitlecertificacao: "Certifications",
    profileTitleapp: "This application was developed using:"
  }
};


// ===== FUNÇÃO DE TROCA DE IDIOMA ===== //
function changeLanguage(lang) {
  const menuLinks = document.querySelectorAll('#lista li a');
  if (menuLinks.length >= 5) {
    menuLinks[0].textContent = translations[lang].home;
    menuLinks[1].textContent = translations[lang].about;
    menuLinks[2].textContent = translations[lang].certs;
    menuLinks[3].textContent = translations[lang].hard;
    menuLinks[4].textContent = translations[lang].soft;
  }

  document.getElementById('profileTitle').textContent = translations[lang].profileTitle;
  document.getElementById('profileText').textContent = translations[lang].profileText;
  document.getElementById('profileTextsobre').textContent = translations[lang].profileTextsobre;
  document.getElementById('profileTitlecertificacao').textContent = translations[lang].profileTitlecertificacao;
  document.getElementById('profileTitleapp').textContent = translations[lang].profileTitleapp;
  document.getElementById('perfilsub').textContent = translations[lang].perfilsub;

  changeLanguageImages(lang);
  mudaridioma(lang); // 🔹 ADICIONE ESTA LINHA AQUI
  localStorage.setItem('lang', lang);

  // Reanexa eventos do menu após mudar o idioma
  iniciarMenu();
}



// ===== MANTÉM IDIOMA AO RECARREGAR ===== //
window.addEventListener('load', () => {
  const savedLang = localStorage.getItem('lang') || 'pt';
  changeLanguage(savedLang);
});

function mudaridioma(idioma) {
  const linkedin = document.getElementById("linkedin");

  if (!linkedin) {
    console.warn("Elemento do LinkedIn não encontrado!");
    return;
  }

  if (idioma === "en") {
    linkedin.href = "https://www.linkedin.com/in/matheus-victor-969346208/?locale=en_US";
    console.log("LinkedIn alterado para inglês:", linkedin.href);
  } else {
    linkedin.href = "https://www.linkedin.com/in/matheus-victor-969346208/";
    console.log("LinkedIn alterado para português:", linkedin.href);
  }
}


// ===== CARROSSEL ===== //
console.log("Carrossel carregado!");

document.addEventListener("DOMContentLoaded", function() {
  const fadeEls = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.9 });

  fadeEls.forEach(el => observer.observe(el));
});

const carrosselImagens = document.querySelector('.carrossel-imagens');
const slides = document.querySelectorAll('.carrossel-imagens .slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function mostrarSlide(i) {
  if (i >= slides.length) index = 0;
  else if (i < 0) index = slides.length - 1;
  else index = i;
  carrosselImagens.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener('click', () => mostrarSlide(index + 1));
prevBtn.addEventListener('click', () => mostrarSlide(index - 1));
setInterval(() => mostrarSlide(index + 1), 5000);