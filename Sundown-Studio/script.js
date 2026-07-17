// Initialize smooth scrolling using Locomotive Scroll (Desktop only)
let scroll;
if (window.innerWidth > 768) {
    scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

// Update scroll measurements on window load
window.addEventListener("load", function() {
    if (scroll) {
        scroll.update();
    }
});

// Page 3 (Featured Projects) Hover Preview Animation
function page3Animation() {
    var elemc = document.querySelector(".elem-container");
    var fixed = document.querySelector("#fixed-image");

    if (elemc && fixed) {
        // Show fixed image container on mouse enter
        elemc.addEventListener("mouseenter", function() {
            fixed.style.display = "block";
        });

        // Hide fixed image container on mouse leave
        elemc.addEventListener("mouseleave", function() {
            fixed.style.display = "none";
        });

        // Position fixed image dynamically under the cursor
        elemc.addEventListener("mousemove", function(dets) {
            fixed.style.left = dets.clientX + "px";
            fixed.style.top = dets.clientY + "px";
        });

        // Update the background image based on hovered project element
        var elems = document.querySelectorAll(".elem");
        elems.forEach(function(e) {
            e.addEventListener("mouseenter", function() {
                var image = e.getAttribute("data-image");
                fixed.style.backgroundImage = `url(${image})`;
            });
        });
    }
}

// Swiper Slider Initialization
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

// Loader Screen Animation
function loaderAnimation() {
    var loader = document.querySelector("#loader");
    
    // Stop scroll during loading
    if (scroll) {
        scroll.stop();
    }

    setTimeout(function () {
        loader.style.top = "-100%";
        // Start scroll when loader finishes
        if (scroll) {
            scroll.start();
            scroll.update();
        }
    }, 4200);
}

// Scroll to Top Button Action & Visibility
function scrollToTopSetup() {
    var topBtn = document.querySelector(".top");
    if (topBtn) {
        // Handle scroll listener to show/hide the button
        if (scroll) {
            scroll.on("scroll", function(instance) {
                if (instance.scroll.y > 300) {
                    topBtn.style.opacity = "1";
                    topBtn.style.pointerEvents = "all";
                } else {
                    topBtn.style.opacity = "0";
                    topBtn.style.pointerEvents = "none";
                }
            });
        } else {
            window.addEventListener("scroll", function() {
                if (window.scrollY > 300) {
                    topBtn.style.opacity = "1";
                    topBtn.style.pointerEvents = "all";
                } else {
                    topBtn.style.opacity = "0";
                    topBtn.style.pointerEvents = "none";
                }
            });
        }

        // Handle click event to scroll smoothly to top
        topBtn.addEventListener("click", function() {
            if (scroll) {
                scroll.scrollTo(0);
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        });
    }
}

// Run All Animations
loaderAnimation();
page3Animation(); // Renamed from page4Animation since it runs on Page 3
swiperAnimation();
scrollToTopSetup();
