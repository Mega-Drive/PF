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
	initHamburgerButton();
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

		set_stagger('.stagger_stats');
		set_stagger('.stagger_team');

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