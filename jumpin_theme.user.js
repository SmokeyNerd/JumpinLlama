// ==UserScript==
// @name         JumpinLlama : 2019 Theme
// @namespace    http://www.smokeyllama.com
// @version      2019.31
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
// @updateURL    https://github.com/SmokeyLlama/jumpinllama/raw/master/jumpin_theme.user.js
// @downloadURL  https://github.com/SmokeyLlama/jumpinllama/raw/master/jumpin_theme.user.js
// @require      https://github.com/SmokeyLlama/jumpinllama/raw/master/jscolor.js


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

:root {

    --user-bg-image: none;

    --smash-bgcolor: #282828;
    --smash-bordercolor: #3c3c3c;
    --smash-lightbgcolor: #282828;
    --smash-textcolor: #FFFFFF;
    --smash-headerbg: url(https://i.ibb.co/BK1CXz4/smashlogo.jpg);
    --smash-roombg: url(https://i.ibb.co/JxkgSdj/melee-minimal-wallpaper-by-browniehooves-d8lwcvk.png);
    --smash-userbg: url(https://i.ibb.co/nRNHL9C/20444930186-7a639da784-o.png);
    --smash-chatbg: url(https://i.ibb.co/ZSYHQs7/chat.jpg);
    --smash-ptt: url(https://i.ibb.co/7KSTsdj/smash-clipart-87526.png);

    --splatmode-bgcolor: #282828;
    --splatmode-bordercolor: #51bc02;
    --splatmode-lightbgcolor: #282828;
    --splatmode-textcolor: #FFFFFF;
    --splatmode-headerbg: url(https://i.ibb.co/XsTjVk0/splay-bg-header2.png);
    --splatmode-roombg: url(https://i.ibb.co/C18JNgK/splatbg.jpg);
    --splatmode-userbg: url(https://i.ibb.co/7nrB9LT/test.png);
    --splatmode-chatbg: url(https://i.ibb.co/TrKBZFn/splat-chat-bg3.png);
    --splatmode-ptt: url(https://i.ibb.co/3dHQVhC/splat-mic2.png);
    --splatmode-innerchatbg: url(https://i.ibb.co/vBXky7C/splat-chat-bg.png);
    --splatmode-messagebg: url(https://i.ibb.co/FWFnhc4/messagebg.png);
    --splatmode-squid: url(https://i.ibb.co/FKNpP6D/squid.png);
    --splatmode-squid2: url(https://i.ibb.co/KLGF7FH/squid2.png);
    --splatmode-squid3: url(https://i.ibb.co/Wc9D0Xj/squid3.png);
}

/* ------- BUBBLE CHAT ----- */
.bubble_chat .chat__Message {
    display: block;
    padding-right: 0;
}

.bubble_chat .chat__MessageHandle {
    padding-left: 11px;
    display: block;
    background-color: transparent;
    border-radius: 25px;
    margin: 0px;
    position: relative;
    top: 0px;
}
.bubble_chat .chat__MessageBody > span:nth-child(2) {margin-left:10px;display: inline-block;}
.bubble_chat .chat__MessageBody {
border:1px solid black;
    position: relative;
    top:-17px;
    margin-top: 15px !important;
    background-color: #cfcfcf;
    border-radius: 25px;
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
.chat__MessageBody  {padding-right: 10px;padding-left: 10px;}
.chat__MessageBody-status {
    color: #fff;
    background-color: #22add5;
    min-height: 18px;
    padding-left: 10px;padding-right: 10px;}



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
.user_bg .feature_menu {
height: 350px !important;}
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



.cams__Header {
    border-radius: 100px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    background: #c7cfd9;
    border:1px solid black;
    border-right:0px;}
.chat__Header {
    border-radius: 100px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border:1px solid black;
    border-left:0px;}

.custommode .chat__FeedWrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: var(--custommode-bgcolor);
    touch-action: none;
}

.chat__HeaderOption {
    border-radius: 5px;
    margin: 2px;
    min-height: 27px;border:1px solid black;
}

.cams, .chat, .chat__FeedWrapper {background:transparent;}
.chat__MessageBody {
border-radius: 25px;}

.chat__UserListItem {
    border: 1px solid black;
    border-radius: 6px;}



/*------------------------------------------------------------------------------------- PINK_THEME ---*/
:root {
    --pinkmode-bgcolor: #ffd1dc;
    --pinkmode-bordercolor: #ea98ab;
    --pinkmode-lightbgcolor: #ffe1e6;
    --pinkmode-textcolor: #ea98ab;}
.pinkmode .scroll-shadow {background: var(--pinkmode-bgcolor);background-color: var(--pinkmode-bgcolor);}
.pinkmode .modal__Body {background: var(--pinkmode-bgcolor);}
.pinkmode > .reg_checkmark, .pinkmode > .check_head {
    color: var(--pinkmode-bordercolor);}

.pinkmode .reg_checkmark {
    background-color: var(--pinkmode-lightbgcolor);
    border-color: var(--pinkmode-bordercolor);
}

.pinkmode .reg_checkmark:after {
    border-color: var(--pinkmode-bordercolor) !important;
}

.pinkmode > .reg_checkmark:hover input ~ .checkmark {background-color: var(--pinkmode-bgcolor);}

.pinkmode #theme_wizard, #theme_wizard > option.pink_mode {
    background-color: var(--pinkmode-bgcolor);
    border-color: var(--pinkmode-bordercolor);
color:var(--pinkmode-textcolor);}

/* ------------------------------ PINK_LLAMA_MENU ----------------------------------- */
.pinkmode .llama_menu .feature_menu {
    color: var(--pinkmode-textcolor);}

.pinkmode #Extra_Menu {
    color: var(--pinkmode-textcolor);}

.pinkmode #toggle_menu {
    color: var(--pinkmode-textcolor);
    background-color: var(--pinkmode-bgcolor);
    border-color: var(--pinkmode-bordercolor);}

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

/*--END LLAMA MENU--*/

.pinkmode .roomHeader__LogoText,
.pinkmode .tabs__Item,
.pinkmode .tabs__Item.active
{color:var(--pinkmode-textcolor);}
.pinkmode .cams__InfoCount {color:var(--pinkmode-textcolor);}
.pinkmode .cams__InfoLabel {color:var(--pinkmode-textcolor);}
.pinkmode .cams__RoomName {color:var(--pinkmode-textcolor);}
.pinkmode .roomHeader__UserAction {
background-color:var(--pinkmode-bordercolor);
color:var(--pinkmode-bgcolor);
border-color:var(--pinkmode-bordercolor);}
.pinkmode .mobileHidden {color:var(--pinkmode-bgcolor);}
.pinkmode .button-default {color:var(--pinkmode-bgcolor);background-color:var(--pinkmode-bordercolor);}
.pinkmode .button-white {background-color:var(--pinkmode-bordercolor);}
.pinkmode .fa-envelope:before {color:var(--pinkmode-bgcolor);}
.pinkmode .chat__UserListItem {
    border-color:var(--pinkmode-bordercolor);
background-color:var(--pinkmode-bordercolor);}
.pinkmode .fa-clipboard:before {color:var(--pinkmode-bgcolor);}

.pinkmode .fa-user:before {color:var(--pinkmode-bgcolor);}

.pinkmode .userList__UserHandle-current {color:var(--pinkmode-bgcolor);}

.pinkmode .mediaSources__SourceWrapper {background-color:var(--pinkmode-bordercolor);}
.pinkmode .tabs__Item.active::after {background-color:var(--pinkmode-bordercolor);}
.pinkmode.ltr_layout .chat__UserList {border-color:var(--pinkmode-bordercolor);}
.pinkmode #Chat_Hider::after {background:var(--pinkmode-bordercolor);}
.pinkmode #UserList_Hider::after {background:var(--pinkmode-bordercolor);}
.pinkmode.ltr_layout #LTR_Toggle::after {background:var(--pinkmode-bordercolor);}

.pinkmode .room {background-color:var(--pinkmode-lightbgcolor);}
.pinkmode .modal__Window {border: 1px solid var(--pinkmode-bordercolor);}
.pinkmode .chat__HeaderOption {border-color: var(--pinkmode-bordercolor);background-color: var(--pinkmode-bordercolor);color: var(--pinkmode-lightbgcolor);}

.pinkmode .fa.fa-gear:before, .pinkmode .icon--hd {color: var(--pinkmode-lightbgcolor);}

.pinkmode .chat__MessageBody {
    background-color: var(--pinkmode-bgcolor);
    border-color: var(--pinkmode-bordercolor);}

.pinkmode .chat__MessageBody-status {
    color: var(--pinkmode-textcolor);
    background-color: var(--pinkmode-lightbgcolor);
    border-color: var(--pinkmode-bordercolor);}

.pinkmode .chat__MessageBody-link {
    color:#ff0000;}

.pinkmode .chat__MessageTimestamp {
    color: var(--pinkmode-textcolor);}

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
    background-color: var(--pinkmode-bordercolor);
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

.pinkmode .cams__Header {
    background-color:  var(--pinkmode-bgcolor) !important;
    border-color: var(--pinkmode-bordercolor);}

.pinkmode .cams__Cam {
    border-color:  var(--pinkmode-bordercolor) !important;}



/* --------- CHAT --------- */
.pinkmode .chat__Header {
    background-color: var(--pinkmode-bgcolor) !important;
    border-color: var(--pinkmode-bordercolor);}

.pinkmode .chat__FeedWrapper {
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
:root {
    --greenmode-bgcolor: #042500;
    --greenmode-bordercolor: #217c16;
    --greenmode-lightbgcolor: #00500d;
    --greenmode-textcolor: #fff;}

.greenmode .modal__Body {background: var(--greenmode-bgcolor);background-color: var(--greenmode-bgcolor);}
.greenmode .scroll-shadow {background-color: var(--greenmode-bgcolor);background: var(--greenmode-bgcolor);}
.greenmode > .reg_checkmark, .greenmode > .check_head {color: var(--greenmode-bordercolor);}

.greenmode .reg_checkmark {
    background-color: var(--greenmode-lightbgcolor);
    border-color: var(--greenmode-bordercolor);
}

.greenmode .reg_checkmark:after {
    border-color: var(--greenmode-bordercolor) !important;
}

.greenmode > .reg_checkmark:hover input ~ .checkmark {background-color: var(--greenmode-bgcolor);}

.greenmode #theme_wizard, #theme_wizard > option.green_mode {
    background-color: var(--greenmode-lightbgcolor);
    border-color: var(--greenmode-bordercolor);
color:var(--greenmode-textcolor);}

/* ------------------------------ green_LLAMA_MENU ----------------------------------- */
.greenmode .llama_menu .feature_menu {
    color: var(--greenmode-textcolor);}

.greenmode #Extra_Menu {
    color: var(--greenmode-textcolor);}

.greenmode #toggle_menu {
    color: var(--greenmode-textcolor);
    background-color: var(--greenmode-bgcolor);
    border-color: var(--greenmode-bordercolor);}

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

/*--END LLAMA MENU--*/

.greenmode .roomHeader__LogoText,
.greenmode .tabs__Item,
.greenmode .tabs__Item.active
{color:var(--greenmode-textcolor);}
.greenmode .cams__InfoCount {color:var(--greenmode-textcolor);}
.greenmode .cams__InfoLabel {color:var(--greenmode-textcolor);}
.greenmode .cams__RoomName {color:var(--greenmode-textcolor);}
.greenmode .roomHeader__UserAction {
background-color:var(--greenmode-bordercolor);
color:var(--greenmode-bgcolor);
border-color:var(--greenmode-bordercolor);}
.greenmode .mobileHidden {color:var(--greenmode-bgcolor);}
.greenmode .button-default {color:var(--greenmode-bgcolor);background-color:var(--greenmode-bordercolor);}
.greenmode .button-white {background-color:var(--greenmode-bordercolor);}
.greenmode .fa-envelope:before {color:var(--greenmode-bgcolor);}
.greenmode .chat__UserListItem {
    border-color:var(--greenmode-bordercolor);
background-color:var(--greenmode-bordercolor);}
.greenmode .fa-clipboard:before {color:var(--greenmode-bgcolor);}

.greenmode .fa-user:before {color:var(--greenmode-bgcolor);}

.greenmode .userList__UserHandle-current {color:var(--greenmode-bgcolor);}

.greenmode .mediaSources__SourceWrapper {background-color:var(--greenmode-bordercolor);}
.greenmode .tabs__Item.active::after {background-color:var(--greenmode-bordercolor);}
.greenmode.ltr_layout .chat__UserList {border-color:var(--greenmode-bordercolor);}
.greenmode #Chat_Hider::after {background:var(--greenmode-bordercolor);}
.greenmode #UserList_Hider::after {background:var(--greenmode-bordercolor);}
.greenmode.ltr_layout #LTR_Toggle::after {background:var(--greenmode-bordercolor);}

.greenmode .room {background-color:var(--greenmode-lightbgcolor);}
.greenmode .modal__Window {border: 1px solid var(--greenmode-bordercolor);}
.greenmode .chat__HeaderOption {border-color: var(--greenmode-bordercolor);background-color: var(--greenmode-bordercolor);color: var(--greenmode-lightbgcolor);}

.greenmode .fa.fa-gear:before, .greenmode .icon--hd {color: var(--greenmode-lightbgcolor);}

.greenmode .chat__MessageBody {
    background-color: var(--greenmode-bgcolor);
    border-color: var(--greenmode-bordercolor);}

.greenmode .chat__MessageBody-status {
    color: var(--greenmode-textcolor);
    background-color: var(--greenmode-lightbgcolor);
    border-color: var(--greenmode-bordercolor);}

.greenmode .chat__MessageBody-link {
    color:#ff0000;}

.greenmode .chat__MessageTimestamp {
    color: var(--greenmode-textcolor);}

.greenmode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--greenmode-textcolor);}

.greenmode .roomHeader {
    background-color: var(--greenmode-lightbgcolor);}

.greenmode .privateMessages__Empty{
    background-color: var(--greenmode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.greenmode .modal__Body, .greenmode .modal__Footer {
    background-color: var(--greenmode-bgcolor) !important;
    border-color:#7289DA;}

.greenmode .modal__Header {
    background-color: var(--greenmode-bordercolor);
    border-color:  var(--greenmode-bordercolor);
    border-bottom: 0px;}

.greenmode .modal__SubText {
    color:  var(--greenmode-textcolor) !important;}

.greenmode .input {
    color:  var(--greenmode-textcolor) !important;
    border-color:  var(--greenmode-bordercolor) !important;
    background-color: var(--greenmode-bgcolor) !important;}

.greenmode .button-blue {
    background-color: var(--greenmode-bordercolor);
    color:  var(--greenmode-lightbgcolor);
    border:1px solid  var(--greenmode-bordercolor);}

.greenmode .chat__ShareCopy {
    background-color: var(--greenmode-bordercolor);}

/* --------- CAMERAS --------- */

.greenmode .cams__Header {
    background-color:  var(--greenmode-bgcolor) !important;
    border-color: var(--greenmode-bordercolor);}

.greenmode .cams__Cam {
    border-color:  var(--greenmode-bordercolor) !important;}



/* --------- CHAT --------- */
.greenmode .chat__Header {
    background-color: var(--greenmode-bgcolor) !important;
    border-color: var(--greenmode-bordercolor);}

.greenmode .chat__FeedWrapper {
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
    background-color: var(--greenmode-bgcolor);}
/*------------------------------------------------------------------------------------- blue_THEME ---*/
:root {
    --bluemode-bgcolor: #111949;
    --bluemode-bordercolor: #596ce0;
    --bluemode-lightbgcolor: #2a388b;
    --bluemode-textcolor: #fff;}

.bluemode .scroll-shadow {background: var(--bluemode-bgcolor);background-color: var(--bluemode-bgcolor);}
.bluemode .modal__Body {background: var(--bluemode-bgcolor);}
.bluemode > .reg_checkmark, .bluemode > .check_head {
    color: var(--bluemode-bordercolor);}

.bluemode .reg_checkmark {
    background-color: var(--bluemode-lightbgcolor);
    border-color: var(--bluemode-bordercolor);
}

.bluemode .reg_checkmark:after {
    border-color: var(--bluemode-bordercolor) !important;
}

.bluemode > .reg_checkmark:hover input ~ .checkmark {background-color: var(--bluemode-bgcolor);}

.bluemode #theme_wizard, #theme_wizard > option.blue_mode {
    background-color: var(--bluemode-lightbgcolor);
    border-color: var(--bluemode-bordercolor);
color:var(--bluemode-textcolor);}

/* ------------------------------ blue_LLAMA_MENU ----------------------------------- */
.bluemode .llama_menu .feature_menu {
    color: var(--bluemode-textcolor);}

.bluemode #Extra_Menu {
    color: var(--bluemode-textcolor);}

.bluemode #toggle_menu {
    color: var(--bluemode-textcolor);
    background-color: var(--bluemode-bgcolor);
    border-color: var(--bluemode-bordercolor);}

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

/*--END LLAMA MENU--*/

.bluemode .roomHeader__LogoText,
.bluemode .tabs__Item,
.bluemode .tabs__Item.active
{color:var(--bluemode-textcolor);}
.bluemode .cams__InfoCount {color:var(--bluemode-textcolor);}
.bluemode .cams__InfoLabel {color:var(--bluemode-textcolor);}
.bluemode .cams__RoomName {color:var(--bluemode-textcolor);}
.bluemode .roomHeader__UserAction {
background-color:var(--bluemode-bordercolor);
color:var(--bluemode-bgcolor);
border-color:var(--bluemode-bordercolor);}
.bluemode .mobileHidden {color:var(--bluemode-bgcolor);}
.bluemode .button-default {color:var(--bluemode-bgcolor);background-color:var(--bluemode-bordercolor);}
.bluemode .button-white {background-color:var(--bluemode-bordercolor);}
.bluemode .fa-envelope:before {color:var(--bluemode-bgcolor);}
.bluemode .chat__UserListItem {
    border-color:var(--bluemode-bordercolor);
background-color:var(--bluemode-bordercolor);}
.bluemode .fa-clipboard:before {color:var(--bluemode-bgcolor);}

.bluemode .fa-user:before {color:var(--bluemode-bgcolor);}

.bluemode .userList__UserHandle-current {color:var(--bluemode-bgcolor);}

.bluemode .mediaSources__SourceWrapper {background-color:var(--bluemode-bordercolor);}
.bluemode .tabs__Item.active::after {background-color:var(--bluemode-bordercolor);}
.bluemode.ltr_layout .chat__UserList {border-color:var(--bluemode-bordercolor);}
.bluemode #Chat_Hider::after {background:var(--bluemode-bordercolor);}
.bluemode #UserList_Hider::after {background:var(--bluemode-bordercolor);}
.bluemode.ltr_layout #LTR_Toggle::after {background:var(--bluemode-bordercolor);}

.bluemode .room {background-color:var(--bluemode-lightbgcolor);}
.bluemode .modal__Window {border: 1px solid var(--bluemode-bordercolor);}
.bluemode .chat__HeaderOption {border-color: var(--bluemode-bordercolor);background-color: var(--bluemode-bordercolor);color: var(--bluemode-lightbgcolor);}

.bluemode .fa.fa-gear:before, .bluemode .icon--hd {color: var(--bluemode-lightbgcolor);}

.bluemode .chat__MessageBody {
    background-color: var(--bluemode-bgcolor);
    border-color: var(--bluemode-bordercolor);}

.bluemode .chat__MessageBody-status {
    color: var(--bluemode-textcolor);
    background-color: var(--bluemode-lightbgcolor);
    border-color: var(--bluemode-bordercolor);}

.bluemode .chat__MessageBody-link {
    color:#ff0000;}

.bluemode .chat__MessageTimestamp {
    color: var(--bluemode-textcolor);}

.bluemode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--bluemode-textcolor);}

.bluemode .roomHeader {
    background-color: var(--bluemode-lightbgcolor);}

.bluemode .privateMessages__Empty{
    background-color: var(--bluemode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.bluemode .modal__Body, .bluemode .modal__Footer {
    background-color: var(--bluemode-bgcolor) !important;
    border-color:#7289DA;}

.bluemode .modal__Header {
    background-color: var(--bluemode-bordercolor);
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

/* --------- CAMERAS --------- */

.bluemode .cams__Header {
    background-color:  var(--bluemode-bgcolor) !important;
    border-color: var(--bluemode-bordercolor);}

.bluemode .cams__Cam {
    border-color:  var(--bluemode-bordercolor) !important;}



/* --------- CHAT --------- */
.bluemode .chat__Header {
    background-color: var(--bluemode-bgcolor) !important;
    border-color: var(--bluemode-bordercolor);}

.bluemode .chat__FeedWrapper {
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
    background-color: var(--bluemode-bgcolor);}


/*------------------------------------------------------------------------------------- mauve_THEME ---*/
:root {
    --mauvemode-bgcolor: #9168b2;
    --mauvemode-bordercolor: #d6b7ef;
    --mauvemode-lightbgcolor: #BF8FE5;
    --mauvemode-textcolor: #000000;}

.mauvemode .modal__Body {background: var(--mauvemode-bgcolor);background-color: var(--mauvemode-bgcolor);}
.mauvemode .scroll-shadow {background-color: var(--mauvemode-bgcolor);background: var(--mauvemode-bgcolor);}
.mauvemode > .reg_checkmark, .mauvemode > .check_head {color: var(--mauvemode-bordercolor);}

.mauvemode .reg_checkmark {
    background-color: var(--mauvemode-lightbgcolor);
    border-color: var(--mauvemode-bordercolor);
}

.mauvemode .reg_checkmark:after {
    border-color: var(--mauvemode-bordercolor) !important;
}

.mauvemode > .reg_checkmark:hover input ~ .checkmark {background-color: var(--mauvemode-bgcolor);}

.mauvemode #theme_wizard, #theme_wizard > option.mauve_mode {
    background-color: var(--mauvemode-lightbgcolor);
    border-color: var(--mauvemode-bordercolor);
color:var(--mauvemode-textcolor);}

/* ------------------------------ mauve_LLAMA_MENU ----------------------------------- */
.mauvemode .llama_menu .feature_menu {
    color: var(--mauvemode-textcolor);}

.mauvemode #Extra_Menu {
    color: var(--mauvemode-textcolor);}

.mauvemode #toggle_menu {
    color: var(--mauvemode-textcolor);
    background-color: var(--mauvemode-bgcolor);
    border-color: var(--mauvemode-bordercolor);}

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

/*--END LLAMA MENU--*/

.mauvemode .roomHeader__LogoText,
.mauvemode .tabs__Item,
.mauvemode .tabs__Item.active
{color:var(--mauvemode-textcolor);}
.mauvemode .cams__InfoCount {color:var(--mauvemode-textcolor);}
.mauvemode .cams__InfoLabel {color:var(--mauvemode-textcolor);}
.mauvemode .cams__RoomName {color:var(--mauvemode-textcolor);}
.mauvemode .roomHeader__UserAction {
background-color:var(--mauvemode-bordercolor);
color:var(--mauvemode-bgcolor);
border-color:var(--mauvemode-bordercolor);}
.mauvemode .mobileHidden {color:var(--mauvemode-bgcolor);}
.mauvemode .button-default {color:var(--mauvemode-bgcolor);background-color:var(--mauvemode-bordercolor);}
.mauvemode .button-white {background-color:var(--mauvemode-bordercolor);}
.mauvemode .fa-envelope:before {color:var(--mauvemode-bgcolor);}
.mauvemode .chat__UserListItem {
    border-color:var(--mauvemode-bordercolor);
background-color:var(--mauvemode-bordercolor);}
.mauvemode .fa-clipboard:before {color:var(--mauvemode-bgcolor);}

.mauvemode .fa-user:before {color:var(--mauvemode-bgcolor);}

.mauvemode .userList__UserHandle-current {color:var(--mauvemode-bgcolor);}

.mauvemode .mediaSources__SourceWrapper {background-color:var(--mauvemode-bordercolor);}
.mauvemode .tabs__Item.active::after {background-color:var(--mauvemode-bordercolor);}
.mauvemode.ltr_layout .chat__UserList {border-color:var(--mauvemode-bordercolor);}
.mauvemode #Chat_Hider::after {background:var(--mauvemode-bordercolor);}
.mauvemode #UserList_Hider::after {background:var(--mauvemode-bordercolor);}
.mauvemode.ltr_layout #LTR_Toggle::after {background:var(--mauvemode-bordercolor);}

.mauvemode .room {background-color:var(--mauvemode-lightbgcolor);}
.mauvemode .modal__Window {border: 1px solid var(--mauvemode-bordercolor);}
.mauvemode .chat__HeaderOption {border-color: var(--mauvemode-bordercolor);background-color: var(--mauvemode-bordercolor);color: var(--mauvemode-lightbgcolor);}

.mauvemode .fa.fa-gear:before, .mauvemode .icon--hd {color: var(--mauvemode-lightbgcolor);}

.mauvemode .chat__MessageBody {
    background-color: var(--mauvemode-bgcolor);
    border-color: var(--mauvemode-bordercolor);}

.mauvemode .chat__MessageBody-status {
    color: var(--mauvemode-textcolor);
    background-color: var(--mauvemode-lightbgcolor);
    border-color: var(--mauvemode-bordercolor);}

.mauvemode .chat__MessageBody-link {
    color:#ff0000;}

.mauvemode .chat__MessageTimestamp {
    color: var(--mauvemode-textcolor);}

.mauvemode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--mauvemode-textcolor);}

.mauvemode .roomHeader {
    background-color: var(--mauvemode-lightbgcolor);}

.mauvemode .privateMessages__Empty{
    background-color: var(--mauvemode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.mauvemode .modal__Body, .mauvemode .modal__Footer {
    background-color: var(--mauvemode-bgcolor) !important;
    border-color:#7289DA;}

.mauvemode .modal__Header {
    background-color: var(--mauvemode-bordercolor);
    border-color:  var(--mauvemode-bordercolor);
    border-bottom: 0px;}

.mauvemode .modal__SubText {
    color:  var(--mauvemode-textcolor) !important;}

.mauvemode .input {
    color:  var(--mauvemode-textcolor) !important;
    border-color:  var(--mauvemode-bordercolor) !important;
    background-color: var(--mauvemode-bgcolor) !important;}

.mauvemode .button-blue {
    background-color: var(--mauvemode-bordercolor);
    color:  var(--mauvemode-lightbgcolor);
    border:1px solid  var(--mauvemode-bordercolor);}

.mauvemode .chat__ShareCopy {
    background-color: var(--mauvemode-bordercolor);}

/* --------- CAMERAS --------- */

.mauvemode .cams__Header {
    background-color:  var(--mauvemode-bgcolor) !important;
    border-color: var(--mauvemode-bordercolor);}

.mauvemode .cams__Cam {
    border-color:  var(--mauvemode-bordercolor) !important;}



/* --------- CHAT --------- */
.mauvemode .chat__Header {
    background-color: var(--mauvemode-bgcolor) !important;
    border-color: var(--mauvemode-bordercolor);}

.mauvemode .chat__FeedWrapper {
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
    background-color: var(--mauvemode-bgcolor);}


/*------------------------------------------------------------------------------------- orange_THEME ---*/
:root {
    --orangemode-bgcolor: #b33700;
    --orangemode-bordercolor: #ff8d10;
    --orangemode-lightbgcolor: #ff4f00;
    --orangemode-textcolor: #000000;}

.orangemode .modal__Body {background: var(--orangemode-bgcolor);background-color: var(--orangemode-bgcolor);}
.orangemode .scroll-shadow {background-color: var(--orangemode-bgcolor);background: var(--orangemode-bgcolor);}
.orangemode > .reg_checkmark, .orangemode > .check_head {color: var(--orangemode-bordercolor);}

.orangemode .reg_checkmark {
    background-color: var(--orangemode-lightbgcolor);
    border-color: var(--orangemode-bordercolor);
}

.orangemode .reg_checkmark:after {
    border-color: var(--orangemode-bordercolor) !important;
}

.orangemode > .reg_checkmark:hover input ~ .checkmark {background-color: var(--orangemode-bgcolor);}

.orangemode #theme_wizard, #theme_wizard > option.orange_mode {
    background-color: var(--orangemode-lightbgcolor);
    border-color: var(--orangemode-bordercolor);
color:var(--orangemode-textcolor);}

/* ------------------------------ orange_LLAMA_MENU ----------------------------------- */
.orangemode .llama_menu .feature_menu {
    color: var(--orangemode-textcolor);}

.orangemode #Extra_Menu {
    color: var(--orangemode-textcolor);}

.orangemode #toggle_menu {
    color: var(--orangemode-textcolor);
    background-color: var(--orangemode-bgcolor);
    border-color: var(--orangemode-bordercolor);}

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

/*--END LLAMA MENU--*/

.orangemode .roomHeader__LogoText,
.orangemode .tabs__Item,
.orangemode .tabs__Item.active
{color:var(--orangemode-textcolor);}
.orangemode .cams__InfoCount {color:var(--orangemode-textcolor);}
.orangemode .cams__InfoLabel {color:var(--orangemode-textcolor);}
.orangemode .cams__RoomName {color:var(--orangemode-textcolor);}
.orangemode .roomHeader__UserAction {
background-color:var(--orangemode-bordercolor);
color:var(--orangemode-bgcolor);
border-color:var(--orangemode-bordercolor);}
.orangemode .mobileHidden {color:var(--orangemode-bgcolor);}
.orangemode .button-default {color:var(--orangemode-bgcolor);background-color:var(--orangemode-bordercolor);}
.orangemode .button-white {background-color:var(--orangemode-bordercolor);}
.orangemode .fa-envelope:before {color:var(--orangemode-bgcolor);}
.orangemode .chat__UserListItem {
    border-color:var(--orangemode-bordercolor);
background-color:var(--orangemode-bordercolor);}
.orangemode .fa-clipboard:before {color:var(--orangemode-bgcolor);}

.orangemode .fa-user:before {color:var(--orangemode-bgcolor);}

.orangemode .userList__UserHandle-current {color:var(--orangemode-bgcolor);}

.orangemode .mediaSources__SourceWrapper {background-color:var(--orangemode-bordercolor);}
.orangemode .tabs__Item.active::after {background-color:var(--orangemode-bordercolor);}
.orangemode.ltr_layout .chat__UserList {border-color:var(--orangemode-bordercolor);}
.orangemode #Chat_Hider::after {background:var(--orangemode-bordercolor);}
.orangemode #UserList_Hider::after {background:var(--orangemode-bordercolor);}
.orangemode.ltr_layout #LTR_Toggle::after {background:var(--orangemode-bordercolor);}

.orangemode .room {background-color:var(--orangemode-lightbgcolor);}
.orangemode .modal__Window {border: 1px solid var(--orangemode-bordercolor);}
.orangemode .chat__HeaderOption {border-color: var(--orangemode-bordercolor);background-color: var(--orangemode-bordercolor);color: var(--orangemode-lightbgcolor);}

.orangemode .fa.fa-gear:before, .orangemode .icon--hd {color: var(--orangemode-lightbgcolor);}

.orangemode .chat__MessageBody {
    background-color: var(--orangemode-bgcolor);
    border-color: var(--orangemode-bordercolor);}

.orangemode .chat__MessageBody-status {
    color: var(--orangemode-textcolor);
    background-color: var(--orangemode-lightbgcolor);
    border-color: var(--orangemode-bordercolor);}

.orangemode .chat__MessageBody-link {
    color:#ff0000;}

.orangemode .chat__MessageTimestamp {
    color: var(--orangemode-textcolor);}

.orangemode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--orangemode-textcolor);}

.orangemode .roomHeader {
    background-color: var(--orangemode-lightbgcolor);}

.orangemode .privateMessages__Empty{
    background-color: var(--orangemode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.orangemode .modal__Body, .orangemode .modal__Footer {
    background-color: var(--orangemode-bgcolor) !important;
    border-color:#7289DA;}

.orangemode .modal__Header {
    background-color: var(--orangemode-bordercolor);
    border-color:  var(--orangemode-bordercolor);
    border-bottom: 0px;}

.orangemode .modal__SubText {
    color:  var(--orangemode-textcolor) !important;}

.orangemode .input {
    color:  var(--orangemode-textcolor) !important;
    border-color:  var(--orangemode-bordercolor) !important;
    background-color: var(--orangemode-bgcolor) !important;}

.orangemode .button-blue {
    background-color: var(--orangemode-bordercolor);
    color:  var(--orangemode-lightbgcolor);
    border:1px solid  var(--orangemode-bordercolor);}

.orangemode .chat__ShareCopy {
    background-color: var(--orangemode-bordercolor);}

/* --------- CAMERAS --------- */

.orangemode .cams__Header {
    background-color:  var(--orangemode-bgcolor) !important;
    border-color: var(--orangemode-bordercolor);}

.orangemode .cams__Cam {
    border-color:  var(--orangemode-bordercolor) !important;}



/* --------- CHAT --------- */
.orangemode .chat__Header {
    background-color: var(--orangemode-bgcolor) !important;
    border-color: var(--orangemode-bordercolor);}

.orangemode .chat__FeedWrapper {
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
    background-color: var(--orangemode-bgcolor);}


/*------------------------------------------------------------------------------------- red_THEME ---*/
:root {
    --redmode-bgcolor: #590000;
    --redmode-bordercolor: #d02323;
    --redmode-lightbgcolor: #860000;
    --redmode-textcolor: #fff;}

.redmode .modal__Body {background: var(--redmode-bgcolor);background-color: var(--redmode-bgcolor);}
.redmode .scroll-shadow {background-color: var(--redmode-bgcolor);background: var(--redmode-bgcolor);}
.redmode > .reg_checkmark, .redmode > .check_head {color: var(--redmode-bordercolor);}

.redmode .reg_checkmark {
    background-color: var(--redmode-lightbgcolor);
    border-color: var(--redmode-bordercolor);
}

.redmode .reg_checkmark:after {
    border-color: var(--redmode-bordercolor) !important;
}

.redmode > .reg_checkmark:hover input ~ .checkmark {background-color: var(--redmode-bgcolor);}

.redmode #theme_wizard, #theme_wizard > option.red_mode {
    background-color: var(--redmode-lightbgcolor);
    border-color: var(--redmode-bordercolor);
color:var(--redmode-textcolor);}

/* ------------------------------ red_LLAMA_MENU ----------------------------------- */
.redmode .llama_menu .feature_menu {
    color: var(--redmode-textcolor);}

.redmode #Extra_Menu {
    color: var(--redmode-textcolor);}

.redmode #toggle_menu {
    color: var(--redmode-textcolor);
    background-color: var(--redmode-bgcolor);
    border-color: var(--redmode-bordercolor);}

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

/*--END LLAMA MENU--*/

.redmode .roomHeader__LogoText,
.redmode .tabs__Item,
.redmode .tabs__Item.active
{color:var(--redmode-textcolor);}
.redmode .cams__InfoCount {color:var(--redmode-textcolor);}
.redmode .cams__InfoLabel {color:var(--redmode-textcolor);}
.redmode .cams__RoomName {color:var(--redmode-textcolor);}
.redmode .roomHeader__UserAction {
background-color:var(--redmode-bordercolor);
color:var(--redmode-bgcolor);
border-color:var(--redmode-bordercolor);}
.redmode .mobileHidden {color:var(--redmode-bgcolor);}
.redmode .button-default {color:var(--redmode-bgcolor);background-color:var(--redmode-bordercolor);}
.redmode .button-white {background-color:var(--redmode-bordercolor);}
.redmode .fa-envelope:before {color:var(--redmode-bgcolor);}
.redmode .chat__UserListItem {
    border-color:var(--redmode-bordercolor);
background-color:var(--redmode-bordercolor);}
.redmode .fa-clipboard:before {color:var(--redmode-bgcolor);}

.redmode .fa-user:before {color:var(--redmode-bgcolor);}

.redmode .userList__UserHandle-current {color:var(--redmode-bgcolor);}

.redmode .mediaSources__SourceWrapper {background-color:var(--redmode-bordercolor);}
.redmode .tabs__Item.active::after {background-color:var(--redmode-bordercolor);}
.redmode.ltr_layout .chat__UserList {border-color:var(--redmode-bordercolor);}
.redmode #Chat_Hider::after {background:var(--redmode-bordercolor);}
.redmode #UserList_Hider::after {background:var(--redmode-bordercolor);}
.redmode.ltr_layout #LTR_Toggle::after {background:var(--redmode-bordercolor);}

.redmode .room {background-color:var(--redmode-lightbgcolor);}
.redmode .modal__Window {border: 1px solid var(--redmode-bordercolor);}
.redmode .chat__HeaderOption {border-color: var(--redmode-bordercolor);background-color: var(--redmode-bordercolor);color: var(--redmode-lightbgcolor);}

.redmode .fa.fa-gear:before, .redmode .icon--hd {color: var(--redmode-lightbgcolor);}

.redmode .chat__MessageBody {
    background-color: var(--redmode-bgcolor);
    border-color: var(--redmode-bordercolor);}

.redmode .chat__MessageBody-status {
    color: var(--redmode-textcolor);
    background-color: var(--redmode-lightbgcolor);
    border-color: var(--redmode-bordercolor);}

.redmode .chat__MessageBody-link {
    color:#ff0000;}

.redmode .chat__MessageTimestamp {
    color: var(--redmode-textcolor);}

.redmode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--redmode-textcolor);}

.redmode .roomHeader {
    background-color: var(--redmode-lightbgcolor);}

.redmode .privateMessages__Empty{
    background-color: var(--redmode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.redmode .modal__Body, .redmode .modal__Footer {
    background-color: var(--redmode-bgcolor) !important;
    border-color:#7289DA;}

.redmode .modal__Header {
    background-color: var(--redmode-bordercolor);
    border-color:  var(--redmode-bordercolor);
    border-bottom: 0px;}

.redmode .modal__SubText {
    color:  var(--redmode-textcolor) !important;}

.redmode .input {
    color:  var(--redmode-textcolor) !important;
    border-color:  var(--redmode-bordercolor) !important;
    background-color: var(--redmode-bgcolor) !important;}

.redmode .button-blue {
    background-color: var(--redmode-bordercolor);
    color:  var(--redmode-lightbgcolor);
    border:1px solid  var(--redmode-bordercolor);}

.redmode .chat__ShareCopy {
    background-color: var(--redmode-bordercolor);}

/* --------- CAMERAS --------- */

.redmode .cams__Header {
    background-color:  var(--redmode-bgcolor) !important;
    border-color: var(--redmode-bordercolor);}

.redmode .cams__Cam {
    border-color:  var(--redmode-bordercolor) !important;}



/* --------- CHAT --------- */
.redmode .chat__Header {
    background-color: var(--redmode-bgcolor) !important;
    border-color: var(--redmode-bordercolor);}

.redmode .chat__FeedWrapper {
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
    background-color: var(--redmode-bgcolor);}

/*------------------------------------------------------------------------------------- purple_THEME ---*/
:root {
    --purplemode-bgcolor: #280048;
    --purplemode-bordercolor: #b14fff;
    --purplemode-lightbgcolor: #550098;
    --purplemode-textcolor: #fff;}

.purplemode .modal__Body {background: var(--purplemode-bgcolor);background-color: var(--purplemode-bgcolor);}
.purplemode .scroll-shadow {background-color: var(--purplemode-bgcolor);background: var(--purplemode-bgcolor);}
.purplemode > .reg_checkmark, .purplemode > .check_head {color: var(--purplemode-bordercolor);}

.purplemode .reg_checkmark {
    background-color: var(--purplemode-lightbgcolor);
    border-color: var(--purplemode-bordercolor);
}

.purplemode .reg_checkmark:after {
    border-color: var(--purplemode-bordercolor) !important;
}

.purplemode > .reg_checkmark:hover input ~ .checkmark {background-color: var(--purplemode-bgcolor);}

.purplemode #theme_wizard, #theme_wizard > option.purple_mode {
    background-color: var(--purplemode-lightbgcolor);
    border-color: var(--purplemode-bordercolor);
color:var(--purplemode-textcolor);}

/* ------------------------------ purple_LLAMA_MENU ----------------------------------- */
.purplemode .llama_menu .feature_menu {
    color: var(--purplemode-textcolor);}

.purplemode #Extra_Menu {
    color: var(--purplemode-textcolor);}

.purplemode #toggle_menu {
    color: var(--purplemode-textcolor);
    background-color: var(--purplemode-bgcolor);
    border-color: var(--purplemode-bordercolor);}

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

/*--END LLAMA MENU--*/

.purplemode .roomHeader__LogoText,
.purplemode .tabs__Item,
.purplemode .tabs__Item.active
{color:var(--purplemode-textcolor);}
.purplemode .cams__InfoCount {color:var(--purplemode-textcolor);}
.purplemode .cams__InfoLabel {color:var(--purplemode-textcolor);}
.purplemode .cams__RoomName {color:var(--purplemode-textcolor);}
.purplemode .roomHeader__UserAction {
background-color:var(--purplemode-bordercolor);
color:var(--purplemode-bgcolor);
border-color:var(--purplemode-bordercolor);}
.purplemode .mobileHidden {color:var(--purplemode-bgcolor);}
.purplemode .button-default {color:var(--purplemode-bgcolor);background-color:var(--purplemode-bordercolor);}
.purplemode .button-white {background-color:var(--purplemode-bordercolor);}
.purplemode .fa-envelope:before {color:var(--purplemode-bgcolor);}
.purplemode .chat__UserListItem {
    border-color:var(--purplemode-bordercolor);
background-color:var(--purplemode-bordercolor);}
.purplemode .fa-clipboard:before {color:var(--purplemode-bgcolor);}

.purplemode .fa-user:before {color:var(--purplemode-bgcolor);}

.purplemode .userList__UserHandle-current {color:var(--purplemode-bgcolor);}

.purplemode .mediaSources__SourceWrapper {background-color:var(--purplemode-bordercolor);}
.purplemode .tabs__Item.active::after {background-color:var(--purplemode-bordercolor);}
.purplemode.ltr_layout .chat__UserList {border-color:var(--purplemode-bordercolor);}
.purplemode #Chat_Hider::after {background:var(--purplemode-bordercolor);}
.purplemode #UserList_Hider::after {background:var(--purplemode-bordercolor);}
.purplemode.ltr_layout #LTR_Toggle::after {background:var(--purplemode-bordercolor);}

.purplemode .room {background-color:var(--purplemode-lightbgcolor);}
.purplemode .modal__Window {border: 1px solid var(--purplemode-bordercolor);}
.purplemode .chat__HeaderOption {border-color: var(--purplemode-bordercolor);background-color: var(--purplemode-bordercolor);color: var(--purplemode-lightbgcolor);}

.purplemode .fa.fa-gear:before, .purplemode .icon--hd {color: var(--purplemode-lightbgcolor);}

.purplemode .chat__MessageBody {
    background-color: var(--purplemode-bgcolor);
    border-color: var(--purplemode-bordercolor);}

.purplemode .chat__MessageBody-status {
    color: var(--purplemode-textcolor);
    background-color: var(--purplemode-lightbgcolor);
    border-color: var(--purplemode-bordercolor);}

.purplemode .chat__MessageBody-link {
    color:#ff0000;}

.purplemode .chat__MessageTimestamp {
    color: var(--purplemode-textcolor);}

.purplemode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--purplemode-textcolor);}

.purplemode .roomHeader {
    background-color: var(--purplemode-lightbgcolor);}

.purplemode .privateMessages__Empty{
    background-color: var(--purplemode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.purplemode .modal__Body, .purplemode .modal__Footer {
    background-color: var(--purplemode-bgcolor) !important;
    border-color:#7289DA;}

.purplemode .modal__Header {
    background-color: var(--purplemode-bordercolor);
    border-color:  var(--purplemode-bordercolor);
    border-bottom: 0px;}

.purplemode .modal__SubText {
    color:  var(--purplemode-textcolor) !important;}

.purplemode .input {
    color:  var(--purplemode-textcolor) !important;
    border-color:  var(--purplemode-bordercolor) !important;
    background-color: var(--purplemode-bgcolor) !important;}

.purplemode .button-blue {
    background-color: var(--purplemode-bordercolor);
    color:  var(--purplemode-lightbgcolor);
    border:1px solid  var(--purplemode-bordercolor);}

.purplemode .chat__ShareCopy {
    background-color: var(--purplemode-bordercolor);}

/* --------- CAMERAS --------- */

.purplemode .cams__Header {
    background-color:  var(--purplemode-bgcolor) !important;
    border-color: var(--purplemode-bordercolor);}

.purplemode .cams__Cam {
    border-color:  var(--purplemode-bordercolor) !important;}



/* --------- CHAT --------- */
.purplemode .chat__Header {
    background-color: var(--purplemode-bgcolor) !important;
    border-color: var(--purplemode-bordercolor);}

.purplemode .chat__FeedWrapper {
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
    background-color: var(--purplemode-bgcolor);}


/*------------------------------------------------------------------------------------- black_THEME ---*/
:root {
    --blackmode-bgcolor: #2C2F33;
    --blackmode-bordercolor: #7289DA;
    --blackmode-lightbgcolor: #191919;
    --blackmode-textcolor: #fff;
    --blackmode-lightbordercolor: #313131;}

.blackmode .modal__Body {background: var(--blackmode-bgcolor);background-color: var(--blackmode-bgcolor);}
.blackmode .scroll-shadow {background-color: var(--blackmode-bgcolor);background: var(--blackmode-bgcolor);}
.blackmode > .reg_checkmark, .blackmode > .check_head {color: var(--blackmode-bordercolor);}

.blackmode .reg_checkmark {
    background-color: var(--blackmode-lightbgcolor);
    border-color: var(--blackmode-bordercolor);
}

.blackmode .reg_checkmark:after {
    border-color: var(--blackmode-bordercolor) !important;
}

.blackmode > .reg_checkmark:hover input ~ .checkmark {background-color: var(--blackmode-bgcolor);}

.blackmode #theme_wizard, #theme_wizard > option.black_mode {
    background-color: var(--blackmode-lightbgcolor);
    border-color: var(--blackmode-bordercolor);
color:var(--blackmode-textcolor);}

/* ------------------------------ black_LLAMA_MENU ----------------------------------- */
.blackmode .llama_menu .feature_menu {
    color: var(--blackmode-textcolor);}

.blackmode #Extra_Menu {
    color: var(--blackmode-textcolor);}

.blackmode #toggle_menu {
    color: var(--blackmode-textcolor);
    background-color: var(--blackmode-bgcolor);
    border-color: var(--blackmode-bordercolor);}

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

/*--END LLAMA MENU--*/

.blackmode .roomHeader__LogoText,
.blackmode .tabs__Item,
.blackmode .tabs__Item.active
{color:var(--blackmode-textcolor);}
.blackmode .cams__InfoCount {color:var(--blackmode-textcolor);}
.blackmode .cams__InfoLabel {color:var(--blackmode-textcolor);}
.blackmode .cams__RoomName {color:var(--blackmode-textcolor);}
.blackmode .roomHeader__UserAction {
background-color:var(--blackmode-bordercolor);
color:var(--blackmode-bgcolor);
border-color:var(--blackmode-bordercolor);}
.blackmode .mobileHidden {color:var(--blackmode-bgcolor);}
.blackmode .button-default {color:var(--blackmode-bgcolor);background-color:var(--blackmode-bordercolor);}
.blackmode .button-white {background-color:var(--blackmode-bordercolor);}
.blackmode .fa-envelope:before {color:var(--blackmode-bgcolor);}
.blackmode .chat__UserListItem {
    border-color:var(--blackmode-bordercolor);
background-color:var(--blackmode-bordercolor);}
.blackmode .fa-clipboard:before {color:var(--blackmode-bgcolor);}

.blackmode .fa-user:before {color:var(--blackmode-bgcolor);}

.blackmode .userList__UserHandle-current {color:var(--blackmode-bgcolor);}

.blackmode .mediaSources__SourceWrapper {background-color:var(--blackmode-bordercolor);}
.blackmode .tabs__Item.active::after {background-color:var(--blackmode-bordercolor);}
.blackmode.ltr_layout .chat__UserList {border-color:var(--blackmode-bordercolor);}
.blackmode #Chat_Hider::after {background:var(--blackmode-bordercolor);}
.blackmode #UserList_Hider::after {background:var(--blackmode-bordercolor);}
.blackmode.ltr_layout #LTR_Toggle::after {background:var(--blackmode-bordercolor);}

.blackmode .room {background-color:var(--blackmode-lightbgcolor);}
.blackmode .modal__Window {border: 1px solid var(--blackmode-bordercolor);}
.blackmode .chat__HeaderOption {border-color: var(--blackmode-bordercolor);background-color: var(--blackmode-bordercolor);color: var(--blackmode-lightbgcolor);}

.blackmode .fa.fa-gear:before, .blackmode .icon--hd {color: var(--blackmode-lightbgcolor);}

.blackmode .chat__MessageBody {
    background-color: var(--blackmode-bgcolor);
    border-color: var(--blackmode-bordercolor);}

.blackmode .chat__MessageBody-status {
    color: var(--blackmode-textcolor);
    background-color: var(--blackmode-lightbgcolor);
    border-color: var(--blackmode-bordercolor);}

.blackmode .chat__MessageBody-link {
    color:#ff0000;}

.blackmode .chat__MessageTimestamp {
    color: var(--blackmode-textcolor);}

.blackmode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--blackmode-textcolor);}

.blackmode .roomHeader {
    background-color: var(--blackmode-lightbgcolor);}

.blackmode .privateMessages__Empty{
    background-color: var(--blackmode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.blackmode .modal__Body, .blackmode .modal__Footer {
    background-color: var(--blackmode-bgcolor) !important;
    border-color:#7289DA;}

.blackmode .modal__Header {
    background-color: var(--blackmode-bordercolor);
    border-color:  var(--blackmode-bordercolor);
    border-bottom: 0px;}

.blackmode .modal__SubText {
    color:  var(--blackmode-textcolor) !important;}

.blackmode .input {
    color:  var(--blackmode-textcolor) !important;
    border-color:  var(--blackmode-bordercolor) !important;
    background-color: var(--blackmode-bgcolor) !important;}

.blackmode .button-blue {
    background-color: var(--blackmode-bordercolor);
    color:  var(--blackmode-lightbgcolor);
    border:1px solid  var(--blackmode-bordercolor);}

.blackmode .chat__ShareCopy {
    background-color: var(--blackmode-bordercolor);}

/* --------- CAMERAS --------- */

.blackmode .cams__Header {
    background-color:  var(--blackmode-bgcolor) !important;
    border-color: var(--blackmode-bordercolor);border:0px;}

.blackmode .cams__Cam {
    border-color:  var(--blackmode-bordercolor) !important;}



/* --------- CHAT --------- */
.blackmode .chat__Header {
    background-color: var(--blackmode-bgcolor) !important;
    border-color: var(--blackmode-bordercolor);border:0px;}

.blackmode .chat__FeedWrapper {
    border-color: var(--blackmode-lightbordercolor);}

.blackmode .chat__InputWrapper {
    border-color: var(--blackmode-bordercolor);
    background-color: var(--blackmode-bgcolor);}

.blackmode .input::placeholder {
    color: var(--blackmode-textcolor);}

.blackmode .input::focus {
    border-color: var(--blackmode-bordercolor);}

/* --------- USERS LIST --------- */
.blackmode .chat__UserList {
    background-color: var(--blackmode-bgcolor);}
.blackmode .chat__Feed{border-left-color: var(--blackmode-lightbordercolor);}
.blackmode .layout--horizontal .chat__UserList {
    border-color: var(--blackmode-lightbordercolor);}

.blackmode .chat__UserListItem+.chat__UserListItem {
    border-top-color: var(--blackmode-bordercolor);
    background-color: var(--blackmode-bordercolor);}

.blackmode .chat__UserListItem+.chat__UserListItem:hover {
    background-color: var(--blackmode-bgcolor);}

/*------------------------------------------------------------------------------------- buds_THEME ---*/
:root {
    --budsmode-bgcolor: #000000;
    --budsmode-bordercolor: #005900;
    --budsmode-lightbgcolor: #000000;
    --budsmode-textcolor: #fff;
    --budsmode-headerbg: url(https://i.ibb.co/jDC8w3C/weed-wallpaper-1920x1080.jpg);
    --budsmode-roombg: url(https://i.ibb.co/5YKLsSK/wp2565886.jpg);
    --budsmode-userbg: url(https://i.ibb.co/5YKLsSK/wp2565886.jpg);
    --budsmode-chatbg: url(https://i.ibb.co/5YKLsSK/wp2565886.jpg);
    --budsmode-ptt: url(https://i.ibb.co/W2tyNNs/cannabis-PNG17.png);}

.budsmode .modal__Body {background: var(--budsmode-bgcolor);background-color: var(--budsmode-bgcolor);}
.budsmode .scroll-shadow {background-color: var(--budsmode-bgcolor);background: var(--budsmode-bgcolor);}
.budsmode > .reg_checkmark, .budsmode > .check_head {color: var(--budsmode-bordercolor);}

.budsmode .reg_checkmark {
    background-color: var(--budsmode-lightbgcolor);
    border-color: var(--budsmode-bordercolor);
}

.budsmode .reg_checkmark:after {
    border-color: var(--budsmode-bordercolor) !important;
}

.budsmode > .reg_checkmark:hover input ~ .checkmark {background-color: var(--budsmode-bgcolor);}

.budsmode #theme_wizard, #theme_wizard > option.buds_mode {
    background-color: var(--budsmode-bgcolor);
    border-color: var(--budsmode-bordercolor);
color:var(--budsmode-textcolor);}

/* ------------------------------ buds_LLAMA_MENU ----------------------------------- */
.budsmode .llama_menu .feature_menu {
    color: var(--budsmode-textcolor);}

.budsmode #Extra_Menu {
    color: var(--budsmode-textcolor);}

.budsmode #toggle_menu {
    color: var(--budsmode-textcolor);
    background-color: var(--budsmode-bgcolor);
    border-color: var(--budsmode-bordercolor);}

.budsmode .feature_menu {
    color: var(--budsmode-textcolor);
    background-color: var(--budsmode-bgcolor);
    border-color: var(--budsmode-bordercolor);
    -webkit-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    -moz-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);}

.budsmode .menu_header {
    background-color:  var(--budsmode-lightbgcolor);
    color: var(--budsmode-textcolor);}

.budsmode .menu_section {
    color: var(--budsmode-textcolor);}

.budsmode .settings_header {
    color: var(--budsmode-textcolor);}

/*--END LLAMA MENU--*/

.budsmode .roomHeader__LogoText,
.budsmode .tabs__Item,
.budsmode .tabs__Item.active
{color:var(--budsmode-textcolor);}
.budsmode .cams__InfoCount {color:var(--budsmode-textcolor);}
.budsmode .cams__InfoLabel {color:var(--budsmode-textcolor);}
.budsmode .cams__RoomName {color:var(--budsmode-textcolor);}
.budsmode .roomHeader__UserAction {
background-color:var(--budsmode-bordercolor);
color:var(--budsmode-bgcolor);
border-color:var(--budsmode-bordercolor);}
.budsmode .mobileHidden {color:var(--budsmode-bgcolor);}
.budsmode .button-default {color:var(--budsmode-bgcolor);background-color:var(--budsmode-bordercolor);}
.budsmode .button-white {background-color:var(--budsmode-bordercolor);}
.budsmode .fa-envelope:before {color:var(--budsmode-bgcolor);}
.budsmode .chat__UserListItem {
    border-color:var(--budsmode-bordercolor);
background-color:var(--budsmode-bordercolor);}
.budsmode .fa-clipboard:before {color:var(--budsmode-bgcolor);}

.budsmode .fa-user:before {color:var(--budsmode-bgcolor);}

.budsmode .userList__UserHandle-current {color:var(--budsmode-bgcolor);}

.budsmode .mediaSources__SourceWrapper {background-color:var(--budsmode-bordercolor);}
.budsmode .tabs__Item.active::after {background-color:var(--budsmode-bordercolor);}
.budsmode.ltr_layout .chat__UserList {border-color:var(--budsmode-bordercolor);}
.budsmode #Chat_Hider::after {background:var(--budsmode-bordercolor);}
.budsmode #UserList_Hider::after {background:var(--budsmode-bordercolor);}
.budsmode.ltr_layout #LTR_Toggle::after {background:var(--budsmode-bordercolor);}

.budsmode .room {background-color:var(--budsmode-lightbgcolor);background-image: var(--budsmode-roombg);}
.budsmode .modal__Window {border: 1px solid var(--budsmode-bordercolor);}
.budsmode .chat__HeaderOption {border-color: var(--budsmode-bordercolor);background-color: var(--budsmode-bordercolor);color: var(--budsmode-lightbgcolor);}

.budsmode .fa.fa-gear:before, .budsmode .icon--hd {color: var(--budsmode-lightbgcolor);}

.budsmode .chat__MessageBody {
    background-color: var(--budsmode-bgcolor);
    border-color: var(--budsmode-bordercolor);}

.budsmode .chat__MessageBody-status {
    color: var(--budsmode-textcolor);
    background-color: var(--budsmode-lightbgcolor);
    border-color: var(--budsmode-bordercolor);}

.budsmode .chat__MessageBody-link {
    color:#ff0000;}

.budsmode .chat__MessageTimestamp {
    color: var(--budsmode-textcolor);}

.budsmode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--budsmode-textcolor);}

.budsmode .roomHeader {
    background-color: var(--budsmode-lightbgcolor);}

.budsmode .privateMessages__Empty{
    background-color: var(--budsmode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.budsmode .modal__Body, .budsmode .modal__Footer {
    background-color: var(--budsmode-bgcolor) !important;
    border-color:#7289DA;}

.budsmode .modal__Header {
    background-color: var(--budsmode-bordercolor);
    border-color:  var(--budsmode-bordercolor);
    border-bottom: 0px;}

.budsmode .modal__SubText {
    color:  var(--budsmode-textcolor) !important;}

.budsmode .input {
    color:  var(--budsmode-textcolor) !important;
    border-color:  var(--budsmode-bordercolor) !important;
    background-color: var(--budsmode-bgcolor) !important;}

.budsmode .button-blue {
    background-color: var(--budsmode-bordercolor);
    color:  var(--budsmode-lightbgcolor);
    border:1px solid  var(--budsmode-bordercolor);}

.budsmode .chat__ShareCopy {
    background-color: var(--budsmode-bordercolor);}

/* --------- CAMERAS --------- */

.budsmode .cams__Header {
    background-color:  var(--budsmode-bgcolor) !important;
    border-color: var(--budsmode-bordercolor);}

.budsmode .cams__Cam {
    border-color:  var(--budsmode-bordercolor) !important;}



/* --------- CHAT --------- */
.budsmode .chat__Header {
    background-color: var(--budsmode-bgcolor) !important;
    border-color: var(--budsmode-bordercolor);}

.budsmode .chat__FeedWrapper {
    border-color: var(--budsmode-bordercolor);}

.budsmode .chat__InputWrapper {
    border-color: var(--budsmode-bordercolor);
    background-color: var(--budsmode-bgcolor);}

.budsmode .input::placeholder {
    color: var(--budsmode-textcolor);}

.budsmode .input::focus {
    border-color: var(--budsmode-bordercolor);}

/* --------- USERS LIST --------- */
.budsmode .chat__UserList {
    background-color: var(--budsmode-bgcolor);}

.budsmode .layout--horizontal .chat__UserList {
    border-left-color: var(--budsmode-bordercolor);}

.budsmode .chat__UserListItem+.chat__UserListItem {
    border-top-color: var(--budsmode-bordercolor);
    background-color: var(--budsmode-bordercolor);}

.budsmode .chat__UserListItem+.chat__UserListItem:hover {
    background-color: var(--budsmode-bgcolor);}

/*------------------------------------------------------------------------------------- SPLAT_THEME ---*/

.splatmode .cams__RoomName {
color: var(--splatmode-textcolor);
}
.splatmode .cams__InfoCount {
color: var(--splatmode-bordercolor);
}
.splatmode .tabs__Item {color: var(--splatmode-bordercolor);}


.splatmode .roomHeader {
    background-color: transparent;}

.splatmode .privateMessages__Empty{
    background-color: var(--splatmode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */
.splatmode .modal__Window {border: 1px solid var(--splatmode-bordercolor);}

.splatmode .modal__Body, .splatmode .modal__Footer {
    background-image: var(--splatmode-userbg);
    background-color: var(--splatmode-lightbgcolor) !important;
    border-color:#7289DA;opacity:0.7;}

.splatmode .modal__Header {
opacity:0.7;
    background-image: var(--splatmode-userbg);
    background-color: var(--splatmode-lightbgcolor);
    border-color:  var(--splatmode-bordercolor);
    border-bottom: 0px;}

.splatmode .modal__SubText {
    color:  var(--splatmode-textcolor) !important;}

.splatmode .input {
    color:  var(--splatmode-textcolor) !important;
    border-color:  var(--splatmode-bordercolor) !important;
    background-color: var(--splatmode-bgcolor) !important;}

.splatmode .button-buds {
    background-color: var(--splatmode-bordercolor);
    color:  var(--splatmode-lightbgcolor);
    border:1px solid  var(--splatmode-bordercolor);}

.splatmode .chat__ShareCopy {
    background-color: var(--splatmode-bordercolor);}

.splatmode .userList__UserHandle {color: var(--splatmode-lightbgcolor)}

/* --------- CAMERAS --------- */
.splatmode .cams {
background-color: transparent;
    background: transparent;}

.splatmode .cams__Header {
    background-color:  transparent !important;
    background-image:  var(--splatmode-userbg) !important;border-radius: 100px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;}

.splatmode .cams__Cam {
    border-color:  var(--splatmode-bordercolor) !important;}

.splatmode .button-default {
    background-color: var(--splatmode-bordercolor) !important;
    color: var(--splatmode-textcolor) !important;}


/* --------- CHAT --------- */


/*----bubble--*/
.splatmode .chat__Message {
    display: block;
    padding-right: 0;
}

.splatmode .chat__MessageHandle {
    padding-left: 11px;
    display: block;
    background-color: #2C2F33;
    border-radius: 3px;
    margin: 0px;
    position: relative;
    top: 0px;
}
.splatmode .chat__Feed{

margin-left: 30px;}
.splatmode .chat__MessageBody > span:nth-child(2) {margin-left:10px;display:inline-block;}
.splatmode .chat__MessageBody {
margin-left: 36px
    position: relative;
    top:-17px;
    margin-top: 15px !important;
    background-color: #cfcfcf;
    border-radius: 25px;
    margin-bottom: 0px;
    margin-top: 0px;
}

.splatmode .chat__MessageBody-status {
    color: #fff;
    background-color: #22add5;
    bordeR: 1px solid #22add5;
    margin-top: 17px;
    min-height: 18px;
}

.splatmode .chat__MessageTimestamp {
    position: relative;
    top: -17px;
    left: -13px;
    float: right;
    color: #626262;
    cursor: default;
}

.splatmode .chat__MessageHandle:after {
    display:none;}
/*----bubble end--*/


.splatmode .chat {background-color: transparent;
    background: transparent;}

.splatmode .chat__Header {
    background-color: transparent !important;
background-image: var(--splatmode-headerbg);
    background-position: right;
border-radius: 100px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;}

.splatmode .layout--horizontal .chat__FeedWrapper {
    background-color: transparent;border:0px;
    background-image: var(--splatmode-chatbg);
    background-size: contain;
    background-position: right center;
    background-repeat: repeat-y;
    animation: animatedBackground 10s linear infinite;
}
.splatmode .chat__Feed {border:0px;}
.splatmode .chat__FeedWrapper {
    background-color: transparent;border:0px;
    background-image: var(--splatmode-userbg);
}
.splatmode .room {    background-image: var(--splatmode-roombg);
    background-repeat: no-repeat;
    background-size: cover;}

.splatmode .chat__InputWrapper {
    border-color: var(--splatmode-bordercolor);
    background-color: var(--splatmode-bgcolor);}

.splatmode .input::placeholder {
    color: var(--splatmode-textcolor);}

.splatmode .input::focus {
    border-color: var(--splatmode-bordercolor);}

.splatmode .chat__MessageBody {
background-image: var(--splatmode-messagebg);
    color: var(--splatmode-textcolor) !important;
    background-color: var(--splatmode-bordercolor);}

.splatmode .chat__MessageBody-status {
    background-image: var(--splatmode-headerbg);
    background-color: transparent;
    background-position: right;
    background-blend-mode: multiply;

    background-position-y: 89px;
    background-color: var(--splatmode-lightbgcolor);
    border-color: var(--splatmode-bordercolor);}

.splatmode .chat__MessageHandle {
color:black;
    background-color: transparent;
    border: 0px solid var(--splatmode-bordercolor);
}

.splatmode .chat__MessageBody-link {
    color:#ff0000;}

.splatmode .chat__MessageTimestamp {
    color: #fff;}

.splatmode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--splatmode-textcolor);}

.splatmode #toggle_chat,.splatmode #toggle_userlist,.splatmode #toggle_ltr {color:#51bc02;}

/* --------- USERS LIST --------- */

.splatmode .chat__UserListItem {background-image: var(--splatmode-messagebg);    border: 1px solid #51bc02;border-radius:12px;}
@keyframes animatedBackground {
	from { background-position: 0 0; }
	to { background-position: 0 100%; }
}
.splatmode .chat__HeaderOption {
background-image: var(--splatmode-messagebg);
    border-radius: 5px;
    margin: 2px;
    min-height: 27px;}
.splatmode .chat__UserList {background-image: var(--splatmode-userbg);
    background-color: transparent;

    width: 175px;
margin-bottom: 19px;
    margin: 10px;
    margin-top: 0px;
}
.splatmode .layout--horizontal .chat__UserList {
    border-radius: 50px;    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
}
.splatmode .layout--horizontal .chat__UserList {
border:0px;
    border-left-color: var(--splatmode-bordercolor);}

.splatmode .chat__UserListItem+.chat__UserListItem {
    border-top-color: var(--splatmode-bordercolor);
    background-color: var(--splatmode-bordercolor);}

.splatmode .chat__UserListItem+.chat__UserListItem:hover {
    background-color: var(--splatmode-lightbgcolor);
color:  var(--splatmode-textcolor) !important;}

.splatmode .chat__UserListItem+.userList__UserHandle:hover {
color:  var(--splatmode-textcolor) !important;}

/*------------------------------------------------------------------------------------- custom_THEME ---*/
:root {
    --custommode-bgcolor: #22add5;
    --custommode-bordercolor: #c7cfd9;
    --custommode-lightbgcolor: #FFFFFF;
    --custommode-textcolor: #000000;}

.custommode .modal__Body {background: var(--custommode-bgcolor);background-color: var(--custommode-bgcolor);}
.custommode .scroll-shadow {background-color: var(--custommode-bgcolor);background: var(--custommode-bgcolor);}
.custommode > .reg_checkmark, .custommode > .check_head {color: var(--custommode-bordercolor);}

.custommode .reg_checkmark {
    background-color: var(--custommode-lightbgcolor);
    border-color: var(--custommode-bordercolor);
}

.custommode .reg_checkmark:after {
    border-color: var(--custommode-bordercolor) !important;
}

.custommode > .reg_checkmark:hover input ~ .checkmark {background-color: var(--custommode-bgcolor);}

.custommode #theme_wizard, #theme_wizard > option.custom_mode {
    background-color: var(--custommode-bgcolor);
    border-color: var(--custommode-bordercolor);
color:var(--custommode-textcolor);}

/* ------------------------------ custom_LLAMA_MENU ----------------------------------- */
.custommode .llama_menu .feature_menu {
    color: var(--custommode-textcolor);}

.custommode #Extra_Menu {
    color: var(--custommode-textcolor);}

.custommode #toggle_menu {
    color: var(--custommode-textcolor);
    background-color: var(--custommode-bgcolor);
    border-color: var(--custommode-bordercolor);}

.custommode .feature_menu {
    color: var(--custommode-textcolor);
    background-color: var(--custommode-bgcolor);
    border-color: var(--custommode-bordercolor);
    -webkit-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    -moz-box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);
    box-shadow: 6px 9px 25px -15px rgba(0,0,0,0.69);}

.custommode .menu_header {
    background-color:  var(--custommode-lightbgcolor);
    color: var(--custommode-textcolor);}

.custommode .menu_section {
    color: var(--custommode-textcolor);}

.custommode .settings_header {
    color: var(--custommode-textcolor);}

/*--END LLAMA MENU--*/

.custommode .roomHeader__LogoText,
.custommode .tabs__Item,
.custommode .tabs__Item.active
{color:var(--custommode-textcolor);}
.custommode .cams__InfoCount {color:var(--custommode-textcolor);}
.custommode .cams__InfoLabel {color:var(--custommode-textcolor);}
.custommode .cams__RoomName {color:var(--custommode-textcolor);}
.custommode .roomHeader__UserAction {
background-color:var(--custommode-bordercolor);
color:var(--custommode-bgcolor);
border-color:var(--custommode-bordercolor);}
.custommode .mobileHidden {color:var(--custommode-bgcolor);}
.custommode .button-default {color:var(--custommode-bgcolor);background-color:var(--custommode-bordercolor);}
.custommode .button-white {background-color:var(--custommode-bordercolor);}
.custommode .fa-envelope:before {color:var(--custommode-bgcolor);}
.custommode .chat__UserListItem {
    border-color:var(--custommode-bordercolor);
background-color:var(--custommode-bordercolor);}
.custommode .fa-clipboard:before {color:var(--custommode-bgcolor);}

.custommode .fa-user:before {color:var(--custommode-bgcolor);}

.custommode .userList__UserHandle-current {color:var(--custommode-bgcolor);}

.custommode .mediaSources__SourceWrapper {background-color:var(--custommode-bordercolor);}
.custommode .tabs__Item.active::after {background-color:var(--custommode-bordercolor);}
.custommode.ltr_layout .chat__UserList {border-color:var(--custommode-bordercolor);}
.custommode #Chat_Hider::after {background:var(--custommode-bordercolor);}
.custommode #UserList_Hider::after {background:var(--custommode-bordercolor);}
.custommode.ltr_layout #LTR_Toggle::after {background:var(--custommode-bordercolor);}

.custommode .room {background-color:var(--custommode-lightbgcolor);}
.custommode .modal__Window {border: 1px solid var(--custommode-bordercolor);}
.custommode .chat__HeaderOption {border-color: var(--custommode-bordercolor);background-color: var(--custommode-bordercolor);color: var(--custommode-lightbgcolor);}

.custommode .fa.fa-gear:before, .custommode .icon--hd {color: var(--custommode-lightbgcolor);}

.custommode .chat__MessageBody {
    background-color: var(--custommode-bgcolor);
    border-color: var(--custommode-bordercolor);}

.custommode .chat__MessageBody-status {
    color: var(--custommode-textcolor);
    background-color: var(--custommode-lightbgcolor);
    border-color: var(--custommode-bordercolor);}

.custommode .chat__MessageBody-link {
    color:#ff0000;}

.custommode .chat__MessageTimestamp {
    color: var(--custommode-textcolor);}

.custommode .chat__Message:hover .chat__MessageTimestamp {
    color: var(--custommode-textcolor);}

.custommode .roomHeader {
    background-color: var(--custommode-lightbgcolor);}

.custommode .privateMessages__Empty{
    background-color: var(--custommode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.custommode .modal__Body, .custommode .modal__Footer {
    background-color: var(--custommode-bgcolor) !important;
    border-color:#7289DA;}

.custommode .modal__Header {
    background-color: var(--custommode-bordercolor);
    border-color:  var(--custommode-bordercolor);
    border-bottom: 0px;}

.custommode .modal__SubText {
    color:  var(--custommode-textcolor) !important;}

.custommode .input {
    color:  var(--custommode-textcolor) !important;
    border-color:  var(--custommode-bordercolor) !important;
    background-color: var(--custommode-bgcolor) !important;}

.custommode .button-blue {
    background-color: var(--custommode-bordercolor);
    color:  var(--custommode-lightbgcolor);
    border:1px solid  var(--custommode-bordercolor);}

.custommode .chat__ShareCopy {
    background-color: var(--custommode-bordercolor);}

/* --------- CAMERAS --------- */

.custommode .cams__Header {
    background-color:  var(--custommode-bgcolor) !important;
    border-color: var(--custommode-bordercolor);}

.custommode .cams__Cam {
    border-color:  var(--custommode-bordercolor) !important;}



/* --------- CHAT --------- */
.custommode .chat__Header {
    background-color: var(--custommode-bgcolor) !important;
    border-color: var(--custommode-bordercolor);}

.custommode .chat__FeedWrapper {
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
    background-color: var(--custommode-bgcolor);}

/* ----------------------------------------------------- END_THEMES -----------------------------------*/
.pinkmode #toggle_chat {color: var(--pinkmode-textcolor);}
.greenmode #toggle_chat {color: var(--greenmode-bgcolor);}
.bluemode #toggle_chat {color: var(--bluemode-bgcolor);}
.mauvemode #toggle_chat {color: var(--mauvemode-bgcolor);}
.orangemode #toggle_chat {color: var(--orangemode-bgcolor);}
.redmode #toggle_chat {color: var(--redmode-bgcolor);}
.purplemode #toggle_chat {color: var(--purplemode-bgcolor);}
.blackmode #toggle_chat {color: #2C2F33;}
.budsmode #toggle_chat {color: var(--budsmode-textcolor);}

.pinkmode #toggle_userlist {color: var(--pinkmode-textcolor);}
.greenmode #toggle_userlist {color: var(--greenmode-bgcolor);}
.bluemode #toggle_userlist {color: var(--bluemode-bgcolor);}
.mauvemode #toggle_userlist {color: var(--mauvemode-bgcolor);}
.orangemode #toggle_userlist {color: var(--orangemode-bgcolor);}
.redmode #toggle_userlist {color: var(--redmode-bgcolor);}
.purplemode #toggle_userlist {color: var(--purplemode-bgcolor);}
.blackmode #toggle_userlist {color: #2C2F33;}
.budsmode #toggle_userlist {color: var(--budsmode-textcolor);}

.pinkmode #toggle_ltr {color: var(--pinkmode-textcolor);}
.greenmode #toggle_ltr {color: var(--greenmode-bgcolor);}
.bluemode #toggle_ltr {color: var(--bluemode-bgcolor);}
.mauvemode #toggle_ltr {color: var(--mauvemode-bgcolor);}
.orangemode #toggle_ltr {color: var(--orangemode-bgcolor);}
.redmode #toggle_ltr {color: var(--redmode-bgcolor);}
.purplemode #toggle_ltr {color: var(--purplemode-bgcolor);}
.blackmode #toggle_ltr {color: #2C2F33;}
.budsmode #toggle_ltr {color: var(--budsmode-textcolor);}


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
.ltr_layout .cams__Header {
    border-radius: 100px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
border-left:0px;
}
.ltr_layout .chat__Header {
    border-radius: 100px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
border-right:0px;border-left:1px;
}


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
    top: 3px;
}


.budsmoded > .checkmark  {
    background-image: var(--budsmode-headerbg);
    border-color: var(--budsmode-bordercolor);
}

.checkmark.budsmode{background-image: url(https://i.imgur.com/fuLugA8.jpg);background-size: 167px;}
.container:hover {opacity:0.7;}


.custommode #enable_custom_mode {display: block;}
#enable_custom_mode {display: none;}
.custommode.llama_menu .feature_menu{height: 220px;}
#enable_custom_mode > label > input {position: relative;opacity: 1;cursor: pointer;height: 20px;width: 100px;left: -9px;top: 3px;border-radius: 2px;border: 1px solid #ccc;padding: 0px 0px 0px 5px;}



.user_bg .cams__ContainerInternal {background-image: var(--user-bg-image);}

.user_bg.ubg_cover_on .cams__ContainerInternal {background-size:cover;}
.user_bg.ubg_repeat_on .cams__ContainerInternal {background-repeat:no-repeat;}
.user_bg.ubg_center_on .cams__ContainerInternal {background-position:center center;}
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


.budsmode #theme_wizard,#theme_wizard > option.buds_mode {
color:var(--budsmode-textcolor);
    background-color: var(--budsmode-lightbgcolor);
    border-color: var(--budsmode-bordercolor);}
.user_bg_settings {display:none;}
.user_bg .user_bg_settings {display:block;}

.splatmode #theme_wizard,#theme_wizard > option.buds_mode {
color:var(--budsmode-textcolor);
    background-color: var(--splatmode-bordercolor);
    border-color: var(--splatmode-bordercolor);}

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
  <option value="SPLAT" class="splat_mode">SPLATOON</option>
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
Custom Colors
            </span>
            <label class="container">
                <span class="check_head" style="display: inline-block;width: 100px;">Box Color</span>
                <input class="jscolor {zIndex:'2000'}"  type='text' name="server" id="colorSelection1" value="#004D91"></input>
            </label>
            <label class="container">
                <span class="check_head" style="display: inline-block;width: 100px;">Background</span>
                <input class="jscolor {zIndex:'2000'}"  type='text' name="server" id="colorSelection2" value="#CFCFCF"></input>
            </label>
            <label class="container">
                <span class="check_head" style="display: inline-block;width: 100px;">Border</span>
                <input class="jscolor {zIndex:'2000'}"  type='text' name="server" id="colorSelection3" value="#FFFFFF"></input>
            </label>
            <label class="container">
                <span class="check_head" style="display: inline-block;width: 100px;">Text</span>
                <input class="jscolor {zIndex:'2000'}" type='text' name="server" id="colorSelection4" value="#000000"></input>
            </label>
            <label style="position:relative;left:10px;">
                <input id="Reset_Llama_Color" type="button" style="opacity: 1;cursor: pointer;height: 26px;width: 80px;" value="RESET"/>
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

            <span class="menu_header">
                USER CAM BG
            </span>
            <label class="container">
                <input id="toggle_userbg" type="checkbox">
                <span class="reg_checkmark"></span>
                <span class="check_head">CAM BG</span>
            </label>
<div class="user_bg_settings">
            <label style="position: relative;top: -3px;left: 10px;">
                <input type='text' name="server" id="bgSelection1" placeholder="URL to image.." style="opacity: 1;cursor: pointer;height: 20px;width: 122px;border-radius: 2px;border: 1px solid #ccc;padding: 0px 0px 0px 5px;"/>
                <input id="Save_Llama_BG" type="button" style="opacity: 1;cursor: pointer;height: 26px;width: 26px;border-radius: 5px;border: 1px solid black;" value="✔"/>
                <input id="Remove_Llama_BG" type="button" style="opacity: 1;cursor: pointer;height: 26px;width: 26px;border-radius: 5px;border: 1px solid black;" value="✘"/>
            </label>
            <label class="container">
                <input id="toggle_userbg_cover" type="checkbox">
                <span class="reg_checkmark"></span>
                <span class="check_head">CAM BG STRETCH</span>
            </label>
            <label class="container">
                <input id="toggle_userbg_repeat" type="checkbox">
                <span class="reg_checkmark"></span>
                <span class="check_head">CAM BG NO-REPEAT</span>
            </label>
            <label class="container">
                <input id="toggle_userbg_center" type="checkbox">
                <span class="reg_checkmark"></span>
                <span class="check_head">CENTER</span>
            </label>
</div>

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
    if (event.target.value === 'SPLAT') {Toggle_Theme_Splat();}

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
document.getElementById ("Reset_Llama_Color").addEventListener ("click", Reset_Llama_Color, false);
document.getElementById ("Save_Llama_BG").addEventListener ("click", Save_Llama_BG, false);
document.getElementById ("Remove_Llama_BG").addEventListener ("click", Remove_Llama_BG, false);
document.getElementById ("theme_custommode").addEventListener ("click", Toggle_Theme_Custom, false);
document.getElementById ("toggle_userbg").addEventListener ("click", Toggle_User_BG, false);
document.getElementById ("toggle_userbg_cover").addEventListener ("click", User_BG_Cover, false);
document.getElementById ("toggle_userbg_repeat").addEventListener ("click", User_BG_Repeat, false);
document.getElementById ("toggle_userbg_center").addEventListener ("click", User_BG_Center, false);

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

//----------------------------------------------------------------- USER_BG_COVER -----------------------------------------------------------------
var user_bg_cover = localStorage.getItem('user_bg_cover');
if(user_bg_cover){body.classList.add(user_bg_cover)}
if(user_bg_cover){document.getElementById("toggle_userbg_cover").checked = true;}

function User_BG_Cover (zEvent) {
    var user_bg_cover_new = "ubg_cover_on";
    var user_bg_cover_current = localStorage.getItem('user_bg_cover');
        body.classList.toggle(user_bg_cover_new);
        if(user_bg_cover_current != user_bg_cover_new){localStorage.setItem('user_bg_cover', user_bg_cover_new);}
        if(user_bg_cover_current == user_bg_cover_new){localStorage.setItem('user_bg_cover', '');}
};

//----------------------------------------------------------------- USER_BG_REPEAT -----------------------------------------------------------------
var user_bg_repeat = localStorage.getItem('user_bg_repeat');
if(user_bg_repeat){body.classList.add(user_bg_repeat)}
if(user_bg_repeat){document.getElementById("toggle_userbg_repeat").checked = true;}

function User_BG_Repeat (zEvent) {
    var user_bg_repeat_new = "ubg_repeat_on";
    var user_bg_repeat_current = localStorage.getItem('user_bg_repeat');
        body.classList.toggle(user_bg_repeat_new);
        if(user_bg_repeat_current != user_bg_repeat_new){localStorage.setItem('user_bg_repeat', user_bg_repeat_new);}
        if(user_bg_repeat_current == user_bg_repeat_new){localStorage.setItem('user_bg_repeat', '');}
};

//----------------------------------------------------------------- USER_BG_CENTER -----------------------------------------------------------------
var user_bg_center = localStorage.getItem('user_bg_center');
if(user_bg_center){body.classList.add(user_bg_center)}
if(user_bg_center){document.getElementById("toggle_userbg_center").checked = true;}

var theme_selector_status = localStorage.getItem('theme_selector');
if(theme_selector_status){body.classList.add(theme_selector_status)}

function User_BG_Center (zEvent) {
    var user_bg_center_new = "ubg_center_on";
    var user_bg_center_current = localStorage.getItem('user_bg_center');
        body.classList.toggle(user_bg_center_new);
        if(user_bg_center_current != user_bg_center_new){localStorage.setItem('user_bg_center', user_bg_center_new);}
        if(user_bg_center_current == user_bg_center_new){localStorage.setItem('user_bg_center', '');}
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

//----------------------------------------------------------------- CUSTOM_MODE_RESET -----------------------------------------------------------------

function Reset_Llama_Color (zEvent) {
    var llama_color1 = localStorage.getItem('llama_color1');
    var llama_color2 = localStorage.getItem('llama_color2');
    var llama_color3 = localStorage.getItem('llama_color3');
    var llama_color4 = localStorage.getItem('llama_color4');
    var llama_input1 = "22add5";
    var llama_input2 = "c7cfd9";
    var llama_input3 = "FFFFFF";
    var llama_input4 = "000000";

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

var userlist_Status = localStorage.getItem('user_status');
if(userlist_Status){body.classList.add(userlist_Status);}

document.getElementById ("UserList_Hider").addEventListener ("click", Toggle_UserList, false);
function Toggle_UserList (cEvent) {
    var userlist_Status = localStorage.getItem('user_status')
        body.classList.toggle("hide_userlist");
        if(userlist_Status != "hide_userlist"){localStorage.setItem('user_status', 'hide_userlist');} else {localStorage.setItem('user_status', '');}
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
if(theme_status == "splatmode"){document.getElementById("theme_wizard").selectedIndex = 11;}
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

//----------------------------------------------------------------- THEME_TOGGLE_SPLAT -----------------------------------------------------------------

function Toggle_Theme_Splat (zEvent) {
    var color_choice = "splatmode";
    var theme_status = localStorage.getItem('theme');
        body.classList.toggle(color_choice);
        if(theme_status != color_choice){localStorage.setItem('theme', color_choice);}
        if(theme_status == color_choice){localStorage.setItem('theme', '');}
//REMOVE OTHER THEMES ON BODY TAG
        body.classList.remove("custommode","pinkmode","greenmode","bluemode","mauvemode","orangemode","redmode","purplemode","blackmode","smashmode","budsmode");
//END OTHER THEMES
};
