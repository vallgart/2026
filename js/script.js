document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item   = q.closest('.faq-item');
      const active = item.classList.contains('active-state');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active-state'));
      if (!active) item.classList.add('active-state');
    });
  });
});



const burgerBtn = document.querySelector(".toggle-mobile");
const mobileMenu = document.querySelector(".mobile-menu");

// Открываем меню
burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// Закрываем меню по клику на ссылку
document.querySelectorAll(".nav-mobile a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});




document.querySelectorAll(".rules-open").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        openPopup();
    });
});


const popup = document.getElementById("popup");
const popupClose = document.getElementById("popupClose");

// открыть окно
function openPopup() {
    popup.classList.add("active");
    document.body.style.overflow = "hidden"; // блокируем скролл
}

// закрыть окно
function closePopup() {
    popup.classList.remove("active");
    document.body.style.overflow = ""; 
}

popupClose.addEventListener("click", closePopup);

// если нужно закрывать по клику вне окна:
popup.addEventListener("click", (e) => {
    if (e.target === popup) closePopup();
});
