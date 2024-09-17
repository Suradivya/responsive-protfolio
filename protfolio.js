let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });
};


typed=new Typed(".multi-type",{
    strings: ["Frontend Developer","JTD Student","NSS Volunteer"],
    typeSpeed:150,
    backSpeed:150,
    backDelay:1000,
    loop:true,
});