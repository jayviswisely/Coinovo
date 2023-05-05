const hamburger = document.querySelector('.nav-hamburger');
const sidebar = document.querySelector('.nav-sidebar');
const closer = document.querySelector('.fa-x');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle("active");
})

closer.addEventListener('click', () => {
    sidebar.classList.remove('active');
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>
{
    sidebar.classList.remove("active");
}
)
)