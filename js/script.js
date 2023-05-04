// СКРОЛЛ ШАПКИ //
const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const headerHeight = header.offsetHeight;
const introHeight = intro.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
    //скролл вниз
	if (scrollDistance >= introHeight + headerHeight) {
		header.classList.add('header_fixed');
		intro.style.marginTop = `${headerHeight}px`;
	} else {
		header.classList.remove('header_fixed');
		intro.style.marginTop = null;
	}

    // скролл вверх
	// if (scrollDistance > lastScrollTop) {
	// 	header.classList.remove('header_fixed');
	// 	intro.style.marginTop = null;
	// } else {
	// 	header.classList.add('header_fixed');
	// 	intro.style.marginTop = `${headerHeight}px`;
	// }

	if (scrollDistance === 0) {
		header.classList.remove('header_fixed');
		intro.style.marginTop = null;
	}

	lastScrollTop = scrollDistance;
});


// МОДАЛЬНОЕ ОКНО - "Связаться" (открываем через кнопку в header) //
const popupContact = document.querySelector(".popup");
const navContactButton = document.querySelector("header button");
const popupContactCloseButton = document.querySelector("#popup__close-button");
// Функция открытия модального окна
function openPopupContact(popupContact) {
    popupContact.classList.add("popup_opened");
}
// Функция закрытия модального окна
function closePopupContact(popupContact) {
    popupContact.classList.remove("popup_opened");
}
// кнопка, по которой открывается popup
navContactButton.addEventListener("click", () => {
    openContactForm();
});
// открытие формы Contact
function openContactForm() {
    openPopupContact(popupContact);
}
// закрытие формы Contact по кнопке закрытия
popupContactCloseButton.addEventListener("click", () =>
    closePopupContact(popupContact)
);


// МОДАЛЬНОЕ ОКНО - Burger-menu //
const popupBurgerMenu = document.querySelector(".popup-burger-menu");
const openBurgerMenuButton = document.querySelector("#hamb");
const closeBurgerMenuButton = document.querySelector("#burger-menu__close-btn");
// Функция открытия модального окна
function openBurgerMenu(popupBurgerMenu) {
    popupBurgerMenu.classList.add("popup_opened");
}
// Функция закрытия модального окна
function closeBurgerMenu(popupBurgerMenu) {
    popupBurgerMenu.classList.remove("popup_opened");
}
// кнопки, по которым открывается popup
openBurgerMenuButton.addEventListener("click", () => {
    openBurgerMenuForm();
});
// открытие формы Burger-menu
function openBurgerMenuForm() {
    openBurgerMenu(popupBurgerMenu);
}
// закрытие формы Burger-menu по кнопке закрытия
closeBurgerMenuButton.addEventListener("click", () =>
    closeBurgerMenu(popupBurgerMenu)
);

// МОДАЛЬНОЕ ОКНО - "Связаться" (открываем через кнопку в burger-menu) //
const popupContactMob = document.querySelector(".popup");
const navContactMobButton = document.querySelector("#burger-menu-contact-btn");
const popupContactMobCloseButton = document.querySelector("#popup__close-button");
// Функция открытия модального окна
function openPopupContactMob(popupContactMob) {
    popupContactMob.classList.add("popup_opened");
}
// Функция закрытия модального окна
function closePopupContactMob(popupContactMob) {
    popupContactMob.classList.remove("popup_opened");
}
// кнопка, по которой открывается popup
navContactMobButton.addEventListener("click", () => {
    openContactForm();
    closeBurgerMenu(popupBurgerMenu);
});
// открытие формы Contact
function openContactForm() {
    openPopupContactMob(popupContactMob);
}
// закрытие формы Contact по кнопке закрытия
popupContactMobCloseButton.addEventListener("click", () =>
    closePopupContactMob(popupContactMob)
);


// МОДАЛЬНОЕ ОКНО - "Оставить/Заполнить заявку" (Apply) //
const popupApply = document.querySelector(".popup-apply");
const navApplyButton1 = document.querySelector(".intro button");
const navApplyButton2 = document.querySelector(".request button");
const popupApplyCloseButton = document.querySelector(".popup-apply .popup-apply__close-button");
// Функция открытия модального окна
function openPopupApply(popupApply) {
    popupApply.classList.add("popup_opened");
}
// Функция закрытия модального окна
function closePopupApply(popupApply) {
    popupApply.classList.remove("popup_opened");
}
// кнопки, по которым открывается popup
navApplyButton1.addEventListener("click", () => {
  openApplyForm();
});
navApplyButton2.addEventListener("click", () => {
    openApplyForm();
  });
// открытие формы Apply
function openApplyForm() {
    openPopupApply(popupApply);
}
// закрытие формы Apply по кнопке закрытия
popupApplyCloseButton.addEventListener("click", () =>
    closePopupApply(popupApply)
);


// ВАЛИДАЦИЯ ФОРМ input //
const button = document.getElementById(".subscribe button");

// Определяем функции для отображения сообщения об ошибке
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Определяем функции для проверки формы
function validateForm() {
    // Получение значений элементов формы
    var name = document.contactForm.name.value;
    var mobile = document.contactForm.mobile.value;

    // Определяем переменные ошибок со значением по умолчанию
    var nameErr = true;
    var mobileErr = true;
    
    // Проверяем имя
    if(name == "") {
        printError("nameErr", "Пожалуйста, введите ваше имя");
    } else {
        var regex = /^[А-Яа-яЁё\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Пожалуйста, введите имя в правильном формате");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
        
    // Проверяем номер мобильного телефона
    if(mobile == "") {
        printError("mobileErr", "Пожалуйста, введите номер вашего телефона");
    } else {
        var regex = /[+]7\s\d{3}\s\d{3}\s\d{2}\s\d{2}/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Введите номер в формате +7 ХХХ ХХХ ХХ ХХ");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    // Запрещаем отправку формы в случае ошибок/очищаем поля
    if((nameErr || mobileErr) == true) {
        return false;
    } else {
        document.getElementById('form').reset();
    }
};


// SLIDER - Portfolio Mobile //
const slidesContainer = document.getElementById("slider-row");
const slide = document.querySelector(".preview");
const prevButton = document.getElementById("icon-prev");
const nextButton = document.getElementById("icon-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

// SLIDER - Clients Desktop + Mobile//
const slidesContainerClients = document.getElementById("slider-row-clients");
const slideClients = document.querySelector(".client");
const prevButtonClients = document.getElementById("icon-prev-clients");
const nextButtonClients = document.getElementById("icon-next-clients");

nextButtonClients.addEventListener("click", () => {
  const slideWidth = slideClients.clientWidth;
  slidesContainerClients.scrollLeft += slideWidth;
});

prevButtonClients.addEventListener("click", () => {
  const slideWidth = slideClients.clientWidth;
  slidesContainerClients.scrollLeft -= slideWidth;
});