// ==UserScript==
// @name         JumpinLlama : 2019 Theme
// @namespace    http://www.smokeyllama.com
// @version      2019.50
// @description  Editing Overall Theme of JumpIn. Install and refresh.
// @author       SmokeyLlama
// @match        https://jumpin.chat/*

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

.hero {height:250px;background-position: top center !important;}
.hero__Message {
    padding-top: 17.6rem;}

.profile__Container {border-radius:10px;}

.pinkmode .profile__Container {background-color: var(--pinkmode-bgcolor);border-color: var(--pinkmode-textcolor);}
.greenmode .profile__Container {background-color: var(--greenmode-bgcolor);border-color: var(--greenmode-textcolor);}
.bluemode .profile__Container {background-color: var(--bluemode-bgcolor);border-color: var(--bluemode-textcolor);}
.orangemode .profile__Container {background-color: var(--orangemode-bgcolor);border-color: var(--orangemode-textcolor);}
.redmode .profile__Container {background-color: var(--redmode-bgcolor);border-color: var(--redmode-textcolor);}
.purplemode .profile__Container {background-color: var(--purplemode-bgcolor);border-color: var(--purplemode-textcolor);}
.blackmode .profile__Container {background-color: var(--blackmode-bgcolor);border-color: var(--blackmode-textcolor);}
.budsmode .profile__Container {background-color: var(--budsmode-bgcolor);border-color: var(--budsmode-textcolor);}
.splatmode .profile__Container {background-color: var(--splatmode-bgcolor);border-color: var(--splatmode-textcolor);}

body.pinkmode, {background-color: var(--pinkmode-bgcolor);}
.greenmode, body {background-color: var(--greenmode-bgcolor);}
.bluemode, body {background-color: var(--bluemode-bgcolor);}
.mauvemode, body {background-color: var(--mauvemode-bgcolor);}
.orangemode, body {background-color: var(--orangemode-bgcolor);}
.redmode, body {background-color: var(--redmode-bgcolor);}
.purplemode, body {background-color: var(--purplemode-bgcolor);}
.blackmode, body {background-color: var(--blackmode-bgcolor);}
.budsmode, body {background-color: var(--budsmode-bgcolor);}
.splatmode, body {background-color: var(--splatmode-bgcolor);}

.pinkmode .header {background-color: var(--pinkmode-lightbgcolor);}
.greenmode .header {background-color: var(--greenmode-lightbgcolor);}
.bluemode .header {background-color: var(--bluemode-lightbgcolor);}
.mauvemode .header {background-color: var(--mauvemode-lightbgcolor);}
.orangemode .header {background-color: var(--orangemode-lightbgcolor);}
.redmode .header {background-color: var(--redmode-lightbgcolor);}
.purplemode .header {background-color: var(--purplemode-lightbgcolor);}
.blackmode .header {background-color: var(--blackmode-lightbgcolor);}
.budsmode .header {background-color: var(--budsmode-lightbgcolor);}
.splatmode .header {background-color: var(--splatmode-lightbgcolor);}

.pinkmode .full-width--white,
.pinkmode .fill-height,
.pinkmode .full-width{background-color: var(--pinkmode-bgcolor);}

.greenmode .full-width--white,
.greenmode .fill-height,
.greenmode .full-width{background-color: var(--greenmode-bgcolor);}

.bluemode .full-width--white,
.bluemode .fill-height,
.bluemode .full-width{background-color: var(--bluemode-bgcolor);}

.mauvemode .full-width--white,
.mauvemode .fill-height,
.mauvemode .full-width{background-color: var(--mauvemode-bgcolor);}

.orangemode .full-width--white,
.orangemode .fill-height,
.orangemode .full-width{background-color: var(--orangemode-bgcolor);}

.redmode .full-width--white,
.redmode .fill-height,
.redmode .full-width{background-color: var(--redmode-bgcolor);}

.purplemode .full-width--white,
.purplemode .fill-height,
.purplemode .full-width{background-color: var(--purplemode-bgcolor);}

.blackmode .full-width--white,
.blackmode .fill-height,
.blackmode .full-width{background-color: var(--blackmode-bgcolor);}

.budsmode .full-width--white,
.budsmode .fill-height,
.budsmode  .full-width{background-color: var(--budsmode-bgcolor);}

.splatmode .full-width--white,
.splatmode .fill-height,
.splatmode  .full-width{background-color: var(--splatmode-bgcolor);}


.pinkmode .room__Item {background-color: var(--pinkmode-lightbgcolor);}
.greenmode .room__Item {background-color: var(--greenmode-lightbgcolor);}
.bluemode .room__Item {background-color: var(--bluemode-lightbgcolor);}
.mauvemode .room__Item {background-color: var(--mauvemode-lightbgcolor);}
.orangemode .room__Item {background-color: var(--orangemode-lightbgcolor);}
.redmode .room__Item {background-color: var(--redmode-lightbgcolor);}
.purplemode .room__Item {background-color: var(--purplemode-lightbgcolor);}
.blackmode .room__Item {background-color: var(--blackmode-lightbgcolor);}
.budsmode .room__Item {background-color: var(--budsmode-lightbgcolor);}
.splatmode .room__Item {background-color: var(--splatmode-lightbgcolor);}

.pinkmode .section-header,
.pinkmode .room__Name,
.pinkmode .fas,
.pinkmode .room__Broadcasters,
.pinkmode .room__Viewers,
.pinkmode .room__DetailsDescription {color: var(--pinkmode-textcolor);}

.greenmode .section-header,
.greenmode .room__Name,
.greenmode .fas,
.greenmode .room__Broadcasters,
.greenmode .room__Viewers,
.greenmode .room__DetailsDescription {color: var(--greenmode-textcolor);}

.bluemode .section-header,
.bluemode .room__Name,
.bluemode .fas,
.bluemode .room__Broadcasters,
.bluemode .room__Viewers,
.bluemode .room__DetailsDescription {color: var(--bluemode-textcolor);}

.mauvemode .section-header,
.mauvemode .room__Name,
.mauvemode .fas,
.mauvemode .room__Broadcasters,
.mauvemode .room__Viewers,
.mauvemode .room__DetailsDescription {color: var(--mauvemode-textcolor);}

.orangemode .section-header,
.orangemode .room__Name,
.orangemode .fas,
.orangemode .room__Broadcasters,
.orangemode .room__Viewers,
.orangemode .room__DetailsDescription {color: var(--orangemode-textcolor);}

.redmode .section-header,
.redmode .room__Name,
.redmode .fas,
.redmode .room__Broadcasters,
.redmode .room__Viewers,
.redmode .room__DetailsDescription {color: var(--redmode-textcolor);}

.purplemode .section-header,
.purplemode .room__Name,
.purplemode .fas,
.purplemode .room__Broadcasters,
.purplemode .room__Viewers,
.purplemode .room__DetailsDescription {color: var(--purplemode-textcolor);}

.blackmode .section-header,
.blackmode .room__Name,
.blackmode .fas,
.blackmode .room__Broadcasters,
.blackmode .room__Viewers,
.blackmode .room__DetailsDescription {color: var(--blackmode-textcolor);}

.budsmode .section-header,
.budsmode .room__Name,
.budsmode .fas,
.budsmode .room__Broadcasters,
.budsmode .room__Viewers,
.budsmode .room__DetailsDescription {color: var(--budsmode-textcolor);}

.splatmode .section-header,
.splatmode .room__Name,
.splatmode .fas,
.splatmode .room__Broadcasters,
.splatmode .room__Viewers,
.splatmode .room__DetailsDescription {color: var(--splatmode-textcolor);}


.button-blue:hover {opacity:0.6;}
.chat__HeaderOption:hover {opacity:0.6;}
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
    border-radius: 15px;
    margin-bottom: 0px;
    margin-top: 0px;margin-right: 10px;
}

