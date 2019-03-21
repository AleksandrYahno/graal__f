window.onload = function () {

    //scroll
    function enableScrolling() {
        window.onscroll = function () {
            let scrolled = window.pageYOffset || document.documentElement.scrollTop,
                hb = document.getElementsByClassName("header-bottom")[0],
                lt = document.getElementsByClassName("logo__text")[0];
            if (scrolled > 96) {
                hb.classList.add("header-bottom--hide");
                lt.classList.add("logo__text--hide");
            } else {
                hb.classList.remove("header-bottom--hide");
                lt.classList.remove("logo__text--hide");
            }
        };
    }

    enableScrolling();

    function disableScrolling() {
        let x = window.scrollX;
        let y = window.scrollY;
        window.onscroll = function () {
            window.scrollTo(x, y);
        };
    }

    //pop up
    let popup = document.getElementById("popUp"),
        popupS = document.getElementById("popUpS"),
        cbbSH = document.getElementById("popUpClose2"),
        popupClose = document.getElementById("popUpClose"),
        cbb = document.getElementById("callbackButton"),
        cbb2 = document.getElementById("callbackButton2"),
        cbb3 = document.getElementById("callbackButton3"),
        cbbS = document.getElementById("callbackButtonS"),
        btnShow = document.getElementById("btnShow"),
        galleryAll = document.getElementsByClassName("gallery__all")[0];

    function showPopUp() {
        popup.classList.add("pop-up--show");
        disableScrolling();
    }

    function hidePopUp() {
        popup.classList.remove("pop-up--show");
        enableScrolling();
    }

    function showPopUpS() {
        popupS.classList.add("pop-up-S--show");
        disableScrolling();
    }

    function hidePopUpS() {
        popupS.classList.remove("pop-up-S--show");
        enableScrolling();
    }

    function galleryShow() {
        btnShow.classList.toggle("button-show--rotate");
        galleryAll.classList.toggle("gallery__all--show");
    }

    cbb.onclick = function () {
        showPopUp();
    };
    cbb2.onclick = function () {
        showPopUp();
    };
    cbb3.onclick = function () {
        showPopUp();
    };
    popupClose.onclick = function () {
        hidePopUp();
    };
    cbbS.onclick = function () {
        showPopUpS();
    };
    cbbSH.onclick = function () {
        hidePopUpS();
    };
    btnShow.onclick = function () {
        galleryShow();
    };


    //mobile menu
    let mobMenu = document.getElementById("menuMobile"),
        bmb = document.getElementById("buttonMenuButton"),
        mobMenuClose = document.getElementById("buttonMenuButtonClose");

    bmb.onclick = function () {
        mobMenu.classList.add("menu-mobile--show");
        disableScrolling();
    };
    mobMenuClose.onclick = function () {
        mobMenu.classList.remove("menu-mobile--show");
        enableScrolling();
    };


    //gallery
    let imgBox = document.getElementsByClassName("img-box");
    for (let i = 0; i < imgBox.length; i++) {

        imgBox[i].onmouseover = imgBox[i].onmouseout = handler;
        function handler() {
            imgBox[i].classList.toggle("img-box--pop");
        }

        imgBox[i].onclick = function () {
            imgBox[i].classList.toggle("img-box--popPage");
            imgBox[i].onmouseover = imgBox[i].onmouseout = false;
            if(imgBox[i].classList === "img-box--popPage") {
                imgBox[i].onmouseover = imgBox[i].onmouseout = false;
            } else {
                imgBox[i].onmouseover = imgBox[i].onmouseout = handler;
            }
        };

    }

};