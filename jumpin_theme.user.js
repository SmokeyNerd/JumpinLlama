// ==UserScript==
// @name         JumpinLlama : 2019 Theme
// @namespace    http://www.smokeyllama.com
// @version      2019.26
// @description  Editing Overall Theme of JumpIn. Install and refresh.
// @author       SmokeyLlama
// @match        https://jumpin.chat/*
// @exclude      https://jumpin.chat/
// @exclude      https://jumpin.chat/directory
// @exclude      https://jumpin.chat/support*
// @exclude      https://jumpin.chat/contact
// @exclude      https://jumpin.chat/privacy
// @exclude      https://jumpin.chat/terms
// @exclude      https://jumpin.chat/help*
// @exclude      https://jumpin.chat/profile*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @run-at       document-start
// @license      MIT
// @updateURL    https://anceldesigns.000webhostapp.com/scripts/JumpLlama_Dark_Room.user.js
// @require      http://www.smokeyllama.com/scripts/jscolor.js


// ==/UserScript==

/** Table of Nonsense:
 * ------------------------------------------------------------------------
 * - Ello fellow coder!
 * - I have attempted to layout this userscript to where it would be easy to browse/edit.
 * - Easily find sections by searching for them. (CTRL+F)

 * CSS Sections
 * ------------------------------------------------------------------------
 * MAIN_CHAT
 * MAIN_USERS_LIST
 * MAIN_MESSAGES
 * CHANGE_NICKNAME
 *
 * LLAMA_MENU
 * PINK_LLAMA_MENU
 * GREEN_LLAMA_MENU
 * BLUE_LLAMA_MENU
 * MAUVE_LLAMA_MENU
 * ORANGE_LLAMA_MENU
 * RED_LLAMA_MENU
 * PURPLE_LLAMA_MENU
 * BUDS_LLAMA_MENU
 * BLACK_LLAMA_MENU
 *
 * MINI_YT
 * NO_CAM_BORDERS
 * NO_CAM_SPACING
 * CUSTOM_CHECKBOXES
 *
 * THEME_VARIABLES
 * PINK_THEME
 * GREEN_THEME
 * BLUE_THEME
 * MAUVE_THEME
 * ORANGE_THEME
 * RED_THEME
 * PURPLE_THEME
 * BUDS_THEME
 * BLACK_THEME
 *
 * CHAT_HIDER
 * LLAMA_NOTICE
 * CUSTOM_CHECKBOXES


 * Function Sections
 * ------------------------------------------------------------------------
 * SHOW_HIDE_LLAMA_MENU
 * HIDE_NOTICE
 *
 * CUSTOM_MODE
 * CUSTOM_MODE_TOGGLE
 * CUSTOM_MODE_SAVE
 * CUSTOM_MODE_PREVIEW
 *
 * CAM_BG_TOGGLE
 * SAVE_CAM_BG
 *
 * THEME_SELECTOR_TOGGLE
 * BUBBLE_CHAT_TOGGLE
 * CHAT_TOGGLE
 * USER_LIST_TOGGLE
 * LTR_TOGGLE
 * REMOVE_CAM_BORDERS
 * REMOVE_CAM_PADDING
 * TOGGLE_MINI_YT
 *
 * REAPPLY_THEME_CHOICE
 * THEME_TOGGLE_DEFAULT
 *
 * REAPPLY_THEME_CHOICE
 * THEME_TOGGLE_PINK
 * THEME_TOGGLE_GREEN
 * THEME_TOGGLE_BLUE
 * THEME_TOGGLE_MAUVE
 * THEME_TOGGLE_ORANGE
 * THEME_TOGGLE_RED
 * THEME_TOGGLE_PURPLE
 * THEME_TOGGLE_BUDS
 * THEME_TOGGLE_BLACK
 *
 *
*/


