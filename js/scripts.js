window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    // new Slick Slider for services section
    $(document).ready(function(){
    $('.services-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 1 }
            }
        ]
    });
});

$(document).ready(function(){
  $('.partners-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 200,
    infinite: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var portfolioModal = document.getElementById('portfolioModal');
  var modalTitle = document.getElementById('portfolioModalTitle');
  var modalImg = document.getElementById('portfolioModalImg');
  var modalDesc = document.getElementById('portfolioModalDesc');

  document.querySelectorAll('.portfolio-box').forEach(function (box) {
    box.addEventListener('click', function () {
      modalTitle.textContent = box.getAttribute('data-title');
      modalImg.src = box.getAttribute('data-img');
      modalImg.alt = box.getAttribute('data-title');
      modalDesc.innerText = box.getAttribute('data-desc');
      console.log(box.getAttribute('data-desc'));
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.portfolio-box').forEach(function (box) {
    box.addEventListener('click', function () {
      document.getElementById('portfolioModalTitle').textContent = box.getAttribute('data-title');
      document.getElementById('portfolioModalImg').src = box.getAttribute('data-img');
      document.getElementById('portfolioModalImg').alt = box.getAttribute('data-title');
      document.getElementById('portfolioModalDesc').innerHTML = box.getAttribute('data-desc');
    });
  });
});

});

function toggleCardText(btn) {
    const card = btn.closest('.service-card');
    card.querySelector('.short-text').classList.toggle('d-none');
    card.querySelector('.long-text').classList.toggle('d-none');
    btn.textContent = btn.textContent === 'See More' ? 'See Less' : 'See More';
}
