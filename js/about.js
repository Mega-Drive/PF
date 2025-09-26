/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Init Header
3. Hero Slider
4. Init Hamburger Button
5. Init Why Us Slider
6. Init Testimonials Slider
7. Init Lightbox
8. Init Form
9. Reveal Animation
10. Init Wow
11. Init Menu


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/
	
	initHeader();
	initHeroSlider();
	initHamburgerButton();
	initWhyUsSlider();
	initTestimonialsSlider();
	initLightbox();
	initForm();
	initReveal();
	initWow();
	initMenu();

	$(window).on('resize', function()
	{
		initHeader();
	});

	$(document).on('scroll', function()
	{
		initHeader();
	});

	$(document).on('load', function()
	{
		initHeader();
	});

	/* 

	2. Init Header

	*/

	function initHeader()
	{
		const header = document.getElementById("header");
		if($(window).scrollTop() > 99)
		{
			header.classList.add('hidden');
		}
		else
		{
			header.classList.remove('hidden');
		}
		if($(window).scrollTop() > 180)
		{
			header.classList.add('scrolled');
		}
		else
		{
			header.classList.remove('scrolled');
		}
	}

	/* 

	3. Hero Slider

	*/

	function initHeroSlider()
	{
		if($('.hero-slider').length)
		{
			let isAnimating = false;
			const heroSlider = $('.hero-slider');
			heroSlider.owlCarousel(
			{
				items:1,
				animateOut: 'owl-shrink-out',
   				animateIn: '',
				autoplay: true,
				touchDrag: false,
				loop: true,
				mouseDrag: false,
				dotsContainer: 'hero-slider-dots'
			});

			heroSlider.on('translate.owl.carousel', function(e)
			{
				isAnimating = true;
			});
			heroSlider.on('translated.owl.carousel', function(e)
			{
				isAnimating = false;
			});

			/* Change active class for dots when slide changes by nav or touch */
			heroSlider.on('changed.owl.carousel', function(event)
			{
				$('.hero-slider-dot').removeClass('active');
				$('.hero-slider-dot').eq(event.page.index).addClass('active');
			});

			/* Custom dots events */
			if($('.hero-slider-dot').length)
			{
				$('.hero-slider-dot').on('click', function()
				{
					if(!isAnimating)
					{
						$('.hero-slider-dot').removeClass('active');
						$(this).addClass('active');
						heroSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
					}
					
				});
			}
		}
	}

	/* 

	4. Init Hamburger Button

	*/

	function initHamburgerButton()
	{
		const hamburgerBtn = document.querySelector('#hamburger');
		hamburgerBtn.addEventListener("click", function()
		{
			hamburgerBtn.classList.toggle('is-active');
		});
	}

	/* 

	5. Init Why Us Slider

	*/

	function initWhyUsSlider()
	{
		if($('.why_us_slider').length)
		{
			const slider = $('.why_us_slider');
			slider.owlCarousel(
			{
				items: 1,
				animateOut: 'owl-shrink-out',
   				animateIn: '',
				loop: true,
				autoplay: true,
				touchDrag: false,
				mouseDrag: false,
				dots: true,
				nav: false
			});
		}
	}

	/* 

	6. Init Testimonials Slider

	*/

	function initTestimonialsSlider()
	{
		if($('.testimonials_slider').length)
		{
			const testSlider = $('.testimonials_slider');
			testSlider.owlCarousel(
			{
				items: 3,
				loop: true,
				margin: 20,
				autoplay: false,
				nav: false,
				dots: false,
				responsive:
				{
					0:
					{
						items: 1
					},
					768:
					{
						items: 2
					},
					992:
					{
						items: 3
					}
				}
			});

			if($('.testimonials_nav_prev').length)
			{
				let btn_prev = $('.testimonials_nav_prev');
				btn_prev.on('click', function()
				{
					testSlider.trigger('prev.owl.carousel');
				});
			};

			if($('.testimonials_nav_next').length)
			{
				let btn_next = $('.testimonials_nav_next');
				btn_next.on('click', function()
				{
					testSlider.trigger('next.owl.carousel')
				});
			};
		}
	}

	/* 

	7. Init Lightbox

	*/

	function initLightbox()
	{
		if($('.gallery_container').length)
		{
			const lightbox = new PhotoSwipeLightbox(
			{
				gallery: ".gallery_container",
				children: "li",
				pswpModule: PhotoSwipe
			});
			lightbox.init();
		}
	}

	/* 

	8. Init Form

	*/

	function initForm()
	{
		document.querySelector("#newsletter_form").addEventListener("submit", function (e)
		{
			e.preventDefault();
			document.querySelector(".form-status").textContent = "Message sent successfully!";
			document.querySelector(".form-status").classList.add("visible");
		});
	}

	/* 

	9. Reveal Animation

	*/

	function initReveal()
	{
		function set_stagger(stagger_class)
		{
			ScrollTrigger.batch(stagger_class,
			{
				start: "100px bottom",
				end: "100px top",
				once: false,
				onEnter: batch => {
					gsap.to(batch, 
					{
						duration: 1,
						opacity: 1, 
						stagger: 0.1, 
						rotateX: 0, 
						rotateY: 0
					});
				},
				onLeaveBack: batch => {
					gsap.to(batch, 
					{
						duration: 1,
						opacity: 0,
						rotateX: 5, 
						rotateY: 12
					});
				},
			});
		};

		set_stagger('.stagger_classes');
		set_stagger('.stagger_feature');
		set_stagger('.stagger_stats');
		set_stagger('.stagger_team');
		set_stagger('.stagger_pricing');
		set_stagger('.stagger_why_us');
		set_stagger('.stagger_test');
		set_stagger('.stagger_stars');
		set_stagger('.stagger_stars_2');
		set_stagger('.stagger_stars_3');
		set_stagger('.stagger_stars_4');
		set_stagger('.stagger_gallery');
		set_stagger('.stagger_blog');

		let reveal_1 = $('.reveal_1');
		reveal_1.each((ind, ele_1)=>
		{
			gsap.to(ele_1, 
			{
				scrollTrigger:
				{
					trigger: ele_1,
					start: "100px bottom",
					end: "100px top",
					toggleActions: "play none none reverse", 
					markers: false
				},
				duration: 0.7,
				opacity: 1,
				rotateX: 0, 
				rotateY: 0
			});
		});

		let reveal_2 = $('.reveal_2');
		reveal_2.each((ind, ele_2)=>
		{
			gsap.to(ele_2,
			{
				scrollTrigger:
				{
					trigger: ele_2,
					start: "100px bottom",
					end: "100px top",
					toggleActions: "play none none reverse", 
					markers: false
				},
				duration: 0.7,
				opacity: 1,
				rotateX: 0, 
				rotateY: 0
			});
		});

        let reveal_right = $('.reveal_right');
		ScrollTrigger.batch(reveal_right,
        {
            start: "100px bottom",
            end: "100px top",
            once: false,
            onEnter: batch => {
                gsap.to(batch, 
                {
                    left: 0,
                    duration: 1,
                    opacity: 1, 
                    stagger: 0.1,
                    ease: "power1.out"
                });
            },
            onLeaveBack: batch => {
                gsap.to(batch, 
                {
                    left: 30,
                    duration: 1,
                    opacity: 0,
                    ease: "power1.out"
                });
            },
        });

        let reveal_left = $('.reveal_left');
        console.log(reveal_left.length);
		ScrollTrigger.batch(reveal_left,
        {
            start: "100px bottom",
            end: "100px top",
            once: false,
            onEnter: batch => {
                gsap.to(batch, 
                {
                    right: 0,
                    duration: 1,
                    opacity: 1, 
                    stagger: 0.1,
                    ease: "power1.out"
                });
            },
            onLeaveBack: batch => {
                gsap.to(batch, 
                {
                    right: 30,
                    duration: 1,
                    opacity: 0,
                    ease: "power1.out",
                });
            },
        });
	}

	/* 

	10. Init Wow

	*/

	function initWow()
	{
		new WOW().init();
	}

	/* 

	11. Init Menu

	*/

	function initMenu()
	{
		const btn = document.querySelector('.menu-button');
		const menu = document.querySelector('.menu');
		const menuItems = document.querySelectorAll('.menu-nav-container ul li a');
		const body = document.querySelector('body');
		
		btn.onclick = function()
		{
			menu.classList.toggle("active");
			body.classList.toggle("no-scroll");
		};

		menuItems.forEach(function(item)
		{
			item.onclick = function()
			{
				menu.classList.toggle("active");
			}
		});
	}

});