function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle( `

/*----- THEME_VARIABLES ---------------------------*/
.custommode .chat__FeedWrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: var(--custommode-bgcolor);
    touch-action: none;
}
:root {

    --user-bg-image: none;
    --custommode-bgcolor: #004D91;
    --custommode-lightbgcolor: #CFCFCF;
    --custommode-bordercolor: #FFFFFF;
    --custommode-textcolor: #000000;

    --blackmode-bgcolor: #191919;
    --blackmode-bordercolor: #313131;
    --blackmode-lightbgcolor: #2C2F33;
    --blackmode-textcolor: #fff;

    --textcolor: black;
    --bgcolor: white;
    --nightmode-bgcolor: #2d373a;
    --nightmode-trimcolor: #3c4a4e;
    --nightmode-textcolor: #9faaad;
    --nightmode-textSecondarycolor: #4e5f65;
    --nightmode-headerButtonscolor: #3986a7;
    --nightmodeBlack-bgcolor: black;
    --nightmodeBlack-trimcolor: #222;

    --pinkmode-bgcolor: #ffd1dc;
    --pinkmode-bordercolor: #ea98ab;
    --pinkmode-lightbgcolor: #ffe1e6;
    --pinkmode-textcolor: #aa8991;

    --greenmode-bgcolor: #042500;
    --greenmode-bordercolor: #217c16;
    --greenmode-lightbgcolor: #00500d;
    --greenmode-textcolor: #fff;

    --bluemode-bgcolor: #111949;
    --bluemode-bordercolor: #596ce0;
    --bluemode-lightbgcolor: #2a388b;
    --bluemode-textcolor: #fff;

    --mauvemode-bgcolor: #9168b2;
    --mauvemode-bordercolor: #d6b7ef;
    --mauvemode-lightbgcolor: #BF8FE5;
    --mauvemode-textcolor: #000000;

    --orangemode-bgcolor: #b33700;
    --orangemode-bordercolor: #ff8d10;
    --orangemode-lightbgcolor: #ff4f00;
    --orangemode-textcolor: #000000;

    --redmode-bgcolor: #590000;
    --redmode-bordercolor: #d02323;
    --redmode-lightbgcolor: #860000;
    --redmode-textcolor: #fff;

    --purplemode-bgcolor: #280048;
    --purplemode-bordercolor: #b14fff;
    --purplemode-lightbgcolor: #550098;
    --purplemode-textcolor: #fff;

    --budsmode-bgcolor: #000000;
    --budsmode-bordercolor: #005900;
    --budsmode-lightbgcolor: #000000;
    --budsmode-textcolor: #fff;
    --budsmode-headerbg: url(https://i.ibb.co/jDC8w3C/weed-wallpaper-1920x1080.jpg);
    --budsmode-roombg: url(https://i.ibb.co/5YKLsSK/wp2565886.jpg);
    --budsmode-userbg: url(https://i.ibb.co/5YKLsSK/wp2565886.jpg);
    --budsmode-chatbg: url(https://i.ibb.co/5YKLsSK/wp2565886.jpg);
    --budsmode-ptt: url(https://i.ibb.co/W2tyNNs/cannabis-PNG17.png);

    --smash-bgcolor: #282828;
    --smash-bordercolor: #3c3c3c;
    --smash-lightbgcolor: #282828;
    --smash-textcolor: #FFFFFF;
    --smash-headerbg: url(https://i.ibb.co/BK1CXz4/smashlogo.jpg);
    --smash-roombg: url(https://i.ibb.co/JxkgSdj/melee-minimal-wallpaper-by-browniehooves-d8lwcvk.png);
    --smash-userbg: url(https://i.ibb.co/nRNHL9C/20444930186-7a639da784-o.png);
    --smash-chatbg: url(https://i.ibb.co/ZSYHQs7/chat.jpg);
    --smash-ptt: url(https://i.ibb.co/7KSTsdj/smash-clipart-87526.png);

    --splat-bgcolor: #282828;
    --splat-bordercolor: #3c3c3c;
    --splat-lightbgcolor: #282828;
    --splat-textcolor: #FFFFFF;
    --splat-headerbg: url(https://i.ibb.co/XsTjVk0/splay-bg-header2.png);
    --splat-roombg: url(https://i.ibb.co/C18JNgK/splatbg.jpg);
    --splat-userbg: url(https://i.ibb.co/7nrB9LT/test.png);
    --splat-chatbg: url(https://i.ibb.co/TrKBZFn/splat-chat-bg3.png);
    --splat-ptt: url(https://i.ibb.co/3dHQVhC/splat-mic2.png);
    --splat-innerchatbg: url(https://i.ibb.co/vBXky7C/splat-chat-bg.png);
    --splat-messagebg: url(https://i.ibb.co/FWFnhc4/messagebg.png);
    --splat-squid: url(https://i.ibb.co/FKNpP6D/squid.png);
    --splat-squid2: url(https://i.ibb.co/KLGF7FH/squid2.png);
    --splat-squid3: url(https://i.ibb.co/Wc9D0Xj/squid3.png);
}

/* ------- BUBBLE CHAT ----- */
.bubble_chat .chat__Message {
    display: block;
    padding-right: 0;
}

.bubble_chat .chat__MessageHandle {
    flex-shrink: 0;
    padding: 0 .5em 0 0;
    cursor: pointer;
    margin-bottom: 5px;
    padding-left: 10px;
    margin: 8px;
    background-color: #2C2F33;
    border-radius: 3px;
    margin: 0px;
    position: relative;
    left: 8px;
    margin-right: 16px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    z-index: 10;
}

.bubble_chat .chat__MessageBody {
    padding-top: 20px;
    position: relative;
    top: -17px;
    margin: 0px;
    margin-bottom: 5px;
    padding-left: 10px;
    margin: 8px;
    color: #000 !important;
    background-color: #cfcfcf;
    border-radius: 3px;
    margin-bottom: 0px;
    margin-top: 0px;
}

.bubble_chat .chat__MessageBody-status {
    color: #fff;
    background-color: #22add5;
    bordeR: 1px solid #22add5;
    margin-top: 17px;
    min-height: 18px;
}

.bubble_chat .chat__MessageTimestamp {
    position: relative;
    top: -17px;
    left: -13px;
    float: right;
    color: #626262;
    cursor: default;
}

.bubble_chat .chat__MessageHandle:after {
    display:none;}


/* ------------------ MAIN_CHAT ------------------ */

.chat__FeedWrapper {border-left: 1px solid #313131;}

/* ------------------ MAIN_USERS_LIST ------------------ */

.layout--horizontal .chat__UserList {
    border-left-color: #313131;
}
.chat__UserListItem+.chat__UserListItem {
    border-radius: 5px;
    margin-top: 5px;
}

/* ------------------ MAIN_MESSAGES ------------------ */

.chat__Message {
    padding-right: 0;}

.chat__MessageBody-status {
    color: #fff;
    background-color: #22add5;
    min-height: 18px;}

.chat__MessageBody-link {
    color:#ff0000;}

.chat__Message:hover .chat__MessageTimestamp {color:#7289DA;}


/* ------------------ CHANGE_NICKNAME ------------------ */

.dark .modal__Body, .dark .modal__Footer {
    border-top: 0px;}

.dark .modal__Header {
    border: 1px solid #7289DA;
    border-bottom: 0px;}

div.modal__Body > form > input {
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;}

/* ------------------ CAMERA_WATERMARK ------------------ */
.cams__CamWatermark {display:none;}
.cams__RoomDisplayPic {border-radius: 100px;}


/* ------------------------------ LLAMA_MENU ----------------------------------- */
.llama_menu .feature_menu {
    color:#000;
    display:block;
    height: 240px;}

.llama_menu #toggle_menu {
    width:unset;}

#Extra_Menu {
    color:#000;
    top:13px;
    left: 180px;
    position: absolute;cursor:pointer;z-index: 2000;}

#toggle_menu {
    border:1px solid #22add5;
    color:#000;
    background-color:#fff;
    padding: 3px;
    border-radius: 100px;
    width: 20px;
    height:20px;
}

.feature_menu {
    color:#000;
    display:none;
    background-color: #fff;
    border-radius: 12px;
    border: 1px solid #22add5;
    padding: 10px;
    -webkit-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    -moz-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);}

.menu_header {
    color:#000;
    text-align: center;
    background-color: #22add5;
    color:#fff;
    padding: 0px 40px;
    border-radius: 10px;
    display:block;}

.menu_section {
    color:#000;
    float:left;}

.settings_header {
    display:none;}

.llama_menu .settings_header {
    color:#000;
    position: relative;
    display: unset;
    top: -5px;
    left: 5px;}
/* ------------------------------ PINK_LLAMA_MENU ----------------------------------- */
.pinkmode .llama_menu .feature_menu {
    color: var(--pinkmode-textcolor);}

.pinkmode #Extra_Menu {
    color: var(--pinkmode-textcolor);}

.pinkmode #toggle_menu {
    color: var(--pinkmode-textcolor);
    background-color: var(--pinkmode-bgcolor);
    border-color: var(--pinkmode-bordercolor);
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 0 3px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 3px;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 3px;}

.pinkmode .feature_menu {
    color: var(--pinkmode-textcolor);
    background-color: var(--pinkmode-bgcolor);
    border-color: var(--pinkmode-bordercolor);
    -webkit-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    -moz-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);}

.pinkmode .menu_header {
    background-color:  var(--pinkmode-lightbgcolor);
    color: var(--pinkmode-textcolor);}

.pinkmode .menu_section {
    color: var(--pinkmode-textcolor);}

.pinkmode .settings_header {
    color: var(--pinkmode-textcolor);}
/* ------------------------------ GREEN_LLAMA_MENU ----------------------------------- */
.greenmode .llama_menu .feature_menu {
    color: var(--greenmode-textcolor);}

.greenmode #Extra_Menu {
    color: var(--greenmode-textcolor);}

.greenmode #toggle_menu {
    color: var(--greenmode-textcolor);
    background-color: var(--greenmode-bgcolor);
    border-color: var(--greenmode-bordercolor);
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 0 3px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 3px;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 3px;}

.greenmode .feature_menu {
    color: var(--greenmode-textcolor);
    background-color: var(--greenmode-bgcolor);
    border-color: var(--greenmode-bordercolor);
    -webkit-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    -moz-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);}

.greenmode .menu_header {
    background-color:  var(--greenmode-lightbgcolor);
    color: var(--greenmode-textcolor);}

.greenmode .menu_section {
    color: var(--greenmode-textcolor);}

.greenmode .settings_header {
    color: var(--greenmode-textcolor);}
/* ------------------------------ BLUE_LLAMA_MENU ----------------------------------- */
.bluemode .llama_menu .feature_menu {
    color: var(--bluemode-textcolor);}

.bluemode #Extra_Menu {
    color: var(--bluemode-textcolor);}

.bluemode #toggle_menu {
    color: var(--bluemode-textcolor);
    background-color: var(--bluemode-bgcolor);
    border-color: var(--bluemode-bordercolor);
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 0 3px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 3px;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 3px;}

.bluemode .feature_menu {
    color: var(--bluemode-textcolor);
    background-color: var(--bluemode-bgcolor);
    border-color: var(--bluemode-bordercolor);
    -webkit-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    -moz-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);}

.bluemode .menu_header {
    background-color:  var(--bluemode-lightbgcolor);
    color: var(--bluemode-textcolor);}

.bluemode .menu_section {
    color: var(--bluemode-textcolor);}

.bluemode .settings_header {
    color: var(--bluemode-textcolor);}
/* ------------------------------ MAUVE_LLAMA_MENU ----------------------------------- */
.mauvemode .llama_menu .feature_menu {
    color: var(--mauvemode-textcolor);}

.mauvemode #Extra_Menu {
    color: var(--mauvemode-textcolor);}

.mauvemode #toggle_menu {
    color: var(--mauvemode-textcolor);
    background-color: var(--mauvemode-bgcolor);
    border-color: var(--mauvemode-bordercolor);
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 0 3px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 3px;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 3px;}

.mauvemode .feature_menu {
    color: var(--mauvemode-textcolor);
    background-color: var(--mauvemode-bgcolor);
    border-color: var(--mauvemode-bordercolor);
    -webkit-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    -moz-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);}

.mauvemode .menu_header {
    background-color:  var(--mauvemode-lightbgcolor);
    color: var(--mauvemode-textcolor);}

.mauvemode .menu_section {
    color: var(--mauvemode-textcolor);}

.mauvemode .settings_header {
    color: var(--mauvemode-textcolor);}
/* ------------------------------ ORANGE_LLAMA_MENU ----------------------------------- */
.orangemode .llama_menu .feature_menu {
    color: var(--orangemode-textcolor);}

.orangemode #Extra_Menu {
    color: var(--orangemode-textcolor);}

.orangemode #toggle_menu {
    color: var(--orangemode-textcolor);
    background-color: var(--orangemode-bgcolor);
    border-color: var(--orangemode-bordercolor);
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 0 3px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 3px;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 3px;}

.orangemode .feature_menu {
    color: var(--orangemode-textcolor);
    background-color: var(--orangemode-bgcolor);
    border-color: var(--orangemode-bordercolor);
    -webkit-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    -moz-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);}

.orangemode .menu_header {
    background-color:  var(--orangemode-lightbgcolor);
    color: var(--orangemode-textcolor);}

.orangemode .menu_section {
    color: var(--orangemode-textcolor);}

.orangemode .settings_header {
    color: var(--orangemode-textcolor);}
/* ------------------------------ RED_LLAMA_MENU ----------------------------------- */
.redmode .llama_menu .feature_menu {
    color: var(--redmode-textcolor);}

.redmode #Extra_Menu {
    color: var(--redmode-textcolor);}

.redmode #toggle_menu {
    color: var(--redmode-textcolor);
    background-color: var(--redmode-bgcolor);
    border-color: var(--redmode-bordercolor);
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 0 3px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 3px;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 3px;}

.redmode .feature_menu {
    color: var(--redmode-textcolor);
    background-color: var(--redmode-bgcolor);
    border-color: var(--redmode-bordercolor);
    -webkit-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    -moz-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);}

.redmode .menu_header {
    background-color:  var(--redmode-lightbgcolor);
    color: var(--redmode-textcolor);}

.redmode .menu_section {
    color: var(--redmode-textcolor);}

.redmode .settings_header {
    color: var(--redmode-textcolor);}
/* ------------------------------ PURPLE_LLAMA_MENU ----------------------------------- */
.purplemode .llama_menu .feature_menu {
    color: var(--purplemode-textcolor);}

.purplemode #Extra_Menu {
    color: var(--purplemode-textcolor);}

.purplemode #toggle_menu {
    color: var(--purplemode-textcolor);
    background-color: var(--purplemode-bgcolor);
    border-color: var(--purplemode-bordercolor);
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 0 3px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 3px;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 3px;}

.purplemode .feature_menu {
    color: var(--purplemode-textcolor);
    background-color: var(--purplemode-bgcolor);
    border-color: var(--purplemode-bordercolor);
    -webkit-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    -moz-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);}

.purplemode .menu_header {
    background-color:  var(--purplemode-lightbgcolor);
    color: var(--purplemode-textcolor);}

.purplemode .menu_section {
    color: var(--purplemode-textcolor);}

.purplemode .settings_header {
    color: var(--purplemode-textcolor);}
/* ------------------------------ BUDS_LLAMA_MENU ----------------------------------- */
.budsmode .llama_menu .feature_menu {
    color: var(--blackmode-textcolor);}

.budsmode #Extra_Menu {
    color: var(--blackmode-textcolor);}

.budsmode #toggle_menu {
    color: var(--blackmode-textcolor);
    background-color: var(--blackmode-bgcolor);
    border-color: var(--blackmode-bordercolor);
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 0 3px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 3px;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 3px;}

.budsmode .feature_menu {
    color: var(--blackmode-textcolor);
    background-color: var(--blackmode-bgcolor);
    border-color: var(--blackmode-bordercolor);
    -webkit-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    -moz-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);}

.budsmode .menu_header {
    background-color:  var(--blackmode-lightbgcolor);
    color: var(--blackmode-textcolor);}

.budsmode .menu_section {
    color: var(--blackmode-textcolor);}

.budsmode .settings_header {
    color: var(--blackmode-textcolor);}
/* ------------------------------ BLACK_LLAMA_MENU ----------------------------------- */
.blackmode .llama_menu .feature_menu {
    color: var(--blackmode-textcolor);}

.blackmode #Extra_Menu {
    color: var(--blackmode-textcolor);}

.blackmode #toggle_menu {
    color: var(--blackmode-textcolor);
    background-color: var(--blackmode-bgcolor);
    border-color: var(--blackmode-bordercolor);
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 0 3px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 3px;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 3px;}

.blackmode .feature_menu {
    color: var(--blackmode-textcolor);
    background-color: var(--blackmode-bgcolor);
    border-color: var(--blackmode-bordercolor);
    -webkit-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    -moz-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);}

.blackmode .menu_header {
    background-color:  var(--blackmode-lightbgcolor);
    color: var(--blackmode-textcolor);}

.blackmode .menu_section {
    color: var(--blackmode-textcolor);}

.blackmode .settings_header {
    color: var(--blackmode-textcolor);}

/* ------------------------------ MINI_YT ----------------------------------- */
.mini_yt .youtube__VideoContainer {
    width:100px !important;
    height:100px !important;}

/* ------------------------------ NO_CAM_BORDERS ----------------------------------- */
.no_border .cams__Cam {
    border:0px;
    border-radius: 0px !important;
    border-width: 0px !important;}


/* ------------------------------ NO_CAM_SPACING ----------------------------------- */
.no_padding .cams__CamWrapper {
    padding: 0 !important;}

.cams__Cam-audioActive {
    z-index: 12;}

/*------------------------------------------------------------------------------------- PINK_THEME ---*/
.pinkmode .modal__Window {border: 1px solid var(--pinkmode-bordercolor);}
.pinkmode .chat__MessageBody {
    color: var(--pinkmode-textcolor) !important;
    background-color: var(--pinkmode-bgcolor);}

.pinkmode .chat__MessageBody-status {
    color: var(--pinkmode-textcolor);
    background-color: var(--pinkmode-lightbgcolor);
    border-color: var(--pinkmode-bordercolor);}

.pinkmode .chat__MessageHandle {
    background-color: var(--pinkmode-bgcolor);}

.pinkmode .chat__MessageBody-link {
    color:#ff0000;}

.pinkmode .chat__MessageTimestamp {
    color: #fff;}

.pinkmode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--pinkmode-textcolor);}

.pinkmode .roomHeader {
    background-color: var(--pinkmode-lightbgcolor);}

.pinkmode .privateMessages__Empty{
    background-color: var(--pinkmode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.pinkmode .modal__Body, .pinkmode .modal__Footer {
    background-color: var(--pinkmode-bgcolor) !important;
    border-color:#7289DA;}

.pinkmode .modal__Header {
    background-color: var(--pinkmode-bgcolor);
    border-color:  var(--pinkmode-bordercolor);
    border-bottom: 0px;}

.pinkmode .modal__SubText {
    color:  var(--pinkmode-textcolor) !important;}

.pinkmode .input {
    color:  var(--pinkmode-textcolor) !important;
    border-color:  var(--pinkmode-bordercolor) !important;
    background-color: var(--pinkmode-bgcolor) !important;}

.pinkmode .button-blue {
    background-color: var(--pinkmode-bordercolor);
    color:  var(--pinkmode-lightbgcolor);
    border:1px solid  var(--pinkmode-bordercolor);}

.pinkmode .chat__ShareCopy {
    background-color: var(--pinkmode-bordercolor);}

/* --------- CAMERAS --------- */
.pinkmode .cams {
    background:  var(--pinkmode-lightbgcolor) !important;}

.pinkmode .cams__Header {
    background-color:  var(--pinkmode-bgcolor) !important;}

.pinkmode .cams__Cam {
    border-color:  var(--pinkmode-bordercolor) !important;}

.pinkmode .button-default {
    background-color: var(--pinkmode-bordercolor) !important;
    color: var(--pinkmode-textcolor) !important;}


/* --------- CHAT --------- */

.pinkmode .chat__Header {
    background-color: var(--pinkmode-bgcolor) !important;}

.pinkmode .chat__FeedWrapper {
    background-color: var(--pinkmode-lightbgcolor);
    border-color: var(--pinkmode-bordercolor);}

.pinkmode .chat__InputWrapper {
    border-color: var(--pinkmode-bordercolor);
    background-color: var(--pinkmode-bgcolor);}

.pinkmode .input::placeholder {
    color: var(--pinkmode-textcolor);}

.pinkmode .input::focus {
    border-color: var(--pinkmode-bordercolor);}

/* --------- USERS LIST --------- */
.pinkmode .chat__UserList {
    background-color: var(--pinkmode-bgcolor);}

.pinkmode .layout--horizontal .chat__UserList {
    border-left-color: var(--pinkmode-bordercolor);}

.pinkmode .chat__UserListItem+.chat__UserListItem {
    border-top-color: var(--pinkmode-bordercolor);
    background-color: var(--pinkmode-bordercolor);}

.pinkmode .chat__UserListItem+.chat__UserListItem:hover {
    background-color: var(--pinkmode-bgcolor);}

/*------------------------------------------------------------------------------------- GREEN_THEME ---*/
.greenmode .modal__Window {border: 1px solid var(--greenmode-bordercolor);}
.greenmode .cams__RoomName {
color: var(--greenmode-textcolor);
}
.greenmode .cams__InfoCount {
color: var(--greenmode-lightbgcolor);
}
.greenmode .tabs__Item {color: var(--greenmode-lightbgcolor);}


.greenmode .chat__MessageBody {
    color: var(--greenmode-textcolor) !important;
    background-color: var(--greenmode-bgcolor);}

.greenmode .chat__MessageBody-status {
    color: var(--greenmode-textcolor);
    background-color: var(--greenmode-lightbgcolor);
    border-color: var(--greenmode-bordercolor);}

.greenmode .chat__MessageHandle {
    background-color: var(--greenmode-bgcolor);}

.greenmode .chat__MessageBody-link {
    color:#ff0000;}

.greenmode .chat__MessageTimestamp {
    color: #fff;}

.greenmode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--greenmode-textcolor);}

.greenmode .roomHeader {
    background-color: var(--greenmode-lightbgcolor);}

.greenmode .privateMessages__Empty{
    background-color: var(--greenmode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.greenmode .modal__Body, .greenmode .modal__Footer {
    background-color: var(--greenmode-lightbgcolor) !important;
    border-color:#7289DA;}

.greenmode .modal__Header {
    background-color: var(--greenmode-lightbgcolor);
    border-color:  var(--greenmode-bordercolor);
    border-bottom: 0px;}

.greenmode .modal__SubText {
    color:  var(--greenmode-textcolor) !important;}

.greenmode .input {
    color:  var(--greenmode-textcolor) !important;
    border-color:  var(--greenmode-bordercolor) !important;
    background-color: var(--greenmode-bgcolor) !important;}

.greenmode .button-green {
    background-color: var(--greenmode-bordercolor);
    color:  var(--greenmode-lightbgcolor);
    border:1px solid  var(--greenmode-bordercolor);}

.greenmode .chat__ShareCopy {
    background-color: var(--greenmode-bordercolor);}

.greenmode .userList__UserHandle {color: var(--greenmode-lightbgcolor)}

/* --------- CAMERAS --------- */
.greenmode .cams {
    background:  var(--greenmode-lightbgcolor) !important;}

.greenmode .cams__Header {
    background-color:  var(--greenmode-bgcolor) !important;}

.greenmode .cams__Cam {
    border-color:  var(--greenmode-bordercolor) !important;}

.greenmode .button-default {
    background-color: var(--greenmode-bordercolor) !important;
    color: var(--greenmode-textcolor) !important;}


/* --------- CHAT --------- */

.greenmode .chat__Header {
    background-color: var(--greenmode-bgcolor) !important;}

.greenmode .chat__FeedWrapper {
    background-color: var(--greenmode-lightbgcolor);
    border-color: var(--greenmode-bordercolor);}

.greenmode .chat__InputWrapper {
    border-color: var(--greenmode-bordercolor);
    background-color: var(--greenmode-bgcolor);}

.greenmode .input::placeholder {
    color: var(--greenmode-textcolor);}

.greenmode .input::focus {
    border-color: var(--greenmode-bordercolor);}

/* --------- USERS LIST --------- */
.greenmode .chat__UserList {
    background-color: var(--greenmode-bgcolor);}

.greenmode .layout--horizontal .chat__UserList {
    border-left-color: var(--greenmode-bordercolor);}

.greenmode .chat__UserListItem+.chat__UserListItem {
    border-top-color: var(--greenmode-bordercolor);
    background-color: var(--greenmode-bordercolor);}

.greenmode .chat__UserListItem+.chat__UserListItem:hover {
    background-color: var(--greenmode-lightbgcolor);
color:  var(--greenmode-textcolor) !important;}

.greenmode .chat__UserListItem+.userList__UserHandle:hover {
color:  var(--greenmode-textcolor) !important;}
/*------------------------------------------------------------------------------------- BLUE_THEME ---*/
.bluemode .modal__Window {border: 1px solid var(--bluemode-bordercolor);}
.bluemode .cams__RoomName {
color: var(--bluemode-textcolor);
}
.bluemode .cams__InfoCount {
color: var(--bluemode-lightbgcolor);
}
.bluemode .tabs__Item {color: var(--bluemode-lightbgcolor);}


.bluemode .chat__MessageBody {
    color: var(--bluemode-textcolor) !important;
    background-color: var(--bluemode-bgcolor);}

.bluemode .chat__MessageBody-status {
    color: var(--bluemode-textcolor);
    background-color: var(--bluemode-lightbgcolor);
    border-color: var(--bluemode-bordercolor);}

.bluemode .chat__MessageHandle {
    background-color: var(--bluemode-bgcolor);}

.bluemode .chat__MessageBody-link {
    color:#ff0000;}

.bluemode .chat__MessageTimestamp {
    color: #fff;}

.bluemode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--bluemode-textcolor);}

.bluemode .roomHeader {
    background-color: var(--bluemode-lightbgcolor);}

.bluemode .privateMessages__Empty{
    background-color: var(--bluemode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.bluemode .modal__Body, .bluemode .modal__Footer {
    background-color: var(--bluemode-lightbgcolor) !important;
    border-color:#7289DA;}

.bluemode .modal__Header {
    background-color: var(--bluemode-lightbgcolor);
    border-color:  var(--bluemode-bordercolor);
    border-bottom: 0px;}

.bluemode .modal__SubText {
    color:  var(--bluemode-textcolor) !important;}

.bluemode .input {
    color:  var(--bluemode-textcolor) !important;
    border-color:  var(--bluemode-bordercolor) !important;
    background-color: var(--bluemode-bgcolor) !important;}

.bluemode .button-blue {
    background-color: var(--bluemode-bordercolor);
    color:  var(--bluemode-lightbgcolor);
    border:1px solid  var(--bluemode-bordercolor);}

.bluemode .chat__ShareCopy {
    background-color: var(--bluemode-bordercolor);}

.bluemode .userList__UserHandle {color: var(--bluemode-lightbgcolor)}

/* --------- CAMERAS --------- */
.bluemode .cams {
    background:  var(--bluemode-lightbgcolor) !important;}

.bluemode .cams__Header {
    background-color:  var(--bluemode-bgcolor) !important;}

.bluemode .cams__Cam {
    border-color:  var(--bluemode-bordercolor) !important;}

.bluemode .button-default {
    background-color: var(--bluemode-bordercolor) !important;
    color: var(--bluemode-textcolor) !important;}


/* --------- CHAT --------- */

.bluemode .chat__Header {
    background-color: var(--bluemode-bgcolor) !important;}

.bluemode .chat__FeedWrapper {
    background-color: var(--bluemode-lightbgcolor);
    border-color: var(--bluemode-bordercolor);}

.bluemode .chat__InputWrapper {
    border-color: var(--bluemode-bordercolor);
    background-color: var(--bluemode-bgcolor);}

.bluemode .input::placeholder {
    color: var(--bluemode-textcolor);}

.bluemode .input::focus {
    border-color: var(--bluemode-bordercolor);}

/* --------- USERS LIST --------- */
.bluemode .chat__UserList {
    background-color: var(--bluemode-bgcolor);}

.bluemode .layout--horizontal .chat__UserList {
    border-left-color: var(--bluemode-bordercolor);}

.bluemode .chat__UserListItem+.chat__UserListItem {
    border-top-color: var(--bluemode-bordercolor);
    background-color: var(--bluemode-bordercolor);}

.bluemode .chat__UserListItem+.chat__UserListItem:hover {
    background-color: var(--bluemode-lightbgcolor);
color:  var(--bluemode-textcolor) !important;}

.bluemode .chat__UserListItem+.userList__UserHandle:hover {
color:  var(--bluemode-textcolor) !important;}
/*------------------------------------------------------------------------------------- MAUVE_THEME ---*/
.mauvemode .modal__Window {border: 1px solid var(--mauvemode-bordercolor);}
.mauvemode .cams__RoomName {
color: var(--mauvemode-textcolor);
}
.mauvemode .cams__InfoCount {
color: var(--mauvemode-lightbgcolor);
}
.mauvemode .tabs__Item {color: var(--mauvemode-lightbgcolor);}


.mauvemode .chat__MessageBody {
    color: var(--mauvemode-textcolor) !important;
    background-color: var(--mauvemode-bgcolor);}

.mauvemode .chat__MessageBody-status {
    color: var(--mauvemode-textcolor);
    background-color: var(--mauvemode-lightbgcolor);
    border-color: var(--mauvemode-bordercolor);}

.mauvemode .chat__MessageHandle {
    background-color: var(--mauvemode-bgcolor);}

.mauvemode .chat__MessageBody-link {
    color:#ff0000;}

.mauvemode .chat__MessageTimestamp {
    color: #fff;}

.mauvemode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--mauvemode-textcolor);}

.mauvemode .roomHeader {
    background-color: var(--mauvemode-lightbgcolor);}

.mauvemode .privateMessages__Empty{
    background-color: var(--mauvemode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.mauvemode .modal__Body, .mauvemode .modal__Footer {
    background-color: var(--mauvemode-lightbgcolor) !important;
    border-color:#7289DA;}

.mauvemode .modal__Header {
    background-color: var(--mauvemode-lightbgcolor);
    border-color:  var(--mauvemode-bordercolor);
    border-bottom: 0px;}

.mauvemode .modal__SubText {
    color:  var(--mauvemode-textcolor) !important;}

.mauvemode .input {
    color:  var(--mauvemode-textcolor) !important;
    border-color:  var(--mauvemode-bordercolor) !important;
    background-color: var(--mauvemode-bgcolor) !important;}

.mauvemode .button-mauve {
    background-color: var(--mauvemode-bordercolor);
    color:  var(--mauvemode-lightbgcolor);
    border:1px solid  var(--mauvemode-bordercolor);}

.mauvemode .chat__ShareCopy {
    background-color: var(--mauvemode-bordercolor);}

.mauvemode .userList__UserHandle {color: var(--mauvemode-lightbgcolor)}

/* --------- CAMERAS --------- */
.mauvemode .cams {
    background:  var(--mauvemode-lightbgcolor) !important;}

.mauvemode .cams__Header {
    background-color:  var(--mauvemode-bgcolor) !important;}

.mauvemode .cams__Cam {
    border-color:  var(--mauvemode-bordercolor) !important;}

.mauvemode .button-default {
    background-color: var(--mauvemode-bordercolor) !important;
    color: var(--mauvemode-textcolor) !important;}


/* --------- CHAT --------- */

.mauvemode .chat__Header {
    background-color: var(--mauvemode-bgcolor) !important;}

.mauvemode .chat__FeedWrapper {
    background-color: var(--mauvemode-lightbgcolor);
    border-color: var(--mauvemode-bordercolor);}

.mauvemode .chat__InputWrapper {
    border-color: var(--mauvemode-bordercolor);
    background-color: var(--mauvemode-bgcolor);}

.mauvemode .input::placeholder {
    color: var(--mauvemode-textcolor);}

.mauvemode .input::focus {
    border-color: var(--mauvemode-bordercolor);}

/* --------- USERS LIST --------- */
.mauvemode .chat__UserList {
    background-color: var(--mauvemode-bgcolor);}

.mauvemode .layout--horizontal .chat__UserList {
    border-left-color: var(--mauvemode-bordercolor);}

.mauvemode .chat__UserListItem+.chat__UserListItem {
    border-top-color: var(--mauvemode-bordercolor);
    background-color: var(--mauvemode-bordercolor);}

.mauvemode .chat__UserListItem+.chat__UserListItem:hover {
    background-color: var(--mauvemode-lightbgcolor);
color:  var(--mauvemode-textcolor) !important;}

.mauvemode .chat__UserListItem+.userList__UserHandle:hover {
color:  var(--mauvemode-textcolor) !important;}
/*------------------------------------------------------------------------------------- ORANGE_THEME ---*/
.orangemode .modal__Window {border: 1px solid var(--orangemode-bordercolor);}
.orangemode .cams__RoomName {
color: var(--orangemode-textcolor);
}
.orangemode .cams__InfoCount {
color: var(--orangemode-lightbgcolor);
}
.orangemode .tabs__Item {color: var(--orangemode-lightbgcolor);}


.orangemode .chat__MessageBody {
    color: var(--orangemode-textcolor) !important;
    background-color: var(--orangemode-bgcolor);}

.orangemode .chat__MessageBody-status {
    color: var(--orangemode-textcolor);
    background-color: var(--orangemode-lightbgcolor);
    border-color: var(--orangemode-bordercolor);}

.orangemode .chat__MessageHandle {
    background-color: var(--orangemode-bgcolor);}

.orangemode .chat__MessageBody-link {
    color:#ff0000;}

.orangemode .chat__MessageTimestamp {
    color: #fff;}

.orangemode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--orangemode-textcolor);}

.orangemode .roomHeader {
    background-color: var(--orangemode-lightbgcolor);}

.orangemode .privateMessages__Empty{
    background-color: var(--orangemode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.orangemode .modal__Body, .orangemode .modal__Footer {
    background-color: var(--orangemode-lightbgcolor) !important;
    border-color:#7289DA;}

.orangemode .modal__Header {
    background-color: var(--orangemode-lightbgcolor);
    border-color:  var(--orangemode-bordercolor);
    border-bottom: 0px;}

.orangemode .modal__SubText {
    color:  var(--orangemode-textcolor) !important;}

.orangemode .input {
    color:  var(--orangemode-textcolor) !important;
    border-color:  var(--orangemode-bordercolor) !important;
    background-color: var(--orangemode-bgcolor) !important;}

.orangemode .button-orange {
    background-color: var(--orangemode-bordercolor);
    color:  var(--orangemode-lightbgcolor);
    border:1px solid  var(--orangemode-bordercolor);}

.orangemode .chat__ShareCopy {
    background-color: var(--orangemode-bordercolor);}

.orangemode .userList__UserHandle {color: var(--orangemode-lightbgcolor)}

/* --------- CAMERAS --------- */
.orangemode .cams {
    background:  var(--orangemode-lightbgcolor) !important;}

.orangemode .cams__Header {
    background-color:  var(--orangemode-bgcolor) !important;}

.orangemode .cams__Cam {
    border-color:  var(--orangemode-bordercolor) !important;}

.orangemode .button-default {
    background-color: var(--orangemode-bordercolor) !important;
    color: var(--orangemode-textcolor) !important;}


/* --------- CHAT --------- */

.orangemode .chat__Header {
    background-color: var(--orangemode-bgcolor) !important;}

.orangemode .chat__FeedWrapper {
    background-color: var(--orangemode-lightbgcolor);
    border-color: var(--orangemode-bordercolor);}

.orangemode .chat__InputWrapper {
    border-color: var(--orangemode-bordercolor);
    background-color: var(--orangemode-bgcolor);}

.orangemode .input::placeholder {
    color: var(--orangemode-textcolor);}

.orangemode .input::focus {
    border-color: var(--orangemode-bordercolor);}

/* --------- USERS LIST --------- */
.orangemode .chat__UserList {
    background-color: var(--orangemode-bgcolor);}

.orangemode .layout--horizontal .chat__UserList {
    border-left-color: var(--orangemode-bordercolor);}

.orangemode .chat__UserListItem+.chat__UserListItem {
    border-top-color: var(--orangemode-bordercolor);
    background-color: var(--orangemode-bordercolor);}

.orangemode .chat__UserListItem+.chat__UserListItem:hover {
    background-color: var(--orangemode-lightbgcolor);
color:  var(--orangemode-textcolor) !important;}

.orangemode .chat__UserListItem+.userList__UserHandle:hover {
color:  var(--orangemode-textcolor) !important;}
/*------------------------------------------------------------------------------------- RED_THEME ---*/
.redmode .modal__Window {border: 1px solid var(--redmode-bordercolor);}
.redmode .cams__RoomName {
color: var(--redmode-textcolor);
}
.redmode .cams__InfoCount {
color: var(--redmode-lightbgcolor);
}
.redmode .tabs__Item {color: var(--redmode-lightbgcolor);}


.redmode .chat__MessageBody {
    color: var(--redmode-textcolor) !important;
    background-color: var(--redmode-bgcolor);}

.redmode .chat__MessageBody-status {
    color: var(--redmode-textcolor);
    background-color: var(--redmode-lightbgcolor);
    border-color: var(--redmode-bordercolor);}

.redmode .chat__MessageHandle {
    background-color: var(--redmode-bgcolor);}

.redmode .chat__MessageBody-link {
    color:#ff0000;}

.redmode .chat__MessageTimestamp {
    color: #fff;}

.redmode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--redmode-textcolor);}

.redmode .roomHeader {
    background-color: var(--redmode-lightbgcolor);}

.redmode .privateMessages__Empty{
    background-color: var(--redmode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.redmode .modal__Body, .redmode .modal__Footer {
    background-color: var(--redmode-lightbgcolor) !important;
    border-color:#7289DA;}

.redmode .modal__Header {
    background-color: var(--redmode-lightbgcolor);
    border-color:  var(--redmode-bordercolor);
    border-bottom: 0px;}

.redmode .modal__SubText {
    color:  var(--redmode-textcolor) !important;}

.redmode .input {
    color:  var(--redmode-textcolor) !important;
    border-color:  var(--redmode-bordercolor) !important;
    background-color: var(--redmode-bgcolor) !important;}

.redmode .button-red {
    background-color: var(--redmode-bordercolor);
    color:  var(--redmode-lightbgcolor);
    border:1px solid  var(--redmode-bordercolor);}

.redmode .chat__ShareCopy {
    background-color: var(--redmode-bordercolor);}

.redmode .userList__UserHandle {color: var(--redmode-lightbgcolor)}

/* --------- CAMERAS --------- */
.redmode .cams {
    background:  var(--redmode-lightbgcolor) !important;}

.redmode .cams__Header {
    background-color:  var(--redmode-bgcolor) !important;}

.redmode .cams__Cam {
    border-color:  var(--redmode-bordercolor) !important;}

.redmode .button-default {
    background-color: var(--redmode-bordercolor) !important;
    color: var(--redmode-textcolor) !important;}


/* --------- CHAT --------- */

.redmode .chat__Header {
    background-color: var(--redmode-bgcolor) !important;}

.redmode .chat__FeedWrapper {
    background-color: var(--redmode-lightbgcolor);
    border-color: var(--redmode-bordercolor);}

.redmode .chat__InputWrapper {
    border-color: var(--redmode-bordercolor);
    background-color: var(--redmode-bgcolor);}

.redmode .input::placeholder {
    color: var(--redmode-textcolor);}

.redmode .input::focus {
    border-color: var(--redmode-bordercolor);}

/* --------- USERS LIST --------- */
.redmode .chat__UserList {
    background-color: var(--redmode-bgcolor);}

.redmode .layout--horizontal .chat__UserList {
    border-left-color: var(--redmode-bordercolor);}

.redmode .chat__UserListItem+.chat__UserListItem {
    border-top-color: var(--redmode-bordercolor);
    background-color: var(--redmode-bordercolor);}

.redmode .chat__UserListItem+.chat__UserListItem:hover {
    background-color: var(--redmode-lightbgcolor);
color:  var(--redmode-textcolor) !important;}

.redmode .chat__UserListItem+.userList__UserHandle:hover {
color:  var(--redmode-textcolor) !important;}
/*------------------------------------------------------------------------------------- PURPLE_THEME ---*/
.purplemode .modal__Window {border: 1px solid var(--purplemode-bordercolor);}
.purplemode .cams__RoomName {
color: var(--purplemode-textcolor);
}
.purplemode .cams__InfoCount {
color: var(--purplemode-lightbgcolor);
}
.purplemode .tabs__Item {color: var(--purplemode-lightbgcolor);}


.purplemode .chat__MessageBody {
    color: var(--purplemode-textcolor) !important;
    background-color: var(--purplemode-bgcolor);}

.purplemode .chat__MessageBody-status {
    color: var(--purplemode-textcolor);
    background-color: var(--purplemode-lightbgcolor);
    border-color: var(--purplemode-bordercolor);}

.purplemode .chat__MessageHandle {
    background-color: var(--purplemode-bgcolor);}

.purplemode .chat__MessageBody-link {
    color:#ff0000;}

.purplemode .chat__MessageTimestamp {
    color: #fff;}

.purplemode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--purplemode-textcolor);}

.purplemode .roomHeader {
    background-color: var(--purplemode-lightbgcolor);}

.purplemode .privateMessages__Empty{
    background-color: var(--purplemode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.purplemode .modal__Body, .purplemode .modal__Footer {
    background-color: var(--purplemode-lightbgcolor) !important;
    border-color:#7289DA;}

.purplemode .modal__Header {
    background-color: var(--purplemode-lightbgcolor);
    border-color:  var(--purplemode-bordercolor);
    border-bottom: 0px;}

.purplemode .modal__SubText {
    color:  var(--purplemode-textcolor) !important;}

.purplemode .input {
    color:  var(--purplemode-textcolor) !important;
    border-color:  var(--purplemode-bordercolor) !important;
    background-color: var(--purplemode-bgcolor) !important;}

.purplemode .button-purple {
    background-color: var(--purplemode-bordercolor);
    color:  var(--purplemode-lightbgcolor);
    border:1px solid  var(--purplemode-bordercolor);}

.purplemode .chat__ShareCopy {
    background-color: var(--purplemode-bordercolor);}

.purplemode .userList__UserHandle {color: var(--purplemode-lightbgcolor)}

/* --------- CAMERAS --------- */
.purplemode .cams {
    background:  var(--purplemode-lightbgcolor) !important;}

.purplemode .cams__Header {
    background-color:  var(--purplemode-bgcolor) !important;}

.purplemode .cams__Cam {
    border-color:  var(--purplemode-bordercolor) !important;}

.purplemode .button-default {
    background-color: var(--purplemode-bordercolor) !important;
    color: var(--purplemode-textcolor) !important;}


/* --------- CHAT --------- */

.purplemode .chat__Header {
    background-color: var(--purplemode-bgcolor) !important;}

.purplemode .chat__FeedWrapper {
    background-color: var(--purplemode-lightbgcolor);
    border-color: var(--purplemode-bordercolor);}

.purplemode .chat__InputWrapper {
    border-color: var(--purplemode-bordercolor);
    background-color: var(--purplemode-bgcolor);}

.purplemode .input::placeholder {
    color: var(--purplemode-textcolor);}

.purplemode .input::focus {
    border-color: var(--purplemode-bordercolor);}

/* --------- USERS LIST --------- */
.purplemode .chat__UserList {
    background-color: var(--purplemode-bgcolor);}

.purplemode .layout--horizontal .chat__UserList {
    border-left-color: var(--purplemode-bordercolor);}

.purplemode .chat__UserListItem+.chat__UserListItem {
    border-top-color: var(--purplemode-bordercolor);
    background-color: var(--purplemode-bordercolor);}

.purplemode .chat__UserListItem+.chat__UserListItem:hover {
    background-color: var(--purplemode-lightbgcolor);
color:  var(--purplemode-textcolor) !important;}

.purplemode .chat__UserListItem+.userList__UserHandle:hover {
color:  var(--purplemode-textcolor) !important;}
/*------------------------------------------------------------------------------------- BLACK_THEME ---*/

.blackmode .modal__Window {border: 1px solid #7289DA;}
.blackmode .cams {
    background-color:  #191919 !important;}

.bubble_chat.blackmode .chat__MessageBody {
    color: #fff !important;
    background-color: #2a2a2a;}

.blackmode .chat__MessageBody-status {
    color: #fff;
    background-color: #2a2a2a;
    border-color: #7289DA;}

.bubble_chat.blackmode .chat__MessageHandle {
    background-color: #2C2F33;}

.blackmode .chat__MessageHandle {
}

.blackmode .chat__MessageBody-link {
    color:#ff0000;}

.blackmode .chat__MessageTimestamp {
    color: #626262;}

.blackmode .chat__Message:hover .chat__MessageTimestamp {
    color:#7289DA;}

.blackmode .roomHeader {
    background-color: #191919;}

/* --------- CHANGE NICKNAME --------- */

.blackmode .modal__Body, .blackmode .modal__Footer {
    background-color: #2C2F33 !important;
    border-color:#7289DA;}

.blackmode .modal__Header {
    background-color: #191919 !important;
    border-color: #7289DA;
    border-bottom: 0px;}

.blackmode .modal__SubText {
    color: #7289DA !important;}

.blackmode .input {
    color: #dadfe5 !important;
    border-color: #7289DA !important;
    background-color: #191919 !important;}

.blackmode .button-blue {
    background-color: #7289DA;
    color: #f2e5bc;}

.blackmode .chat__ShareCopy {
    background-color:#7289DA;}

/* --------- CAMERAS --------- */

.blackmode .cams__Header {
    background-color: #2C2F33 !important;}

.blackmode .cams__Cam {
    border-color: #313131 !important;}

.blackmode .button-default {
    background-color: #2C2F33 !important;
    color: white !important;}


/* --------- CHAT --------- */

.blackmode .chat__Header {
    background-color: #2C2F33 !important;}

.blackmode .chat__FeedWrapper {
    background-color: #191919;
    border-color: #313131;}

.blackmode .chat__InputWrapper {
    border-color: #2C2F33;
    background-color: #2C2F33;}

.blackmode .input::placeholder {
    color: #2C2F33;}

.blackmode .input::focus {
    border-color: #7289DA;}

/* --------- USERS LIST --------- */
.blackmode .chat__UserList {
    background-color: #191919;}

.blackmode .layout--horizontal .chat__UserList {
    border-left-color: #313131;}

.blackmode .chat__UserListItem+.chat__UserListItem {
    border-top-color: #504945;
    background-color: #313131;}

.blackmode .chat__UserListItem+.chat__UserListItem:hover {
    background-color: #7289DA;}
/*------------------------------------------------------------------------------------- BUDS_THEME ---*/

.budsmode .cams__RoomName {
color: var(--budsmode-textcolor);
}
.budsmode .cams__InfoCount {
color: var(--budsmode-bordercolor);
}
.budsmode .tabs__Item {color: var(--budsmode-bordercolor);}


.budsmode .chat__MessageBody {
    color: var(--budsmode-textcolor) !important;
    background-color: var(--budsmode-bordercolor);}

.budsmode .chat__MessageBody-status {
    color: var(--budsmode-textcolor);
    background-color: var(--budsmode-lightbgcolor);
    border-color: var(--budsmode-bordercolor);}

.budsmode .chat__MessageHandle {
    background-color: var(--budsmode-bgcolor);
    border: 1px solid var(--budsmode-bordercolor);
}

.budsmode .chat__MessageBody-link {
    color:#ff0000;}

.budsmode .chat__MessageTimestamp {
    color: #fff;}

.budsmode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--budsmode-textcolor);}

.budsmode .roomHeader {
    background-color: var(--budsmode-lightbgcolor);
    background-image: var(--budsmode-headerbg);}

.budsmode .privateMessages__Empty{
    background-color: var(--budsmode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */
.budsmode .modal__Window {border: 1px solid var(--budsmode-bordercolor);}

.budsmode .modal__Body, .budsmode .modal__Footer {
    background-image: var(--budsmode-headerbg);
    background-color: var(--budsmode-lightbgcolor) !important;
    border-color:#7289DA;}

.budsmode .modal__Header {
    background-image: var(--buds-headerbg);
    background-color: var(--budsmode-lightbgcolor);
    border-color:  var(--budsmode-bordercolor);
    border-bottom: 0px;}

.budsmode .modal__SubText {
    color:  var(--budsmode-textcolor) !important;}

.budsmode .input {
    color:  var(--budsmode-textcolor) !important;
    border-color:  var(--budsmode-bordercolor) !important;
    background-color: var(--budsmode-bgcolor) !important;}

.budsmode .button-buds {
    background-color: var(--budsmode-bordercolor);
    color:  var(--budsmode-lightbgcolor);
    border:1px solid  var(--budsmode-bordercolor);}

.budsmode .chat__ShareCopy {
    background-color: var(--budsmode-bordercolor);}

.budsmode .userList__UserHandle {color: var(--budsmode-lightbgcolor)}

/* --------- CAMERAS --------- */
.budsmode .cams {
    background-image: var(--budsmode-roombg);}

.budsmode .cams__Header {
    background-color:  var(--budsmode-bgcolor) !important;
    background-image:  var(--budsmode-roombg) !important;}

.budsmode .cams__Cam {
    border-color:  var(--budsmode-bordercolor) !important;}

.budsmode .button-default {
    background-color: var(--budsmode-bordercolor) !important;
    color: var(--budsmode-textcolor) !important;}


/* --------- CHAT --------- */

.budsmode .chat__Header {
    background-color: var(--budsmode-bgcolor) !important;
    background-image: var(--budsmode-roombg);}

.budsmode .chat__FeedWrapper {
    background-color: var(--budsmode-lightbgcolor);
    border-color: var(--budsmode-bordercolor);
    background-image: var(--budsmode-roombg);}

.budsmode .chat__InputWrapper {
    border-color: var(--budsmode-bordercolor);
    background-color: var(--budsmode-bgcolor);}

.budsmode .input::placeholder {
    color: var(--budsmode-textcolor);}

.budsmode .input::focus {
    border-color: var(--budsmode-bordercolor);}

/* --------- USERS LIST --------- */
.budsmode .chat__UserList {
    background-image: var(--budsmode-roombg);
    background-color: var(--budsmode-bgcolor);}

.budsmode .layout--horizontal .chat__UserList {
    border-left-color: var(--budsmode-bordercolor);}

.budsmode .chat__UserListItem+.chat__UserListItem {
    border-top-color: var(--budsmode-bordercolor);
    background-color: var(--budsmode-bordercolor);}

.budsmode .chat__UserListItem+.chat__UserListItem:hover {
    background-color: var(--budsmode-lightbgcolor);
color:  var(--budsmode-textcolor) !important;}

.budsmode .chat__UserListItem+.userList__UserHandle:hover {
color:  var(--budsmode-textcolor) !important;}


/*------------------------------------------------------------------------------------- CUSTOM_THEME ---*/
.custommode .modal__Window {border: 1px solid var(--custommode-bordercolor);}
.custommode .cams__RoomName {
color: var(--custommode-textcolor);
}
.custommode .cams__InfoCount {
color: var(--custommode-lightbgcolor);
}
.custommode .tabs__Item {color: var(--custommode-lightbgcolor);}


.custommode .chat__MessageBody {
    color: var(--custommode-textcolor) !important;
    background-color: var(--custommode-bgcolor);}

.custommode .chat__MessageBody-status {
    color: var(--custommode-textcolor);
    background-color: var(--custommode-lightbgcolor);
    border-color: var(--custommode-bordercolor);}

.custommode .chat__MessageHandle {
    background-color: var(--custommode-bgcolor);}

.custommode .chat__MessageBody-link {
    color:#ff0000;}

.custommode .chat__MessageTimestamp {
    color: #fff;}

.custommode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--custommode-textcolor);}

.custommode .roomHeader {
    background-color: var(--custommode-lightbgcolor);}

.custommode .privateMessages__Empty{
    background-color: var(--custommode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.custommode .modal__Body, .custommode .modal__Footer {
    background-color: var(--custommode-lightbgcolor) !important;
    border-color:#7289DA;}

.custommode .modal__Header {
    background-color: var(--custommode-lightbgcolor);
    border-color:  var(--custommode-bordercolor);
    border-bottom: 0px;}

.custommode .modal__SubText {
    color:  var(--custommode-textcolor) !important;}

.custommode .input {
    color:  var(--custommode-textcolor) !important;
    border-color:  var(--custommode-bordercolor) !important;
    background-color: var(--custommode-bgcolor) !important;}

.custommode .button-purple {
    background-color: var(--custommode-bordercolor);
    color:  var(--custommode-lightbgcolor);
    border:1px solid  var(--custommode-bordercolor);}

.custommode .chat__ShareCopy {
    background-color: var(--custommode-bordercolor);}

.custommode .userList__UserHandle {color: var(--custommode-lightbgcolor)}

/* --------- CAMERAS --------- */
.custommode .cams {
    background:  var(--custommode-lightbgcolor) !important;}

.custommode .cams__Header {
    background-color:  var(--custommode-bgcolor) !important;}

.custommode .cams__Cam {
    border-color:  var(--custommode-bordercolor) !important;}

.custommode .button-default {
    background-color: var(--custommode-bordercolor) !important;
    color: var(--custommode-textcolor) !important;}


/* --------- CHAT --------- */

.custommode .chat__Header {
    background-color: var(--custommode-bgcolor) !important;}

.custommode .chat__FeedWrapper {
    background-color: var(--custommode-lightbgcolor);
    border-color: var(--custommode-bordercolor);}

.custommode .chat__InputWrapper {
    border-color: var(--custommode-bordercolor);
    background-color: var(--custommode-bgcolor);}

.custommode .input::placeholder {
    color: var(--custommode-textcolor);}

.custommode .input::focus {
    border-color: var(--custommode-bordercolor);}

/* --------- USERS LIST --------- */
.custommode .chat__UserList {
    background-color: var(--custommode-bgcolor);}

.custommode .layout--horizontal .chat__UserList {
    border-left-color: var(--custommode-bordercolor);}

.custommode .chat__UserListItem+.chat__UserListItem {
    border-top-color: var(--custommode-bordercolor);
    background-color: var(--custommode-bordercolor);}

.custommode .chat__UserListItem+.chat__UserListItem:hover {
    background-color: var(--custommode-lightbgcolor);
color:  var(--custommode-textcolor) !important;}

.custommode .chat__UserListItem+.userList__UserHandle:hover {
color:  var(--custommode-textcolor) !important;}

/* ----------------------------------------------------- END_THEMES -----------------------------------*/
.pinkmode #toggle_chat {color: var(--pinkmode-bgcolor);}
.greenmode #toggle_chat {color: var(--greenmode-bgcolor);}
.bluemode #toggle_chat {color: var(--bluemode-bgcolor);}
.mauvemode #toggle_chat {color: var(--mauvemode-bgcolor);}
.orangemode #toggle_chat {color: var(--orangemode-bgcolor);}
.redmode #toggle_chat {color: var(--redmode-bgcolor);}
.purplemode #toggle_chat {color: var(--purplemode-bgcolor);}
.blackmode #toggle_chat {color: #2C2F33;}
.budsmode #toggle_chat {color: var(--budsmode-bgcolor);}

.pinkmode #toggle_userlist {color: var(--pinkmode-bgcolor);}
.greenmode #toggle_userlist {color: var(--greenmode-bgcolor);}
.bluemode #toggle_userlist {color: var(--bluemode-bgcolor);}
.mauvemode #toggle_userlist {color: var(--mauvemode-bgcolor);}
.orangemode #toggle_userlist {color: var(--orangemode-bgcolor);}
.redmode #toggle_userlist {color: var(--redmode-bgcolor);}
.purplemode #toggle_userlist {color: var(--purplemode-bgcolor);}
.blackmode #toggle_userlist {color: #2C2F33;}
.budsmode #toggle_userlist {color: var(--budsmode-bgcolor);}

.pinkmode #toggle_ltr {color: var(--pinkmode-bgcolor);}
.greenmode #toggle_ltr {color: var(--greenmode-bgcolor);}
.bluemode #toggle_ltr {color: var(--bluemode-bgcolor);}
.mauvemode #toggle_ltr {color: var(--mauvemode-bgcolor);}
.orangemode #toggle_ltr {color: var(--orangemode-bgcolor);}
.redmode #toggle_ltr {color: var(--redmode-bgcolor);}
.purplemode #toggle_ltr {color: var(--purplemode-bgcolor);}
.blackmode #toggle_ltr {color: #2C2F33;}
.budsmode #toggle_ltr {color: var(--budsmode-bgcolor);}


/* ------------------------------ CHAT_HIDER ----------------------------------- */

#Chat_Hider, #UserList_Hider, #LTR_Toggle {
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    padding: 23px 13px 13px 13px;
    font-size: 1em;
    background-color: transparent;
    float: left;}

#Chat_Hider:hover {background-color: rgba(255,255,255,.05);}

.toggle_chat {display:none;}

.layout--horizontal .toggle_chat {display:block;}

.hide_chat .chat__FeedWrapper {display:none;}
.hide_chat .chat__UserList {width: 100%;}
.hide_chat .room.layout--horizontal {grid-template-columns: 1fr 1fr 20rem;}
.hide_userlist .room.layout--horizontal {grid-template-columns: 1fr 1fr 40rem;}
.hide_chat #Chat_Hider::after{display:none;}
.hide_chat #UserList_Hider {right:0px;}
.hide_chat #Chat_Hider {right:66px;}

#Chat_Hider::after{
content: " ";
    display: block;
    background: #1b8cb5;
    height: 2px;
    /* width: 56%; */
    position: absolute;
    bottom: 1px;
    left: 0px;
    width: 83px;}

/* ------------------------------ USER_LIST_HIDER ----------------------------------- */

.hide_userlist #UserList_Hider::after {display:none;}

#UserList_Hider:hover {background-color: rgba(255,255,255,.05);}

.hide_userlist .chat__UserList {display:none;}

#UserList_Hider::after{
    content: " ";
    display: block;
    background: #1b8cb5;
    height: 2px;
    position: absolute;
    bottom: 1px;
    left: 83px;
    width: 64px;}

/*---------------------------------------------------------TEST---*/

#Chat_Extras {
    position: absolute;
    top: 0px;
    left: 220px;}

.hide_chat.hide_userlist .room.layout--horizontal {grid-template-columns: 1fr 1fr 0rem;}

.hide_chat.hide_userlist .chat {position: relative;top: 260px;}

.hide_chat.hide_userlist .chat {position: relative;top: -40px;}

.hide_chat.hide_userlist .room {grid-template-rows: 50px calc(100% - 50px);}

/*---------------------------------------------------------LTR-----------------------------------*/
.hide_userlist.ltr_layout .room.layout--horizontal {
    grid-template-columns: 0.5fr 1fr 60rem;
}


.ltr_layout .room.layout--horizontal {
    grid-template-areas:
        "header header header"
        "chat cams cams";
}
screen and (min-height: 480px) and (min-width: 2500px) {
.ltr_layout .room.layout--horizontal {
    grid-template-columns: 1fr 2fr 60rem;
}}

.hide_chat.hide_userlist.ltr_layout .room.layout--horizontal {
    grid-template-areas:
        "header header header"
        "cams cams chat";
}

.ltr_layout.hide_chat .room.layout--horizontal {
    grid-template-columns: 0fr 1fr 20rem;
}

#LTR_Toggle::after {display:none;}

.ltr_layout.hide_chat.hide_userlist .chat {
    display: none;}

.ltr_layout.hide_chat.hide_userlist .room.layout--horizontal {grid-template-columns: 0fr 1fr 0rem;}

#LTR_Toggle:hover {background-color: rgba(255,255,255,.05);}

.ltr_layout #LTR_Toggle::after{
    content: " ";
    display: block;
    background: #1b8cb5;
    height: 2px;
    position: absolute;
    bottom: 1px;
    left: 147px;
    width: 46px;}

.ltr_layout .chat__UserList {
    border-right: 1px solid #313131;}

/* ------------------------------ LLAMA_NOTICE ----------------------------------- */
#Llama_Notice {
z-index:1;
    position: absolute;
    top: 14px;
    left: 216px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    padding: 4px;
    font-size: 1em;
    background-color: #ffffff;
    border-radius: 10px;-webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 0 10px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 10px;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 10px;}

.hide_notice #Llama_Notice {
    display:none;}

#Llama_Notice:before {
    content: ' ';
    height: 0;
    position: absolute;
    width: 0;
    left: -15px;
    top: 2px;
    border: 10px solid transparent;
    border-right-color: white;}


/*-------------------------- CUSTOM_CHECKBOXES---*/
.container {
    display: block;
    margin-bottom:6px;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    font-size: 15px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-left: 12px;}

.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    background-color:white;
    border:1px solid transparent;
    height: 20px;
    border-radius:5px;
    width: 100px;}
.reg_checkmark {
    position: absolute;
    top: 0;
    left: 0;
    background-color:white;
    border:1px solid #000;
    height: 20px;
    border-radius:5px;
    width: 20px;}

.checkmark:after, .reg_checkmark:after {
    content: "";
    position: absolute;
    display: none;}

.container input:checked ~ .checkmark:after, .container input:checked ~ .reg_checkmark:after {
    display: block;}

.container .checkmark:after  {
    left: 8px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);}

.container .reg_checkmark:after  {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);}

.check_head {
    position: relative;
    left: -12px;
    top: 3px;}

.pinkmode > .checkmark, .pinkmode > .check_head {
    color: var(--pinkmode-bordercolor);}
.greenmode > .checkmark, .greenmode > .check_head {
    color: var(--greenmode-textcolor);}
.bluemode > .checkmark, .bluemode > .check_head {
    color: var(--bluemode-textcolor);}
.mauvemode > .checkmark, .mauvemode > .check_head {
    color: var(--mauvemode-textcolor);}
.orangemode > .checkmark, .orangemode > .check_head {
    color: var(--orangemode-textcolor);}
.redmode > .checkmark, .redmode > .check_head {
    color: var(--redmode-textcolor);}
.purplemode > .checkmark, .purplemode > .check_head  {
    color: var(--purplemode-textcolor);}
.blackmode > .checkmark, .blackmode > .check_head  {
    color: var(--blackmode-textcolor);}
.budsmoded > .checkmark, .budsmoded > .check_head  {
    color: var(--budsmode-textcolor);}
.pinkmode > .checkmark, .pinkmode > .check_head {
    border-color: var(--pinkmode-bordercolor);}
.greenmode > .checkmark, .greenmode > .check_head {
    color: var(--greenmode-textcolor);}
.bluemode > .checkmark, .bluemode > .check_head {
    color: var(--bluemode-textcolor);}
.mauvemode > .checkmark, .mauvemode > .check_head {
    color: var(--mauvemode-textcolor);}
.orangemode > .checkmark, .orangemode > .check_head {
    color: var(--orangemode-textcolor);}
.redmode > .checkmark, .redmode > .check_head {
    color: var(--redmode-textcolor);}
.purplemode > .checkmark, .purplemode > .check_head  {
    color: var(--purplemode-textcolor);}
.blackmode > .checkmark, .blackmode > .check_head  {
    color: var(--blackmode-textcolor);}
.budsmoded > .checkmark, .budsmoded > .check_head  {
    color: var(--budsmode-textcolor);}

.pinkmode > .checkmark {
    background-color: var(--pinkmode-lightbgcolor);
    border-color: var(--pinkmode-bordercolor);
}
.greenmode > .checkmark {
    background-color: var(--greenmode-lightbgcolor);
    border-color: var(--greenmode-bordercolor);
}
.bluemode > .checkmark {
    background-color: var(--bluemode-lightbgcolor);
    border-color: var(--bluemode-bordercolor);
}
.mauvemode > .checkmark {
    background-color: var(--mauvemode-lightbgcolor);
    border-color: var(--mauvemode-bordercolor);
}
.orangemode > .checkmark {
    background-color: var(--orangemode-lightbgcolor);
    border-color: var(--orangemode-bordercolor);
}
.redmode > .checkmark{
    background-color: var(--redmode-lightbgcolor);
    border-color: var(--redmode-bordercolor);
 }
.purplemode > .checkmark  {
    background-color: var(--purplemode-lightbgcolor);
    border-color: var(--purplemode-bordercolor);
 }
.blackmode > .checkmark  {
    background-color: var(--blackmode-lightbgcolor);
    border-color: var(--blackmode-bordercolor);
}
.budsmoded > .checkmark  {
    background-image: var(--budsmode-headerbg);
    border-color: var(--budsmode-bordercolor);
}

.checkmark.budsmode{background-image: url(https://i.imgur.com/fuLugA8.jpg);background-size: 167px;}
.container:hover {opacity:0.7;}
.pinkmode > .checkmark:hover input ~ .checkmark {background-color: var(--pinkmode-bgcolor);}
.greenmode > .checkmark:hover input ~ .checkmark {background-color: var(--greenmode-bgcolor);}
.bluemode > .checkmark:hover input ~ .checkmark {background-color: var(--bluemode-bgcolor);}
.mauvemode > .checkmark:hover input ~ .checkmark {background-color: var(--mauvemode-bgcolor);}
.orangemode > .checkmark:hover input ~ .checkmark {background-color: var(--orangemode-bgcolor);}
.redmode > .checkmark:hover input ~ .checkmark {background-color: var(--redmode-bgcolor);}
.purplemode > .checkmark:hover input ~ .checkmark {background-color: var(--purplemode-bgcolor);}
.blackmode > .checkmark:hover input ~ .checkmark {background-color: var(--blackmode-bgcolor);}
.budsmode > .checkmark:hover input ~ .checkmark {background-color: var(--budsmode-bgcolor);}


.custommode #enable_custom_mode {display: block;}
#enable_custom_mode {display: none;}
.custommode.llama_menu .feature_menu{height: 220px;}
#enable_custom_mode > label > input {position: relative;opacity: 1;cursor: pointer;height: 20px;width: 100px;left: -9px;top: 3px;border-radius: 2px;border: 1px solid #ccc;padding: 0px 0px 0px 5px;}

.user_bg .cams__ContainerInternal {background-image: var(--user-bg-image);}

#Theme_Selector {
    position: absolute;
    left: 430px;
}

.theme_selector_on #theme_wizard {display:block;}
#theme_wizard {
display:none;
width: 132px;
    height: 33px;
    border-radius: 3px;}

.pinkmode #theme_wizard, #theme_wizard > option.pink_mode {
    background-color: var(--pinkmode-bgcolor);
    border-color: var(--pinkmode-bordercolor);
color:var(--pinkmode-textcolor);}


.greenmode #theme_wizard,#theme_wizard > option.green_mode {
color:var(--greenmode-textcolor);
    background-color: var(--greenmode-lightbgcolor);
    border-color: var(--greenmode-bordercolor);}

.bluemode #theme_wizard,#theme_wizard > option.blue_mode {
color:var(--bluemode-textcolor);
    background-color: var(--bluemode-lightbgcolor);
    border-color: var(--bluemode-bordercolor);}

.mauvemode #theme_wizard,#theme_wizard > option.mauve_mode {
color:var(--mauvemode-textcolor);
    background-color: var(--mauvemode-lightbgcolor);
    border-color: var(--mauvemode-bordercolor);}

.orangemode #theme_wizard,#theme_wizard > option.orange_mode {
color:var(--orangemode-textcolor);
    background-color: var(--orangemode-lightbgcolor);
    border-color: var(--orangemode-bordercolor);}

.redmode #theme_wizard,#theme_wizard > option.red_mode {
color:var(--redmode-textcolor);
    background-color: var(--redmode-lightbgcolor);
    border-color: var(--redmode-bordercolor);}

.purplemode #theme_wizard,#theme_wizard > option.purple_mode {
color:var(--purplemode-textcolor);
    background-color: var(--purplemode-lightbgcolor);
    border-color: var(--purplemode-bordercolor);}

.blackmode #theme_wizard,#theme_wizard > option.black_mode {
color:var(--blackmode-textcolor);
    background-color: var(--blackmode-lightbgcolor);
    border-color: var(--blackmode-bordercolor);}

.budsmode #theme_wizard,#theme_wizard > option.buds_mode {
color:var(--budsmode-textcolor);
    background-color: var(--budsmode-lightbgcolor);
    border-color: var(--budsmode-bordercolor);}



` );

