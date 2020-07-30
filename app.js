const nav = document.querySelector("nav");
const trigger = document.querySelector(".trigger");
const funSection = document.querySelector("#fun");


const options = {
    root: null,
    threshold: 0.5,
}

const triggerObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            console.log(entry);
            nav.classList.remove("nav-main-color");
            nav.classList.add("nav-alternate-color");

            const h1 = document.createElement("h1");
            h1.textContent = "Don't OverDue It";

            funSection.append(h1);
           
        }
        else{
            nav.classList.add("nav-main-color");
            nav.classList.remove("nav-alternate-color");

            funSection.innerHTML = "";
        }
    })
}, options);

triggerObserver.observe(trigger);