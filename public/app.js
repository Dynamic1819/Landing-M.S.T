function openMenu(menus) {
    let menusItems = ['.ddops', '.ddops2', '.ddops3'];
    menusItems = menusItems.filter(item => item !== menus)
    menusItems.forEach((item) => {
        const menuItem = document.querySelector(item);
        if (!menuItem.classList.contains('hidden')) {
            menuItem.classList.add('hidden');
        }
    });

    const menu = document.querySelector(menus);

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}

// Click To The Top
let TopButton = document.getElementById("ToTop");
window.onscroll = function () { scrolls() };

function scrolls() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        TopButton.style.display = "block";
    }
    else {
        TopButton.style.display = "none";
    }
}
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// sidemenu
const menu = document.querySelector('#menu');
const burger = document.querySelector('#burger');
const cross = document.querySelector('#cross');

function showMenu() {
    if (menu.classList.contains('translate-x-52')) {
        menu.classList.remove('translate-x-52');
        menu.classList.add('right-0');
        burger.classList.add('hidden');
        cross.classList.remove('hidden');
    }
    else {
        menu.classList.add('translate-x-52');
        menu.classList.remove('right-0');
        burger.classList.remove('hidden');
        cross.classList.add('hidden');
    }
}


// counting
const displayNum = document.querySelectorAll('.nums');
displayNum.forEach(nums => {
    const updateCounter = () => {
        const target = nums.getAttribute('data-target');
        const c = +nums.innerText;

        const incresing = target / 9000;

        if (c < target) {
            nums.innerText = `${Math.ceil(c + incresing)}`;
            setTimeout(updateCounter, 1);
        }
        else {
            nums.innerText = target;
        }
    };
    updateCounter();
});