//----------------------------------------------------------------- LLAMA_MENU -----------------------------------------------------------------*/

//------------ THEME_SELECTOR_CREATOR ----------------*/
var ThemeNode = document.createElement ('div');

ThemeNode.innerHTML = (`
<select id="theme_wizard">
  <option value="">Select Theme..</option>
  <option value="Default Theme">Default Theme</option>
  <option value="PINK" class="pink_mode">PINK</option>
  <option value="GREEN" class="green_mode">GREEN</option>
  <option value="BLUE" class="blue_mode">BLUE</option>
  <option value="MAUVE" class="mauve_mode">MAUVE</option>
  <option value="ORANGE" class="orange_mode">ORANGE</option>
  <option value="RED" class="red_mode">RED</option>
  <option value="PURPLE" class="purple_mode">PURPLE</option>
  <option value="BLACK" class="black_mode">BLACK</option>
  <option value="BUDS" class="buds_mode">BUDS</option>
</select>` );

ThemeNode.setAttribute ('id', 'Theme_Selector');
document.body.appendChild (ThemeNode);


//------------ LLAMA_NOTICE_CREATOR ----------------*/
var NoticeNode = document.createElement ('div');

NoticeNode.innerHTML = (`
<label style="cursor:pointer;">
<div id="toggle_notice">CLICK THE LLAMA FOR EXTRA FEATURES/THEMES!</div>
</label>` );

