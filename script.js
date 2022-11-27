//Mouse Circle
const mouseCircle = document.querySelector('.mouse-circle')
const mouseDot = document.querySelector('.mouse-dot')

const mouseCirclefn = (x, y) => {
    mouseCircle.style.cssText = `top:${y}px;left:${x}px; opacity:1`;
    mouseDot.style.cssText = `top:${y}px;left:${x}px; opacity:1`;
};
//End of Mouse Circle

//Animated Circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");

let mX = 0;
let mY = 0;
const z = 100;
//Animated Circles
const animateCircles = (e, x, y) => {
    if (x < mX) {
        circles.forEach((circle) => {
            circle.style.left = `${z}px`;
        });
        mainImg.style.left = `${z}px`;
    } else if (x > mX) {
        circles.forEach((circle) => {
            circle.style.left = `-${z}px`;
        });
        mainImg.style.left = `-${z}px`;
    }

    if (y < mY) {
        circles.forEach((circle) => {
            circle.style.top = `${z}px`;
        });
        mainImg.style.top = `${z}px`;
    } else if (y > mY) {
        circles.forEach((circle) => {
            circle.style.top = `-${z}px`;
        });
        mainImg.style.top = `-${z}px`;
    }

    mX = e.clientX;
    mY = e.clientY;
};
//End of Animated Circles
document.body.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    mouseCirclefn(x, y);
    animateCircles(e, x, y);
})

document.body.addEventListener('mouseleave', () => {
    mouseCircle.style.opacity = '0';
    mouseDot.style.opacity = '0';
})

//Mai Button
const mainBtns = document.querySelectorAll(".main-btn")

mainBtns.forEach(btn => {
    let ripple;
    btn.addEventListener("mouseenter", (e) => {
        const left = e.clientX - e.target.getBoundingClientRect().left;
        console.log(left);
        const top = e.clientY - e.target.getBoundingClientRect().top;
        console.log(top);

        ripple = document.createElement("div")
        ripple.classList.add("ripple");
        ripple.style.left = `${left}px`
        ripple.style.top = `${top}px`
        btn.prepend(ripple);

    })

    btn.addEventListener("mouseleave", () => {
        btn.removeChild(ripple);
    })
})


//End of Main Button

// Navigation
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

const scrollFn = () => {
    menuIcon.classList.add("show-menu-icon");
    navbar.classList.add("hide-navbar");

    if (window.scrollY === 0) {
        menuIcon.classList.remove("show-menu-icon");
        navbar.classList.remove("hide-navbar");
    }

    progressBarFn();
};

document.addEventListener("scroll", scrollFn);

menuIcon.addEventListener("click", () => {
    menuIcon.classList.remove("show-menu-icon");
    navbar.classList.remove("hide-navbar");
});

// End of Navigation





//About me text
const aboutMeText = document.querySelector(".about-me-text")
const aboutMeTextContent = "I am a Software Developer currently working as a Machine Learning Engineer at Saaragh ,a Machine Learning based Startup.I am constantly willing to learn and understand new technologies";
Array.from(aboutMeTextContent).forEach((char) => {

    const span = document.createElement("span");
    span.textContent = char;
    aboutMeText.appendChild(span);

    span.addEventListener("mouseenter", (e) => {
        e.target.style.animation = "aboutMeTextAnim 10s Infinite";
    })

});
//End of About me text
//Projects
const container = document.querySelector(".container");
const projects = document.querySelectorAll(".project");

projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
        project.firstElementChild.style.top = `-${project.firstElementChild.offsetHeight - project.offsetHeight + 20}px`;
    });

    project.addEventListener('mouseleave', () => {

        project.firstElementChild.style.top = "2rem";

    })


    //Github link for projects
    //project.addEventListener('click', () => {
    //window.open("https://www.google.com", "_blank");
    //imgWrapper.className = "project-img-wrapper";
    //container.appendChild(imgWrapper)
    //console.log("clicked"); document.createElement('div');
    //window.open("www.google.com", "_blank");
    // });
})

