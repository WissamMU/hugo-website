const ovserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElemnts = document.querySelectorAll('.card');
hiddenElemnts.forEach((el)=> observer.observe(el));