NoticeNode.setAttribute ('id', 'Llama_Notice');
document.body.appendChild (NoticeNode);

//------------ HIDE_CHAT_USERLIST_CREATOR ----------------*/
var ceNode = document.createElement ('div');

ceNode.innerHTML = (`
<div id="Chat_Hider">
<label style="cursor:pointer;">
<div id="toggle_chat">Chat Log</div>
</label>
</div>

<div id="UserList_Hider">
<label style="cursor:pointer;">
<div id="toggle_userlist">Users</div>
</label>
</div>

<div id="LTR_Toggle">
<label style="cursor:pointer;">
<div id="toggle_ltr">LTR</div>
</label>
</div>` );

ceNode.setAttribute ('id', 'Chat_Extras');
document.body.appendChild (ceNode);

//------------ LLAMA_MENU_CREATOR ----------------*/
var zNode = document.createElement ('div');
var body = document.body;
zNode.innerHTML = ( `
<div id="toggle_menu">
<img src="https://cdn1.iconfinder.com/data/icons/MetroStation-PNG/128/MB__Llama.png" width="20px">
<span class="settings_header">JumpinLlama -- Smokeyllama.com</span>
</div>

<div id="feature_menu" class="feature_menu">
    <div class="menu_section" style="margin-right: 10px;">

<div id="enable_custom_mode">
            <span class="menu_header" style="position: relative;top: 1px;padding: 0px 15px;">
Use Color Pickers to select Custom Colors
            </span>
            <label class="container">
                <span class="check_head">Color 1</span>
                <input class="jscolor {zIndex:'2000'}"  type='text' name="server" id="colorSelection1" value="#004D91"></input>
            </label>
            <label class="container">
                <span class="check_head">Color 2</span>
                <input class="jscolor {zIndex:'2000'}"  type='text' name="server" id="colorSelection2" value="#CFCFCF"></input>
            </label>
            <label class="container">
                <span class="check_head">Color 3</span>
                <input class="jscolor {zIndex:'2000'}"  type='text' name="server" id="colorSelection3" value="#FFFFFF"></input>
            </label>
            <label class="container">
                <span class="check_head">Color 4</span>
                <input class="jscolor {zIndex:'2000'}" type='text' name="server" id="colorSelection4" value="#000000"></input>
            </label>
            <label style="position:relative;left:37px;">
                <input id="Preview_Llama_Color" type="button" style="opacity: 1;cursor: pointer;height: 26px;width: 86px;" value="PREVIEW"/>
                <input id="Save_Llama_Color" type="button" style="opacity: 1;cursor: pointer;height: 26px;width: 80px;" value="SAVE"/>
            </label>
</div>



    </div>
        <div class="menu_section">
            <span class="menu_header">
                SETTINGS
            </span>

            <label class="container" style="margin-top: 2px;">
                <input id="mini_yt" type="checkbox">
                <span class="reg_checkmark"></span>
                <span class="check_head">Mini Youtube</span>
            </label>

            <label class="container">
                <input id="cam_border" type="checkbox">
                <span class="reg_checkmark"></span>
                <span class="check_head">Remove Cam Borders</span>
            </label>

            <label class="container">
                <input id="cam_space" type="checkbox">
                <span class="reg_checkmark"></span>
                <span class="check_head">Remove Cam Spacing</span>
            </label>
            <label class="container">
                <input id="bubble_chat" type="checkbox">
                <span class="reg_checkmark"></span>
                <span class="check_head">Bubble Chat</span>
            </label>

            <label class="container">
                <input id="toggle_userbg" type="checkbox">
                <span class="reg_checkmark"></span>
                <span class="check_head">CAM BG</span>
            </label>
            <label style="position: relative;top: -3px;left: 12px;">
                <input type='text' name="server" id="bgSelection1" placeholder="URL to image.." style="opacity: 1;cursor: pointer;height: 20px;width: 122px;border-radius: 2px;border: 1px solid #ccc;padding: 0px 0px 0px 5px;"/>
                <input id="Save_Llama_BG" type="button" style="opacity: 1;cursor: pointer;height: 26px;width: 26px;border-radius: 5px;border: 1px solid black;" value="✔"/>
                <input id="Remove_Llama_BG" type="button" style="opacity: 1;cursor: pointer;height: 26px;width: 26px;border-radius: 5px;border: 1px solid black;" value="✘"/>
            </label>


            <span class="menu_header">
                THEME SETTINGS
            </span>
            <label class="container" style="margin-top: 2px;">
                <input id="show_themes" type="checkbox">
                <span class="reg_checkmark"></span>
                <span class="check_head">Toggle Theme Dropdown</span>
            </label>
            <label class="container">
                <input id="theme_custommode" type="checkbox">
                <span class="reg_checkmark"></span>
                <span class="check_head">Enable Custom Theme</span><br/>
            </label>


                </div>
                </div>
` );



