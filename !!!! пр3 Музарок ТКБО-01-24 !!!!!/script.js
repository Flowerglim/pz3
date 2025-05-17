document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });
    
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !burger.contains(event.target)) {
            burger.classList.remove('active');
            menu.classList.remove('active');
        }
    });

    const modal = document.getElementById("modal");
    const bookingBtn = document.getElementById("booking-btn"); 
    const closeBtn = document.querySelector(".modal__close");

    function openModal() {
        modal.classList.add("modal_active");
        document.body.style.overflow = 'hidden'; 
    }

    function closeModal() {
        modal.classList.remove("modal_active");
        document.body.style.overflow = ''; 
    }

    bookingBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('modal_active')) {
            closeModal();
        }
    });
});



let slideIndex = 1,
    slides = document.querySelectorAll(".sliderNew-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotsWrap = document.querySelector(".sliderNew-dots"),
    dots = document.querySelectorAll(".dot");

showSlides(slideIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => (item.style.display = "none"));
    dots.forEach((item) => item.classList.remove("dot-active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

prev.addEventListener("click", function() {
    plusSlides(-1);
});

next.addEventListener("click", function() {
    plusSlides(1);
});

dotsWrap.addEventListener("click", function(event) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
});


document.querySelectorAll('.accordion-head').forEach(head => {
    head.addEventListener('click', () => {
        const item = head.closest('.accordion-item');
        const isActive = item.classList.contains('active');
        

        document.querySelectorAll('.accordion-item').forEach(el => {
            el.classList.remove('active');
        });
        

        if (!isActive) {
            item.classList.add('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const tabHeaders = document.querySelectorAll('.rest__header-tab'),
          tabsParent = document.querySelector('.rest__header'),
          tabContents = document.querySelectorAll('.rest__tabcontent');

    function hideTabsContent() {
        tabContents.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
        
        tabHeaders.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabsContent(i = 0) {
        tabContents[i].classList.add('show');
        tabContents[i].classList.remove('hide');
        tabHeaders[i].classList.add('active');
    }

    hideTabsContent();
    showTabsContent(0);

    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains('rest__header-tab')) {
            tabHeaders.forEach((item, i) => {
                if(target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
});