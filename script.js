// Query Selections
const star = document.querySelector(".star");
const list = document.querySelector(".rating-list");
const item = document.querySelectorAll(".rating-item");

// Event Listener
// list.addEventListener("click", function (e) {
//     const clicked = e.target.closest(".rating-item");
//     // console.log(clicked);

//     // Guard Clause
//     if (!clicked) return;

//     // Guard Clause-2
//     if (clicked.classList.contains("active")) clicked.classList.remove("active");

//     // Remove active classes
//     item.forEach((t) => {
//         t.classList.remove("active");
//     });
//     // tabsContent.forEach(t => t.classList.remove("operations__content--active"));

//     // Activate Tab
//     e.target.getAttribute;
// });

item.forEach((t) => {
    t.classList.add("color");
    t.addEventListener("click", function (e) {
        const activeItem = e.target;
        document.querySelector(".active")?.classList.add("color");
        document.querySelector(".active")?.classList.remove("active");
        activeItem.classList.toggle("color");
        activeItem.classList.toggle("active");
    });
});

const activeMessage = document.querySelector(".selection");
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function (e) {
    const num = document.querySelector(".active").getAttribute("data-tab");
    document.querySelector(".section-primary").classList.add("hidden");
    document.querySelector(".section-thank-you").classList.remove("hidden");
    activeMessage.innerHTML = `You selected ${num} out of 5`;
});