zNode.setAttribute ('id', 'Extra_Menu');
document.body.appendChild (zNode);


document.addEventListener('input', function (event) {

	// Only run for #theme_wizard select
	if (event.target.id !== 'theme_wizard') return;
	if (event.target.value === 'Default Theme') {Toggle_Theme_Default();}
	if (event.target.value === 'PINK') {Toggle_Theme_Pink();}
	if (event.target.value === 'GREEN') {Toggle_Theme_Green();}
	if (event.target.value === 'BLUE') {Toggle_Theme_Blue();}
    if (event.target.value === 'MAUVE') {Toggle_Theme_Mauve();}
    if (event.target.value === 'ORANGE') {Toggle_Theme_Orange();}
    if (event.target.value === 'RED') {Toggle_Theme_Red();}
    if (event.target.value === 'PURPLE') {Toggle_Theme_Purple();}
    if (event.target.value === 'BLACK') {Toggle_Theme_Black();}
    if (event.target.value === 'BUDS') {Toggle_Theme_Buds();}

}, false);

//----------------------------------------------------------------- SHOW_HIDE_LLAMA_MENU -----------------------------------------------------------------

document.getElementById ("toggle_menu").addEventListener ("click", Toggle_Menu, false);
function Toggle_Menu (zEvent) {body.classList.toggle("llama_menu");Toggle_Notice();};

