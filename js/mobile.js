(() => {
    const refs = {
        openMobileMenu: document.querySelector("[open-mobile-menu]"),
        closeMobileMenu: document.querySelector("[close-mobile-menu]"),
        mobileMenu: document.querySelector("[mobile-menu]"),
    };

    refs.openMobileMenu.addEventListener("click", toggleMobile);
    refs.closeMobileMenu.addEventListener("click", toggleMobile);

    function toggleMobile() {
        refs.mobileMenu.classList.toggle("is-hidden--mobile");
    }
})();