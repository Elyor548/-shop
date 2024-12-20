const menuIcon = document.querySelector(".menu"); // Фото-кнопка
const mobileMenu = document.getElementById("mobileMenu"); // Выпадающее меню

// Событие клика для открытия и закрытия
menuIcon.addEventListener("click", (event) => {
  event.stopPropagation(); // Прекращаем всплытие события, чтобы не срабатывало событие на "других местах"
  mobileMenu.classList.toggle("menu-active"); // Добавляем/удаляем класс
});

// Закрытие меню при клике на любую область вне меню
document.addEventListener("click", (event) => {
  // Проверка, был ли клик вне меню и кнопки меню
  if (!mobileMenu.contains(event.target) && !menuIcon.contains(event.target)) {
    mobileMenu.classList.remove("menu-active"); // Закрываем меню
  }
});

// Закрытие меню при клике на кнопки внутри меню (если нужно)
mobileMenu.addEventListener("click", (event) => {
  // Если клик был по ссылке или элементу внутри меню, меню не должно закрываться
  if (event.target.tagName === "A" || event.target.tagName === "BUTTON") {
    event.stopPropagation(); // Останавливаем событие, чтобы меню не закрывалось
  }
});