//----------------------------------------------------------------- HIDE_NOTICE -----------------------------------------------------------------

var llama_notice_status = localStorage.getItem('llama_notice');
var llama_version = 2019.10
if(llama_notice_status == llama_version){body.classList.add("hide_notice")}

document.getElementById ("toggle_notice").addEventListener ("click", Toggle_Notice, false);

function Toggle_Notice (zEvent) {
    var llama_notice_status = localStorage.getItem('llama_notice');
        body.classList.add("hide_notice");
        if(llama_notice_status != llama_version){localStorage.setItem('llama_notice', llama_version);}
};

//----------------------------------------------------------------- CUSTOM_MODE -----------------------------------------------------------------

var llama_color_selection1 = localStorage.getItem('llama_color1');
var llama_color_selection2 = localStorage.getItem('llama_color2');
var llama_color_selection3 = localStorage.getItem('llama_color3');
var llama_color_selection4 = localStorage.getItem('llama_color4');
var theme_status = localStorage.getItem('theme');

if(llama_color_selection1){
    document.getElementById("colorSelection1").value = llama_color_selection1;
    document.getElementById("colorSelection2").value = llama_color_selection2;
    document.getElementById("colorSelection3").value = llama_color_selection3;
    document.getElementById("colorSelection4").value = llama_color_selection4;}

