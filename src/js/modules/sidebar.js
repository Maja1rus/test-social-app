export function sidebarShow(sidebar) {
    const sidebarBtn = document.querySelector('.sidebar__btn');
    const sidebarIcon = document.querySelector('.sidebar__icon');
    sidebarBtn.addEventListener('click', sidebarShowHandler);

    function sidebarShowHandler() {
        sidebarIcon.classList.toggle('active');
        sidebar.classList.toggle('active');
    }
}