.bubble_chat .chat__MessageBody-status {
    color: #fff;
    background-color: #22add5;
    bordeR: 1px solid #22add5;
    margin-top: 17px;
    min-height: 18px;
padding-left: 15px;
    padding-right: 15px;
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
.chat__UserListItem {
    border-radius: 5px;
    margin-top: 5px;
}

/* ------------------ MAIN_MESSAGES ------------------ */

.chat__Message {padding-right: 0;}
.chat__Message {margin-top:0px !important;}
.chat__MessageBody-link {color:#ff0000;}
.chat__Message:hover .chat__MessageTimestamp {color:#7289DA;}

.chat__MessageBody  {
	border-radius: 10px;
	padding-right: 10px;
	padding-left: 10px;}
.chat__MessageBody-status {
	border-radius: 2px;
	color: #fff;
	background-color: #22add5;
	min-height: 18px;
	padding-left: 2px;
	padding-right: 2px;}


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
    height: 35px;}

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
    color:#000;}

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
    background: var(--custommodechat-bgcolor);
    touch-action: none;
}

.chat__HeaderOption {
    border-radius: 5px;
    margin: 2px;
    min-height: 27px;border:1px solid black;}

.llama_robo .fa, .llama_robo .far, .llama_robo .fas {
    font-family: "Font Awesome 5 Free" !important;
}
.cams, .chat, .chat__FeedWrapper {background:transparent;}


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

.bubble_chat.pinkmode .chat__MessageBody {
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

.pinkmode .chat__UserListItem {
    border-top-color: var(--pinkmode-bordercolor);
    background-color: var(--pinkmode-bordercolor);}

.pinkmode .chat__UserListItem:hover {
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

.bubble_chat.greenmode .chat__MessageBody {
    background-color: var(--greenmode-bgcolor);
    border-color: var(--greenmode-bordercolor);}

.greenmode .chat__MessageBody-status {
    color: var(--greenmode-textcolor);
    background-color: var(--greenmode-lightbgcolor);
    border-color: var(--greenmode-bordercolor);}

.greenmode.chat__MessageBody-link {
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

.greenmode .chat__UserListItem {
    border-top-color: var(--greenmode-bordercolor);
    background-color: var(--greenmode-bordercolor);}

.greenmode .chat__UserListItem:hover {
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

.bubble_chat.bluemode .chat__MessageBody {
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

.bluemode .chat__UserListItem {
    border-top-color: var(--bluemode-bordercolor);
    background-color: var(--bluemode-bordercolor);}

.bluemode .chat__UserListItem:hover {
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

.bubble_chat.mauvemode .chat__MessageBody {
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

.mauvemode .chat__UserListItem {
    border-top-color: var(--mauvemode-bordercolor);
    background-color: var(--mauvemode-bordercolor);}

.mauvemode .chat__UserListItem:hover {
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

.bubble_chat.orangemode .chat__MessageBody {
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

.orangemode .chat__UserListItem {
    border-top-color: var(--orangemode-bordercolor);
    background-color: var(--orangemode-bordercolor);}

.orangemode .chat__UserListItem:hover {
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

.bubble_chat.redmode .chat__MessageBody {
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

.redmode .chat__UserListItem {
    border-top-color: var(--redmode-bordercolor);
    background-color: var(--redmode-bordercolor);}

.redmode .chat__UserListItem:hover {
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

.bubble_chat.purplemode .chat__MessageBody {
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

.purplemode .chat__UserListItem {
    border-top-color: var(--purplemode-bordercolor);
    background-color: var(--purplemode-bordercolor);}

.purplemode .chat__UserListItem:hover {
    background-color: var(--purplemode-bgcolor);}


/*------------------------------------------------------------------------------------- black_THEME ---*/
:root {
--blackmode-bgcolor: #2C2F33;
    --blackmode-bordercolor: #23272a;
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
color:white;
border-color:var(--blackmode-bordercolor);}
.blackmode .mobileHidden {color:#7289da;}
.blackmode .button-default {color:var(--blackmode-bgcolor);background-color:var(--blackmode-bordercolor);}
.blackmode .button-white {background-color:var(--blackmode-bordercolor);}
.blackmode .fa-envelope:before {color:#7289da;}
.blackmode .chat__UserListItem {
    border-color:var(--blackmode-lightbordercolor);
background-color:var(--blackmode-bordercolor);}
.blackmode .fa-clipboard:before {color:#7289da;}

.blackmode .fa-user:before {color:var(--blackmode-lightbordercolor);}

.blackmode .userList__UserHandle-current {color:white;}

.blackmode .mediaSources__SourceWrapper {background-color:var(--blackmode-bordercolor);}
.blackmode .tabs__Item.active::after {background-color:#7289da;}
.blackmode.ltr_layout .chat__UserList {border-color:var(--blackmode-bordercolor);}
.blackmode #Chat_Hider::after {background:#7289da;}
.blackmode #UserList_Hider::after {background:#7289da;}
.blackmode.ltr_layout #LTR_Toggle::after {background:#7289da;}

.blackmode .room {background-color:var(--blackmode-lightbgcolor);}
.blackmode .modal__Window {border: 1px solid #7289da;}
.blackmode .chat__HeaderOption {border-color: var(--blackmode-bordercolor);background-color: var(--blackmode-bordercolor);color: #7289da;}

.blackmode .fa.fa-gear:before, .blackmode .icon--hd {color: #7289da;}

.bubble_chat.blackmode .chat__MessageBody {
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
    color:  #7289DA;
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
    background-color: var(--blackmode-lightbgcolor);}
.blackmode .chat__Feed{border-left-color: var(--blackmode-lightbordercolor);}
.blackmode .layout--horizontal .chat__UserList {
    border-color: var(--blackmode-lightbordercolor);}

.blackmode .chat__UserListItem {
    background-color: var(--blackmode-bordercolor);}

.blackmode .chat__UserListItem:hover {
    background-color: var(--blackmode-bgcolor);}

.blackmode #new > svg > path,
#app > div > div.roomHeader > div > a.button.button-floating.button-icon.button-red.roomHeader__UserAction > svg > path,
#app > div > div.cams > div.cams__Header > div.cams__HeaderActions > button > svg > path
 {color:#7289da !important;}

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

.budsmode .chat__UserListItem {
    border-top-color: var(--budsmode-bordercolor);
    background-color: var(--budsmode-bordercolor);}

.budsmode .chat__UserListItem:hover {
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

.splatmode .chat__UserListItem {
    border-top-color: var(--splatmode-bordercolor);
    background-color: var(--splatmode-bordercolor);}

.splatmode .chat__UserListItem:hover {
    background-color: var(--splatmode-lightbgcolor);
color:  var(--splatmode-textcolor) !important;}

.splatmode .chat__UserListItem+.userList__UserHandle:hover {
color:  var(--splatmode-textcolor) !important;}

/*------------------------------------------------------------------------------------- custom_THEME ---*/
:root {

    --custommodeheader-bgcolor: #22ADD5;
    --custommodebars-bgcolor: #C7CFD9;
    --custommodecams-bgcolor: #FFFFFF;

    --custommodebutton-bgcolor: #C7CFD9;
    --custommodebutton-textcolor: #FFFFFF;
    --custommodebutton-bordercolor: #000000;

    --custommodechat-bgcolor: #22ADD5;
    --custommodechat-bubble-bgcolor: #C7CFD9;
    --custommodechat-bubble-bordercolor: #FFFFFF;

    --custommodeuser-bgcolor: #22ADD5;
    --custommodeusername-bgcolor: #C7CFD9;
    --custommodeusername-textcolor: #FFFFFF;
}

/* ------------------------------ custom_LLAMA_MENU ----------------------------------- */
.custommode .cams, .custommode .chat {background-color:var(--custommodecams-bgcolor);border-radius:0px;}
.custommode .chat__Feed {background-color:var(--custommodechat-bgcolor);}

.custommode .tabs__Item,
.custommode .tabs__Item.active
{color:var(--custommodecams-bgcolor);}

.custommode .roomHeader__LogoText
{color:var(--custommodebutton-textcolor);}
.custommode .chat__InputAction.button{background-color:var(--custommodebutton-bgcolor);}

.custommode .cams__InfoCount {color:var(--custommodecams-bgcolor);}
.custommode .cams__InfoLabel {color:var(--custommodecams-bgcolor);}
.custommode .cams__RoomName {color:var(--custommodecams-bgcolor);}
.custommode .roomHeader__UserAction {
background-color:var(--custommodebutton-bgcolor);
color:white;
border-color:var(--custommodebutton-bordercolor);}
.custommode .mobileHidden {color:var(--custommodebutton-textcolor);}
.custommode .button-default {color:var(--custommode-bgcolor);background-color:var(--custommode-bordercolor);}
.custommode .button-white {background-color:var(--custommodebutton-bgcolor);}
.custommode .fa-envelope:before {color:var(--custommodebutton-textcolor);}
.custommode .chat__UserListItem {
    border-color:var(--custommode-lightbordercolor);
background-color:var(--custommode-bordercolor);}
.custommode .fa-clipboard:before {color:var(--custommodebutton-textcolor);}

.custommode .fa-user:before {color:var(--custommode-lightbordercolor);}

.custommode .userList__UserHandle-current {color:white;}

.custommode .mediaSources__SourceWrapper {background-color:var(--custommode-bordercolor);}
.custommode .tabs__Item.active::after {background-color:var(--custommodebutton-bordercolor);}
.custommode.ltr_layout .chat__UserList {border-color:var(--custommode-bordercolor);}
.custommode #Chat_Hider::after {background:#7289da;}
.custommode #UserList_Hider::after {background:#7289da;}
.custommode.ltr_layout #LTR_Toggle::after {background:#7289da;}

.custommode .room {background-color:var(--custommode-lightbgcolor);}
.custommode .modal__Window {border: 1px solid #7289da;}
.custommode .chat__HeaderOption {border-color: var(--custommodebutton-bordercolor);background-color: var(--custommodebutton-bgcolor);color: var(--custommodebutton-textcolor);}

.custommode .fa.fa-gear:before, .custommode .icon--hd {color: var(--custommodebutton-textcolor);}

.bubble_chat.custommode .chat__MessageBody {
    background-color: var(--custommodechat-bubble-bgcolor);
    border-color: var(--custommodechat-bubble-bordercolor);}

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
    background-color: var(--custommodeheader-bgcolor);}

.custommode .privateMessages__Empty{
    background-color: var(--custommode-bgcolor);}

/* --------- CHANGE NICKNAME --------- */

.custommode .modal__Body, .custommode .modal__Footer {
    background-color: var(--custommodecams-bgcolor) !important;
    border-color:#7289DA;}

.custommode .modal__Header {
    background-color: var(--custommodebars-bgcolor);
    border-color:  var(--custommodebars-bgcolor);
    border-bottom: 0px;}

.custommode .modal__SubText {
    color:  var(--custommodechat--bubble-textcolor) !important;}

.custommode .input {
    color:  var(--custommodebutton-textcolor) !important;
    border-color:  var(--custommodebutton-bordercolor) !important;
    background-color: var(--custommodebutton-bgcolor) !important;}

.custommode .button-blue {
    background-color: var(--custommodebutton-bgcolor);
    color:  var(--custommodebutton-textcolor);
    border:1px solid  var(--custommodebutton-bordercolor);}

.custommode .chat__ShareCopy {border:1px solid var(--custommodebutton-bordercolor);border-left:0px;
    background-color: var(--custommodebutton-bgcolor);}

/* --------- CAMERAS --------- */

.custommode .cams__Header {
    background-color:  var(--custommodebars-bgcolor) !important;
    border-color: var(--custommodebars-bgcolor);border:0px;}

.custommode .cams__Cam {
    border-color:  var(--custommode-bordercolor) !important;}



/* --------- CHAT --------- */
.custommode .chat__Header {
    background-color: var(--custommodebars-bgcolor) !important;
    border-color: var(--custommodebars-bgcolor);border:0px;}

.custommode .chat__FeedWrapper {
    border-color: var(--custommode-lightbordercolor);}

.custommode .chat__InputWrapper {
    border-color: var(--custommode-bordercolor);
    background-color: var(--custommode-bgcolor);}

.custommode .input::placeholder {
    color: var(--custommode-textcolor);}

.custommode .input::focus {
    border-color: var(--custommode-bordercolor);}

/* --------- USERS LIST --------- */
.custommode .chat__UserList {
    background-color: var(--custommodeuser-bgcolor);}
.custommode .chat__Feed{border-left-color: var(--custommode-lightbordercolor);}
.custommode .layout--horizontal .chat__UserList {
    border-color: var(--custommode-lightbordercolor);}

.custommode .chat__UserListItem {
    background-color: var(--custommodeusername-bgcolor);color: var(--custommodeusername-textcolor);}

.custommode .chat__UserListItem:hover {
    opacity:0.5;}

.custommode #new > svg > path,
.custommode #app > div > div.roomHeader > div > a.button.button-floating.button-icon.button-red.roomHeader__UserAction > svg > path,
.custommode #app > div > div.cams > div.cams__Header > div.cams__HeaderActions > button > svg > path
 {color: var(--custommodebutton-textcolor) !important;}
/* ----------------------------------------------------- END_THEMES -----------------------------------*/


/* ------------------------------ CHAT_HIDER ----------------------------------- */

.toggle_chat {display:none;}

.layout--horizontal .toggle_chat {display:block;}

.hide_chat .chat__FeedWrapper {display:none;}
.hide_chat .chat__UserList {width: 100%;}
.hide_chat .room.layout--horizontal {grid-template-columns: 1fr 1fr 20rem;}
.hide_userlist .room.layout--horizontal {grid-template-columns: 1fr 1fr 40rem;}


/* ------------------------------ USER_LIST_HIDER ----------------------------------- */

.hide_userlist .chat__UserList {display:none;}

/* ------------------------------ LTR_LAYOUT -----------------------------------*/


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

.ltr_layout.hide_chat.hide_userlist .chat {
    display: none;}

.ltr_layout.hide_chat.hide_userlist .room.layout--horizontal {grid-template-columns: 0fr 1fr 0rem;}

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

#theme_wizard {display:block;
width: 132px;

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



/* ------------------------------ LLAMA_CHAT_MENU ----------------------------------- */
.llama_robo.open_llama_chat #Llama_Chat {width:175px;}
.open_llama_chat #Llama_Chat {
    display: block;
    top: 49%;
    position: absolute;
    right: 11px;
    border-radius: 3px;
}

#Llama_Chat {
    display: none;
    width: 154px;
z-index:4000;
}

.hide_userlist.hide_chat.open_llama_chat #Llama_Chat {
    top: -205px;
}

.room.layout--horizontal > div.chat > div.chat__Header > div.chat__HeaderOptions > div {    top: 94px !important;}

/* ------------------------------ LLAMA_CAM_MENU ----------------------------------- */

.open_llama_cam #Llama_Cam {
    display: block;
    top: 58%;
    position: absolute;
    right: 11px;
    border-radius: 3px;
}

#Llama_Cam {
    display: none;
    width: 154px;
z-index:4000;
}

.hide_userlist.hide_chat.open_llama_chat #Llama_Cam {
    top: -205px;
}


/* ------------------------------ LLAMA_CUSTOM_MENU ----------------------------------- */

.custommode.open_llama_theme #Llama_Custom {
    display: block;
    top: 190px;
    position: absolute;
    right: 219px;
    border-radius: 3px;
}

#Llama_Custom {
    display: none;
    width: 250px;
z-index:4000;
}

.hide_userlist.hide_chat.open_llama_theme #Llama_Custom {
    top: -205px;
}



/* ------------------------------ LLAMA_THEME_MENU ----------------------------------- */

.open_llama_theme #Llama_Theme {
    display: block;
    top: 58%;
    position: absolute;
    right: 11px;
    border-radius: 3px;background: #f7f7f7;
}

#Llama_Theme {
    display: none;
    width: 195px;height:90px;
z-index:4000;
}

.hide_userlist.hide_chat.open_llama_theme #Llama_Theme {
    top: -205px;
}

.room.layout--horizontal > div.chat > div.chat__Header > div.chat__HeaderOptions > div {    top: 94px !important;}

.user_bg.open_llama_theme #Llama_Theme {    height: 282px;top: 38%;}



.dark .user_bg_settings {border-color: #665c54;
    color: #fbf1c7;background-color: #504945;}
#New_Llama_Notice {
    z-index: 6000;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    font-size: 1em;
    display:none;
    border-radius: 10px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 0 10px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 10px;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 10px;}
#New_Llama_Notice{color:#ccc;}
.hide_notice #New_Llama_Notice {display:block;}
.dark #New_Llama_Notice {color:white;}

#New_Llama_Notice {display:none;}


#close_box {

    width: 40%;
    background: black;
    margin: 0 auto;padding:10px 0px;border-radius:50px;border:1px solid red;
}
.theme_alert_notice {
position: fixed;
    top: 15%;
    /* right: 50%; */
    width: 100%;

}

.feat_title {width:200px;displaY: inline-block;text-align:left;}

@font-face{font-family: 'Roboto Mono';
src: url('data:application/font-ttf;base64,AAEAAAAQAQAABAAAR0RFRgsxCzIAAbicAAAAQEdTVULmEd8TAAG43AAAAkhPUy8yuK7p+QAAAYgAAABgY21hcFPnoi8AABIMAAAIamN2dCBh8hRdAAAmuAAAAJxmcGdt9ETCtAAAGngAAAuWZ2FzcAAAABAAAbiUAAAACGdseWbUbNEFAAAveAABYnRoZWFkAB1pAQAAAQwAAAA2aGhlYQsNBBkAAAFEAAAAJGhtdHgdyjhbAAAB6AAAECJsb2NhvQYT1wAAJ1QAAAgkbWF4cAXUDRoAAAFoAAAAIG5hbWVBlG2UAAGR7AAAAwRwb3N07sPECQABlPAAACOjcHJlcDPNE4IAACYQAAAApgABAAAAAgCDhFIncV8PPPUACQgAAAAAAMTwES4AAAAA2HEMCvwF/dUHmQhzAAAACQACAAAAAAAAAAEAAAds/gwAAAma/AX4cgeZAAEAAAAAAAAAAAAAAAAAAAQAAAEAAAQRALAAFgBwAAUAAgBQAGAAdwAAAN0LlwADAAEAAwTOAZAABQAABZoFMwAAAR8FmgUzAAAD0QBmAgAAAAAAAAAAAAAAAADgAAL/EAAgWwAAACAAAAAAcHlycwBAAAD//QYA/gAAZgeaAgAgAAGfTwEAAAQ6BbAAAAAgAAEEzQAAAAAAAATNAAAEzQAABM0BYgTNAD0EzQCiBM0ALATNAGsEzQHuBM0BZQTNAUAEzQCgBM0AdwTNAWIEzgDaBM0B8ATNAPwEzQCRBM0A0ATNAFUEzQBeBM0ASwTNALsEzQCNBM0AcATNALEEzQCVBM0CIgTNAeYEzQCqBM0ArQTNALIEzQC/BM0AQATNAFEEzQCsBM0AawTNAJsEzQC2BM0AvwTNAGQEzQCNBM0ArgTNAGIEzQCsBM0AxgTNAJQEzQCPBM0AagTNAL8EzQBeBM0AtQTNAHYEzQBMBM0AiwTNAEcEzQBJBM0AVwTNAD0EzQByBM0BqgTNAOcEzQGVBM0A5wTNAJsEzQGfBM0AnATNAK8EzQCPBM0AiwTNAIcEzgCYBM0AjATNAK4EzQDLBM0A0wTNALAEzQDLBM0AXQTNAK4EzQB6BM0ArQTNAIwEzQFJBM0ArwTNAI4EzQC0BM0AYgTNADAEzQBuBM0ARATNAKAEzQFDBM0CHATNAUMEzQAwBM0B8gTNAJMEzQBxBM0AZwTNACEEzQH/BM0AVwTNAR8EzQBaBM0BHATNANQEzQC9BM0AVwTNAQEEzQFpBM0AnATNATwEzQFDBM0BmgTNALwEzQDTBM0B+ATNAc0EzQGCBM0BEATNAPEEzQAwBM0AJATNACUEzQDMBM0AIATNALUEzQBHBM0AqATNAKkEzQArBM0ASQTNAHMEzQB6BM0ArQTNABgEzQDLBM0AgATNAFAEzQC6BM0AOgTNAMsEzQCvBM0AuATNAE8EzQAuBM0ByATNAKAEzQBjBM0AdwTNAIsEzQC0BM0AsATNALEEzQDBBM0BMATNATsEzQHyBM0BmgTNAY4EzQCKBM0A9gTNAa0EUvzKBFL9aARS/IgEUv1ZBFL8BQRS/ScEzQIpBM0BEwTNAjAEzQC1BM0ALgTNAGoEzQA2BM0AkQTNAKIEzQBwBM0ARQTNAGUEzQBhBM0AgQTNAK4EzQBHBM0AeATNAIsEzQB1BM0ApATNALkEzQC4BM0AOQTNAK8EzQBZBM0ApQTNAHgEzQBtBM0ArQTNAJ4EzQBuBM0AYQTNAE8EzQCYBM0ANgTNAC4EzQAqBM0AgQTNAB4EzQCDBM0AQwTNAKIEzQCiBM0ARgTNAB0EzQBZBM0AogTNAC8EzQArBM0ApgTNAKsEzQB9BM0AfQTNADIEzQCQBM0AqATNAHIEzQB3BM0AQQTNAIEEzQCkBM0AtwTNADYEzQARBM0AhwTNAKUEzQCkBM0ANwTNAIkEzQClBM0ApQTNAGgEzQB6BM0AqgTNAI0EzQCBBM0AdgTNADkEzQCQBM0ApQTNAIEEzQBxBM0ATwTN/+kEzQCPBM0AJgTNAIIEzQAcBM0ApQTNAGsEzQBfBM0AHATNAH0EzQCbBM0AJwTNAFcEzQBxBM0AcATNAFUEzQBpBM0AUATNAFEEzQDKBM0A3gTNAGMEzQBdBM0AGgTNAFEEzQBFBM0ANwTNAGoEzQB6BM0ATQTNAGcEzQBxBM0AXwTNAJcEzQC/BM0AdgAAANEAAAD8AAABwwAAAjwAAP7nAAAATgTNAL8EzQCtBM0AtgTNALYEzQC5BM0AuATNAK4EzQCjBM0ALQTNADgEzQByBM0AbgTNAG0EzQB0BM0AaATNAFwEzQA5BM0ANATNAKsEzQCSBM0A4wTNACYEzQAmBM0AyATNALQEzQC2BM0AswTNAFoEzQCUBM0AiQTNAEIEzQB0BM0AYQTNAE0EzQBlBM0ANwTNAFAEzQCzBM0A0ATNABQEzQAvBM0AbwTNAHUEzQCOBM0AoATNAEwEzQBJBM0AbATNAAAEzQAABM0AAATNAAAEzQAABM0AAATNAAAEzQAABM0AAATNAAAEzQAABM0AAATNAEkEzQBOBM0ApgTNAewEzQHNBM0BvATNAc8EzQFJBM0BLQTNAS8EzQB3BM0AeQTNAZoEzQFcBM0BCQTNADYEzQGMBM0BjATNASsEzQEPBM0BSwTNAGkEzQB/BM0AfwTNAEkEzQDdBM0AeQTNAGcEzQCZBM0AUATNADIEzQAkBM0AQATNAH4EzQCnBM0AMwTNAKkEzQA5BM0ANQTNAPgEzQCNBM0AqQTNALsEzQDCBM0AjgTNAS4EzQAABM0AXATNAA8EzQC4BM0BOgTNAREEzQD8BM0AEATNAQsEzQEwBM0B+QTNADYEzQDQBM0AbgTNALcEzQDIBM0A5wTNAHwEzQCbBM0A2QTNAJYEzQC0BM0A0QTNAJsEzQDCBM0AggTNAF4EzQCQBM0AigTNAF0EzQC1BM0AVgTNAC8EzQBgBM0ATQTNALkEzQFSBM0BDgTNALYEzQDFBM0AiQTNANEEzQDhBM0AvATNANEEzQC6BM0BPwTNAVsEzQFCBM0BOATNASMEzQFABM0BOwTNATAEzQE+BM0BQATNATUEzQHRBM0B9QTNAXQEzQIGBM0BaQTNAWAEzQBuBM0AsgTNAMsEzQGgBM0A0ATNAFQEzQDMBM0AawTNAKMEzQCpBM0AeQTNAKAEzQDOBMsAjQTNAFoEzQCPBM0A0gTNATsEzQAABM4A2gTr/9QE6//UBOsAGgTNAEwEzQCOBM0AUQTNAFEEzQBRBM0AUQTNAFEEzQBRBM0AUQTNAGsEzQC2BM0AtgTNALYEzQC2BM0ArgTNAK4EzQCuBM0ArgTNAI8EzQBqBM0AagTNAGoEzQBqBM0AagTNAIsEzQCLBM0AiwTNAIsEzQA9BM0AnATNAJwEzQCcBM0AnATNAJwEzQCcBM0AnATNAI8EzQCHBM0AhwTNAIcEzQCHBM0AywTNAMsEzQDLBM0AywTNAK4EzQB6BM0AegTNAHoEzQB6BM0AegTNALQEzQC0BM0AtATNALQEzQBEBM0ARATNAFEEzQCcBM0AUQTNAJwEzQBRBM0AnATNAGsEzQCPBM0AawTNAI8EzQBrBM0AjwTNAGsEzQCPBM0AmwVjAIsEzQC2BM0AhwTNALYEzQCHBM0AtgTNAIcEzQC2BM0AhwTNALYEzQCHBM0AZATNAIwEzQBkBM0AjATNAGQEzQCMBM0AZATNAIwEzQCNBM0ArgTNAK4EzQDLBM0ArgTNAMsEzQCuBM0AywTNAK4EzQDLBM0ArgTNAGIEzQCwBM0ArATNALAEzQDGBM0AywTNAMYEzQDLBM0AxgVjAMsEzQDGBakAywTNAI8EzQCuBM0AjwTNAK4EzQCPBM0ArgTN/7oEzQBqBM0AegTNAGoEzQB6BM0AagTNAHoEzQC1BM0BSQTNALUEzQEQBM0AtQTNARQEzQB2BM0ArwTNAHYEzQCvBM0AdgTNAK8EzQB2BM0ArwTNAHYEzQCvBM0ATATNAI4EzQBMBM0AXQTNAI4EzQBMBPUAjgTNAIsEzQC0BM0AiwTNALQEzQCLBM0AtATNAIsEzQC0BM0AiwTNALQEzQCLBM0AtATNAEkEzQAwBM0APQTNAEQEzQA9BM0AcgTNAKAEzQByBM0AoATNAHIEzQCgBM0AIATNACsEzQBHBM0AegTN/+cEzf/nBM0AXQTNADYEzQA2BM0ANgTNADYEzQA2BM0ANgTNADYEzQBuBM0AyATNAMgEzQDIBM0AyATNANkEzQDZBM0A2QTNANkEzQDCBM0AggTNAIIEzQCCBM0AggTNAIIEzQC1BM0AtQTNALUEzQC1BM0ATQTNADYEzQA2BM0ANgTNAG4EzQBuBM0AbgTNAG4EzQC3BM0AyATNAMgEzQDIBM0AyATNAMgEzQB8BM0AfATNAHwEzQB8BM0AmwTNANkEzQDZBM0A2QTNANkEzQDZBM0AlgTNALQEzQC2BM0A0QTNANEEzQDRBM0AwgTNAMIEzQDCBM0AggTNAIIEzQCCBM0AkATNAJAEzQCQBM0AigTNAIoEzQCKBM0AigTNAF0EzQBdBM0AtQTNALUEzQC1BM0AtQTNALUEzQC1BM0ALwTNAE0EzQBNBM0AuQTNALkEzQC5BM0AUQUxAA8FMf/9BTH/7AThAAkFMf+yBOEABQTNALgEzQBRBM0ArATNALYEzQByBM0AjQTNAK4EzQCsBM0AlATNAI8EzQBqBM0AvwTNAEwEzQA9BM0AVwTNAK4EzQA9BM0AgQTNAIsEzQCkBM0AuATNAJ4EzQC6BM0AegTNALwEzQBiBM0AbgTNALgEzQCeBM0AegTNAJ4EzQBPBM0AtgTNALUEzQB2BM0ArgTNAK4EzQBiBM0AqQTNAKwEzQArBM0AUQTNAKwEzQC1BM0AtgTNAKIEzQCUBM0AjQTNAGoEzQCiBM0AvwTNAGsEzQBMBM0ARQTNAFcEzQCcBM0AhwTNAKUEzQB6BM0ArQTNAI8EzQBEBM0AbgTNAIcEzQC3BM0ArwTNAMsEzQDLBM0A0wTNAKQEzQBEBM0ASQTNADAEzQBJBM0AMATNAEkEzQAwBM0APQTNAEQEzQHuBM0BYgmaAeYEzQCwBM0BzQTNAJQEzQBdBM0AUQTNAJwEzf+JBM0AtgTNAKIEzQCHBM0ApQTNAGUEzQBhBM0AGgTNADUEzQBZBM0AhwTNAGsEzQCPBM0APQTNAEcEzQCuBM0AHQTNABEEzQCuBM0AUQTNAJwEzQBRBM0AnATNACAEzQArBM0AtgTNAIcEzQBaBM0AsQTNALEEzQAdBM0AEQTNAFkEzQCHBM0AogTNAKUEzQCiBM0ApQTNAGoEzQB6BM0AYwTNAF0EzQBjBM0AXQTNAHIEzQCBBM0AKwTNAEQEzQArBM0ARATNACsEzQBEBM0AqwTNAI0EzQCQBM0AkATNAFcEzQBuBM0AiwTNAC8EzQA3BM0AUQTNAJwEzQBRBM0AnATNAFEEzQCcBM3//ATN//gEzQBRBM0AnATNAFEEzQCcBM0AUQTNAJwEzQBRBM0AnATNAFEEzQCcBM0AUQTNAJwEzQBRBM0AnATNAFEEzQCcBM0AtgTNAIcEzQC2BM0AhwTNALYEzQCHBM0AtgTNAIcEzf/yBM3/8wTNALYEzQCHBM0AtgTNAIcEzQC2BM0AhwTNAK4EzQDLBM0ArgTNAMsEzQBqBM0AegTNAGoEzQB6BM0AagTNAHoEzQAABM3/7QTNAGoEzQB6BM0AagTNAHoEzQBqBM0AegTNAGMEzQB3BM0AYwTNAHcEzQBjBM0AdwTNAGMEzQB3BM0AYwTNAHcEzQCLBM0AtATNAIsEzQC0BM0AiwTNALQEzQCLBM0AtATNAIsEzQC0BM0AiwTNALQEzQCLBM0AtATNAD0EzQBEBM0APQTNAEQEzQA9BM0ARATrAIsE6wCLBM0AqQTNAKQEzQCNBM0ApQTNAEwEzQBoBM0AVwTNAG4EzQCrBM0AjQTNAKsEzQCNBM0AtQTNALcEzQAdBM0AEQTNACYEzQAmBM0ArgTNABIEzf/UBM3/1ATN//0Ezf/7BOEACQTh//MEzQCiAKUAjQClAJQAiQAvADcAPQBHAFcAbgCLABEATgAAAAAB5gAAAAAAAwAAAAMAAAAcAAEAAAAABmAAAwABAAAAHAAEBkQAAADgAIAABgBgAAAAAgAJAA0AIQB+AKAArACtAL8AxgDPAOYA7wD+AQ8BEQElAScBMAFTAV8BZwF+AX8BkgGhAbAB8AH/AhsCNwJZArwCxwLJAt0C8wMBAwMDCQMPAyMDigOMA5IDoQOwA7kDyQPOA9ID1gQlBC8ERQRPBGIEbwR3BIYEzgTXBOEE9QUBBRAFEx4BHj8ehR7xHvMe+R9NIAsgFSAeICIgJiAwIDMgOiA8IEQgdCB/IKQgpyCsIQUhEyEWISIhJiEuIV4iAiIGIg8iEiIaIh4iKyJIImAiZSXK9sP+///9//8AAAAAAAIACQANACAAIgCgAKEArQCuAMAAxwDQAOcA8AD/ARABEgEmASgBMQFUAWABaAF/AZIBoAGvAfAB+gIYAjcCWQK8AsYCyQLYAvMDAAMDAwkDDwMjA4QDjAOOA5MDowOxA7oDygPRA9YEAAQmBDAERgRQBGMEcAR4BIgEzwTYBOIE9gUCBREeAB4+HoAeoB7yHvQfTSAAIBMgFyAgICUgMCAyIDkgPCBEIHQgfyCjIKcgqyEFIRMhFiEiISYhLiFbIgIiBiIPIhEiGiIeIisiSCJgImQlyvbD/v///P//AAEEDAQG//UAAP/iAUP/wAE3/78AAAEqAAABJQAAASEAAAEfAAABHQAAARMAAAEW/xX/A/72/ukBWAAAAAD+Y/5CAI391v2l/cb9sf2l/aT9n/2a/YcAAP9n/2YAAAAA/QcAAP9H/Pv8+AAA/LYAAPyuAAD8owAA/J8AAP6RAAD+jgAA/EcAAOVM5QzkveTr5FHk6eQB4VgAAOFP4U7hTOFD4xPhO+ML4TLhA+D5AADg0wAA4HfgauBo4F3fkeBS4Cbfg96p33ffdt9v32zfYN9E3y3fKtvGCs4CkwGXAAEAAAAAAAAAAADYAAAAAAAAAAAAAADQAAAA2gAAAQQAAAEeAAABHgAAAR4AAAFgAAAAAAAAAAAAAAAAAWIBbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFaAAAAAAFiAX4AAAGWAAAAAAAAAa4AAAH2AAACHgAAAkAAAAJMAAAC1gAAAuYAAAL6AAAAAAAAAAAAAAAAAAAAAALuAAAAAAAAAAAAAAAAAAAAAAAAAAAC3gAAAt4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBBAB6gHrAewB7QHuAe8AfwHmAfoB+wH8Af0B/gH/AIAAgQIAAgECAgIDAgQAggCDAgUCBgIHAggCCQIKAIQAhQIVAhYCFwIYAhkCGgCGAIcCGwIcAh0CHgIfAIgB5QPjAIkB5wCKAIsAjAJOAk8CUAJRAI0CUgJTAlQCVQJWAlcCWAJZAI4AjwJaAlsCXAJdAl4CXwJgAJAAkQJhAmICYwJkAmUCZgCSAJMCdQJ2AnkCewJ8An0B6AHpAfACCwKVApYClwKYAnMCdAJ3AngAqwCsAu8ArQLwAvEC8gCuAK8C+QL6AvsAsAL8Av0AsQL+Av8AsgMAALMDAQC0AwIDAwC1AwQAtgC3AwUDBgMHAwgDCQMKAwsDDADBAw4DDwDCAw0AwwDEAMUAxgDHAMgAyQMQAMoAywNPAxYAzwMXANADGAMZAxoDGwDRANIA0wMdA1ADHgDUAx8A1QMgAyEA1gMiANcA2ADZAyMDHADaAyQDJQMmAycDKAMpAyoA2wMrAywDLQDmAOcA6ADpAy4A6gDrAOwDLwDtAO4A7wDwAzAA8QMxAzIA8gMzAPMDNANRAzUA/gM2AP8DNwM4AzkDOgEAAQEBAgM7A1IDPAEDAQQBBQP6A1MDVAETARQBFQEWA1UDVgEmAScD/wQAA/kD+AEoASkBKgErA/sD/AEsAS0D8wP0A1cDWAPlA+YBLgEvA/0D/gEwATED5wPoATIBMwE0ATUBNgE3A1kDWgPpA+oDWwNcBAcECAPrA+wBOAE5A+0D7gE6ATsBPAP3AT0BPgP1A/YDXQNeA18BPwFABAUEBgFBAUIEAQQCA+8D8AQDBAQBQwNqA2kDawNsA20DbgNvAUQBRQPxA/IDhAOFAUYBRwOGA4cECQQKAUgDiAQLA4kDigFkAWUEDQQMAXkD5AF7AAYCCgAAAAABAAABAAAAAAAAAAAAAAAAAAAAAQACAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAwQQAAQABQAGAAcACAAJAAoACwAMAA0ADgAPABAAEQASABMAFAAVABYAFwAYABkAGgAbABwAHQAeAB8AIAAhACIAIwAkACUAJgAnACgAKQAqACsALAAtAC4ALwAwADEAMgAzADQANQA2ADcAOAA5ADoAOwA8AD0APgA/AEAAQQBCAEMARABFAEYARwBIAEkASgBLAEwATQBOAE8AUABRAFIAUwBUAFUAVgBXAFgAWQBaAFsAXABdAF4AXwBgAAAB7gHvAfEB8wH6Af8CAwIGAgUCBwIJAggCCgIMAg4CDQIPAhACEgIRAhMCFAIVAhcCFgIYAhoCGQIcAhsCHQIeAW4AbwBiAGMAZwFwAHUAgwBtAGkBfwBzAGgBjQB/AIEBigBwAY4BjwBlAHQBhQGHAYYAwwGLAGoAeQC3AIQAhwB+AGEAbAGJAJUBjACvAGsAegFyAAMB6gHtAf4AkgCTAWQBZQFrAWwBZwFoAIYBkAIgAo4BdgF7AXQBdQAAAAABbwB2AWkBbQFzAewB9AHrAfUB8gH3AfgB+QH2AfwB/QAAAfsCAQICAgAAigCcAKIAbgCeAJ8AoAB3AKMAoQCdAACwACwgsABVWEVZICBLsA5RS7AGU1pYsDQbsChZYGYgilVYsAIlYbkIAAgAY2MjYhshIbAAWbAAQyNEsgABAENgQi2wASywIGBmLbACLCBkILDAULAEJlqyKAEKQ0VjRVJbWCEjIRuKWCCwUFBYIbBAWRsgsDhQWCGwOFlZILEBCkNFY0VhZLAoUFghsQEKQ0VjRSCwMFBYIbAwWRsgsMBQWCBmIIqKYSCwClBYYBsgsCBQWCGwCmAbILA2UFghsDZgG2BZWVkbsAErWVkjsABQWGVZWS2wAywgRSCwBCVhZCCwBUNQWLAFI0KwBiNCGyEhWbABYC2wBCwjISMhIGSxBWJCILAGI0KxAQpDRWOxAQpDsARgRWOwAyohILAGQyCKIIqwASuxMAUlsAQmUVhgUBthUllYI1khILBAU1iwASsbIbBAWSOwAFBYZVktsAUssAdDK7IAAgBDYEItsAYssAcjQiMgsAAjQmGwAmJmsAFjsAFgsAUqLbAHLCAgRSCwC0NjuAQAYiCwAFBYsEBgWWawAWNgRLABYC2wCCyyBwsAQ0VCKiGyAAEAQ2BCLbAJLLAAQyNEsgABAENgQi2wCiwgIEUgsAErI7AAQ7AEJWAgRYojYSBkILAgUFghsAAbsDBQWLAgG7BAWVkjsABQWGVZsAMlI2FERLABYC2wCywgIEUgsAErI7AAQ7AEJWAgRYojYSBksCRQWLAAG7BAWSOwAFBYZVmwAyUjYUREsAFgLbAMLCCwACNCsgsKA0VYIRsjIVkqIS2wDSyxAgJFsGRhRC2wDiywAWAgILAMQ0qwAFBYILAMI0JZsA1DSrAAUlggsA0jQlktsA8sILAQYmawAWMguAQAY4ojYbAOQ2AgimAgsA4jQiMtsBAsS1RYsQRkRFkksA1lI3gtsBEsS1FYS1NYsQRkRFkbIVkksBNlI3gtsBIssQAPQ1VYsQ8PQ7ABYUKwDytZsABDsAIlQrEMAiVCsQ0CJUKwARYjILADJVBYsQEAQ2CwBCVCioogiiNhsA4qISOwAWEgiiNhsA4qIRuxAQBDYLACJUKwAiVhsA4qIVmwDENHsA1DR2CwAmIgsABQWLBAYFlmsAFjILALQ2O4BABiILAAUFiwQGBZZrABY2CxAAATI0SwAUOwAD6yAQEBQ2BCLbATLACxAAJFVFiwDyNCIEWwCyNCsAojsARgQiBgsAFhtRAQAQAOAEJCimCxEgYrsHUrGyJZLbAULLEAEystsBUssQETKy2wFiyxAhMrLbAXLLEDEystsBgssQQTKy2wGSyxBRMrLbAaLLEGEystsBsssQcTKy2wHCyxCBMrLbAdLLEJEystsCksIC6wAV0tsCosIC6wAXEtsCssIC6wAXItsB4sALANK7EAAkVUWLAPI0IgRbALI0KwCiOwBGBCIGCwAWG1EBABAA4AQkKKYLESBiuwdSsbIlktsB8ssQAeKy2wICyxAR4rLbAhLLECHistsCIssQMeKy2wIyyxBB4rLbAkLLEFHistsCUssQYeKy2wJiyxBx4rLbAnLLEIHistsCgssQkeKy2wLCwgPLABYC2wLSwgYLAQYCBDI7ABYEOwAiVhsAFgsCwqIS2wLiywLSuwLSotsC8sICBHICCwC0NjuAQAYiCwAFBYsEBgWWawAWNgI2E4IyCKVVggRyAgsAtDY7gEAGIgsABQWLBAYFlmsAFjYCNhOBshWS2wMCwAsQACRVRYsAEWsC8qsQUBFUVYMFkbIlktsDEsALANK7EAAkVUWLABFrAvKrEFARVFWDBZGyJZLbAyLCA1sAFgLbAzLACwAUVjuAQAYiCwAFBYsEBgWWawAWOwASuwC0NjuAQAYiCwAFBYsEBgWWawAWOwASuwABa0AAAAAABEPiM4sTIBFSotsDQsIDwgRyCwC0NjuAQAYiCwAFBYsEBgWWawAWNgsABDYTgtsDUsLhc8LbA2LCA8IEcgsAtDY7gEAGIgsABQWLBAYFlmsAFjYLAAQ2GwAUNjOC2wNyyxAgAWJSAuIEewACNCsAIlSYqKRyNHI2EgWGIbIVmwASNCsjYBARUUKi2wOCywABawBCWwBCVHI0cjYbAJQytlii4jICA8ijgtsDkssAAWsAQlsAQlIC5HI0cjYSCwBCNCsAlDKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgsAhDIIojRyNHI2EjRmCwBEOwAmIgsABQWLBAYFlmsAFjYCCwASsgiophILACQ2BkI7ADQ2FkUFiwAkNhG7ADQ2BZsAMlsAJiILAAUFiwQGBZZrABY2EjICCwBCYjRmE4GyOwCENGsAIlsAhDRyNHI2FgILAEQ7ACYiCwAFBYsEBgWWawAWNgIyCwASsjsARDYLABK7AFJWGwBSWwAmIgsABQWLBAYFlmsAFjsAQmYSCwBCVgZCOwAyVgZFBYIRsjIVkjICCwBCYjRmE4WS2wOiywABYgICCwBSYgLkcjRyNhIzw4LbA7LLAAFiCwCCNCICAgRiNHsAErI2E4LbA8LLAAFrADJbACJUcjRyNhsABUWC4gPCMhG7ACJbACJUcjRyNhILAFJbAEJUcjRyNhsAYlsAUlSbACJWG5CAAIAGNjIyBYYhshWWO4BABiILAAUFiwQGBZZrABY2AjLiMgIDyKOCMhWS2wPSywABYgsAhDIC5HI0cjYSBgsCBgZrACYiCwAFBYsEBgWWawAWMjICA8ijgtsD4sIyAuRrACJUZSWCA8WS6xLgEUKy2wPywjIC5GsAIlRlBYIDxZLrEuARQrLbBALCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEuARQrLbBBLLA4KyMgLkawAiVGUlggPFkusS4BFCstsEIssDkriiAgPLAEI0KKOCMgLkawAiVGUlggPFkusS4BFCuwBEMusC4rLbBDLLAAFrAEJbAEJiAuRyNHI2GwCUMrIyA8IC4jOLEuARQrLbBELLEIBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAlDKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7ACYiCwAFBYsEBgWWawAWNgILABKyCKimEgsAJDYGQjsANDYWRQWLACQ2EbsANDYFmwAyWwAmIgsABQWLBAYFlmsAFjYbACJUZhOCMgPCM4GyEgIEYjR7ABKyNhOCFZsS4BFCstsEUssDgrLrEuARQrLbBGLLA5KyEjICA8sAQjQiM4sS4BFCuwBEMusC4rLbBHLLAAFSBHsAAjQrIAAQEVFBMusDQqLbBILLAAFSBHsAAjQrIAAQEVFBMusDQqLbBJLLEAARQTsDUqLbBKLLA3Ki2wSyywABZFIyAuIEaKI2E4sS4BFCstsEwssAgjQrBLKy2wTSyyAABEKy2wTiyyAAFEKy2wTyyyAQBEKy2wUCyyAQFEKy2wUSyyAABFKy2wUiyyAAFFKy2wUyyyAQBFKy2wVCyyAQFFKy2wVSyyAABBKy2wViyyAAFBKy2wVyyyAQBBKy2wWCyyAQFBKy2wWSyyAABDKy2wWiyyAAFDKy2wWyyyAQBDKy2wXCyyAQFDKy2wXSyyAABGKy2wXiyyAAFGKy2wXyyyAQBGKy2wYCyyAQFGKy2wYSyyAABCKy2wYiyyAAFCKy2wYyyyAQBCKy2wZCyyAQFCKy2wZSywOisusS4BFCstsGYssDorsD4rLbBnLLA6K7A/Ky2waCywABawOiuwQCstsGkssDsrLrEuARQrLbBqLLA7K7A+Ky2wayywOyuwPystsGwssDsrsEArLbBtLLA8Ky6xLgEUKy2wbiywPCuwPistsG8ssDwrsD8rLbBwLLA8K7BAKy2wcSywPSsusS4BFCstsHIssD0rsD4rLbBzLLA9K7A/Ky2wdCywPSuwQCstsHUsswkEAgNFWCEbIyFZQiuwCGWwAyRQeLEFARVFWDBZLQAAAEuwyFJYsQEBjlm6AAEIAAgAY3CxAAZCtQBHMx8EACqxAAZCQApNAToIJggUBwQIKrEABkJACk4ARAYwBh0FBAgqsQAKQrsTgA7ACcAFQLEECSqxAA5CtQBAQEAECSqxAwBEsSQBiFFYsECIWLEDZESxJgGIUVi6CIAAAQRAiGNUWLEDAERZWVlZQApOADwIKAgWBwQMKrgB/4WwBI2xAgBEsQVkRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALkAuQCXAJcFsAAABDoAAP5gCGL91QXE/+wETv/s/ksIYv3VALkAuQCXAJcFsAAABbAEOv/s/mAIYv3VBcT/7AXFBE7/7P5gCGL91QC5ALkAlwCXBbAAAAXhBDoAAP5gCGL91QXE/+wF4QRO/+z+Swhi/dUAMgAyAAAAAAAAAAAAAAA1AKcBHQG5AmMCigK6AuoDGgNFA2QDfgOoA78EEQQsBHoE8AUkBYEF8QYUBpoHDgcgBzMHTQdyB4sINgkLCToJpAoFCkgKdgqeCwYLLgtYC48LuwvXDA8MNQyVDNkNRA2ODf4OHw5bDnoOpw7WDvwPJw9LD2IPhg+qD8MQPhC1EUYRoBIjEoMSyBNoE7IT7xRBFIAUtRUlFXMVwBYtFqcW/hdpF7cX/xgkGFoYiRjMGPYZTRlkGboaChpFGq4bDRuSG9Yb/BydHM8dXx4AHhceRh7IHt8fKR9eH9ogWCDTISghUiF1IawhxyITIiAiOyJWInEi7SMyI1cj2yQlJKclVSXIJgwmfSbWJxonQCePKAwoOChnKLEo+illKhUqpSraKzcrvCwcLG0szC0ILWstjS2uLeAuAC5DLnku0C7xL0EvVy9tL3Yvry/QL/IwDDBKMFIwbzCUMQAxHzFOMW4xozH7MjwylTNIM9s0BDSCNPs1TzWfNgQ2PjdRN8Y4KDiCON45MDlwObE6EzpeOsE7WTvVPD082D08PZo+AD5EPm4+tz75Pzo/sT/XQAtATUB3QLhA40EZQWBBqkHrQk9CxEMOQ4dD4UP+REZEiEUARSVFVEWLRbVF3UX9Rh5Ge0alRt1HCEc+R4VHz0gQSHRI6kk1SZ5KAkpgSq9K+UsnS3dLxUwZTMlNV02MTcROCE5MTqdPAU9dT7hQRVDQUUNRoVHoUj1SxlNlVBhU7lWdVm5W7VdtV8tYKVhoWMFZDFklWT1axVtSW6RcHFw/XGJcpFzoXSxdbl2jXdheB142Xnxexl9GX8Bf92AqYJNhCWFJYb5iMmJ1YrljA2NNY7NkB2RyZIZknGTiZVhl2GZHZq1nHGeFZ/hocWjeaUdpqGoFalBqmmsWaxZrFmsWaxZrFmsWaxZrFmsWaxZrFmsWayFrLGs+a15rfmuda6hrtWvCa/RsHmxbbIpsl2yobXttnm3HbdluDW5obtdvdG/hcGRwrnEKcTVxdnGOcapxxXHdcjZyTHJtcodyo3Mjc1hzwHPnc/90F3Q+dFh0WHU+dZh13HYidmB2kXaudsx2+XcUd0N3rXgCeER4cXiYePV5HXlGeXx5qHnEefJ6GHpnesN7C3uCe6J73nwDfDB8X3yEfK587H0AfTx9l326fft+S35iftV/JH9cf3B/m3/hgBSAVICZgLCBVYGagauB54IJglKCa4KXgsmDXIOCg6eDz4PXg9+EIoRthLSE44UhhVCFaoXhhj+GiocAhwiHEIcYh2mHuogaiEuIqIi6iMyI3ojwiQKJFIkmiTGJQ4lViWeJeYmLiZ2Jr4nBidOJ5Yn3igmKG4otij+KUYpjinWKh4qWiqaKtorGitWK5Irziv6LDYsciyuLOotJi1WLZYt0i4OLkouhi7CLwIvPi96L7Yv8jAuMG4wqjDyMS4xdjGyMxI1gjXKNgo2UjaSNto3FjdeN5o34jgqOHI4rjj2OTI5ejm2Ow49Dj1WPZI92j4WPl4+mj7iPx4/Zj+iP+pAMkB6QLpBAkFGQY5BykMWRK5E9kU+RYZFzkYWRl5GpkbuRzZHfkfGSA5IVkieSNpJIklqSbJJ7koeSmZKokrqSyZLbkuuS/ZMMkx6TMJNCk1GTY5Nzk4WTlZOmk7eTyZPbk+2T/JQOlCCUK5Q6lEaUWJRolHqUipSclK2Uv5TOlOCU75UBlRGVh5XmlfiWB5YZlimWO5ZNll2Wb5Z+lpCWn5axlsGW05bilvSXBpcXlyaXNZdEl1SXY5dzl4OXlJekl7OXwpfRl+CX8JgAmA+YH5gumD6YTphemG2YfJiMmJyYq5i6mMmY2JkymUGZUJlfmW6ZfZmMmZuZqpn/mg6aHZosmjuaTZpdmm2afJqLmt2a7Jr8mw6bHpswm0KbVJtkm3abhZuUm6Obs5vCm9Sb45vynAGcDJwbnC2cPJxMnFucapx6nIqdAZ0RnSCdL50/nU6dXZ1pnXWdhZ2VnaGdrZ25ncqd0p3aneKd6p3ynfqeAp4KnhKeGp4iniqeMp46nkyeXp5tnnyei56cnq2etZ69nsWezZ7VnuSe858CnxOfJJ82n0ifuJ/An9Kf2p/in/SgBqAOoBagHqAmoDigQKBIoFCgWKBgoGigcKB4oICgiKCQ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EAkIHSsBIREhFSMGBhUUFjMWNjcXBgYjIi4CNTQ2NyERIRUhESEDxf3AAp6HTl4kKiA1EB8cVUEpRjQeUEj94QNV/WgCQAIO/omXKm9CIikBEwh5EBwYMEcvP381BI2Z/rL//wDIAAAEIwYlAiYBoQAAAQYAneU4AAazAQE4Myv//wB8//AEQQYkAiYBowAAAQYAnHQ3AAazAQE3Myv//wB8//AEQQYmAiYBowAAAQYAnv10AAazAQF0Myv//wB8//AEQQX1AiYBowAAAQYAn/03AAazAQE3Myv//wB8/isEQQSdAiYBowAAAQcBkQCd/tUACbEBAbj+1bAzKwD//wCbAAAD+QYkAiYBpAAAAQcAnACeADcABrMBATczK///ANkAAAQQBhICJgGlAAABBwCiAKAAIQAGswEBITMr//8A2QAABBAFugImAaUAAAEGAG4gCgAGswEBCjMr//8A2QAABBAGCgImAaUAAAEGAJ4cWAAGswEBWDMrAAEA2f5PBBAEjAAhADlANhABBAMRAQUEAkoAAAgBAQIAAWEHAQICA1kGAQMDPUsABAQFWwAFBUkFTBERFyUlEREREAkIHSsTIRUhESEVIQYGFRQWMxY2NxcGBiMiLgI1NDY3ITUhESHZAzf+vQFD/upOXiQqIDUQHxxVQSlGNB5QSP6UATv+xQSMofy1oCpvQiIpARMIeRAcGDBHLz9/NaADSwD//wDZAAAEEAXZAiYBpQAAAQYAnxwbAAazAQEbMyv//wCW//AEdwYkAiYBpgAAAQcAnAFZADcABrMBATczK///ALT+NASABI0CJgGnAAABBwGRAGv+3gAJsQEBuP7esDMrAP//ALYAAARSBfwCJgGoAAABBwBz/xwAMwAGswEBMzMr//8A0f42BFIEjQImAagAAAEHAZEAaP7gAAmxAQG4/uCwMysA//8A0QAABFIEjQImAagAAAEHAWgAlP53AAmxAQG4/newMysA//8A0QAABFIEjQImAagAAAEHAJ8AGf03AAmxAQG4/TewMysA//8AwgAABA8F/AImAaoAAAEHAHMAzgAzAAazAQEzMyv//wDC/jIEDwSNAiYBqgAAAQcBkQDv/twACbEBAbj+3LAzKwD//wDCAAAEDwYlAiYBqgAAAQYAnVk4AAazAQE4Myv//wCC//AESgXWAiYBqwAAAQYAbicm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KwD//wCH/+wERQXiAiYARwAAAQYAQpAZAAazAgEZMyv//wClAAAEJwXMAiYA7AAAAQcAQv99AAMABrMBAQMzK///AGUAAARyBbACBgC2AAD//wBh/igEgAQ6AgYAygAA//8AGgAABOEHQgImARUAAAEHAKkEWQFUAAmxAQK4AVSwMysA//8ANQAABGAGGgImARYAAAEHAKkEMAAsAAazAQIsMyv//wBZ/i8EcAXEAiYA2AAAAQYBzvGWAAmxAQG4/5awMysA//8Ah/45BEoETQImAOsAAAEGAc4IoAAJsQEBuP+gsDMrAP//AGv+OQRdBcQCJgAlAAABBgHO/6AACbEBAbj/oLAzKwD//wCP/jkEMwROAiYARQAAAQYBzhOgAAmxAQG4/6CwMysA//8APQAABHkFsAIGADsAAP//AEf+YASWBDoCBgC6AAD//wCuAAAEHgWwAgYAKwAA//8AHQAABK4HSgImANcAAAEHAJ4ADQGYAAmxAQG4AZiwMysA//8AEQAABKwF8wImAOoAAAEGAJ70QQAGswEBQTMr//8ArgAABB4FsAIGACsAAP//AFEAAASQB0oCJgAjAAABBwCeAA8BmAAJsQIBuAGYsDMrAP//AJz/7AQ2BggCJgBDAAABBgCeC1YABrMCAVYzK///AFEAAASQByACJgAjAAABBwBoAA8BWwAJsQICuAFbsDMrAP//AJz/7AQ2Bd4CJgBDAAABBgBoCxkABrMCAhkzK///ACAAAASrBbACBgB/AAD//wAr/+wEqQROAgYAhAAA//8AtgAABDQHSgImACcAAAEHAJ4ABQGYAAmxAQG4AZiwMysA//8Ah//sBEUGCQImAEcAAAEGAJ4GVwAGswIBVzMr//8AWv/rBFcG8gImAUMAAAEHAGj/+wEtAAmxAgK4AS2wMysA//8Asf/sBF8ETwIGAJsAAP//ALH/7ARfBd8CJgCbAAABBgBoKBoABrMCAhozK///AB0AAASuByACJgDXAAABBwBoAA0BWwAJsQECuAFbsDMrAP//ABEAAASsBckCJgDqAAABBgBo9AQABrMBAgQzK///AFn/6wRwBzUCJgDYAAABBwBo//wBcAAJsQECuAFwsDMrAP//AIf/7QRKBd0CJgDrAAABBgBoChgABrMBAhgzK///AKIAAAQqBu4CJgDZAAABBwBu//0BPgAJsQEBuAE+sDMrAP//AKUAAAQnBaQCJgDsAAABBgBu+PQACbEBAbj/9LAzKwD//wCiAAAEKgcUAiYA2QAAAQcAaP/5AU8ACbEBArgBT7AzKwD//wClAAAEJwXJAiYA7AAAAQYAaPQEAAazAQIEMyv//wBq/+wEYQc1AiYAMQAAAQcAaAATAXAACbECArgBcLAzKwD//wB6/+wEUgXeAiYAUQAAAQYAaAAZAAazAgIZMyv//wBj/+wEWgXEAgYBEwAA//8AXf/sBDUETgIGARQAAP//AGP/7ARaBxsCJgETAAABBwBoABQBVgAJsQMCuAFWsDMrAP//AF3/7AQ1BfoCJgEUAAABBgBo0DUABrMDAjUzK///AHL/7ARTBzYCJgDjAAABBwBo//EBcQAJsQECuAFxsDMrAP//AIH/7AQ6Bd4CJgD7AAABBgBo7RkABrMBAhkzK///ACv/6wS1BvoCJgDbAAABBwBuACUBSgAJsQEBuAFKsDMrAP//AET+SwSFBaUCJgBbAAABBgBuF/UACbEBAbj/9bAzKwD//wAr/+sEtQcgAiYA2wAAAQcAaAAhAVsACbEBArgBW7AzKwD//wBE/ksEhQXKAiYAWwAAAQYAaBMFAAazAQIFMyv//wAr/+sEtQdKAiYA2wAAAQcAowCnAVsACbEBArgBW7AzKwD//wBE/ksEhQX0AiYAWwAAAQcAowCZAAUABrMBAgUzK///AKsAAAQnByACJgDdAAABBwBo/7MBWwAJsQECuAFbsDMrAP//AI0AAAQnBckCJgD1AAABBgBoGwQABrMBAgQzK///AJAAAARLByACJgDhAAABBwBo/+EBWwAJsQMCuAFbsDMrAP//AJAAAAQ/BckCJgD5AAABBgBoQwQABrMDAgQzK///AFf+SwUWBbACJgA6AAAABwHQAgQAAP//AG7+SwSlBDoCJgBaAAAABwHQAZMAAP//AIv/7AQcBgACBgBGAAD//wAv/ksE4wWwAiYA2gAAAAcB0AHRAAD//wA3/ksE3gQ6AiYA7gAAAAcB0AHMAAD//wBR/qgEkAWwAiYAIwAAAAcAqgTfAAD//wCc/qgENgROAiYAQwAAAAcAqgSjAAD//wBRAAAEkAfGAiYAIwAAAQcAqATIAVIACbECAbgBUrAzKwD//wCc/+wENgaEAiYAQwAAAQcAqATEABAABrMCARAzK///AFEAAATpB+4CJgAjAAABBwGa//UBWQAJsQICuAFZsDMrAP//AJz/7ATlBqwCJgBDAAABBgGa8RcABrMCAhczK/////wAAASQB90CJgAjAAABBwGZ/+wBSAAJsQICuAFIsDMrAP////j/7AQ2BpsCJgBDAAABBgGZ6AYABrMCAgYzK///AFEAAAS7CAQCJgAjAAABBwGYAAEBNQAJsQICuAE1sDMrAP//AJz/7AS4BsMCJgBDAAABBgGY/vQACbECArj/9LAzKwD//wBRAAAEkAgvAiYAIwAAAQcBl//zATYACbECArgBNrAzKwD//wCc/+wENgbuAiYAQwAAAQYBl+/1AAmxAgK4//WwMysA//8AUf6oBJAHSAImACMAAAAnAJwAhwFbAQcAqgTfAAAACbECAbgBW7AzKwD//wCc/qgENgYGAiYAQwAAACcAnACDABkBBwCqBKMAAAAGswIBGTMr//8AUQAABJAH3gImACMAAAEHAcIAAAFUAAmxAgK4AVSwMysA//8AnP/sBDYGnAImAEMAAAEGAcL8EgAGswICEjMr//8AUQAABJAIIQImACMAAAEHAZsAAwF6AAmxAgK4AXqwMysA//8AnP/sBDYG3wImAEMAAAEGAZsAOAAGswICODMr//8AUQAABJAITAImACMAAAEHAbb/9AFJAAmxAgK4AUmwMysA//8AnP/sBDYHCgImAEMAAAEGAbbwBwAGswICBzMr//8AUQAABJAIIQImACMAAAEHAc3/1AFRAAmxAgK4AVGwMysA//8AnP/sBDYG3wImAEMAAAEGAc3QDwAGswICDzMr//8AUf6oBJAHSgImACMAAAAnAJ4ADwGYAQcAqgTfAAAACbECAbgBmLAzKwD//wCc/qgENgYIAiYAQwAAACYAngtWAQcAqgSjAAAABrMCAVYzK///ALb+sgQ0BbACJgAnAAABBwCqBNIACgAGswEBCjMr//8Ah/6oBEUETgImAEcAAAAHAKoE4wAA//8AtgAABDQHxgImACcAAAEHAKgEvgFSAAmxAQG4AVKwMysA//8Ah//sBEUGhQImAEcAAAEHAKgEvwARAAazAgERMyv//wC2AAAENAdSAiYAJwAAAQcAogCJAWEACbEBAbgBYbAzKwD//wCH/+wERQYRAiYARwAAAQcAogCKACAABrMCASAzK///ALYAAATfB+4CJgAnAAABBwGa/+sBWQAJsQECuAFZsDMrAP//AIf/7ATgBq0CJgBHAAABBgGa7BgABrMCAhgzK/////IAAAQ0B90CJgAnAAABBwGZ/+IBSAAJsQECuAFIsDMrAP////P/7ARFBpwCJgBHAAABBgGZ4wcABrMCAgczK///ALYAAASyCAQCJgAnAAABBwGY//gBNQAJsQECuAE1sDMrAP//AIf/7ASzBsQCJgBHAAABBgGY+fUACbECArj/9bAzKwD//wC2AAAENAgvAiYAJwAAAQcBl//pATYACbEBArgBNrAzKwD//wCH/+wERQbvAiYARwAAAQYBl+r2AAmxAgK4//awMysA//8Atv6yBDQHSAImACcAAAAnAJwAfQFbAQcAqgTSAAoAD7EBAbgBW7AzK7MCAQozKwD//wCH/qgERQYHAiYARwAAACYAnH4aAQcAqgTjAAAABrMCARozK///AK4AAAQeB8YCJgArAAABBwCoBIoBUgAJsQEBuAFSsDMrAP//AMsAAARVBnACJgCKAAABBwCoBO3//AAJsQEBuP/8sDMrAP//AK7+sgQeBbACJgArAAABBwCqBJ4ACgAGswEBCjMr//8Ay/6yBFUFwwImAEsAAAEHAKoFBgAKAAazAgEKMyv//wBq/qAEYQXEAiYAMQAAAQcAqgTf//gACbECAbj/+LAzKwD//wB6/p8EUgROAiYAUQAAAQcAqgTN//cACbECAbj/97AzKwD//wBq/+wEYQfbAiYAMQAAAQcAqATMAWcACbECAbgBZ7AzKwD//wB6/+wEUgaEAiYAUQAAAQcAqAS5ABAABrMCARAzK///AGr/7ATtCAMCJgAxAAABBwGa//kBbgAJsQICuAFusDMrAP//AHr/7ATaBqwCJgBRAAABBgGa5hcABrMCAhczK///AAD/7ARhB/ICJgAxAAABBwGZ//ABXQAJsQICuAFdsDMrAP///+3/7ARSBpsCJgBRAAABBgGZ3QYABrMCAgYzK///AGr/7AS/CBkCJgAxAAABBwGYAAUBSgAJsQICuAFKsDMrAP//AHr/7AStBsMCJgBRAAABBgGY8/QACbECArj/9LAzKwD//wBq/+wEYQhEAiYAMQAAAQcBl//3AUsACbECArgBS7AzKwD//wB6/+wEUgbuAiYAUQAAAQYBl+T1AAmxAgK4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AGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAQQBwAGEAYwBoAGUAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMgAuADAAaAB0AHQAcAA6AC8ALwB3AHcAdwAuAGEAcABhAGMAaABlAC4AbwByAGcALwBsAGkAYwBlAG4AcwBlAHMALwBMAEkAQwBFAE4AUwBFAC0AMgAuADAAAgAAAAAAAP9qAGQAAAABAAAAAAAAAAAAAAAAAAAAAAQRAAABAgACAAMABQAGAAcACAAJAAoACwAMAA0ADgAPABAAEQASABMAFAAVABYAFwAYABkAGgAbABwAHQAeAB8AIAAhACIAIwAkACUAJgAnACgAKQAqACsALAAtAC4ALwAwADEAMgAzADQANQA2ADcAOAA5ADoAOwA8AD0APgA/AEAAQQBCAEMARABFAEYARwBIAEkASgBLAEwATQBOAE8AUABRAFIAUwBUAFUAVgBXAFgAWQBaAFsAXABdAF4AXwBgAGEAowCEAIUAvQCWAOgAhgCOAIsAnQCpAKQAigDaAIMAkwDyAPMAjQCXAIgAwwDeAPEAngCqAPUA9AD2AKIAkADwAJEA7QCJAKAA6gC4AKEA7gEDANcBBAEFAQYA4gDjAQcBCACwALEBCQCmAQoBCwEMAQ0BDgEPANgA4QDbANwA3QDgANkA3wEQAREBEgETARQBFQEWARcBGAEZARoAqAEbARwBHQEeAR8BIAEhAJ8BIgEjASQBJQEmAScBKAEpASoBKwEsAJsBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFSAVMBVAFVAVYBVwFYAVkBWgFbAVwBXQFeAV8BYAFhAWIBYwFkAWUBZgFnAWgBaQFqAWsBbAFtAW4BbwFwAXEBcgFzAXQBdQF2AXcBeAF5AXoBewF8AX0BfgF/AYABgQGCAYMBhAGFAYYBhwGIAYkBigGLAYwBjQGOAY8BkAGRAZIBkwGUAZUBlgGXAZgBmQGaAZsBnAGdAZ4BnwGgAaEBogGjAaQBpQGmAacBqAGpAaoBqwGsAa0BrgGvAbABsQGyAbMBtAG1AbYBtwG4AbkBugG7AbwBvQG+Ab8BwAHBAcIBwwHEAcUBxgHHAcgByQHKAcsBzACyALMBzQC2ALcAxAHOALQAtQDFAIIAwgCHAc8AqwDGAL4AvwC8AdAB0QHSAdMB1AHVAdYB1wCMAdgB2QHaAdsB3ACYAJoAmQDvAKUAkgCcAKcAjwCUAJUAuQHdAd4B3wHgAeEB4gHjAeQB5QHmAecB6AHpAeoB6wHsAe0B7gHvAfAB8QHyAfMB9AH1AfYB9wH4AfkB+gH7AfwB/QH+Af8CAAIBAgICAwIEAgUCBgIHAggCCQIKAgsCDAINAg4CDwIQAhECEgITAhQCFQIWAhcCGAIZAhoCGwIcAh0CHgIfAiACIQIiAiMCJAIlAiYCJwIoAikCKgIrAiwCLQIuAKwCLwIwAOkCMQIyAjMArQDJAMcArgBiAGMCNABkAMsAZQDIAMoAzwDMAM0AzgBmANMA0ADRAK8AZwDWANQA1QBoAOsAagBpAGsAbQBsAG4CNQBvAHEAcAByAHMAdQB0AHYAdwB4AHoAeQB7AH0AfAB/AH4AgACBAOwAugI2AjcCOAI5AjoCOwD9AP4CPAI9Aj4CPwD/AQACQAJBAkICQwJEAkUCRgJHAkgCSQJKAksCTAJNAPgA+QJOAk8CUAJRAlICUwJUAlUCVgJXAlgCWQJaAlsA+gJcAl0CXgJfAmACYQJiAmMCZAJlAmYCZwJoAmkCagJrAmwCbQJuAm8CcAJxAnICcwJ0AnUCdgJ3AngCeQJ6AnsCfAJ9An4A+wD8An8CgADkAOUCgQKCAoMChAKFAoYChwKIAokCigKLAowCjQKOAo8CkAKRApICkwKUApUClgKXALsCmAKZApoCmwDmAOcCnAKdAp4CnwKgAqECogKjAqQCpQKmAqcCqAKpAqoCqwKsAq0CrgKvArACsQKyArMCtAK1ArYCtwK4ArkCugK7ArwCvQK+Ar8CwALBAsICwwLEAsUCxgLHAsgCyQLKAssCzALNAs4CzwLQAtEC0gLTAtQC1QLWAtcC2ALZAtoC2wLcAt0C3gLfAuAC4QLiAuMC5ALlAuYC5wLoAukC6gLrAuwC7QLuAu8C8ALxAvIC8wL0AvUC9gL3AvgC+QL6AvsC/AL9Av4C/wMAAwEDAgMDAwQDBQMGAwcDCAMJAwoDCwMMAw0DDgMPAxADEQMSAxMDFAMVAxYDFwMYAxkDGgMbAxwDHQMeAx8DIAMhAyIDIwMkAyUDJgMnAygDKQMqAysDLAMtAy4DLwMwAzEDMgMzAzQDNQM2AzcDOAM5AzoDOwM8Az0DPgM/A0ADQQNCA0MDRANFA0YDRwNIA0kDSgNLA0wDTQNOA08DUANRA1IDUwNUA1UDVgNXA1gDWQNaA1sDXANdA14DXwNgA2EDYgNjA2QDZQNmA2cDaANpA2oDawNsA20DbgNvA3ADcQNyA3MDdAN1A3YDdwN4A3kDegN7A3wDfQN+A38DgAOBA4IDgwOEA4UDhgOHA4gDiQOKA4sDjAONA44DjwOQA5EDkgOTA5QDlQOWA5cDmAOZA5oDmwOcA50DngOfA6ADoQOiA6MDpAOlA6YDpwOoA6kDqgOrA6wDrQOuA68DsAOxA7IDswO0A7UDtgO3A7gDuQO6A7sDvAO9A74DvwPAA8EDwgPDA8QDxQPGA8cDyAPJA8oDywPMA80DzgPPA9AD0QPSA9MD1APVA9YD1wPYA9kD2gPbA9wD3QPeA98D4APhA+ID4wPkA+UD5gPnA+gD6QEBA+oD6wPsA+0D7gPvA/AD8QPyA/MD9AP1A/YD9wP4A/kD+gP7A/wD/QP+A/8EAAQBBAIEAwQEBAUEBgQHBAgECQQKBAsEDAQNBA4EDwQQBBEA9wQSBBMEFAAEBE5VTEwESGJhcgJJSgJpagxrZ3JlZW5sYW5kaWMDRW5nA2VuZwVsb25ncwVPaG9ybgVvaG9ybgVVaG9ybgV1aG9ybgd1bmkwMjM3BXNjaHdhB3VuaTAyRjMJZ3JhdmVjb21iCWFjdXRlY29tYgl0aWxkZWNvbWIEaG9vawd1bmkwMzBGCGRvdGJlbG93BXRvbm9zDWRpZXJlc2lzdG9ub3MJYW5vdGVsZWlhBUdhbW1hBVRoZXRhBkxhbWJkYQJYaQJQaQVTaWdtYQNQaGkDUHNpBWFscGhhBGJldGEFZ2FtbWEFZGVsdGEHZXBzaWxvbgR6ZXRhA2V0YQV0aGV0YQRpb3RhBmxhbWJkYQJ4aQNyaG8Gc2lnbWExBXNpZ21hA3RhdQd1cHNpbG9uA3BoaQNwc2kFb21lZ2EHdW5pMDNEMQd1bmkwM0QyB3VuaTAzRDYHdW5pMDQwMgd1bmkwNDA0B3VuaTA0MDkHdW5pMDQwQQd1bmkwNDBCB3VuaTA0MEYHdW5pMDQxMQd1bmkwNDE0B3VuaTA0MTYHdW5pMDQxNwd1bmkwNDE4B3VuaTA0MUIHdW5pMDQyMwd1bmkwNDI2B3VuaTA0MjcHdW5pMDQyOAd1bmkwNDI5B3VuaTA0MkEHdW5pMDQyQgd1bmkwNDJDB3VuaTA0MkQHdW5pMDQyRQd1bmkwNDJGB3VuaTA0MzEHdW5pMDQzMgd1bmkwNDMzB3VuaTA0MzQHdW5pMDQzNgd1bmkwNDM3B3VuaTA0MzgHdW5pMDQzQQd1bmkwNDNCB3VuaTA0M0MHdW5pMDQzRAd1bmkwNDNGB3VuaTA0NDIHdW5pMDQ0NAd1bmkwNDQ2B3VuaTA0NDcHdW5pMDQ0OAd1bmkwNDQ5B3VuaTA0NEEHdW5pMDQ0Qgd1bmkwNDRDB3VuaTA0NEQHdW5pMDQ0RQd1bmkwNDRGB3VuaTA0NTIHdW5pMDQ1NAd1bmkwNDU5B3VuaTA0NUEHdW5pMDQ1Qgd1bmkwNDVGB3VuaTA0NjAHdW5pMDQ2MQd1bmkwNDYzB3VuaTA0NjQHdW5pMDQ2NQd1bmkwNDY2B3VuaTA0NjcHdW5pMDQ2OAd1bmkwNDY5B3VuaTA0NkEHdW5pMDQ2Qgd1bmkwNDZDB3VuaTA0NkQHdW5pMDQ2RQd1bmkwNDZGB3VuaTA0NzIHdW5pMDQ3Mwd1bmkwNDc0B3VuaTA0NzUHdW5pMDQ3OAd1bmkwNDc5B3VuaTA0N0EHdW5pMDQ3Qgd1bmkwNDdDB3VuaTA0N0QHdW5pMDQ3RQd1bmkwNDdGB3VuaTA0ODAHdW5pMDQ4MQd1bmkwNDgyB3VuaTA0ODMHdW5pMDQ4NAd1bmkwNDg1B3VuaTA0ODYHdW5pMDQ4OAd1bmkwNDg5B3VuaTA0OEUHdW5pMDQ4Rgd1bmkwNDkwB3VuaTA0OTEHdW5pMDQ5NAd1bmkwNDk1B3VuaTA0OUMHdW5pMDQ5RAd1bmkwNEEwB3VuaTA0QTEHdW5pMDRBNAd1bmkwNEE1B3VuaTA0QTYHdW5pMDRBNwd1bmkwNEE4B3VuaTA0QTkHdW5pMDRCNAd1bmkwNEI1B3VuaTA0QjgHdW5pMDRCOQd1bmkwNEJBB3VuaTA0QkMHdW5pMDRCRAd1bmkwNEMzB3VuaTA0QzQHdW5pMDRDNwd1bmkwNEM4B3VuaTA0RDgHdW5pMDRFMAd1bmkwNEUxB3VuaTA0RkEHdW5pMDRGQgd1bmkwNTAwB3VuaTA1MDIHdW5pMDUwMwd1bmkwNTA0B3VuaTA1MDUHdW5pMDUwNgd1bmkwNTA3B3VuaTA1MDgHdW5pMDUwOQd1bmkwNTBBB3VuaTA1MEIHdW5pMDUwQwd1bmkwNTBEB3VuaTA1MEUHdW5pMDUwRgd1bmkwNTEwB3VuaTIwMDAHdW5pMjAwMQd1bmkyMDAyB3VuaTIwMDMHdW5pMjAwNAd1bmkyMDA1B3VuaTIwMDYHdW5pMjAwNwd1bmkyMDA4B3VuaTIwMDkHdW5pMjAwQQd1bmkyMDBCDXVuZGVyc2NvcmVkYmwNcXVvdGVyZXZlcnNlZAd1bmkyMDI1B3VuaTIwNzQJbnN1cGVyaW9yBGxpcmEGcGVzZXRhBEV1cm8HdW5pMjEwNQd1bmkyMTEzB3VuaTIxMTYJZXN0aW1hdGVkCW9uZWVpZ2h0aAx0aHJlZWVpZ2h0aHMLZml2ZWVpZ2h0aHMMc2V2ZW5laWdodGhzC2NvbW1hYWNjZW50B3VuaUZFRkYHdW5pRkZGQwd1bmlGRkZECXplcm8uc21jcAd0d28uc3VwE2NpcmN1bWZsZXh0aWxkZWNvbWISY2lyY3VtZmxleGhvb2tjb21iE2NpcmN1bWZsZXhncmF2ZWNvbWITY2lyY3VtZmxleGFjdXRlY29tYg5icmV2ZWdyYXZlY29tYhFjb21tYWFjY2VudHJvdGF0ZQZBLnNtY3AGQi5zbWNwBkMuc21jcAZELnNtY3AGRS5zbWNwBkYuc21jcAZHLnNtY3AGSC5zbWNwBkkuc21jcAZKLnNtY3AGSy5zbWNwBkwuc21jcAZNLnNtY3AGTi5zbWNwBk8uc21jcAZRLnNtY3AGUi5zbWNwBlMuc21jcAZULnNtY3AGVS5zbWNwBlYuc21jcAZXLnNtY3AGWC5zbWNwBlkuc21jcAZaLnNtY3ANYnJldmVob29rY29tYghvbmUuc21jcAh0d28uc21jcAp0aHJlZS5zbWNwCWZvdXIuc21jcAlmaXZlLnNtY3AIc2l4LnNtY3AKc2V2ZW4uc21jcAplaWdodC5zbWNwCW5pbmUuc21jcAh6ZXJvLnN1cAdvbmUuc3VwDmJyZXZlYWN1dGVjb21iCXRocmVlLnN1cAhmb3VyLnN1cAhmaXZlLnN1cAdzaXguc3VwCXNldmVuLnN1cAllaWdodC5zdXAIbmluZS5zdXAIY3Jvc3NiYXIJcmluZ2FjdXRlCWRhc2lhb3hpYQ5icmV2ZXRpbGRlY29tYgtjeXJpbGxpY3RpYxBjeXJpbGxpY2hvb2tsZWZ0DGN5cmlsbGljaG9vawVnLmFsdA5sYXJnZXJpZ2h0aG9vawVpLmFsdAVsLmFsdAhvbmUubG51bQpzZXZlbi5sbnVtBlAuc21jcAdjaGkuYWx0BVIuYWx0BUsuYWx0BGkuaXQEbC5pdAdvbmUuYWx0BmF0LmFsdA1hbXBlcnNhbmQuYWx0Ckdlcm1hbmRibHMPR2VybWFuZGJscy5zbWNwDWN5cmlsbGljYnJldmUHdW5pMDBBRAZEY3JvYXQEaGJhcgRUYmFyBHRiYXIKQXJpbmdhY3V0ZQphcmluZ2FjdXRlB0FtYWNyb24HYW1hY3JvbgZBYnJldmUGYWJyZXZlB0FvZ29uZWsHYW9nb25lawtDY2lyY3VtZmxleAtjY2lyY3VtZmxleAd1bmkwMTBBB3VuaTAxMEIGRGNhcm9uBmRjYXJvbgdFbWFjcm9uB2VtYWNyb24GRWJyZXZlBmVicmV2ZQpFZG90YWNjZW50CmVkb3RhY2NlbnQHRW9nb25lawdlb2dvbmVrBkVjYXJvbgZlY2Fyb24LR2NpcmN1bWZsZXgLZ2NpcmN1bWZsZXgHdW5pMDEyMAd1bmkwMTIxDEdjb21tYWFjY2VudAxnY29tbWFhY2NlbnQLSGNpcmN1bWZsZXgLaGNpcmN1bWZsZXgGSXRpbGRlBml0aWxkZQdJbWFjcm9uB2ltYWNyb24GSWJyZXZlBmlicmV2ZQdJb2dvbmVrB2lvZ29uZWsLSmNpcmN1bWZsZXgLamNpcmN1bWZsZXgMS2NvbW1hYWNjZW50DGtjb21tYWFjY2VudAZMYWN1dGUGbGFjdXRlDExjb21tYWFjY2VudAxsY29tbWFhY2NlbnQGTGNhcm9uBmxjYXJvbgRMZG90BGxkb3QGTmFjdXRlBm5hY3V0ZQxOY29tbWFhY2NlbnQMbmNvbW1hYWNjZW50Bk5jYXJvbgZuY2Fyb24LbmFwb3N0cm9waGUHT21hY3JvbgdvbWFjcm9uBk9icmV2ZQZvYnJldmUNT2h1bmdhcnVtbGF1dA1vaHVuZ2FydW1sYXV0BlJhY3V0ZQZyYWN1dGUMUmNvbW1hYWNjZW50DHJjb21tYWFjY2VudAZSY2Fyb24GcmNhcm9uBlNhY3V0ZQZzYWN1dGULU2NpcmN1bWZsZXgLc2NpcmN1bWZsZXgHdW5pMDIxOAd1bmkwMjE5B3VuaTAyMUEHdW5pMDIxQgd1bmkwMTYyDHVuaTAxNjIuc21jcAd1bmkwMTYzBlRjYXJvbgZ0Y2Fyb24GVXRpbGRlBnV0aWxkZQdVbWFjcm9uB3VtYWNyb24GVWJyZXZlBnVicmV2ZQVVcmluZwV1cmluZw1VaHVuZ2FydW1sYXV0DXVodW5nYXJ1bWxhdXQHVW9nb25lawd1b2dvbmVrC1djaXJjdW1mbGV4C3djaXJjdW1mbGV4C1ljaXJjdW1mbGV4C3ljaXJjdW1mbGV4BlphY3V0ZQZ6YWN1dGUKWmRvdGFjY2VudAp6ZG90YWNjZW50B0FFYWN1dGUHYWVhY3V0ZQtPc2xhc2hhY3V0ZQtvc2xhc2hhY3V0ZQtEY3JvYXQuc21jcAhFdGguc21jcAlUYmFyLnNtY3ALQWdyYXZlLnNtY3ALQWFjdXRlLnNtY3AQQWNpcmN1bWZsZXguc21jcAtBdGlsZGUuc21jcA5BZGllcmVzaXMuc21jcApBcmluZy5zbWNwD0FyaW5nYWN1dGUuc21jcA1DY2VkaWxsYS5zbWNwC0VncmF2ZS5zbWNwC0VhY3V0ZS5zbWNwEEVjaXJjdW1mbGV4LnNtY3AORWRpZXJlc2lzLnNtY3ALSWdyYXZlLnNtY3ALSWFjdXRlLnNtY3AQSWNpcmN1bWZsZXguc21jcA5JZGllcmVzaXMuc21jcAtOdGlsZGUuc21jcAtPZ3JhdmUuc21jcAtPYWN1dGUuc21jcBBPY2lyY3VtZmxleC5zbWNwC090aWxkZS5zbWNwDk9kaWVyZXNpcy5zbWNwC1VncmF2ZS5zbWNwC1VhY3V0ZS5zbWNwEFVjaXJjdW1mbGV4LnNtY3AOVWRpZXJlc2lzLnNtY3ALWWFjdXRlLnNtY3AMQW1hY3Jvbi5zbWNwC0FicmV2ZS5zbWNwDEFvZ29uZWsuc21jcAtDYWN1dGUuc21jcBBDY2lyY3VtZmxleC5zbWNwDHVuaTAxMEEuc21jcAtDY2Fyb24uc21jcAtEY2Fyb24uc21jcAxFbWFjcm9uLnNtY3ALRWJyZXZlLnNtY3APRWRvdGFjY2VudC5zbWNwDEVvZ29uZWsuc21jcAtFY2Fyb24uc21jcBBHY2lyY3VtZmxleC5zbWNwC0dicmV2ZS5zbWNwDHVuaTAxMjAuc21jcBFHY29tbWFhY2NlbnQuc21jcBBIY2lyY3VtZmxleC5zbWNwC0l0aWxkZS5zbWNwDEltYWNyb24uc21jcAtJYnJldmUuc21jcAxJb2dvbmVrLnNtY3APSWRvdGFjY2VudC5zbWNwEEpjaXJjdW1mbGV4LnNtY3ARS2NvbW1hYWNjZW50LnNtY3ALTGFjdXRlLnNtY3ARTGNvbW1hYWNjZW50LnNtY3ALTGNhcm9uLnNtY3AJTGRvdC5zbWNwC05hY3V0ZS5zbWNwEU5jb21tYWFjY2VudC5zbWNwC05jYXJvbi5zbWNwDE9tYWNyb24uc21jcAtPYnJldmUuc21jcBJPaHVuZ2FydW1sYXV0LnNtY3ALUmFjdXRlLnNtY3ARUmNvbW1hYWNjZW50LnNtY3ALUmNhcm9uLnNtY3ALU2FjdXRlLnNtY3AQU2NpcmN1bWZsZXguc21jcA1TY2VkaWxsYS5zbWNwC1NjYXJvbi5zbWNwEVRjb21tYWFjY2VudC5zbWNwC1RjYXJvbi5zbWNwC1V0aWxkZS5zbWNwDFVtYWNyb24uc21jcAtVYnJldmUuc21jcApVcmluZy5zbWNwElVodW5nYXJ1bWxhdXQuc21jcAxVb2dvbmVrLnNtY3AQV2NpcmN1bWZsZXguc21jcBBZY2lyY3VtZmxleC5zbWNwDllkaWVyZXNpcy5zbWNwC1phY3V0ZS5zbWNwD1pkb3RhY2NlbnQuc21jcAtaY2Fyb24uc21jcApBbHBoYXRvbm9zDEVwc2lsb250b25vcwhFdGF0b25vcwlJb3RhdG9ub3MMT21pY3JvbnRvbm9zDFVwc2lsb250b25vcwpPbWVnYXRvbm9zEWlvdGFkaWVyZXNpc3Rvbm9zBUFscGhhBEJldGEHRXBzaWxvbgRaZXRhA0V0YQRJb3RhBUthcHBhAk11Ak51B09taWNyb24DUmhvA1RhdQdVcHNpbG9uA0NoaQxJb3RhZGllcmVzaXMPVXBzaWxvbmRpZXJlc2lzCmFscGhhdG9ub3MMZXBzaWxvbnRvbm9zCGV0YXRvbm9zCWlvdGF0b25vcxR1cHNpbG9uZGllcmVzaXN0b25vcwVrYXBwYQdvbWljcm9uB3VuaTAzQkMCbnUDY2hpDGlvdGFkaWVyZXNpcw91cHNpbG9uZGllcmVzaXMMb21pY3JvbnRvbm9zDHVwc2lsb250b25vcwpvbWVnYXRvbm9zB3VuaTA0MDEHdW5pMDQwMwd1bmkwNDA1B3VuaTA0MDYHdW5pMDQwNwd1bmkwNDA4B3VuaTA0MUEHdW5pMDQwQwd1bmkwNDBFB3VuaTA0MTAHdW5pMDQxMgd1bmkwNDEzB3VuaTA0MTUHdW5pMDQxOQd1bmkwNDFDB3VuaTA0MUQHdW5pMDQxRQd1bmkwNDFGB3VuaTA0MjAHdW5pMDQyMQd1bmkwNDIyB3VuaTA0MjQHdW5pMDQyNQd1bmkwNDMwB3VuaTA0MzUHdW5pMDQzOQd1bmkwNDNFB3VuaTA0NDAHdW5pMDQ0MQd1bmkwNDQzB3VuaTA0NDUHdW5pMDQ1MQd1bmkwNDUzB3VuaTA0NTUHdW5pMDQ1Ngd1bmkwNDU3B3VuaTA0NTgHdW5pMDQ1Qwd1bmkwNDVFBldncmF2ZQZ3Z3JhdmUGV2FjdXRlBndhY3V0ZQlXZGllcmVzaXMJd2RpZXJlc2lzBllncmF2ZQZ5Z3JhdmUGbWludXRlBnNlY29uZAlleGNsYW1kYmwHdW5pMDFGMAd1bmkwMkJDB3VuaTFFM0UHdW5pMUUzRgd1bmkxRTAwB3VuaTFFMDEHdW5pMUY0RAd1bmkwNDAwB3VuaTA0MEQHdW5pMDQ1MAd1bmkwNDVEB3VuaTA0NzAHdW5pMDQ3MQd1bmkwNDc2B3VuaTA0NzcHdW5pMDQ5OAd1bmkwNDk5B3VuaTA0QUEHdW5pMDRBQgd1bmkwNEFFB3VuaTA0QUYHdW5pMDRDMAd1bmkwNEMxB3VuaTA0QzIHdW5pMDRDRgd1bmkwNEQwB3VuaTA0RDEHdW5pMDREMgd1bmkwNEQzB3VuaTA0RDQHdW5pMDRENQd1bmkwNEQ2B3VuaTA0RDcHdW5pMDREQQd1bmkwNEQ5B3VuaTA0REIHdW5pMDREQwd1bmkwNEREB3VuaTA0REUHdW5pMDRERgd1bmkwNEUyB3VuaTA0RTMHdW5pMDRFNAd1bmkwNEU1B3VuaTA0RTYHdW5pMDRFNwd1bmkwNEU4B3VuaTA0RTkHdW5pMDRFQQd1bmkwNEVCB3VuaTA0RUMHdW5pMDRFRAd1bmkwNEVFB3VuaTA0RUYHdW5pMDRGMAd1bmkwNEYxB3VuaTA0RjIHdW5pMDRGMwd1bmkwNEY0B3VuaTA0RjUHdW5pMDRGOAd1bmkwNEY5B3VuaTA0RkMHdW5pMDRGRAd1bmkwNTAxB3VuaTA1MTIHdW5pMDUxMwd1bmkxRUEwB3VuaTFFQTEHdW5pMUVBMgd1bmkxRUEzB3VuaTFFQTQHdW5pMUVBNQd1bmkxRUE2B3VuaTFFQTcHdW5pMUVBOAd1bmkxRUE5B3VuaTFFQUEHdW5pMUVBQgd1bmkxRUFDB3VuaTFFQUQHdW5pMUVBRQd1bmkxRUFGB3VuaTFFQjAHdW5pMUVCMQd1bmkxRUIyB3VuaTFFQjMHdW5pMUVCNAd1bmkxRUI1B3VuaTFFQjYHdW5pMUVCNwd1bmkxRUI4B3VuaTFFQjkHdW5pMUVCQQd1bmkxRUJCB3VuaTFFQkMHdW5pMUVCRAd1bmkxRUJFB3VuaTFFQkYHdW5pMUVDMAd1bmkxRUMxB3VuaTFFQzIHdW5pMUVDMwd1bmkxRUM0B3VuaTFFQzUHdW5pMUVDNgd1bmkxRUM3B3VuaTFFQzgHdW5pMUVDOQd1bmkxRUNBB3VuaTFFQ0IHdW5pMUVDQwd1bmkxRUNEB3VuaTFFQ0UHdW5pMUVDRgd1bmkxRUQwB3VuaTFFRDEHdW5pMUVEMgd1bmkxRUQzB3VuaTFFRDQHdW5pMUVENQd1bmkxRUQ2B3VuaTFFRDcHdW5pMUVEOAd1bmkxRUQ5B3VuaTFFREEHdW5pMUVEQgd1bmkxRURDB3VuaTFFREQHdW5pMUVERQd1bmkxRURGB3VuaTFFRTAHdW5pMUVFMQd1bmkxRUUyB3VuaTFFRTMHdW5pMUVFNAd1bmkxRUU1B3VuaTFFRTYHdW5pMUVFNwd1bmkxRUU4B3VuaTFFRTkHdW5pMUVFQQd1bmkxRUVCB3VuaTFFRUMHdW5pMUVFRAd1bmkxRUVFB3VuaTFFRUYHdW5pMUVGMAd1bmkxRUYxB3VuaTFFRjQHdW5pMUVGNQd1bmkxRUY2B3VuaTFFRjcHdW5pMUVGOAd1bmkxRUY5B3VuaTIwQUIHdW5pMDQ5QQd1bmkwNDlCB3VuaTA0QTIHdW5pMDRBMwd1bmkwNEFDB3VuaTA0QUQHdW5pMDRCMgd1bmkwNEIzB3VuaTA0QjYHdW5pMDRCNwd1bmkwNENCB3VuaTA0Q0MHdW5pMDRGNgd1bmkwNEY3B3VuaTA0OTYHdW5pMDQ5Nwd1bmkwNEJFB3VuaTA0QkYHdW5pMDRCQgd1bmkwNDhEB3VuaTA0OEMHdW5pMDQ2Mgd1bmkwNDkyB3VuaTA0OTMHdW5pMDQ5RQd1bmkwNDlGB3VuaTA0OEEHdW5pMDQ4Qgd1bmkwNEM5B3VuaTA0Q0EHdW5pMDRDRAd1bmkwNENFB3VuaTA0QzUHdW5pMDRDNgd1bmkwNEIwB3VuaTA0QjEHdW5pMDRGRQd1bmkwNEZGB3VuaTA1MTEHdW5pMjAxNQd1bmkwMDAyB3VuaTAwMDkAAAEAAf//AA8AAQAAAAwAAAAAAAAAAgAIAMwAzAABASEBJwABAVgBYwABAXgBeAABAX0BfgABAYABgAABAZIBlAABAcwBzAABAAEAAAAKAB4ALAABREZMVAAIAAQAAAAA//8AAQAAAAFzbWNwAAgAAAABAAAAAQAEAAEAAAABAAgAAgG+ANwBnQGeAZ8BoAGhAaIBowGkAaUBpgGnAagBqQGqAasB1wGsAa0BrgGvAbABsQGyAbMBtAG1AZ0BngGfAaABoQGiAaMBpAGlAaYBpwGoAakBqgGrAdcBrAGtAa4BrwGwAbEBsgGzAbQBtQHhApoCmQKaApsCmwKcAp0CngKfAqACoQKiAqMCpAKlAqYCpwKoAqkCqgKrAqwCrQKuAq8CsAKxArICswK0ArUCtgKcAp0CngKfAqACoQKiAqMCpAKlAqYCpwKoAqkCqgKrAqwCrQKuAq8CsAKxArICswK0ArUCtgLrArcCtwK4ArgCuQK5AroCugK7ArsCvQK9Ar4CvgK/Ar8CwALAAsECwQLCAsICwwLDAsQCxALFAsUCxwLHAsgCyALJAskCygLKAssCywLMAswCzQLOAs4CzwLPAtAC0ALRAtEC0gLSAtMC0wLUAtQC1QLVAtYC1gLXAtcC2ALYAtkC2QLaAtoC2wLbAtwC3ALdAt0C3gLeAt8C3wLgAuACegJ6AuIC4gLjAuMC5ALkAuUC5QLmAuYC5wLnAugC6ALpAukC6gLqAusC7ALsAu0C7QLuAu4CmQACAA0AIwA8AAAAQwBcABoAgwCDADQAhQCFADUB5QHmADYB6AIqADgCLQI+AHsCQQJfAI0CYQJyAKwCdQJ2AL4CeQJ5AMACewKUAMED4wPjANs=');}
.llama_robo *{font-family: Roboto Mono;font-style: Regular;}

.button_custom_mode {    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    padding: .5rem 1em;
    background: #f7f7f7;
    box-sizing: border-box;
    border-bottom: 1px solid #dadfe5;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
    text-decoration: none;
    color: #5a6370;}
#Reset_Llama_Color:focus, #Save_Llama_Color:focus, #Preview_Llama_Color:focus {outline:0;}


#Save_Llama_Color:hover {background-color:green;}
#Preview_Llama_Color:hover {background-color:yellow;}
` );

//----------------------------------------------------------------- LLAMA_MENU -----------------------------------------------------------------*/
var body = document.body;

//------------ LLAMA_NOTICE_CREATOR ----------------*/
var LlamaNoticeNode = document.createElement ('div');

LlamaNoticeNode.innerHTML = (`
<label style="cursor:pointer;">

<div class="theme_alert_notice">
<div id="close_box"><center><h2>Thank you for installing MY Jumpin Theme!</h2>
<hr style="width:90%;border-color:red;">
<div class="feat_info">
<div style="float:left;width:50%;">Theme Last Updated: 11/16/2019</div>
<div style="">Feedback? <a href="http://www.smokeyllama.com/" target="_blank" style="color:red;">smokeyllama.com</a></div>
</div>
<hr style="width:90%;border-color:red;">
<img src="http://smokeyllama.com/images/SmokeyLlama.png"><br>
<hr style="width:90%;border-color:red;">
<h2>Features/Icons Added:</h2>

<div class="features_added">
<label class="button chat__HeaderOption" title="Chat Settings" style="background-color:white;color: #ccc !important;">
<i class="fa fa-user-cog"></i>
</label><div class="feat_title">Chat Settings</div>
<br>
<label class="button chat__HeaderOption" title="Camera Border Settings" style="background-color:white;color: #ccc !important;">
<i class="fa fa-th-large"></i>
</label><div class="feat_title">Camera Border Settings</div>
<br>
<label class="button chat__HeaderOption" title="Theme Settings" style="background-color:white;color: #ccc !important;">
<i class="fa fa-palette"></i>
</label><div class="feat_title">Theme Settings</div>
<br>
<label class="button chat__HeaderOption" title="Make Youtube Smaller" style="background-color:white;color: #ccc !important;">
<i class="fa fa-compress-arrows-alt"></i>
</label><div class="feat_title">Make Youtube Smaller</div>
<br>
<label class="button chat__HeaderOption" title="SET CUSTOM COLORS" style="background-color:white;color: #ccc !important;">
<img src="https://cdn1.iconfinder.com/data/icons/MetroStation-PNG/128/MB__Llama.png" width="20px">
</label><div class="feat_title">SET CUSTOM COLORS</div>

</div>

<br><br>
(Click Anywhere to close)
</center></div>
</div>


</label>
<div id="toggle_menu">Loading SmokeyLlama...</div>
` );

LlamaNoticeNode.setAttribute ('id', 'New_Llama_Notice');
document.body.appendChild (LlamaNoticeNode);

//----------------------------------------------------------------- SHOW_HIDE_LLAMA_MENU -----------------------------------------------------------------

var CustomColorNode = document.createElement ('div');

CustomColorNode.innerHTML = (`
<div id="toggle_menu"></div>

<div class="dropdown__Options" id="Llama_Custom">
<div class="dropdown__Option dropdown__Option-header">Custom Settings<input id="Reset_Llama_Color" type="button" style="cursor:pointer;border-radius: 10px;width: 30%;border: 1px solid #ccc;" value="RESET"/></div>

            <label class="dropdown__Option">
                <span>Header</span>
                <input class="jscolor {zIndex:'5000'}"  type='text' name="server" id="llama_header_bgcolor_selection" value="#22ADD5" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </label>
            <label class="dropdown__Option">
                <span>Bars</span>
                <input class="jscolor {zIndex:'5000'}"  type='text' name="server" id="llama_bars_bgcolor_selection" value="#C7CFD9" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </label>
            <label class="dropdown__Option">
                <span>Cam BG</span>
                <input class="jscolor {zIndex:'5000'}"  type='text' name="server" id="llama_cams_bgcolor_selection" value="#FFFFFF" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </label>

            <label class="dropdown__Option">
                <span>Button BG</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_button_bgcolor_selection" value="#C7CFD9" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </label>
            <label class="dropdown__Option">
                <span>Button Border</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_button_bordercolor_selection" value="#000000" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </label>
            <label class="dropdown__Option">
                <span>Button Text</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_button_textcolor_selection" value="#FFFFFF" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </label>

            <label class="dropdown__Option">
                <span>Chat BG</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_chat_bgcolor_selection" value="#22ADD5" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </label>
            <label class="dropdown__Option">
                <span>Bubble Chat BG</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_chat_bubble_bgcolor_selection" value="#C7CFD9" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </label>
            <label class="dropdown__Option">
                <span>Bubble Chat Border</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_chat_bubble_bordercolor_selection" value="#FFFFFF" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </label>

            <label class="dropdown__Option">
                <span>UserList BG</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_user_bgcolor_selection" value="#22ADD5" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </label>
            <label class="dropdown__Option">
                <span>User BG</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_username_bgcolor_selection" value="#C7CFD9" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </label>
            <label class="dropdown__Option">
                <span>Username Text</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_username_textcolor_selection" value="#FFFFFF" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </label>

            <label class="dropdown__Option">
                <input id="Preview_Llama_Color" type="button" style="cursor:pointer;border-radius: 10px;width: 100%;border: 1px solid #ccc;" value="PREVIEW"></input>
            </label>

            <label class="dropdown__Option">
                <input id="Save_Llama_Color" type="button" style="cursor:pointer;border-radius: 10px;width: 100%;border: 1px solid #ccc;" value="SAVE"></input>
            </label>
</div>


` );

CustomColorNode.setAttribute ('id', 'New_Custom_Mode');
document.body.appendChild (CustomColorNode);

//------------ LLAMA_MORE_MENU_OPTIONS ----------------*/

var chat_option_activator = 'activate'
if(chat_option_activator != 'llama_chat_menu'){setTimeout(Toggle_Llama_Chat_Options, 3000);}

function Toggle_Llama_Chat_Options (zEvent) {

var lr = document.getElementsByClassName("room")[0];
lr.id="llama_Room"
var xz = document.getElementsByClassName("chat__HeaderOptions")[1];
xz.id="chat__HeaderOptions"
var el = document.getElementById("chat__HeaderOptions");

var chatShare = document.getElementsByClassName("chat__Share")[0];
chatShare.id="chat__Share"
var chatShare_box = document.getElementById("chat__Share");

var whatsNew = document.getElementsByClassName("roomHeader__UserActions")[0];
whatsNew.id="whatsNew_Box"
var whatsNew_Box = document.getElementById("whatsNew_Box");

//------------ Whats_New ----------------*/
var WhatsNewIcon = document.createElement('label');
WhatsNewIcon.className = "button button-floating button-icon button--text roomHeader__UserAction";
WhatsNewIcon.setAttribute ('id', 'Toggle_New_Llama_Notice');
WhatsNewIcon.setAttribute ('title', 'Whats New SmokeyLlama');
WhatsNewIcon.innerHTML = (`
<img src="https://cdn1.iconfinder.com/data/icons/MetroStation-PNG/128/MB__Llama.png" width="20px">
<span class="mobileHidden" id="">Llama Info</span>
` );


whatsNew_Box.appendChild(WhatsNewIcon);
whatsNew_Box.insertBefore(WhatsNewIcon, null);
whatsNew_Box.insertBefore(WhatsNewIcon, whatsNew_Box.childNodes[0] || null);
document.getElementById ("New_Llama_Notice").addEventListener ("click", Toggle_Notice, false);
document.getElementById ("Toggle_New_Llama_Notice").addEventListener ("click", Toggle_Notice, false);

//------------ MINI_YT_ICON ----------------*/
var MiniYTIcon = document.createElement('label');
MiniYTIcon.className = "button chat__HeaderOption";
MiniYTIcon.setAttribute ('id', 'miniyt__llamaOption');
MiniYTIcon.setAttribute ('title', 'Mini Youtube Player');
MiniYTIcon.innerHTML = (`
<i class="fa fa-compress-arrows-alt"></i>
` );

chatShare_box.appendChild(MiniYTIcon);
chatShare_box.insertBefore(MiniYTIcon, null);
chatShare_box.insertBefore(MiniYTIcon, chatShare_box.childNodes[3] || null);

document.getElementById ("miniyt__llamaOption").addEventListener ("click", Toggle_MiniYT, false);


//------------ CHAT_ICON ----------------*/
var newEl = document.createElement('label');
newEl.className = "button chat__HeaderOption";
newEl.setAttribute ('id', 'chat__llamaOption');
newEl.setAttribute ('title', 'Extra Chat Options');
newEl.innerHTML = (`
<i class="fa fa-user-cog"></i>
` );

el.appendChild(newEl);
el.insertBefore(newEl, null);
el.insertBefore(newEl, el.childNodes[3] || null);
//------------ CHAT_MENU ----------------*/
var newChatMenu = document.createElement('div');
newChatMenu.className = "dropdown__Options";
newChatMenu.setAttribute ('id', 'Llama_Chat');
newChatMenu.innerHTML = (`
<div class="dropdown__Option dropdown__Option-header">Chat settings</div>
<label class="dropdown__Option" id="llama_robo">Roboto Font<input id="llama_robo_checkbox" class="jic-checkbox" type="checkbox"></label>

<label class="dropdown__Option" id="llama_bubble_chat">Bubble Chat<input id="bubble_chat_checkbox" class="jic-checkbox" type="checkbox"></label>

<label class="dropdown__Option" id="chat_llama_hide">Toggle Chat<input id="hide_chat_checkbox" class="jic-checkbox" type="checkbox"></label>

<label class="dropdown__Option" id="userlist_llama_hide">Toggle Userlist<input id="hide_userlist_checkbox" class="jic-checkbox" type="checkbox"></label>

<label class="dropdown__Option">LTR Mode<input class="jic-checkbox" type="checkbox"></label>

` );

el.insertBefore(newChatMenu, el.childNodes[4] || null);
document.getElementById ("chat__llamaOption").addEventListener ("click", Toggle_Chat_Llama, false);

document.getElementById ("llama_robo").addEventListener ("click", Toggle_Robo_Llama, false);
var robo_status = localStorage.getItem('robo_status');
if(robo_status == "llama_robo"){document.getElementById("llama_robo_checkbox").checked = true;}

document.getElementById ("llama_bubble_chat").addEventListener ("click", Toggle_Bubble_Chat, false);
var bubble_status = localStorage.getItem('bubble_status');
if(bubble_status == "bubble_chat"){document.getElementById("bubble_chat_checkbox").checked = true;}

document.getElementById ("chat_llama_hide").addEventListener ("click", Toggle_Chat, false);
var chat_Status = localStorage.getItem('chat');
if(chat_Status == "hide_chat"){document.getElementById("hide_chat_checkbox").checked = true;}

document.getElementById ("userlist_llama_hide").addEventListener ("click", Toggle_UserList, false);
var userlist_Status = localStorage.getItem('user_status');
if(userlist_Status == "hide_userlist"){document.getElementById("hide_userlist_checkbox").checked = true;}

document.getElementById ("ChatSettings").addEventListener ("click", Hide_Llama_Chat_Options, false);

//------------ GRID_ICON ----------------*/
var newCamIcon = document.createElement('label');
newCamIcon.className = "button chat__HeaderOption";
newCamIcon.setAttribute ('id', 'cam__llamaOption');
newCamIcon.setAttribute ('title', 'Extra Camera Options');
newCamIcon.innerHTML = (`
<i class="fa fa-th-large"></i>
` );

el.appendChild(newCamIcon);
el.insertBefore(newCamIcon, null);
el.insertBefore(newCamIcon, el.childNodes[4] || null);
//------------ GRID_MENU ----------------*/
var newCamMenu = document.createElement('div');
newCamMenu.className = "dropdown__Options";
newCamMenu.setAttribute ('id', 'Llama_Cam');
newCamMenu.innerHTML = (`
<div class="dropdown__Option dropdown__Option-header">Cam Settings</div>

<label class="dropdown__Option" id="cam_border_llama">Cam Borders<input id="cam_border_checkbox" class="jic-checkbox" type="checkbox"></label>

<label class="dropdown__Option" id="cam_spacing_llama">Cam Spacing<input id="cam_spacing_checkbox" class="jic-checkbox" type="checkbox"></label>

` );

el.insertBefore(newCamMenu, el.childNodes[4] || null);
document.getElementById ("cam__llamaOption").addEventListener ("click", Toggle_Cam_Llama, false);

document.getElementById ("cam_border_llama").addEventListener ("click", Toggle_No_Border, false);
var border_status = localStorage.getItem('no_border');
if(border_status == "no_border"){document.getElementById("cam_border_checkbox").checked = true;}

document.getElementById ("cam_spacing_llama").addEventListener ("click", Toggle_No_Padding, false);
var pad_status = localStorage.getItem('no_padding');
if(pad_status == "no_padding"){document.getElementById("cam_spacing_checkbox").checked = true;}

//------------ THEME_ICON ----------------*/
var newThemeIcon = document.createElement('label');
newThemeIcon.className = "button chat__HeaderOption";
newThemeIcon.setAttribute ('id', 'theme__llamaOption');
newThemeIcon.setAttribute ('title', 'Theme Options');
newThemeIcon.innerHTML = (`
<i class="fa fa-palette"></i>
` );

el.appendChild(newThemeIcon);
el.insertBefore(newThemeIcon, null);
el.insertBefore(newThemeIcon, el.childNodes[6] || null);

//------------ THEME_MENU ----------------*/
var newThemeMenu = document.createElement('div');
newThemeMenu.className = "dropdown__Options";
newThemeMenu.setAttribute ('id', 'Llama_Theme');
newThemeMenu.innerHTML = (`
<div class="dropdown__Option dropdown__Option-header">Theme Settings</div>

<label class="dropdown__Option" id="cam_border_llama">
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
  <option value="CUSTOM" class="custom_mode">CUSTOM</option>
</select>
</label>

<label class="dropdown__Option" id="cam_bg_llama">Background Image<input id="cam_bg_checkbox" class="jic-checkbox" type="checkbox"></label>

<div class="user_bg_settings">
<div class="dropdown__Option dropdown__Option-header">BG Image Settings</div>
<label style="position: relative;left: 10px;">

Image URL:<input type='text' name="server" id="bgSelection1" placeholder="URL to image.." style="opacity: 1;cursor: pointer; margin-top: 10px;width: 150px;border-radius: 2px;border: 1px solid #ccc;"/></label>

<label class="dropdown__Option"><input id="Save_Llama_BG" type="button" value="✔" style="border-radius: 10px;width: 45%;border: 0px;"/>&nbsp;<input id="Remove_Llama_BG" type="button" value="✘" style="border-radius: 10px;width: 45%;border: 0px;"/></label>

<label class="dropdown__Option" id="toggle_userbg_cover">CAM BG : STRETCH<input id="cam_bg_cover" class="jic-checkbox" type="checkbox"></label>
<label class="dropdown__Option" id="toggle_userbg_repeat">CAM BG : NO-REPEAT<input id="cam_bg_repeat" class="jic-checkbox" type="checkbox"></label>
<label class="dropdown__Option" id="toggle_userbg_center">CAM BG : CENTER<input id="cam_bg_center" class="jic-checkbox" type="checkbox"></label>

</div>

` );

el.insertBefore(newThemeMenu, el.childNodes[4] || null);
document.getElementById ("theme__llamaOption").addEventListener ("click", Toggle_Theme_Llama, false);
document.getElementById ("cam_bg_llama").addEventListener ("click", Toggle_User_BG, false);

document.getElementById ("cam_spacing_llama").addEventListener ("click", Toggle_No_Padding, false);

document.getElementById ("Preview_Llama_Color").addEventListener ("click", Preview_Llama_Color, false);
document.getElementById ("Save_Llama_Color").addEventListener ("click", Save_Llama_Color, false);
document.getElementById ("Reset_Llama_Color").addEventListener ("click", Reset_Llama_Color, false);



document.getElementById ("Save_Llama_BG").addEventListener ("click", Save_Llama_BG, false);
document.getElementById ("Remove_Llama_BG").addEventListener ("click", Remove_Llama_BG, false);
document.getElementById ("toggle_userbg_cover").addEventListener ("click", User_BG_Cover, false);
document.getElementById ("toggle_userbg_repeat").addEventListener ("click", User_BG_Repeat, false);
document.getElementById ("toggle_userbg_center").addEventListener ("click", User_BG_Center, false);

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
    if (event.target.value === 'CUSTOM') {Toggle_Theme_Custom();Save_Llama_Color();}
}, false);

var llama_bg = localStorage.getItem('llama_bg1');
var llama_bg_reloader = localStorage.getItem('llama_bg1_reload');

if(llama_bg != ''){document.documentElement.style.setProperty('--user-bg-image', llama_bg);}
if(llama_bg){document.getElementById("bgSelection1").value = llama_bg_reloader;}

var user_bg_cover = localStorage.getItem('user_bg_cover');
if(user_bg_cover){document.getElementById("cam_bg_cover").checked = true;}

var user_bg_repeat = localStorage.getItem('user_bg_repeat');
if(user_bg_repeat){document.getElementById("cam_bg_repeat").checked = true;}

var user_bg_center = localStorage.getItem('user_bg_center');
if(user_bg_center){document.getElementById("cam_bg_center").checked = true;}

var userbg_status = localStorage.getItem('userbg');
if(userbg_status == "user_bg"){document.getElementById("cam_bg_checkbox").checked = true;}

var theme_status = localStorage.getItem('theme');

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
if(theme_status == "custommode"){document.getElementById("theme_wizard").selectedIndex = 12;}


};


function Toggle_Chat_Llama (zEvent) {body.classList.toggle("open_llama_chat");Hide_Llama_Theme_Options();};
function Toggle_Cam_Llama (zEvent) {body.classList.toggle("open_llama_cam");Hide_Llama_Theme_Options();};
function Toggle_Theme_Llama (zEvent) {body.classList.toggle("open_llama_theme");};

function Hide_Llama_Chat_Options (zEvent) {
body.classList.remove("open_llama_chat");
};
function Hide_Llama_Cam_Options (zEvent) {
body.classList.remove("open_llama_cam");
};
function Hide_Llama_Theme_Options (zEvent) {
body.classList.remove("open_llama_theme");
};

//------------ OTHER_SHIT ----------------*/
window.addEventListener('click', function(e){
  if (document.getElementById('chat__llamaOption').contains(e.target)){} else{Hide_Llama_Chat_Options(); }
  if (document.getElementById('cam__llamaOption').contains(e.target)){} else{Hide_Llama_Cam_Options(); }
});


//--- TEST 2----------

function Enter_Cheers (zEvent) {
    var text = document.getElementById("chat__input");
    text.value += "cheers!";
};


// Import Roboto Mono Regular v2.002 2015 ttfautohint v1.3
// Apache License 2.0

var robo_status = localStorage.getItem('robo_status');
var llama_robo = 'llama_robo'
if(robo_status){body.classList.add(llama_robo);}

function Toggle_Robo_Llama (cEvent) {
    var robo_status = localStorage.getItem('robo_status')
        body.classList.toggle("llama_robo");
        if(robo_status != "llama_robo"){localStorage.setItem('robo_status', 'llama_robo');} else {localStorage.setItem('robo_status', '');}
};

//----------------------------------------------------------------- HIDE_NOTICE -----------------------------------------------------------------

function Toggle_Notice (zEvent) {
        body.classList.toggle("hide_notice");
};

//----------------------------------------------------------------- CUSTOM_MODE -----------------------------------------------------------------

var header_bgcolor_selection = localStorage.getItem('llama_header_bgcolor');
var bars_bgcolor_selection = localStorage.getItem('llama_bars_bgcolor');
var cams_bgcolor_selection = localStorage.getItem('llama_cams_bgcolor');

var button_bgcolor_selection = localStorage.getItem('llama_button_bgcolor');
var button_textcolor_selection = localStorage.getItem('llama_button_textcolor');
var button_bordercolor_selection = localStorage.getItem('llama_button_bordercolor');

var chat_bgcolor_selection = localStorage.getItem('llama_chat_bgcolor');
var chat_bubble_bgcolor_selection = localStorage.getItem('llama_chat_bubble_bgcolor');
var chat_bubble_bordercolor_selection = localStorage.getItem('llama_chat_bubble_bordercolor');

var user_bgcolor_selection = localStorage.getItem('llama_user_bgcolor');
var username_bgcolor_selection = localStorage.getItem('llama_username_bgcolor');
var username_textcolor_selection = localStorage.getItem('llama_username_textcolor');


var theme_status = localStorage.getItem('theme');
//----------------------------------------------------------------- REAPPLY_THEME_CHOICE -----------------------------------------------------------------

if(theme_status){body.classList.add(theme_status)}
if(theme_status == "custommode"){

   document.documentElement.style.setProperty('--custommodeheader-bgcolor', '#' + header_bgcolor_selection);
   document.documentElement.style.setProperty('--custommodebars-bgcolor', '#' + bars_bgcolor_selection);
   document.documentElement.style.setProperty('--custommodecams-bgcolor', '#' + cams_bgcolor_selection);

   document.documentElement.style.setProperty('--custommodebutton-bgcolor', '#' + button_bgcolor_selection);
   document.documentElement.style.setProperty('--custommodebutton-textcolor', '#' + button_textcolor_selection);
   document.documentElement.style.setProperty('--custommodebutton-bordercolor', '#' + button_bordercolor_selection);

   document.documentElement.style.setProperty('--custommodechat-bgcolor', '#' + chat_bgcolor_selection);
   document.documentElement.style.setProperty('--custommodechat-bubble-bgcolor', '#' + chat_bubble_bgcolor_selection);
   document.documentElement.style.setProperty('--custommodechat-bubble-bordercolor', '#' + chat_bubble_bordercolor_selection);

   document.documentElement.style.setProperty('--custommodeuser-bgcolor', '#' + user_bgcolor_selection);
   document.documentElement.style.setProperty('--custommodeusername-bgcolor', '#' + username_bgcolor_selection);
   document.documentElement.style.setProperty('--custommodeusername-textcolor', '#' + username_textcolor_selection);
;}

if(header_bgcolor_selection){
    document.getElementById("llama_header_bgcolor_selection").value = header_bgcolor_selection;
    document.getElementById("llama_bars_bgcolor_selection").value = bars_bgcolor_selection;
    document.getElementById("llama_cams_bgcolor_selection").value = cams_bgcolor_selection;

    document.getElementById("llama_button_bgcolor_selection").value = button_bgcolor_selection;
    document.getElementById("llama_button_textcolor_selection").value = button_textcolor_selection;
    document.getElementById("llama_button_bordercolor_selection").value = button_bordercolor_selection;

    document.getElementById("llama_chat_bgcolor_selection").value = chat_bgcolor_selection;
    document.getElementById("llama_chat_bubble_bgcolor_selection").value = chat_bubble_bgcolor_selection;
    document.getElementById("llama_chat_bubble_bordercolor_selection").value = chat_bubble_bordercolor_selection;

    document.getElementById("llama_user_bgcolor_selection").value = user_bgcolor_selection;
    document.getElementById("llama_username_bgcolor_selection").value = username_bgcolor_selection;
    document.getElementById("llama_username_textcolor_selection").value = username_textcolor_selection;
};



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
if(user_bg_cover){body.classList.add(user_bg_cover)};

function User_BG_Cover (zEvent) {
    var user_bg_cover_new = "ubg_cover_on";
    var user_bg_cover_current = localStorage.getItem('user_bg_cover');
        body.classList.toggle(user_bg_cover_new);
        if(user_bg_cover_current != user_bg_cover_new){localStorage.setItem('user_bg_cover', user_bg_cover_new);}
        if(user_bg_cover_current == user_bg_cover_new){localStorage.setItem('user_bg_cover', '');}
};

//----------------------------------------------------------------- USER_BG_REPEAT -----------------------------------------------------------------
var user_bg_repeat = localStorage.getItem('user_bg_repeat');
if(user_bg_repeat){body.classList.add(user_bg_repeat)};

function User_BG_Repeat (zEvent) {
    var user_bg_repeat_new = "ubg_repeat_on";
    var user_bg_repeat_current = localStorage.getItem('user_bg_repeat');
        body.classList.toggle(user_bg_repeat_new);
        if(user_bg_repeat_current != user_bg_repeat_new){localStorage.setItem('user_bg_repeat', user_bg_repeat_new);}
        if(user_bg_repeat_current == user_bg_repeat_new){localStorage.setItem('user_bg_repeat', '');}
};

//----------------------------------------------------------------- USER_BG_CENTER -----------------------------------------------------------------
var user_bg_center = localStorage.getItem('user_bg_center');
if(user_bg_center){body.classList.add(user_bg_center)};


function User_BG_Center (zEvent) {
    var user_bg_center_new = "ubg_center_on";
    var user_bg_center_current = localStorage.getItem('user_bg_center');
        body.classList.toggle(user_bg_center_new);
        if(user_bg_center_current != user_bg_center_new){localStorage.setItem('user_bg_center', user_bg_center_new);}
        if(user_bg_center_current == user_bg_center_new){localStorage.setItem('user_bg_center', '');}
};

//----------------------------------------------------------------- CUSTOM_MODE_PREVIEW -----------------------------------------------------------------

function Preview_Llama_Color (zEvent) {
    var llama_header_bgcolor_input_prev = document.getElementById('llama_header_bgcolor_selection').value;
    var llama_bars_bgcolor_input_prev = document.getElementById('llama_bars_bgcolor_selection').value;
    var llama_cams_bgcolor_input_prev = document.getElementById('llama_cams_bgcolor_selection').value;

    var llama_button_bgcolor_input_prev = document.getElementById('llama_button_bgcolor_selection').value;
    var llama_button_textcolor_input_prev = document.getElementById('llama_button_textcolor_selection').value;
    var llama_button_bordercolor_input_prev = document.getElementById('llama_button_bordercolor_selection').value;

    var llama_chat_bgcolor_input_prev = document.getElementById('llama_chat_bgcolor_selection').value;
    var llama_chat_bubble_bgcolor_input_prev = document.getElementById('llama_chat_bubble_bgcolor_selection').value;
    var llama_chat_bubble_bordercolor_input_prev = document.getElementById('llama_chat_bubble_bordercolor_selection').value;

    var llama_user_bgcolor_input_prev = document.getElementById('llama_user_bgcolor_selection').value;
    var llama_username_bgcolor_input_prev = document.getElementById('llama_username_bgcolor_selection').value;
    var llama_username_textcolor_input_prev = document.getElementById('llama_username_textcolor_selection').value;

    document.documentElement.style.setProperty('--custommodeheader-bgcolor', '#' + llama_header_bgcolor_input_prev);
    document.documentElement.style.setProperty('--custommodebars-bgcolor', '#' + llama_bars_bgcolor_input_prev);
    document.documentElement.style.setProperty('--custommodecams-bgcolor', '#' + llama_cams_bgcolor_input_prev);

    document.documentElement.style.setProperty('--custommodebutton-bgcolor', '#' + llama_button_bgcolor_input_prev);
    document.documentElement.style.setProperty('--custommodebutton-textcolor', '#' + llama_button_textcolor_input_prev);
    document.documentElement.style.setProperty('--custommodebutton-bordercolor', '#' + llama_button_bordercolor_input_prev);

    document.documentElement.style.setProperty('--custommodechat-bgcolor', '#' + llama_chat_bgcolor_input_prev);
    document.documentElement.style.setProperty('--custommodechat-bubble-bgcolor', '#' + llama_chat_bubble_bgcolor_input_prev);
    document.documentElement.style.setProperty('--custommodechat-bubble-bordercolor', '#' + llama_chat_bubble_bordercolor_input_prev);

    document.documentElement.style.setProperty('--custommodeuser-bgcolor', '#' + llama_user_bgcolor_input_prev);
    document.documentElement.style.setProperty('--custommodeusername-bgcolor', '#' + llama_username_bgcolor_input_prev);
    document.documentElement.style.setProperty('--custommodeusername-textcolor', '#' + llama_username_textcolor_input_prev);

};
//----------------------------------------------------------------- CUSTOM_MODE_SAVE -----------------------------------------------------------------
function Save_Llama_Color (zEvent) {
    var llama_header_bgcolor = localStorage.getItem('llama_header_bgcolor');
    var llama_bars_bgcolor = localStorage.getItem('llama_bars_bgcolor');
    var llama_cams_bgcolor = localStorage.getItem('llama_cams_bgcolor');

    var llama_button_bgcolor = localStorage.getItem('llama_button_bgcolor');
    var llama_button_textcolor = localStorage.getItem('llama_button_textcolor');
    var llama_button_bordercolor = localStorage.getItem('llama_button_bordercolor');

    var llama_chat_bgcolor = localStorage.getItem('llama_chat_bgcolor');
    var llama_chat_bubble_bgcolor = localStorage.getItem('llama_chat_bubble_bgcolor');
    var llama_chat_bubble_bordercolor = localStorage.getItem('llama_chat_bubble_bordercolor');

    var llama_user_bgcolor = localStorage.getItem('llama_user_bgcolor');
    var llama_username_bgcolor = localStorage.getItem('llama_username_bgcolor');
    var llama_username_textcolor = localStorage.getItem('llama_username_textcolor');

    var llama_header_bgcolor_input_new = document.getElementById('llama_header_bgcolor_selection').value;
    var llama_bars_bgcolor_input_new = document.getElementById('llama_bars_bgcolor_selection').value;
    var llama_cams_bgcolor_input_new = document.getElementById('llama_cams_bgcolor_selection').value;

    var llama_button_bgcolor_input_new = document.getElementById('llama_button_bgcolor_selection').value;
    var llama_button_textcolor_input_new = document.getElementById('llama_button_textcolor_selection').value;
    var llama_button_bordercolor_input_new = document.getElementById('llama_button_bordercolor_selection').value;

    var llama_chat_bgcolor_input_new = document.getElementById('llama_chat_bgcolor_selection').value;
    var llama_chat_bubble_bgcolor_input_new = document.getElementById('llama_chat_bubble_bgcolor_selection').value;
    var llama_chat_bubble_bordercolor_input_new = document.getElementById('llama_chat_bubble_bordercolor_selection').value;

    var llama_user_bgcolor_input_new = document.getElementById('llama_user_bgcolor_selection').value;
    var llama_username_bgcolor_input_new = document.getElementById('llama_username_bgcolor_selection').value;
    var llama_username_textcolor_input_new = document.getElementById('llama_username_textcolor_selection').value;


        if(llama_header_bgcolor_input_new != ""){

            document.documentElement.style.setProperty('--custommodeheader-bgcolor', '#' + llama_header_bgcolor_input_new);
            document.documentElement.style.setProperty('--custommodebars-bgcolor', '#' + llama_bars_bgcolor_input_new);
            document.documentElement.style.setProperty('--custommodecams-bgcolor', '#' + llama_cams_bgcolor_input_new);

            document.documentElement.style.setProperty('--custommodebutton-bgcolor', '#' + llama_button_bgcolor_input_new);
            document.documentElement.style.setProperty('--custommodebutton-textcolor', '#' + llama_button_textcolor_input_new);
            document.documentElement.style.setProperty('--custommodebutton-bordercolor', '#' + llama_button_bordercolor_input_new);

            document.documentElement.style.setProperty('--custommodechat--bgcolor', '#' + llama_chat_bgcolor_input_new);
            document.documentElement.style.setProperty('--custommodechat-bubble-bgcolor', '#' + llama_chat_bubble_bgcolor_input_new);
            document.documentElement.style.setProperty('--custommodechat-bubble-bordercolor', '#' + llama_chat_bubble_bordercolor_input_new);

            document.documentElement.style.setProperty('--custommodeuser-bgcolor', '#' + llama_user_bgcolor_input_new);
            document.documentElement.style.setProperty('--custommodeusername-bgcolor', '#' + llama_username_bgcolor_input_new);
            document.documentElement.style.setProperty('--custommodeusername-textcolor', '#' + llama_username_textcolor_input_new);

            localStorage.setItem('llama_header_bgcolor', llama_header_bgcolor_input_new);
            localStorage.setItem('llama_bars_bgcolor', llama_bars_bgcolor_input_new);
            localStorage.setItem('llama_cams_bgcolor', llama_cams_bgcolor_input_new);

            localStorage.setItem('llama_button_bgcolor', llama_button_bgcolor_input_new);
            localStorage.setItem('llama_button_textcolor', llama_button_textcolor_input_new);
            localStorage.setItem('llama_button_bordercolor', llama_button_bordercolor_input_new);

            localStorage.setItem('llama_chat_bgcolor', llama_chat_bgcolor_input_new);
            localStorage.setItem('llama_chat_bubble_bgcolor', llama_chat_bubble_bgcolor_input_new);
            localStorage.setItem('llama_chat_bubble_bordercolor', llama_chat_bubble_bordercolor_input_new);

            localStorage.setItem('llama_user_bgcolor', llama_user_bgcolor_input_new);
            localStorage.setItem('llama_username_bgcolor', llama_username_bgcolor_input_new);
            localStorage.setItem('llama_username_textcolor', llama_username_textcolor_input_new);
        } else {

            localStorage.setItem('llama_header_bgcolor', '');
            localStorage.setItem('llama_bars_bgcolor', '');
            localStorage.setItem('llama_cams_bgcolor', '');

            localStorage.setItem('llama_button_bgcolor', '');
            localStorage.setItem('llama_button_textcolor', '');
            localStorage.setItem('llama_button_bordercolor', '');

            localStorage.setItem('llama_chat_bgcolor', '');
            localStorage.setItem('llama_chat_bubble_bgcolor', '');
            localStorage.setItem('llama_chat_bubble_bordercolor', '');

            localStorage.setItem('llama_user_bgcolor', '');
            localStorage.setItem('llama_username_bgcolor', '');
            localStorage.setItem('llama_username_textcolor', '');

}
};


//----------------------------------------------------------------- CUSTOM_MODE_RESET -----------------------------------------------------------------

function Reset_Llama_Color (zEvent) {
    var llama_header_bgcolor = localStorage.getItem('llama_header_bgcolor');
    var llama_bars_bgcolor = localStorage.getItem('llama_bars_bgcolor');
    var llama_cams_bgcolor = localStorage.getItem('llama_cams_bgcolor');

    var llama_button_bgcolor = localStorage.getItem('llama_button_bgcolor');
    var llama_button_textcolor = localStorage.getItem('llama_button_textcolor');
    var llama_button_bordercolor = localStorage.getItem('llama_button_bordercolor');

    var llama_chat_bgcolor = localStorage.getItem('llama_chat_bgcolor');
    var llama_chat_bubble_bgcolor = localStorage.getItem('llama_chat_bubble_bgcolor');
    var llama_chat_bubble_bordercolor = localStorage.getItem('llama_chat_bubble_bordercolor');

    var llama_user_bgcolor = localStorage.getItem('llama_user_bgcolor');
    var llama_username_bgcolor = localStorage.getItem('llama_username_bgcolor');
    var llama_username_textcolor = localStorage.getItem('llama_username_textcolor');

    var llama_header_bgcolor_input = "22ADD5";
    var llama_bars_bgcolor_input = "C7CFD9";
    var llama_cams_bgcolor_input = "FFFFFF";

    var llama_button_bgcolor_input = "C7CFD9";
    var llama_button_textcolor_input = "FFFFFF";
    var llama_button_bordercolor_input = "000000";

    var llama_chat_bgcolor_input = "22ADD5";
    var llama_chat_bubble_bgcolor_input = "C7CFD9";
    var llama_chat_bubble_bordercolor_input = "FFFFFF";

    var llama_user_bgcolor_input = "22ADD5";
    var llama_username_bgcolor_input = "C7CFD9";
    var llama_username_textcolor_input = "FFFFFF";


        if(llama_header_bgcolor_input != ""){

            document.documentElement.style.setProperty('--custommodeheader-bgcolor', '#' + llama_header_bgcolor_input);
            document.documentElement.style.setProperty('--custommodebars-bgcolor', '#' + llama_bars_bgcolor_input);
            document.documentElement.style.setProperty('--custommodecams-bgcolor', '#' + llama_cams_bgcolor_input);

            document.documentElement.style.setProperty('--custommodebutton-bgcolor', '#' + llama_button_bgcolor_input);
            document.documentElement.style.setProperty('--custommodebutton-textcolor', '#' + llama_button_textcolor_input);
            document.documentElement.style.setProperty('--custommodebutton-bordercolor', '#' + llama_button_bordercolor_input);

            document.documentElement.style.setProperty('--custommodechat-bgcolor', '#' + llama_chat_bgcolor_input);
            document.documentElement.style.setProperty('--custommodechat-bubble-bgcolor', '#' + llama_chat_bubble_bgcolor_input);
            document.documentElement.style.setProperty('--custommodechat-bubble-bordercolor', '#' + llama_chat_bubble_bordercolor_input);

            document.documentElement.style.setProperty('--custommodeuser-bgcolor', '#' + llama_user_bgcolor_input);
            document.documentElement.style.setProperty('--custommodeusername-bgcolor', '#' + llama_username_bgcolor_input);
            document.documentElement.style.setProperty('--custommodeusername-textcolor', '#' + llama_username_textcolor_input);

            localStorage.setItem('llama_header_bgcolor', llama_header_bgcolor_input);
            localStorage.setItem('llama_bars_bgcolor', llama_bars_bgcolor_input);
            localStorage.setItem('llama_cams_bgcolor', llama_cams_bgcolor_input);

            localStorage.setItem('llama_button_bgcolor', llama_button_bgcolor_input);
            localStorage.setItem('llama_button_textcolor', llama_button_textcolor_input);
            localStorage.setItem('llama_button_bordercolor', llama_button_bordercolor_input);

            localStorage.setItem('llama_chat_bgcolor', llama_chat_bgcolor_input);
            localStorage.setItem('llama_chat_bubble_bgcolor', llama_chat_bubble_bgcolor_input);
            localStorage.setItem('llama_chat_bubble_bordercolor', llama_chat_bubble_bordercolor_input);

            localStorage.setItem('llama_user_bgcolor', llama_user_bgcolor_input);
            localStorage.setItem('llama_username_bgcolor', llama_username_bgcolor_input);
            localStorage.setItem('llama_username_textcolor', llama_username_textcolor_input);

    document.getElementById("llama_header_bgcolor_selection").value = llama_header_bgcolor_input;
    document.getElementById("llama_bars_bgcolor_selection").value = llama_bars_bgcolor_input;
    document.getElementById("llama_cams_bgcolor_selection").value = llama_cams_bgcolor_input;

    document.getElementById("llama_button_bgcolor_selection").value = llama_button_bgcolor_input;
    document.getElementById("llama_button_textcolor_selection").value = llama_button_textcolor_input;
    document.getElementById("llama_button_bordercolor_selection").value = llama_button_bordercolor_input;

    document.getElementById("llama_chat_bgcolor_selection").value = llama_chat_bgcolor_input;
    document.getElementById("llama_chat_bubble_bgcolor_selection").value = llama_chat_bubble_bgcolor_input;
    document.getElementById("llama_chat_bubble_bordercolor_selection").value = llama_chat_bubble_bordercolor_input;

    document.getElementById("llama_user_bgcolor_selection").value = llama_user_bgcolor_input;
    document.getElementById("llama_username_bgcolor_selection").value = llama_username_bgcolor_input;
    document.getElementById("llama_username_textcolor_selection").value = llama_username_textcolor_input;

        } else {

            localStorage.setItem('llama_header_bgcolor', '');
            localStorage.setItem('llama_bars_bgcolor', '');
            localStorage.setItem('llama_cams_bgcolor', '');

            localStorage.setItem('llama_button_bgcolor', '');
            localStorage.setItem('llama_button_textcolor', '');
            localStorage.setItem('llama_button_bordercolor', '');

            localStorage.setItem('llama_chat_bgcolor', '');
            localStorage.setItem('llama_chat_bubble_bgcolor', '');
            localStorage.setItem('llama_chat_bubble_bordercolor', '');

            localStorage.setItem('llama_user_bgcolor', '');
            localStorage.setItem('llama_username_bgcolor', '');
            localStorage.setItem('llama_username_textcolor', '');

}
};

//----------------------------------------------------------------- CAM_BG_TOGGLE -----------------------------------------------------------------

function Toggle_User_BG (zEvent) {
    var userbg_status = localStorage.getItem('userbg');
        body.classList.toggle("user_bg");
        if(userbg_status != "user_bg"){localStorage.setItem('userbg', 'user_bg');} else {localStorage.setItem('userbg', '');}
};

//----------------------------------------------------------------- SAVE_CAM_BG -----------------------------------------------------------------

var bg_status = localStorage.getItem('user_bg');
var llama_bg = localStorage.getItem('llama_bg1');
var llama_bg_reloader = localStorage.getItem('llama_bg1_reload');
var userbg_status = localStorage.getItem('userbg');

if(userbg_status){body.classList.add(userbg_status)}
if(llama_bg != ''){document.documentElement.style.setProperty('--user-bg-image', llama_bg);}

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




//----------------------------------------------------------------- BUBBLE_CHAT_TOGGLE -----------------------------------------------------------------

var bubble_status = localStorage.getItem('bubble_status');
if(bubble_status){body.classList.add(bubble_status)}

function Toggle_Bubble_Chat (zEvent) {
    var bubble_status = localStorage.getItem('bubble_status');
        body.classList.toggle("bubble_chat");
        if(bubble_status != "bubble_chat"){localStorage.setItem('bubble_status', 'bubble_chat');} else {localStorage.setItem('bubble_status', '');}
};
//----------------------------------------------------------------- CHAT_TOGGLE -----------------------------------------------------------------

var chat_Status = localStorage.getItem('chat');
if(chat_Status){body.classList.add(chat_Status);}

function Toggle_Chat (cEvent) {
    var chat_Status = localStorage.getItem('chat')
        body.classList.toggle("hide_chat");
        if(chat_Status != "hide_chat"){localStorage.setItem('chat', 'hide_chat');} else {localStorage.setItem('chat', '');}
};

//----------------------------------------------------------------- USER_LIST_TOGGLE -----------------------------------------------------------------

var userlist_Status = localStorage.getItem('user_status');
if(userlist_Status){body.classList.add(userlist_Status);}

function Toggle_UserList (cEvent) {
    var userlist_Status = localStorage.getItem('user_status')
        body.classList.toggle("hide_userlist");
        if(userlist_Status != "hide_userlist"){localStorage.setItem('user_status', 'hide_userlist');} else {localStorage.setItem('user_status', '');}
};

//----------------------------------------------------------------- LTR_TOGGLE -----------------------------------------------------------------

var ltr_Status = localStorage.getItem('ltr');
if(ltr_Status){body.classList.add(ltr_Status);}

function Toggle_LTR (cEvent) {
    var ltr_Status = localStorage.getItem('ltr')
        body.classList.toggle("ltr_layout");
        if(ltr_Status != "ltr_layout"){localStorage.setItem('ltr', 'ltr_layout');} else {localStorage.setItem('ltr', '');}
};

//----------------------------------------------------------------- REMOVE_CAM_BORDERS -----------------------------------------------------------------

var border_status = localStorage.getItem('no_border');
if(border_status){body.classList.add(border_status)}

function Toggle_No_Border (zEvent) {
    var yt_status = localStorage.getItem('no_border');
        body.classList.toggle("no_border");
        if(yt_status != "no_border"){localStorage.setItem('no_border', 'no_border');}
        if(yt_status == "no_border"){localStorage.setItem('no_border', '');}
};


//----------------------------------------------------------------- REMOVE_CAM_PADDING -----------------------------------------------------------------

var pad_status = localStorage.getItem('no_padding');
if(pad_status){body.classList.add(pad_status)}

function Toggle_No_Padding (zEvent) {
    var pad_status = localStorage.getItem('no_padding');
        body.classList.toggle("no_padding");
        if(pad_status != "no_padding"){localStorage.setItem('no_padding', 'no_padding');}
        if(pad_status == "no_padding"){localStorage.setItem('no_padding', '');}
};

//----------------------------------------------------------------- TOGGLE_MINI_YT -----------------------------------------------------------------

var yt_status = localStorage.getItem('yt');
if(yt_status){body.classList.add(yt_status)}

function Toggle_MiniYT (zEvent) {
    var yt_status = localStorage.getItem('yt');
        body.classList.toggle("mini_yt");
        if(yt_status != "mini_yt"){localStorage.setItem('yt', 'mini_yt');}
        if(yt_status == "mini_yt"){localStorage.setItem('yt', '');}
};




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