if(theme_status == "custommode"){
   document.getElementById("theme_custommode").checked = true;
   document.documentElement.style.setProperty('--custommode-bgcolor', '#' + llama_color_selection1);
   document.documentElement.style.setProperty('--custommode-lightbgcolor', '#' + llama_color_selection2);
   document.documentElement.style.setProperty('--custommode-bordercolor', '#' + llama_color_selection3);
   document.documentElement.style.setProperty('--custommode-textcolor', '#' + llama_color_selection4);
;}

document.getElementById ("Preview_Llama_Color").addEventListener ("click", Preview_Llama_Color, false);
document.getElementById ("Save_Llama_Color").addEventListener ("click", Save_Llama_Color, false);
document.getElementById ("Save_Llama_BG").addEventListener ("click", Save_Llama_BG, false);
document.getElementById ("Remove_Llama_BG").addEventListener ("click", Remove_Llama_BG, false);
document.getElementById ("theme_custommode").addEventListener ("click", Toggle_Theme_Custom, false);
document.getElementById ("toggle_userbg").addEventListener ("click", Toggle_User_BG, false);

//----------------------------------------------------------------- CUSTOM_MODE_TOGGLE -----------------------------------------------------------------

function Toggle_Theme_Custom (zEvent) {
    var color_choice = "custommode";
    var themestatus = localStorage.getItem('theme');
        body.classList.toggle(color_choice);
        if(theme_status != color_choice){localStorage.setItem('theme', color_choice);}
        if(theme_status == color_choice){localStorage.setItem('theme', '');}
//REMOVE OTHER THEMES ON BODY TAG
        body.classList.remove("pinkmode","greenmode","bluemode","mauvemode","orangemode","redmode","purplemode","blackmode","budsmode","smashmode","splatmode","dark");
//END OTHER THEMES
};

//----------------------------------------------------------------- CUSTOM_MODE_SAVE -----------------------------------------------------------------

function Save_Llama_Color (zEvent) {
    var llama_color1 = localStorage.getItem('llama_color1');
    var llama_color2 = localStorage.getItem('llama_color2');
    var llama_color3 = localStorage.getItem('llama_color3');
    var llama_color4 = localStorage.getItem('llama_color4');
    var llama_input1 = document.getElementById('colorSelection1').value;
    var llama_input2 = document.getElementById('colorSelection2').value;
    var llama_input3 = document.getElementById('colorSelection3').value;
    var llama_input4 = document.getElementById('colorSelection4').value;

        if(llama_input1 != ""){
            document.getElementById("theme_custommode").checked = true;
            document.documentElement.style.setProperty('--custommode-bgcolor', '#' + llama_input1);
            document.documentElement.style.setProperty('--custommode-lightbgcolor', '#' + llama_input2);
            document.documentElement.style.setProperty('--custommode-bordercolor', '#' + llama_input3);
            document.documentElement.style.setProperty('--custommode-textcolor', '#' + llama_input4);
            localStorage.setItem('llama_color1', llama_input1);
            localStorage.setItem('llama_color2', llama_input2);
            localStorage.setItem('llama_color3', llama_input3);
            localStorage.setItem('llama_color4', llama_input4);
        } else {
            document.getElementById("CustomMode").checked = false;
            localStorage.setItem('llama_color1', '');
            localStorage.setItem('llama_color2', '');
            localStorage.setItem('llama_color3', '');
            localStorage.setItem('llama_color4', '');}
};

//----------------------------------------------------------------- CUSTOM_MODE_PREVIEW -----------------------------------------------------------------

function Preview_Llama_Color (zEvent) {
    var llama_input1 = document.getElementById('colorSelection1').value;
    var llama_input2 = document.getElementById('colorSelection2').value;
    var llama_input3 = document.getElementById('colorSelection3').value;
    var llama_input4 = document.getElementById('colorSelection4').value;

            document.getElementById("theme_custommode").checked = true;
            document.documentElement.style.setProperty('--custommode-bgcolor', '#' + llama_input1);
            document.documentElement.style.setProperty('--custommode-lightbgcolor', '#' + llama_input2);
            document.documentElement.style.setProperty('--custommode-bordercolor', '#' + llama_input3);
            document.documentElement.style.setProperty('--custommode-textcolor', '#' + llama_input4);
};

//----------------------------------------------------------------- CAM_BG_TOGGLE -----------------------------------------------------------------

function Toggle_User_BG (zEvent) {
    var color_choice = "user_bg";
    var userbg_status = localStorage.getItem('userbg');
        body.classList.toggle(color_choice);
        if(userbg_status != ""){localStorage.setItem('userbg', color_choice);} else {localStorage.setItem('userbg', '');}
};

//----------------------------------------------------------------- SAVE_CAM_BG -----------------------------------------------------------------

var bg_status = localStorage.getItem('user_bg');
var llama_bg = localStorage.getItem('llama_bg1');
var llama_bg_reloader = localStorage.getItem('llama_bg1_reload');
var userbg_status = localStorage.getItem('userbg');

if(userbg_status){body.classList.add(userbg_status)}
if(userbg_status == "user_bg"){document.getElementById("toggle_userbg").checked = true;}
if(llama_bg != ''){document.documentElement.style.setProperty('--user-bg-image', llama_bg);}
if(llama_bg){document.getElementById("bgSelection1").value = llama_bg_reloader;}

function Save_Llama_BG (zEvent) {
    var llama_bg1 = localStorage.getItem('llama_bg1');
    var llama_bginput1 = document.getElementById('bgSelection1').value;

        if(llama_bginput1 != ""){
            var llama_bginput1_url = 'url(' + llama_bginput1 + ')';
            document.documentElement.style.setProperty('--user-bg-image', llama_bginput1_url);
            localStorage.setItem('llama_bg1_reload', llama_bginput1);
            localStorage.setItem('llama_bg1', llama_bginput1_url);
        } else {
            document.documentElement.style.setProperty('--user-bg-image', 'none');
            localStorage.setItem('llama_bg1_reload', '');
            localStorage.setItem('llama_bg1', '');}
};

function Remove_Llama_BG (zEvent) {
            document.getElementById("bgSelection1").value = '';
            document.documentElement.style.setProperty('--user-bg-image', 'none');
            localStorage.setItem('llama_bg1_reload', '');
            localStorage.setItem('llama_bg1', '');
};


//----------------------------------------------------------------- THEME_SELECTOR_TOGGLE -----------------------------------------------------------------

var theme_selector_status = localStorage.getItem('theme_selector');
if(theme_selector_status){body.classList.add(theme_selector_status)}

if(theme_selector_status == "theme_selector_on"){document.getElementById("show_themes").checked = true;}
document.getElementById ("show_themes").addEventListener ("click", Toggle_Theme_Selector, false);

