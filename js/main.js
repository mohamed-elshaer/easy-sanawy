(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Wrap every letter in a span
    // var textWrapper = document.querySelector('.slideInDown-f .letters');
    // if (textWrapper) {
    //     textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    //     anime.timeline({ loop: true })
    //         .add({
    //             targets: '.slideInDown-f .line',
    //             scaleY: [0, 1],
    //             opacity: [0.5, 1],
    //             easing: "easeOutExpo",
    //             duration: 700
    //         })
    //         .add({
    //             targets: '.slideInDown-f .line',
    //             translateX: [0, document.querySelector('.slideInDown-f .letters').getBoundingClientRect().width + 10],
    //             easing: "easeOutExpo",
    //             duration: 700,
    //             delay: 100
    //         }).add({
    //             targets: '.slideInDown-f .letter',
    //             opacity: [0, 1],
    //             easing: "easeOutExpo",
    //             duration: 600,
    //             offset: '-=775',
    //             delay: (el, i) => 34 * (i + 1)
    //         }).add({
    //             targets: '.slideInDown-f',
    //             opacity: 0,
    //             duration: 1000,
    //             easing: "easeOutExpo",
    //             delay: 1000
    //         });
    // }



    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel")
        .owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            dots: true,
            loop: true,
            rtl: true,
            loop: true,
            center: true,
            margin: 20,
            nav: false,
            responsive: {
                0: {
                    items: 2
                },
                750: {
                    items: 3
                },
                950: {
                    items: 4
                }
            }
        })

    document.addEventListener('DOMContentLoaded', () => {
        const radioButtons = document.querySelectorAll('input[name="grade"]');
        const actionButton = document.getElementById('actionButton');
        if (actionButton) {
            radioButtons.forEach((radio) => {
                radio.addEventListener('change', () => {
                    actionButton.classList.remove('hidden');
                });
            });

            actionButton.addEventListener('click', () => {
                // Clear the selected radio button
                radioButtons.forEach((radio) => {
                    radio.checked = false;
                });

                // Hide the button again
                actionButton.classList.add('hidden');
            });
        }

    });

})(jQuery);