const project1 = document.querySelector(".proj1");
project1.addEventListener('click', () => {
    window.open("https://github.com/MajorProjectGroup69/Music-Recommendation-System-using-Deep-Learning-for-Therapy");
})

const project2 = document.querySelector(".proj2");
project2.addEventListener('click', () => {
    window.open("https://github.com/AbhayShas3/Ethereum_Ecomm_Website");
})

const project3 = document.querySelector(".proj3");
project3.addEventListener('click', () => {
    window.open("https://github.com/AbhayShas3/Lung-Cancer-Detection");
})

const project4 = document.querySelector(".proj4");
project4.addEventListener('click', () => {
    window.open("https://github.com/AbhayShas3/Food-Devlivery-Website");
})

const project5 = document.querySelector(".proj5");
project5.addEventListener('click', () => {
    window.open("https://github.com/AbhayShas3/C-Editor");
})

const project6 = document.querySelector(".proj6");
project6.addEventListener('click', () => {
    window.open("https://github.com/AbhayShas3/Lexical-Analyzer");
})
//End of github link for projects
//End of Projects

// Section 4
document.querySelectorAll(".service-btn").forEach((service) => {
    service.addEventListener("click", (e) => {
        e.preventDefault();

        const serviceText = service.nextElementSibling;
        serviceText.classList.toggle("change");

        const rightPosition = serviceText.classList.contains("change")
            ? `calc(100% - ${getComputedStyle(service.firstElementChild).width})`
            : 0;

        service.firstElementChild.style.right = rightPosition;
    });
});
// End of Section 4
// Section 5
// Form
const formHeading = document.querySelector('.form-heading');
const formInputs = document.querySelectorAll('.contact-form-input');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {
            formHeading.textContent = `Your ${input.placeholder}`;
            formHeading.style.opacity = "1"
        }, 300);


    })
    input.addEventListener('blur', () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {
            formHeading.textContent = `Let's Talk`;
            formHeading.style.opacity = "1"
        }, 300);


    })
})
// End of Form
// Slideshow
const slideshow = document.querySelector('.slideshow');
setInterval(() => {
    const firstIcon = slideshow.firstElementChild;
    firstIcon.classList.add("faded-out");
    const thirdIcon = slideshow.children[3];
    thirdIcon.classList.add("light");
    thirdIcon.previousElementSibling.classList.remove("light");
    setTimeout(() => {
        slideshow.removeChild(firstIcon);

        slideshow.appendChild(firstIcon);

        setTimeout(() => {

            firstIcon.classList.remove("faded-out");


        }, 500);


    }, 500);

}, 3000)
//End of Sideshow
// Form Validation
const form = document.querySelector('.contact-form');
const username = document.getElementById('name');
const subject = document.getElementById('subject');
const email = document.getElementById('email');
const message = document.getElementById('message');
const messages = document.querySelectorAll(".message");

const error = (input, message) => {
    input.nextElementSibling.classList.add("error");
    input.nextElementSibling.textContent = message;
}

const success = (input) => {
    input.nextElementSibling.classList.remove("error")
}

const checkRequiredFields = (inputArr) => {
    inputArr.forEach(input => {
        if (input.value.trim() === "") {
            error(input, `${input.id} is required`);
        }
    })
};

const checkLength = (input, min) => {
    if (input.value.trim().length < min) {
        error(input, `${input.id} must be atleast ${min} characters long`)
    } else {
        success(input);
    }
}

const checkEmail = (input) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(input.value.trim())) {
        success(input)
    } else {
        error(input, "Email is not valid");
    }


}

form.addEventListener("submit", (e) => {
    //e.preventDefault();
    checkLength(username, 4)
    checkLength(subject, 4)
    checkLength(message, 15)
    checkEmail(email);
    checkRequiredFields([username, email, subject, message]);
    const notValid = Array.from(messages).find((message) => {
        return message.classList.contains("error");
    });
    notValid && e.preventDefault();

})

// End of Form Validation
// End of Section 5