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
    autoplaySpeed: 500,
    infinite: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
  });
});




});

function toggleCardText(btn) {
    const card = btn.closest('.service-card');
    card.querySelector('.short-text').classList.toggle('d-none');
    card.querySelector('.long-text').classList.toggle('d-none');
    btn.textContent = btn.textContent === 'See More' ? 'See Less' : 'See More';
}

document.addEventListener('DOMContentLoaded', function () {
  // Listen for clicks on portfolio boxes
  document.querySelectorAll('.portfolio-box').forEach(function(box) {
    box.addEventListener('click', function() {
      // Get data attributes
      const title = box.getAttribute('data-title');
      const img = box.getAttribute('data-img');
      const desc = box.getAttribute('data-desc');
      // Set modal content
      document.getElementById('portfolioModalTitle').textContent = title || '';
      document.getElementById('portfolioModalImg').src = img || '';
      document.getElementById('portfolioModalDesc').textContent = desc || '';
    });
  });
});

// Function to fetch and display "Did You Know?" facts
const facts = [
  { icon: "🌍", color: "text-primary", text: "Did you know? Every volunteer hour helps empower African youth to reach their dreams." },
  { icon: "💧", color: "text-info", text: "Did you know? Access to clean water can double school attendance in rural communities." },
  { icon: "📚", color: "text-success", text: "Did you know? Education is the most powerful tool to break the cycle of poverty." },
  { icon: "🤝", color: "text-warning", text: "Did you know? Community-led projects create lasting change for generations." },
  { icon: "🌱", color: "text-danger", text: "Did you know? Youth empowerment programs inspire future leaders across Africa." },
  { icon: "🚰", color: "text-primary", text: "Did you know? One well can provide clean water for an entire village." },
  { icon: "🎓", color: "text-info", text: "Did you know? Volunteers help thousands of children stay in school every year." },
  { icon: "🌟", color: "text-success", text: "Did you know? Small acts of kindness can transform entire communities." },
  { icon: "👧🏾", color: "text-warning", text: "Did you know? Educating girls leads to healthier, more prosperous societies." },
  { icon: "🙌", color: "text-danger", text: "Did you know? Your support creates hope and opportunity for African children." }
];

// Shuffle and pick 3 random facts
function getRandomFacts(arr, n) {
  let shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

document.addEventListener('DOMContentLoaded', function() {
  const selectedFacts = getRandomFacts(facts, 3);
  const container = document.getElementById('didYouKnowFacts');
  container.innerHTML = selectedFacts.map(fact => `
    <div class="col">
      <div class="card h-100 shadow-sm border-0">
        <div class="card-body">
          <div class="fs-2 mb-2 ${fact.color}">${fact.icon}</div>
          <p class="card-text">${fact.text}</p>
        </div>
      </div>
    </div>
  `).join('');
});

// Function to handle the donation modal
function setAmount(amount) {
  document.getElementById('customAmount').value = amount;
}

function handleDonate(e) {
  e.preventDefault();
  const amount = document.getElementById('customAmount').value;
  const name = document.getElementById('donorName').value.trim();
  const email = document.getElementById('donorEmail').value.trim();
  const purpose = document.getElementById('donationPurpose').value;
  const errorDiv = document.getElementById('donateError');
  errorDiv.classList.add('d-none');

  if (!amount || isNaN(amount) || amount < 10) {
    errorDiv.textContent = "Please enter a valid amount (minimum R10).";
    errorDiv.classList.remove('d-none');
    return false;
  }
  if (!name) {
    errorDiv.textContent = "Please enter your name.";
    errorDiv.classList.remove('d-none');
    return false;
  }
  if (!email) {
    errorDiv.textContent = "Please enter your email.";
    errorDiv.classList.remove('d-none');
    return false;
  }
  if (!purpose) {
    errorDiv.textContent = "Please select a donation purpose.";
    errorDiv.classList.remove('d-none');
    return false;
  }

  // Replace with your PayFast merchant ID
  const merchantId = 'YOUR_MERCHANT_ID';
  // Encode parameters for PayFast
  const itemName = encodeURIComponent(`Donation to African Jewel - ${purpose}`);
  const customStr = encodeURIComponent(`Donor: ${name}, Email: ${email}`);
  const url = `https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=${merchantId}&amount=${amount}&item_name=${itemName}&custom_str1=${customStr}`;
  window.open(url, '_blank');
  return false;
}