function Toggle_Theme_Selector (zEvent) {
    var turn_theme_select_on = 'theme_selector_on';
    var theme_select = localStorage.getItem('theme_selector');
        body.classList.toggle(turn_theme_select_on);
        if(theme_select != turn_theme_select_on){localStorage.setItem('theme_selector', turn_theme_select_on);} else {localStorage.setItem('theme_selector', '');}
};

//----------------------------------------------------------------- BUBBLE_CHAT_TOGGLE -----------------------------------------------------------------

var bubble_status = localStorage.getItem('bubble_status');
if(bubble_status){body.classList.add(bubble_status)}
if(bubble_status == "bubble_chat"){document.getElementById("bubble_chat").checked = true;}

document.getElementById ("bubble_chat").addEventListener ("click", Toggle_Bubble_Chat, false);

function Toggle_Bubble_Chat (zEvent) {
    var bubble_status = localStorage.getItem('bubble_status');
        body.classList.toggle("bubble_chat");
        if(bubble_status != "bubble_chat"){localStorage.setItem('bubble_status', 'bubble_chat');} else {localStorage.setItem('bubble_status', '');}
};
//----------------------------------------------------------------- CHAT_TOGGLE -----------------------------------------------------------------

var chat_Status = localStorage.getItem('chat');
if(chat_Status){body.classList.add(chat_Status);}

document.getElementById ("Chat_Hider").addEventListener ("click", Toggle_Chat, false);

function Toggle_Chat (cEvent) {
    var chat_Status = localStorage.getItem('chat')
        body.classList.toggle("hide_chat");
        if(chat_Status != "hide_chat"){localStorage.setItem('chat', 'hide_chat');} else {localStorage.setItem('chat', '');}
};

//----------------------------------------------------------------- USER_LIST_TOGGLE -----------------------------------------------------------------

var userlist_Status = localStorage.getItem('ul');
if(userlist_Status){body.classList.add(userlist_Status);}

document.getElementById ("UserList_Hider").addEventListener ("click", Toggle_UserList, false);
function Toggle_UserList (cEvent) {
    var userlist_Status = localStorage.getItem('chat')
        body.classList.toggle("hide_userlist");
        if(userlist_Status != "hide_userlist"){localStorage.setItem('ul', 'hide_userlist');} else {localStorage.setItem('ul', '');}
};

//----------------------------------------------------------------- LTR_TOGGLE -----------------------------------------------------------------

var ltr_Status = localStorage.getItem('ltr');
if(ltr_Status){body.classList.add(ltr_Status);}

document.getElementById ("LTR_Toggle").addEventListener ("click", Toggle_LTR, false);

function Toggle_LTR (cEvent) {
    var ltr_Status = localStorage.getItem('ltr')
        body.classList.toggle("ltr_layout");
        if(ltr_Status != "ltr_layout"){localStorage.setItem('ltr', 'ltr_layout');} else {localStorage.setItem('ltr', '');}
};

//----------------------------------------------------------------- REMOVE_CAM_BORDERS -----------------------------------------------------------------

var border_status = localStorage.getItem('no_border');
if(border_status){body.classList.add(border_status)}
if(border_status == "no_border"){document.getElementById("cam_border").checked = true;}

document.getElementById ("cam_border").addEventListener ("click", Toggle_No_Border, false);

function Toggle_No_Border (zEvent) {
    var yt_status = localStorage.getItem('no_border');
        body.classList.toggle("no_border");
        if(yt_status != "no_border"){localStorage.setItem('no_border', 'no_border');}
        if(yt_status == "no_border"){localStorage.setItem('no_border', '');}
};


//----------------------------------------------------------------- REMOVE_CAM_PADDING -----------------------------------------------------------------

var pad_status = localStorage.getItem('no_padding');
if(pad_status){body.classList.add(pad_status)}
if(pad_status == "no_padding"){document.getElementById("cam_space").checked = true;}

document.getElementById ("cam_space").addEventListener ("click", Toggle_No_Padding, false);

function Toggle_No_Padding (zEvent) {
    var pad_status = localStorage.getItem('no_padding');
        body.classList.toggle("no_padding");
        if(pad_status != "no_padding"){localStorage.setItem('no_padding', 'no_padding');}
        if(pad_status == "no_padding"){localStorage.setItem('no_padding', '');}
};

//----------------------------------------------------------------- TOGGLE_MINI_YT -----------------------------------------------------------------

var yt_status = localStorage.getItem('yt');
if(yt_status){body.classList.add(yt_status)}
if(yt_status == "mini_yt"){document.getElementById("mini_yt").checked = true;}

document.getElementById ("mini_yt").addEventListener ("click", Toggle_MiniYT, false);

function Toggle_MiniYT (zEvent) {
    var yt_status = localStorage.getItem('yt');
        body.classList.toggle("mini_yt");
        if(yt_status != "mini_yt"){localStorage.setItem('yt', 'mini_yt');}
        if(yt_status == "mini_yt"){localStorage.setItem('yt', '');}
};

//----------------------------------------------------------------- REAPPLY_THEME_CHOICE -----------------------------------------------------------------

if(theme_status){body.classList.add(theme_status)}

//------- SET DROPDOWN CHOICE -------
if(theme_status == ""){document.getElementById("theme_wizard").selectedIndex = 0;}
if(theme_status == "pinkmode"){document.getElementById("theme_wizard").selectedIndex = 2;}
if(theme_status == "greenmode"){document.getElementById("theme_wizard").selectedIndex = 3;}
if(theme_status == "bluemode"){document.getElementById("theme_wizard").selectedIndex = 4;}
if(theme_status == "mauvemode"){document.getElementById("theme_wizard").selectedIndex = 5;}
if(theme_status == "orangemode"){document.getElementById("theme_wizard").selectedIndex = 6;}
if(theme_status == "redmode"){document.getElementById("theme_wizard").selectedIndex = 7;}
if(theme_status == "purplemode"){document.getElementById("theme_wizard").selectedIndex = 8;}
if(theme_status == "blackmode"){document.getElementById("theme_wizard").selectedIndex = 9;}
if(theme_status == "budsmode"){document.getElementById("theme_wizard").selectedIndex = 10;}

//----------------------------------------------------------------- THEME_TOGGLE_DEFAULT -----------------------------------------------------------------

function Toggle_Theme_Default (zEvent) {
    localStorage.setItem('theme', '');
//REMOVE OTHER THEMES ON BODY TAG
        body.classList.remove("custommode","pinkmode","greenmode","bluemode","mauvemode","orangemode","redmode","purplemode","blackmode","whitemode","budsmode","smashmode","splatmode","dark");
//END OTHER THEMES
};

//----------------------------------------------------------------- THEME_TOGGLE_PINK -----------------------------------------------------------------

function Toggle_Theme_Pink (zEvent) {
    var color_choice = "pinkmode";
    var theme_status = localStorage.getItem('theme');
        body.classList.toggle(color_choice);
        if(theme_status != color_choice){localStorage.setItem('theme', color_choice);}
        if(theme_status == color_choice){localStorage.setItem('theme', '');}
//REMOVE OTHER THEMES ON BODY TAG
        body.classList.remove("custommode","greenmode","bluemode","mauvemode","orangemode","redmode","purplemode","blackmode","whitemode","budsmode","smashmode","splatmode","dark");
//END OTHER THEMES
};

//----------------------------------------------------------------- THEME_TOGGLE_GREEN -----------------------------------------------------------------

function Toggle_Theme_Green (zEvent) {
    var color_choice = "greenmode";
    var theme_status = localStorage.getItem('theme');
        body.classList.toggle(color_choice);
        if(theme_status != color_choice){localStorage.setItem('theme', color_choice);}
        if(theme_status == color_choice){localStorage.setItem('theme', '');}
//REMOVE OTHER THEMES ON BODY TAG
        body.classList.remove("custommode","pinkmode","bluemode","mauvemode","orangemode","redmode","purplemode","blackmode","budsmode","smashmode","splatmode","dark");
//END OTHER THEMES
};

//----------------------------------------------------------------- THEME_TOGGLE_BLUE -----------------------------------------------------------------

function Toggle_Theme_Blue (zEvent) {
    var color_choice = "bluemode";
    var theme_status = localStorage.getItem('theme');
        body.classList.toggle(color_choice);
        if(theme_status != color_choice){localStorage.setItem('theme', color_choice);}
        if(theme_status == color_choice){localStorage.setItem('theme', '');}
//REMOVE OTHER THEMES ON BODY TAG
        body.classList.remove("custommode","pinkmode","greenmode","mauvemode","orangemode","redmode","purplemode","blackmode","budsmode","smashmode","splatmode");
//END OTHER THEMES
};

//----------------------------------------------------------------- THEME_TOGGLE_MAUVE -----------------------------------------------------------------

function Toggle_Theme_Mauve (zEvent) {
    var color_choice = "mauvemode";
    var theme_status = localStorage.getItem('theme');
        body.classList.toggle(color_choice);
        if(theme_status != color_choice){localStorage.setItem('theme', color_choice);}
        if(theme_status == color_choice){localStorage.setItem('theme', '');}
//REMOVE OTHER THEMES ON BODY TAG
        body.classList.remove("custommode","pinkmode","greenmode","bluemode","orangemode","redmode","purplemode","blackmode","budsmode","smashmode","splatmode");
//END OTHER THEMES
};

//----------------------------------------------------------------- THEME_TOGGLE_ORANGE -----------------------------------------------------------------

function Toggle_Theme_Orange (zEvent) {
    var color_choice = "orangemode";
    var theme_status = localStorage.getItem('theme');
        body.classList.toggle(color_choice);
        if(theme_status != color_choice){localStorage.setItem('theme', color_choice);}
        if(theme_status == color_choice){localStorage.setItem('theme', '');}
//REMOVE OTHER THEMES ON BODY TAG
        body.classList.remove("custommode","pinkmode","greenmode","bluemode","mauvemode","redmode","purplemode","blackmode","budsmode","smashmode","splatmode");
//END OTHER THEMES
};

//----------------------------------------------------------------- THEME_TOGGLE_RED -----------------------------------------------------------------

function Toggle_Theme_Red (zEvent) {
    var color_choice = "redmode";
    var theme_status = localStorage.getItem('theme');
        body.classList.toggle(color_choice);
        if(theme_status != color_choice){localStorage.setItem('theme', color_choice);}
        if(theme_status == color_choice){localStorage.setItem('theme', '');}
//REMOVE OTHER THEMES ON BODY TAG
        body.classList.remove("custommode","pinkmode","greenmode","bluemode","mauvemode","orangemode","purplemode","blackmode","budsmode","smashmode","splatmode");
//END OTHER THEMES
};

//----------------------------------------------------------------- THEME_TOGGLE_PURPLE -----------------------------------------------------------------

function Toggle_Theme_Purple (zEvent) {
    var color_choice = "purplemode";
    var theme_status = localStorage.getItem('theme');
        body.classList.toggle(color_choice);
        if(theme_status != color_choice){localStorage.setItem('theme', color_choice);}
        if(theme_status == color_choice){localStorage.setItem('theme', '');}
//REMOVE OTHER THEMES ON BODY TAG
        body.classList.remove("custommode","pinkmode","greenmode","bluemode","mauvemode","orangemode","redmode","blackmode","budsmode","smashmode","splatmode");
//END OTHER THEMES
};

//----------------------------------------------------------------- THEME_TOGGLE_BLACK -----------------------------------------------------------------

function Toggle_Theme_Black (zEvent) {
    var color_choice = "blackmode";
    var theme_status = localStorage.getItem('theme');
        body.classList.toggle(color_choice);
        if(theme_status != color_choice){localStorage.setItem('theme', color_choice);}
        if(theme_status == color_choice){localStorage.setItem('theme', '');}
//REMOVE OTHER THEMES ON BODY TAG
        body.classList.remove("custommode","pinkmode","greenmode","bluemode","mauvemode","orangemode","redmode","purplemode","budsmode","smashmode","splatmode","dark");
//END OTHER THEMES
};

//----------------------------------------------------------------- THEME_TOGGLE_BUDS -----------------------------------------------------------------

function Toggle_Theme_Buds (zEvent) {
    var color_choice = "budsmode";
    var theme_status = localStorage.getItem('theme');
        body.classList.toggle(color_choice);
        if(theme_status != color_choice){localStorage.setItem('theme', color_choice);}
        if(theme_status == color_choice){localStorage.setItem('theme', '');}
//REMOVE OTHER THEMES ON BODY TAG
        body.classList.remove("custommode","pinkmode","greenmode","bluemode","mauvemode","orangemode","redmode","purplemode","blackmode","smashmode","splatmode");
//END OTHER THEMES
};

