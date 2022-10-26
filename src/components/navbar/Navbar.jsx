import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListIcon from "@mui/icons-material/List";
import Badge from "@mui/material/Badge";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/feature/themeSlice";
import { lang } from "./lang";
import { closeLang, toggleLang } from "../../store/feature/langSlice";
import { Link } from "react-router-dom";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Navbar() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { langToggle } = useSelector((state) => state.lang);
  const [toggleMenu, setToggleMenu] = useState(false);

  const changeLang = () => {
    dispatch(toggleLang());
  };

  let langRef = useRef();

  useEffect(() => {
    let closeLangu = (e) => {
      if (!langRef.current.contains(e.target)) {
        dispatch(closeLang());
      }
    };

    document.addEventListener("mousedown", closeLangu);

    return () => {
      document.removeEventListener("mousedown", closeLangu);
    };
  });

  return (
    <div className="navbar">
      <div className="wrapper">
        <Link to={"/"} className="menuLink" style={{ textDecoration: "none" }}>
          <h1 className="dashboard">Dashboard</h1>
        </Link>
        <div className="search">
          <input type="text" placeholder="Search..." />

          <SearchIcon />
        </div>
        <div className="items">
          <div className="item langu" ref={langRef} onClick={changeLang}>
            <LanguageIcon className="icon" />
            English
            {langToggle && (
              <div className="lang">
                {lang.map((l) => (
                  <div className="langSelection" key={l}>
                    {l}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="item"
            onClick={async () => {
              dispatch(toggleTheme(theme));
            }}
          >
            {theme ? (
              <WbSunnyIcon className="icon" />
            ) : (
              <DarkModeIcon className="icon" />
            )}
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <Badge color="error" badgeContent={2}>
              <NotificationsIcon className="icon" />
            </Badge>
          </div>
          <div className="item">
            <Badge color="error" badgeContent={2}>
              <ChatBubbleOutlineIcon className="icon" />
            </Badge>
          </div>
          <div className="item">
            <ListIcon className="icon" />
          </div>
          <img
            src="https://images.pexels.com/photos/14030389/pexels-photo-14030389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="avatar"
            className="avatar"
          />
        </div>
        <div className="menu">
          <img
            src="https://images.pexels.com/photos/14030389/pexels-photo-14030389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="avatar"
            className="menuavatar"
          />
          {toggleMenu ? (
            <MoreHorizIcon onClick={() => setToggleMenu(!toggleMenu)} />
          ) : (
            <MoreVertIcon onClick={() => setToggleMenu(!toggleMenu)} />
          )}
          {toggleMenu && (
            <>
              <div className="menu_div">
                <div className="item langu" ref={langRef} onClick={changeLang}>
                  <LanguageIcon className="icon" />

                  {langToggle && (
                    <div className="lang">
                      {lang.map((l) => (
                        <div className="langSelection" key={l}>
                          {l}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div
                  className="item"
                  onClick={async () => {
                    dispatch(toggleTheme(theme));
                  }}
                >
                  {theme ? (
                    <WbSunnyIcon className="icon" />
                  ) : (
                    <DarkModeIcon className="icon" />
                  )}
                </div>
                <div className="item">
                  <FullscreenExitIcon className="icon" />
                </div>
                <div className="item">
                  <Badge color="error" badgeContent={2}>
                    <NotificationsIcon className="icon" />
                  </Badge>
                </div>
                <div className="item">
                  <Badge color="error" badgeContent={2}>
                    <ChatBubbleOutlineIcon className="icon" />
                  </Badge>
                </div>
                <div className="item">
                  <ListIcon className="icon" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
