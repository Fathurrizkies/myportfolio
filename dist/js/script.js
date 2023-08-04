// Navbar Fixed //
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Bagian Hamburger //
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Click Di luar Hamburger //
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Dark Mode //
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Pindahkan Toggle Sesuai Posisi //
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }

// Close
const alert = document.querySelector('.alert')
const showClose = document.querySelector('.show-close');

showClose.addEventListener('click', function() {
    alert.classList.add('hidden');
})

// Send Mail // 

function sendMail() {
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("pesan").value,
    };

    const serviceID = "service_2lqsrre";
    const templateID = "template_js0i3bc";
    const btnKirim = document.querySelector('.btn-kirim');
    const btnLoading = document.querySelector('.btn-loading');
    const myAlert = document.querySelector('.my-alert');
    
    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
            // Tampilkan Tombol Kirim, Hilangkan Tombol Loading
            // btnLoading.classList.toggle('hidden');
            // btnKirim.classList.toggle('hidden');
            // Nampilkan Alert
            myAlert.classList.toggle('hidden');
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("pesan").value = "";
            console.log(res);
    })
    .catch((err) => console.log(err));
}