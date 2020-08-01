const nav = document.querySelector("nav");
const trigger = document.querySelector(".trigger");
const funSection = document.querySelector("#fun");
// const navBar = document.querySelector(".nav-main-primary");
const options = {
    root: null,
    threshold: 0.5,
}

const triggerObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            console.log(nav.classList);
            // console.log(navBar);
            // we list out the nav bars classes so that we can remove the certain classes when scrolling and add another class to the classList
            nav.classList.remove("nav-main-color");
            nav.classList.add("nav-alternate-color");

            const h1 = document.createElement("h1");
            h1.textContent = "Don't OverDue It";

            funSection.append(h1);
            
            trigger.innerHTML = "";            
        }
        else{
            //we are just doing the opposite here and then removing the text everytime we scroll to it
            nav.classList.add("nav-main-color");
            nav.classList.remove("nav-alternate-color");

            const h2 = document.createElement("h1");
            h2.textContent = "Get Ready For React";
            trigger.append(h2);

            funSection.innerHTML = "";
        }
    })
}, options);

triggerObserver.observe(trigger);