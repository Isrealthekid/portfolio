'use strict';


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}


//element toggle
const navToggleFunc = function (elem) {
    elem.classList.toggle('active');
}

// sidebar variable

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality 
sidebarBtn.addEventListener("click", function() {
    navToggleFunc(sidebar)
})


// testimonial modal toggle

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");


//modal variables

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelectorAll("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

//modal toggle functionality

const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

// add click event to allmodals item

for (let i = 0; i<testimonialsItem.length; i++ ) {
    testimonialsItem[i].addEventListener("click", function() {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        // modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunc();
    })
}

// add click to close modal

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// //custom select variables
// const select = document.querySelector("[data-select]")
// const selectItems = document.querySelector("[data-select-item]")
// const selectValue = document.querySelector("[data-selected-value]")
// const filterBtn = document.querySelector("[data-filter-btn]");


// select.addEventListener("click", function() {
//     elementToggleFunc(this);
// })

// // for loops

// for(let i=0; i<selectItems.length; i++){
//     selectItems[i].addEventListener("click", function() {
//         let selectedValue = this.innerHTML.toLowerCase();
//         selectValue.innerHTML = this.innerHtml;
//         elementToggleFunc(select)
//         filterFunc(selectedValue)
//     })
// }

// // filter variable

// const filterItems = document.querySelectioAll("[data-filter-item]");

// const filterFunc = function(selectedValue){
//     for(let i = 0; i < selectedValue.length; i++) {
//         if(selectedValue === "all"){
//             filterItems[i].classList.add("active")
//         }else if (selectedValue === filterItems[i].dataset.category){
//             filterItems[i].classList.add("active")
//         }else{
//             filterItems[i].classList.remove("active")
//         }
//     }
// }

// //add event in all filter

// let lastClickedBtn = filterBtn[0];

// for(let i = 0; i < filterBtn.length; i++){
//     filterBtn[i].addEventListener("click", function() {
//         let selectedValue = this.innerText.toLowerCase();
//         selectedValue.innerText=this.innerText;

//         filterFunc(selectedValue);

//         lastClickedBtn.classList.remove("active");
//         this.classList.add('active')
//         lastClickedBtn = this;
//     })
// }










// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selected-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

// Toggle dropdown menu
select.addEventListener("click", function() {
    elementToggleFunc(this);
});

// Function to toggle the active class
function elementToggleFunc(element) {
    element.classList.toggle("active");
}

// Function to filter the items based on the selected value
const filterFunc = function(selectedValue) {
    filterItems.forEach(item => {
        if (selectedValue === "all" || selectedValue === item.dataset.category.toLowerCase()) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
};

// Add event listener for dropdown items
selectItems.forEach(item => {
    item.addEventListener("click", function() {
        let selectedValue = this.innerHTML.toLowerCase();
        selectValue.innerHTML = this.innerHTML; // Display the selected value in the select box
        elementToggleFunc(select); // Close the dropdown after selecting
        filterFunc(selectedValue); // Filter the items based on selection
    });
});

// Add event listener for filter buttons
filterBtns.forEach(button => {
    button.addEventListener("click", function() {
        let selectedValue = this.innerHTML.toLowerCase();
        filterFunc(selectedValue); // Filter the items based on the clicked button

        // Remove the active class from the previous button and add to the current button
        filterBtns.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});
