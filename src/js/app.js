import { sidebarShow } from "./modules/sidebar.js";


try {
    const chatSidebar = document.querySelector('.chat__sidebar');
    if (chatSidebar) {
        sidebarShow(chatSidebar)
    }
} catch (error) {
    console.log(error);
}