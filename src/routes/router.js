import PAGES from "./pageModel.js";
import {
  HOME_PAGE,
  ABOUT_PAGE,
  CREATE_PIC_PAGE,
  ERROR404_PAGE,
  SIGNUP_PAGE,
  LOGIN_PAGE,
} from "../services/domService.js";

export const onChangePage = (page) => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  CREATE_PIC_PAGE.className = "d-none";
  SIGNUP_PAGE.className = "d-none";
  LOGIN_PAGE.className = "d-none";
  ERROR404_PAGE.className = "d-none";

  if (page === PAGES.HOME) return (HOME_PAGE.className = "d-block");
  if (page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block");
  if (page === PAGES.CREATE_PIC) return (CREATE_PIC_PAGE.className = "d-block");
  if (page === PAGES.SIGNUP) return (SIGNUP_PAGE.className = "d-block");
  if (page === PAGES.LOGIN) return (LOGIN_PAGE.className = "d-block");
  ERROR404_PAGE.className = "d-block";
};
export const setNavDisplay = () => {
  ADD_PIC_LINK_CONTAINER.className = "d-none";
  const token = getItemFromLocalStorage("user");
  if (!token) {
    LOGIN_LINK_CONTAINER.className = "navbar-nav";
    LOGOUT_LINK_CONTAINER.className = "d-none";
    return;
  }
  LOGIN_LINK_CONTAINER.className = "d-none";
  LOGOUT_LINK_CONTAINER.className = "navbar-nav";

  const user = JSON.parse(token);

  if (user.isBusiness) return (ADD_PIC_LINK_CONTAINER.className = "nav-item");
};
export const onChangeDisplayMode = (display, pictures = []) => {
  NO_DATA_CONTAINER.className = "d-none";
  DATA_CONTAINER.className = "d-none";
  SLIDER_CONTAINER.className = "d-none";
  TABLE_CONTAINER.className = "d-none";
  CARDS_CONTAINER.className = "d-none";
  SEARCHBAR_CONTAINER.className = "d-none";

  if (!pictures.length) {
    SEARCHBAR_CONTAINER.className = "d-block";
    NO_DATA_CONTAINER.className = "d-block";
    return;
  }
  DATA_CONTAINER.className = "d-block";
  if (display === DISPLAY.SLIDER)
    return (SLIDER_CONTAINER.className = "d-block");
  if (display === DISPLAY.TABLE) {
    SEARCHBAR_CONTAINER.className = "d-block";
    TABLE_CONTAINER.className = "d-block";
    return;
  }
  if (display === DISPLAY.CARDS) return (CARDS_CONTAINER.className = "d-block");
};
