// ----------------------------------------------------------------- LLAMA_MENU -----------------------------------------------------------------*/
var body = document.body

// ------------ LLAMA_NOTICE_CREATOR ----------------*/
var LlamaMain = document.createElement("div")

LlamaMain.innerHTML = `
<div id="mydiv" style="display:none;">
<div id="mydivheader">

<div id="game_head" class="game_head">
<div id ="window_title" class="window_title" style="display: inline-block; margin-right: 224px;">Llama Window</div>

<div id="control_grp" class="">
<div id="Mini_Game" class="tube_btn" style="" title="Minimize">
<i class="fas fa-window-minimize"></i>
</div>

<div id="Res_Game" class="tube_btn" style="padding:0px;" title="Restore Hover Effect">
<i class="far fa-window-restore"></i>
</div>

<div id="Max_Game" class="tube_btn" style="padding:0px;" title="Maximize/Lock Open">
<i class="fas fa-window-maximize"></i>
</div>

<div id="Close_Game_Btn" class="tube_btn" style="padding:0px;" title="Close">
<i class="far fa-window-close"></i>
</div>
</div>

</div>

</div>
<div id="iframe_box">
<div id="container2">
<iframe src="https://smokeyllama.com/game_time/main/game/web_window.php" class="scrollingContainer" id="game_list"  name="" style="border:0px;width: 105%;overflow-x: hidden;height: 95%;" scrolling="yes" allow="autoplay"></iframe>
</div>
</div>
</div>

<div id="New_Llama_Notice" onclick="Toggle_Llama_Box('notice','')">
<label style="cursor:pointer;">
<div class="theme_alert_notice">
<div id="close_box"><center><h2>Thank you for installing MY Jumpin Theme!</h2>
<hr style="width:90%;border:1px solid #313131;">
<div class="feat_info">
<div style="float:left;width:50%;">Theme Last Updated: 11/19/2019</div>
<div style="">Feedback? <a href="https://www.smokeyllama.com/" target="_blank" style="color:red;">smokeyllama.com</a></div>
</div>
<hr style="width:90%;border:1px solid #313131;">
<img src="https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@f8df0dc70db8258c826896144b0b1f50f7bdbd56/SmokeyLlama.png" width="85%"><br>
<hr style="width:90%;border:1px solid #191919;">
<h2>Features/Icons Added:</h2>
<div class="features_added">
<label class="button chat__HeaderOption" title="Chat Settings" style="background-color:white;color: #313131 !important;">
<i class="fa fa-user-cog"></i>
</label><div class="feat_title">Chat Settings</div>
<br>
<label class="button chat__HeaderOption" title="Camera Border Settings" style="background-color:white;color: #313131 !important;">
<i class="fa fa-th-large"></i>
</label><div class="feat_title">Camera Border Settings</div>
<br>
<label class="button chat__HeaderOption" title="Theme Settings" style="background-color:white;color: #313131 !important;">
<i class="fa fa-palette"></i>
</label><div class="feat_title">Theme Settings</div>
<br>
<label class="button chat__HeaderOption" title="Make Youtube Smaller" style="background-color:white;color: #313131 !important;">
<i class="fa fa-compress-arrows-alt"></i>
</label><div class="feat_title">Make Youtube Smaller</div>
<br>
<label class="button chat__HeaderOption" title="SET CUSTOM COLORS" style="background-color:white;color: #313131 !important;">
<i class="fas fa-gamepad" style="color: #313131"></i>
</label><div class="feat_title">PLAY MINI-GAMES</div>
</div>
<br><br>
(Click Anywhere to close)
</center></div>
</div>
</label>
</div>
<div id="toggle_menu" style="background-color:transparent !important;border-color:transparent !important;"></div>


<div id="New_Custom_Mode">
<div class="dropdown__Options" id="Llama_Custom">
<div class="dropdown__Option dropdown__Option-header">Custom Settings<input id="Reset_Llama_Color" type="button" style="cursor:pointer;border-radius: 10px;width: 30%;border: 1px solid #ccc;" value="RESET"/></div>
            <span class="dropdown__Option">
                <span>Header</span>
                <input class="jscolor {zIndex:'5000'}"  type='text' name="server" id="llama_header_bgcolor_selection" value="#22ADD5" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </span>
            <span class="dropdown__Option">
                <span>Bars</span>
                <input class="jscolor {zIndex:'5000'}"  type='text' name="server" id="llama_bars_bgcolor_selection" value="#C7CFD9" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </span>
            <span class="dropdown__Option">
                <span>Cam BG</span>
                <input class="jscolor {zIndex:'5000'}"  type='text' name="server" id="llama_cams_bgcolor_selection" value="#FFFFFF" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </span>
            <span class="dropdown__Option">
                <span>Button BG</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_button_bgcolor_selection" value="#C7CFD9" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </span>
            <span class="dropdown__Option">
                <span>Button Border</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_button_bordercolor_selection" value="#000000" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </span>
            <span class="dropdown__Option">
                <span>Button Text</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_button_textcolor_selection" value="#FFFFFF" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </span>
            <span class="dropdown__Option">
                <span>Chat BG</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_chat_bgcolor_selection" value="#22ADD5" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </span>
            <span class="dropdown__Option">
                <span>Bubble Chat BG</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_chat_bubble_bgcolor_selection" value="#C7CFD9" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </span>
            <span class="dropdown__Option">
                <span>Bubble Chat Border</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_chat_bubble_bordercolor_selection" value="#FFFFFF" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </span>
            <span class="dropdown__Option">
                <span>UserList BG</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_user_bgcolor_selection" value="#22ADD5" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </span>
            <span class="dropdown__Option">
                <span>User BG</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_username_bgcolor_selection" value="#C7CFD9" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </span>
            <span class="dropdown__Option">
                <span>Username Text</span>
                <input class="jscolor {zIndex:'5000'}" type='text' name="server" id="llama_username_textcolor_selection" value="#FFFFFF" style="width: 100px;border-radius: 3px;border: 1px solid #ccc;height: 18px;"></input>
            </span>
            <span class="dropdown__Option">
                <input id="Preview_Llama_Color" type="button" style="cursor:pointer;border-radius: 10px;width: 100%;border: 1px solid #ccc;" value="PREVIEW"></input>
            </span>
            <span class="dropdown__Option">
                <input id="Save_Llama_Color" type="button" style="cursor:pointer;border-radius: 10px;width: 100%;border: 1px solid #ccc;" value="SAVE"></input>
            </span>
</div>
</div>


<div class="dropdown__Options" id="Cheers_Button">
<style>
#Cheers_Button {cursor:pointer;}
.cword1 {
display:none;}
.word_one .cword1 {
display: block;
  position: absolute;
  bottom: 45px;
  right: 228px;
padding: 3px 10px;
  background: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: var(--thememode-bgcolor);
z-index:8000;}
.word_one .cword1:hover {font-weight:bold;}
</style>
<div class="cword1">cheers!</div>
</div>
`

LlamaMain.setAttribute("id", "Llama_Main")
document.body.appendChild(LlamaMain)

// ------------ LLAMA_MORE_MENU_OPTIONS ----------------*/

var chat_option_activator = "activate"
if (chat_option_activator !== "llama_chat_menu") {
  setTimeout(Toggle_Llama_Chat_Options, 3000)
}

function Toggle_Llama_Chat_Options (zEvent) {
  var lr = document.getElementsByClassName("room")[0]
  lr.id = "llama_Room"
  var xz = document.getElementsByClassName("chat__HeaderOptions")[1]
  xz.id = "chat__HeaderOptions"
  var chat_headeroptions = document.getElementById("chat__HeaderOptions")

  var chatShare = document.getElementsByClassName("chat__Share")[0]
  chatShare.id = "chat__Share"
  var chatShare_box = document.getElementById("chat__Share")

  var whatsNew = document.getElementsByClassName("roomHeader__UserActions")[0]
  whatsNew.id = "whatsNew_Box"
  var whatsNew_Box = document.getElementById("whatsNew_Box")

  var chatInputBox = document.getElementsByClassName("chat__Input")[0]
  chatInputBox.id = "chat_input_box"
  chatInputBox.setAttribute("autocomplete", "off")

  // ------------ Whats_New ----------------*/
  var WhatsNewIcon = document.createElement("label")
  WhatsNewIcon.className
    = "button button-floating button-icon button--text roomHeader__UserAction LlamaOption_chat"
  WhatsNewIcon.setAttribute("id", "Toggle_New_Llama_Notice")
  WhatsNewIcon.setAttribute("title", "Whats New SmokeyLlama")
  WhatsNewIcon.innerHTML = `
<img src="https://cdn1.iconfinder.com/data/icons/MetroStation-PNG/128/MB__Llama.png" width="20px">
<span class="mobileHidden" id="">Llama Info</span>
`

  whatsNew_Box.appendChild(WhatsNewIcon)
  whatsNew_Box.insertBefore(WhatsNewIcon, null)
  whatsNew_Box.insertBefore(WhatsNewIcon, whatsNew_Box.childNodes[0] || null)

  document.getElementById("Toggle_New_Llama_Notice").addEventListener(
    "click",
    function () {
      Toggle_Llama_Box("notice")
    },
    false
  )

  // ------------ Hide_Header ----------------*/
  var HeaderHideIcon = document.createElement("label")
  HeaderHideIcon.className = "LlamaOption_chat"
  HeaderHideIcon.setAttribute("id", "Toggle_Hide_Header")
  HeaderHideIcon.setAttribute("title", "Hide Header")
  HeaderHideIcon.innerHTML = `
<span id="header_hide_icon"><i class="fas fa-chevron-up" id="header_up"></i><i class="fas fa-chevron-down" id="header_down"></i></span>
`

  whatsNew_Box.appendChild(HeaderHideIcon)
  whatsNew_Box.insertBefore(HeaderHideIcon, null)
  whatsNew_Box.insertBefore(HeaderHideIcon, whatsNew_Box.childNodes[0] || null)
  document.getElementById("Toggle_Hide_Header").addEventListener(
    "click",
    function () {
      Toggle_Llama_Box("header", "")
    },
    false
  )

  // ------------ SHARE BUTTON EXTRA MENU ----------------*/
  var LlamaMenuBtm = document.createElement("div")
  LlamaMenuBtm.className = ""
  LlamaMenuBtm.setAttribute("id", "Llama_MENU_Btm")
  LlamaMenuBtm.setAttribute("title", "Llama_MENU_Btm")
  LlamaMenuBtm.setAttribute("style", "position: relative; top: 4px;")
  LlamaMenuBtm.innerHTML = `
<label class="button chat__HeaderOption LlamaOption_miniyt" id="miniyt__llamaOption" title="Mini Youtube Player">
<i class="fa fa-compress-arrows-alt"></i>
</label>

<label class="button chat__HeaderOption" id="web__llamaOption" title="Llama Browse">
<i class="fas fa-location-arrow"></i>
</label>
<style>
.llama_web {display:none;}
</style>
<div class="llama_web" id="llama_web">
<label class="button chat__HeaderOption" id="hideweb__llamaOption" title="Exit Window Mode">
<i class="fas fa-sign-out-alt"></i>
</label>

<label class="button chat__HeaderOption" id="games__llamaOption" title="Mini Game Window">
<i class="fas fa-gamepad"></i>
</label>

<label class="button chat__HeaderOption" id="pokemon__llamaOption" title="Pokemon Rise">
<i class="fab fa-optin-monster"></i>
</label>

<label class="button chat__HeaderOption" id="ytbackup__llamaOption" title="Youtube Back Up">
<i class="fab fa-youtube"></i>
</label>

</div>
`

  chatShare_box.appendChild(LlamaMenuBtm)
  chatShare_box.insertBefore(LlamaMenuBtm, null)
  chatShare_box.insertBefore(LlamaMenuBtm, chatShare_box.childNodes[3] || null)

  document
    .getElementById("miniyt__llamaOption")
    .addEventListener("click", Toggle_MiniYT, false)

  document.getElementById("games__llamaOption").addEventListener(
      "click",
      function () {
        Toggle_Llama_Box("tube", "home")
      },
      false
    )
    document.getElementById("ytbackup__llamaOption").addEventListener(
        "click",
        function () {
          Toggle_Llama_Box("tube", "ytbackup")
        },
        false
      )
      document.getElementById("pokemon__llamaOption").addEventListener(
          "click",
          function () {
            Toggle_Llama_Box("tube", "pokemon")
          },
          false
        )
  document.getElementById("web__llamaOption").addEventListener(
    "click",
    function () {
      Toggle_Llama_Box("tube", "web")
    },
    false
  )
  document.getElementById("hideweb__llamaOption").addEventListener(
    "click",
    function () {
      Toggle_Llama_Box("tube", "hideweb")
    },
    false
  )

  // ------------ GAMES_MENU ----------------*/
  var newGamesMenu = document.createElement("div")
  newGamesMenu.className = "dropdown__Options"
  newGamesMenu.setAttribute("id", "Llama_Games")
  newGamesMenu.innerHTML = `

<style>
#control_grp {    display: inline-block;
    float: right;
    padding-right: 10px;}

#container2{
    width: 100%;
    height: 99%;
    overflow: hidden;
    padding-right: 15px;
}
.game_head { color: white;
  font-weight: 600;
  font-size: 14pt;
}
#my_div {height:81px;opacity:0.6;}
#my_div:hover {height:570px;opacity:1;}
#Llama_Games {display:none;}
.tube_btn {
    display: inline;
    border-radius: 10px;

    padding: 3px;
    cursor: pointer;
    z-index: 8000;
    background-color: #2c2f33;
    color: #fff;
    width: 30px;
}

#mydiv {
  position: absolute;
  left: 23px;
  top: 144px;
  z-index: 7000;
  background-color: #23272a;
  text-align: center;
  border: 1px solid #23272a;border-radius:10px;
}
#mydivheader {
    border-radius: 10px;    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    padding: 5px;
    cursor: move;
    z-index: 8000;
    background-color: #2c2f33;
    color: #fff;
}
body.llama_window {overflow:hidden;}
.budsmode .fa-gamepad {color: var(--budsmode-lightbgcolor);}
.splatmode .fa-gamepad {color: var(--splatmode-lightbgcolor);}
.custommode .fa-gamepad {color: var(--custommodebutton-textcolor);}
</style>
`
  chat_headeroptions.insertBefore(
    newGamesMenu,
    chat_headeroptions.childNodes[4] || null
  )

  document.getElementById("Mini_Game").addEventListener(
    "click",
    function () {
      Toggle_Llama_Box("tube", "min")
    },
    false
  )
  document.getElementById("Max_Game").addEventListener(
    "click",
    function () {
      Toggle_Llama_Box("tube", "max")
    },
    false
  )
  document.getElementById("Res_Game").addEventListener(
    "click",
    function () {
      Toggle_Llama_Box("tube", "res")
    },
    false
  )
  // ------------ CHAT_ICON ----------------*/
  var LlamaOptions = document.createElement("div")
  LlamaOptions.className = ""
  LlamaOptions.setAttribute("id", "LlamaOptions_Main")
  LlamaOptions.setAttribute("title", "Llama Options")
  LlamaOptions.innerHTML = `
<label class="button chat__HeaderOption LlamaOption_chat" id="chat__llamaOption" title="Extra Cam Options">
<i class="fa fa-user-cog"></i>
</label>

<label class="button chat__HeaderOption" id="cam__llamaOption" title="Extra Cam Options">
<i class="fa fa-th-large"></i>
</label>

<label class="button chat__HeaderOption" id="theme__llamaOption" title="Extra Theme Options">
<i class="fa fa-palette"></i>
</label>
`

  chat_headeroptions.appendChild(LlamaOptions)
  chat_headeroptions.insertBefore(LlamaOptions, null)
  chat_headeroptions.insertBefore(
    LlamaOptions,
    chat_headeroptions.childNodes[3] || null
  )

  // ------------ CHAT_MENU ----------------*/
  var newChatMenu = document.createElement("div")
  newChatMenu.className = ""
  newChatMenu.setAttribute("id", "LlamaOptions_Box")
  newChatMenu.setAttribute(
    "style",
    "display: block; top: 95px; position: absolute; right: 11px; border-radius: 3px; z-index: 4000;"
  )
  newChatMenu.innerHTML = `
<div class="dropdown__Options" id="Llama_Chat">
<div class="dropdown__Option dropdown__Option-header">Chat settings</div>
<span class="dropdown__Option" id="llama_robo">Roboto Font<input id="llama_robo_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="llama_bubble_chat">Bubble Chat<input id="bubble_chat_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="chat_llama_hide">Toggle Chat<input id="hide_chat_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="userlist_llama_hide">Toggle Userlist<input id="hide_userlist_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="ltr_llama">LTR Mode<input id="ltr_llama_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="cword1_llama">Cheers Button<input id="cword1_llama_checkbox" class="jic-checkbox" type="checkbox"></span>
</div>

<div class="dropdown__Options" id="Llama_Cam">
<div class="dropdown__Option dropdown__Option-header">Cam Settings</div>
<span class="dropdown__Option" id="cam_border_llama">Cam Borders<input id="cam_border_checkbox" class="jic-checkbox" type="checkbox"></span>
<span class="dropdown__Option" id="cam_spacing_llama">Cam Spacing<input id="cam_spacing_checkbox" class="jic-checkbox" type="checkbox"></span>
</div>

<div class="dropdown__Options" id="Llama_Theme">
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
<span class="dropdown__Option" id="cam_bg_llama">Background Image<input id="cam_bg_checkbox" class="jic-checkbox" type="checkbox"></span>
<div class="user_bg_settings">
<div class="dropdown__Option dropdown__Option-header">BG Image Settings</div>
<span class="dropdown__Option no_hover">
<i class="fas fa-video" style="color:#5a6370;"></i>
<span style="position: relative; left: -34px;">CAM BG Image URL</span>
</span>
<span class="dropdown__Option">
<input type='text' name="server" id="bgSelection1" placeholder="URL to image.." style="opacity: 1;cursor: pointer; width: 150px;border-radius: 2px;border: 1px solid #ccc;"/>
<input id="Clear_Cam_BG" type="button" value="✘" style="border-radius: 10px;width: 45%;border: 0px; border-top-left-radius:0px; border-bottom-left-radius:0px;"/>
</span>
<span class="dropdown__Option no_hover">
<i class="fas fa-comments" style="color:#5a6370;"></i>
<span style="position: relative; left: -28px;">CHAT BG Image URL</span>
</span>
<span class="dropdown__Option">
<input type='text' name="server" id="bgSelection2" placeholder="URL to image.." style="opacity: 1;cursor: pointer; width: 150px;border-radius: 2px;border: 1px solid #ccc;"/>
<input id="Clear_Chat_BG" type="button" value="✘" style="border-radius: 10px;width: 45%;border: 0px; border-top-left-radius:0px; border-bottom-left-radius:0px;"/>
</span>
<span class="dropdown__Option no_hover">
<i class="fas fa-users" style="color:#5a6370;"></i>
<span style="position: relative; left: -19px;">USERS BG Image URL</span>
</span>
<span class="dropdown__Option">
<input type='text' name="server" id="bgSelection3" placeholder="URL to image.." style="opacity: 1;cursor: pointer; width: 150px;border-radius: 2px;border: 1px solid #ccc;"/>
<input id="Clear_Userlist_BG" type="button" value="✘" style="border-radius: 10px;width: 45%;border: 0px; border-top-left-radius:0px; border-bottom-left-radius:0px;"/>
</span>
<span class="dropdown__Option"><input id="Save_Llama_BG" type="button" value="✔ Apply Images" style="border-radius: 10px;width: 100%;border: 0px;"/>
</span>
<span class="dropdown__Option no_hover">
COVER | REPEAT | CENTER
</span>
<span class="dropdown__Option">
CAM BG
<span style="margin-right: 20px;">
<input id="cam_bg_cover" class="jic-checkbox" type="checkbox" style="cursor:pointer;">
<input id="cam_bg_repeat" class="jic-checkbox" type="checkbox" style="cursor:pointer;">
<input id="cam_bg_center" class="jic-checkbox" type="checkbox" style="cursor:pointer;">
</span>
</span>
<span class="dropdown__Option">
CHAT BG
<span style="margin-right: 20px;">
<input id="chat_bg_cover" class="jic-checkbox" type="checkbox" style="cursor:pointer;">
<input id="chat_bg_repeat" class="jic-checkbox" type="checkbox" style="cursor:pointer;">
<input id="chat_bg_center" class="jic-checkbox" type="checkbox" style="cursor:pointer;">
</span>
</span>
<span class="dropdown__Option">
USER BG
<span style="margin-right: 20px;">
<input id="userlist_bg_cover" class="jic-checkbox" type="checkbox" style="cursor:pointer;">
<input id="userlist_bg_repeat" class="jic-checkbox" type="checkbox" style="cursor:pointer;">
<input id="userlist_bg_center" class="jic-checkbox" type="checkbox" style="cursor:pointer;">
</span>
</span>
</div>
</div>
`

  chat_headeroptions.insertBefore(
    newChatMenu,
    chat_headeroptions.childNodes[4] || null
  )

  var border_status = localStorage.getItem("no_border")
  var pad_status = localStorage.getItem("no_padding")
  if (border_status) {
    body.classList.add(border_status)
    document.getElementById("cam_border_checkbox").checked = true
  }
  if (pad_status) {
    body.classList.add(pad_status)
    document.getElementById("cam_spacing_checkbox").checked = true
  }

  document.getElementById("chat__llamaOption").addEventListener(
    "click",
    function () {
      Toggle_Llama_Box("chat", "")
    },
    false
  )

  document
    .getElementById("llama_robo")
    .addEventListener("click", Toggle_Robo_Llama, false)
  var robo_status = localStorage.getItem("robo_status")
  if (robo_status === "llama_robo") {
    document.getElementById("llama_robo_checkbox").checked = true
  }

  document
    .getElementById("llama_bubble_chat")
    .addEventListener("click", Toggle_Bubble_Chat, false)
  var bubble_status = localStorage.getItem("bubble_status")
  if (bubble_status === "bubble_chat") {
    document.getElementById("bubble_chat_checkbox").checked = true
  }

  document
    .getElementById("chat_llama_hide")
    .addEventListener("click", Toggle_Chat, false)
  var chat_Status = localStorage.getItem("chat")
  if (chat_Status === "hide_chat") {
    document.getElementById("hide_chat_checkbox").checked = true
  }

  document
    .getElementById("userlist_llama_hide")
    .addEventListener("click", Toggle_UserList, false)
  var userlist_Status = localStorage.getItem("user_status")
  if (userlist_Status === "hide_userlist") {
    document.getElementById("hide_userlist_checkbox").checked = true
  }

  document
    .getElementById("ltr_llama")
    .addEventListener("click", Toggle_LTR, false)
  var ltr_Status = localStorage.getItem("ltr")
  if (ltr_Status === "ltr_layout") {
    document.getElementById("ltr_llama_checkbox").checked = true
  }

  document.getElementById("ChatSettings").addEventListener(
    "click",
    function () {
      Toggle_Llama_Box("chat", "")
    },
    false
  )

  document.getElementById("cam__llamaOption").addEventListener(
    "click",
    function () {
      Toggle_Llama_Box("cam", "")
    },
    false
  )

  document.getElementById("theme__llamaOption").addEventListener(
    "click",
    function () {
      Toggle_Llama_Box("theme", "")
    },
    false
  )

  document
    .getElementById("cam_border_llama")
    .addEventListener("click", Toggle_No_Border, false)

  document
    .getElementById("cam_spacing_llama")
    .addEventListener("click", Toggle_No_Padding, false)

  document
    .getElementById("cword1_llama")
    .addEventListener("click", Toggle_Word_1, false)

  document
    .getElementById("cam_bg_llama")
    .addEventListener("click", Toggle_User_BG, false)

  document
    .getElementById("cam_spacing_llama")
    .addEventListener("click", Toggle_No_Padding, false)

  document
    .getElementById("Preview_Llama_Color")
    .addEventListener("click", Preview_Llama_Color, false)
  document
    .getElementById("Save_Llama_Color")
    .addEventListener("click", Save_Llama_Color, false)
  document
    .getElementById("Reset_Llama_Color")
    .addEventListener("click", Reset_Llama_Color, false)

  document
    .getElementById("Clear_Cam_BG")
    .addEventListener("click", Clear_Cam_BG, false)
  document
    .getElementById("Clear_Chat_BG")
    .addEventListener("click", Clear_Chat_BG, false)
  document
    .getElementById("Clear_Userlist_BG")
    .addEventListener("click", Clear_Userlist_BG, false)

  document
    .getElementById("Save_Llama_BG")
    .addEventListener("click", Save_Llama_BG, false)

  document
    .getElementById("cam_bg_cover")
    .addEventListener("click", Cam_BG_Cover, false)
  document
    .getElementById("cam_bg_repeat")
    .addEventListener("click", Cam_BG_Repeat, false)
  document
    .getElementById("cam_bg_center")
    .addEventListener("click", Cam_BG_Center, false)

  document
    .getElementById("chat_bg_cover")
    .addEventListener("click", Chat_BG_Cover, false)
  document
    .getElementById("chat_bg_repeat")
    .addEventListener("click", Chat_BG_Repeat, false)
  document
    .getElementById("chat_bg_center")
    .addEventListener("click", Chat_BG_Center, false)

  document
    .getElementById("userlist_bg_cover")
    .addEventListener("click", Userlist_BG_Cover, false)
  document
    .getElementById("userlist_bg_repeat")
    .addEventListener("click", Userlist_BG_Repeat, false)
  document
    .getElementById("userlist_bg_center")
    .addEventListener("click", Userlist_BG_Center, false)
  // LOADING VARIABLES IN GROUPS
  document.addEventListener(
    "input",
    function (event) {
      // Only run for #theme_wizard select
      if (event.target.id !== "theme_wizard") {
        return
      }
      if (event.target.value === "Default Theme") {
        Toggle_DefaultTheme()
      }
      if (event.target.value === "PINK") {
        Toggle_Theme("pink")
      }
      if (event.target.value === "GREEN") {
        Toggle_Theme("green")
      }
      if (event.target.value === "BLUE") {
        Toggle_Theme("blue")
      }
      if (event.target.value === "MAUVE") {
        Toggle_Theme("mauve")
      }
      if (event.target.value === "ORANGE") {
        Toggle_Theme("orange")
      }
      if (event.target.value === "RED") {
        Toggle_Theme("red")
      }
      if (event.target.value === "PURPLE") {
        Toggle_Theme("purple")
      }
      if (event.target.value === "BLACK") {
        Toggle_Theme("black")
      }
      if (event.target.value === "BUDS") {
        Toggle_Theme("buds")
      }
      if (event.target.value === "SPLAT") {
        Toggle_Theme("splat")
      }
      if (event.target.value === "CUSTOM") {
        Toggle_Theme_Custom()
        Save_Llama_Color()
      }
    },
    false
  )
  document
    .getElementById("Close_Game_Btn")
    .addEventListener("click", function () {
      Toggle_Llama_Box("tube", "hideweb")
    })
    document
      .getElementById("web__llamaOption")
      .addEventListener("click", function () {
        Toggle_Llama_Box("tube", "web")
      })
  var llama_bg = localStorage.getItem("llama_bg1")
  var llama_bg_reloader = localStorage.getItem("llama_bg1_reload")
  var llama_bg2 = localStorage.getItem("llama_bg2")
  var llama_bg2_reloader = localStorage.getItem("llama_bg2_reload")
  var llama_bg3 = localStorage.getItem("llama_bg3")
  var llama_bg3_reloader = localStorage.getItem("llama_bg3_reload")

  var cam_bg_cover = localStorage.getItem("cam_bg_cover")
  var cam_bg_repeat = localStorage.getItem("cam_bg_repeat")
  var cam_bg_center = localStorage.getItem("cam_bg_center")
  var chat_bg_cover = localStorage.getItem("chat_bg_cover")
  var chat_bg_center = localStorage.getItem("chat_bg_center")

  var userlist_bg_cover = localStorage.getItem("userlist_bg_cover")
  var userlist_bg_repeat = localStorage.getItem("userlist_bg_repeat")
  var userlist_bg_center = localStorage.getItem("userlist_bg_center")
  var userbg_status = localStorage.getItem("userbg")
  var theme_status = localStorage.getItem("thememode")

  if (llama_bg !== "") {
    document.documentElement.style.setProperty("--user-bg-image", llama_bg)
  }
  if (llama_bg) {
    document.getElementById("bgSelection1").value = llama_bg_reloader
  }
  if (llama_bg2 !== "") {
    document.documentElement.style.setProperty("--user-bg2-image", llama_bg2)
  }
  if (llama_bg2) {
    document.getElementById("bgSelection2").value = llama_bg_reloader2
  }
  if (llama_bg3 !== "") {
    document.documentElement.style.setProperty("--user-bg3-image", llama_bg3)
  }
  if (llama_bg3) {
    document.getElementById("bgSelection3").value = llama_bg3_reloader
  }
  if (cam_bg_cover) {
    document.getElementById("cam_bg_cover").checked = true
  }
  if (cam_bg_repeat) {
    document.getElementById("cam_bg_repeat").checked = true
  }
  if (cam_bg_center) {
    document.getElementById("cam_bg_center").checked = true
  }
  if (chat_bg_cover) {
    document.getElementById("chat_bg_cover").checked = true
  }
  var chat_bg_repeat = localStorage.getItem("chat_bg_repeat")
  if (chat_bg_repeat) {
    document.getElementById("chat_bg_repeat").checked = true
  }
  if (chat_bg_center) {
    document.getElementById("chat_bg_center").checked = true
  }
  if (userlist_bg_cover) {
    document.getElementById("userlist_bg_cover").checked = true
  }
  if (userlist_bg_repeat) {
    document.getElementById("userlist_bg_repeat").checked = true
  }
  if (userlist_bg_center) {
    document.getElementById("userlist_bg_center").checked = true
  }
  if (userbg_status === "user_bg") {
    document.getElementById("cam_bg_checkbox").checked = true
  }

  // ------- SET DROPDOWN CHOICE -------
  if (theme_status) {
    document.getElementById("theme_wizard").selectedIndex = 0
  }
  if (theme_status === "") {
    document.getElementById("theme_wizard").selectedIndex = 1
  }
  if (theme_status === "pink") {
    document.getElementById("theme_wizard").selectedIndex = 2
  }
  if (theme_status === "green") {
    document.getElementById("theme_wizard").selectedIndex = 3
  }
  if (theme_status === "blue") {
    document.getElementById("theme_wizard").selectedIndex = 4
  }
  if (theme_status === "mauve") {
    document.getElementById("theme_wizard").selectedIndex = 5
  }
  if (theme_status === "orange") {
    document.getElementById("theme_wizard").selectedIndex = 6
  }
  if (theme_status === "red") {
    document.getElementById("theme_wizard").selectedIndex = 7
  }
  if (theme_status === "purple") {
    document.getElementById("theme_wizard").selectedIndex = 8
  }
  if (theme_status === "black") {
    document.getElementById("theme_wizard").selectedIndex = 9
  }
  if (theme_status === "buds") {
    document.getElementById("theme_wizard").selectedIndex = 10
  }
  if (theme_status === "splat") {
    document.getElementById("theme_wizard").selectedIndex = 11
  }
  if (theme_status === "custommode") {
    document.getElementById("theme_wizard").selectedIndex = 12
  }

  // Make the DIV element draggable:
  dragElement(document.getElementById("mydiv"))

  function dragElement (elmnt) {
    var pos1 = 0
    var pos2 = 0
    var pos3 = 0
    var pos4 = 0
    if (document.getElementById(elmnt.id + "header")) {
      // If present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown
    } else {
      // Otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown
    }

    function dragMouseDown (e) {
      e = e || window.event
      e.preventDefault()
      // Get the mouse cursor position at startup:
      pos3 = e.clientX
      pos4 = e.clientY
      document.onmouseup = closeDragElement
      // Call a function whenever the cursor moves:
      document.onmousemove = elementDrag
    }

    function elementDrag (e) {
      e = e || window.event
      e.preventDefault()
      // Calculate the new cursor position:
      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY
      // Set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px"
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px"
    }

    function closeDragElement () {
      // Stop moving when mouse button is released:
      document.onmouseup = null
      document.onmousemove = null
    }
  }

  function Toggle_Word_1_Action (zEvent) {
    var text = document.getElementById("chat_input_box")
    var cheers_status = localStorage.getItem("cheers_status")
    if (!cheers_status) {
      text.value = "cheers!"
      localStorage.setItem("cheers_status", "1")
    }
    if (cheers_status === "1") {
      text.value = "MEGA CHEERS!"
      localStorage.setItem("cheers_status", "2")
    }
    if (cheers_status === "2") {
      text.value = "▂▅▇ 🔥 CHEERS 🔥 ▇▅▂"
      localStorage.setItem("cheers_status", "")
    }
  }
  document
    .getElementById("Cheers_Button")
    .addEventListener("click", Toggle_Word_1_Action, false)
  var cheers_status = localStorage.getItem("llama_btn_1")
  if (cheers_status) {
    document.getElementById("cword1_llama_checkbox").checked = true
  }
  // 30seconds
}

function Toggle_Llama_Box (type, zEvent) {
  var loc = window.location.toString()
  var params = loc.split("/")[3]
  var iframe = document.getElementById("game_list")

  if (type === "cam") {
    body.classList.toggle("open_llama_cam")
    body.classList.remove("open_llama_chat")
    body.classList.remove("open_llama_theme")
  } else if (type === "chat") {
    body.classList.remove("open_llama_cam")
    body.classList.toggle("open_llama_chat")
    body.classList.remove("open_llama_theme")
  } else if (type === "theme") {
    body.classList.remove("open_llama_cam")
    body.classList.remove("open_llama_chat")
    body.classList.toggle("open_llama_theme")
  } else if (type === "notice") {
    body.classList.toggle("hide_notice")
  } else if (type === "header") {
    body.classList.toggle(hide_header)
    localStorage.setItem("header_status", "")
  } else if (type === "tube") {
    if (zEvent === "web") {
      body.classList.add("llama_window")
      Toggle_Llama_Box("tube","games")
      document.getElementById("llama_web").setAttribute("style", "display:inline-block; ")
      document.getElementById("web__llamaOption").setAttribute("style", "display:none; ")
      document.getElementById("mydiv").setAttribute("style", "display:inline-block; ")
      hideweb__llamaOption
    } else if (zEvent === "hideweb") {
      body.classList.remove("llama_window")
      document.getElementById("web__llamaOption").setAttribute("style", "display:inline-flex; ")
      document.getElementById("llama_web").setAttribute("style", "display:none; ")
      document.getElementById("mydiv").setAttribute("style", "display:none; ")
    } else if (zEvent === "ytbackup") {
      var tc = "https://tinychat.com/room/"
      iframe.src = tc + params
    } else if (zEvent === "home") {
      var home = "https://smokeyllama.com/game_time/main/game/web_window.php"
      iframe.src = home
    } else if (zEvent === "pokemon") {
      window.open(
        "https://pokemonrise.com/", "_blank");
    }

    if (zEvent === "max") {
      document.getElementById("window_title").setAttribute("style", "display:inline-block;margin-right: 224px;")
      document
        .getElementById("mydiv")
        .setAttribute("style", "left:23px; top:144px; height:605px;")
    } else if (zEvent === "min") {

      document.getElementById("window_title").setAttribute("style", "display:none;")
      document
        .getElementById("mydiv")
        .setAttribute("style", "left:0px; top:92.4%; height:28px; width:221px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;")
    } else if (zEvent === "res") {
      document.getElementById("window_title").setAttribute("style", "display:inline-block;margin-right: 224px;")
      document.getElementById("window_title").setAttribute("style", "display:inline-block;margin-right: 224px;")
      document
        .getElementById("mydiv")
        .setAttribute("style", "display:inline-block; left:23px; top:144px;")
    }
  }
}

var header_status = localStorage.getItem("header_status")
var hide_header = "hide_header"
if (header_status) {
  body.classList.add(hide_header)
}

// Import Roboto Mono Regular v2.002 2015 ttfautohint v1.3
// Apache License 2.0

var robo_status = localStorage.getItem("robo_status")
var llama_robo = "llama_robo"
if (robo_status) {
  body.classList.add(llama_robo)
}

function Toggle_Robo_Llama (cEvent) {
  var robo_status = localStorage.getItem("robo_status")
  body.classList.toggle("llama_robo")
  if (robo_status !== "llama_robo") {
    localStorage.setItem("robo_status", "llama_robo")
    document.getElementById("llama_robo_checkbox").checked = true
  } else {
    localStorage.setItem("robo_status", "")
    document.getElementById("llama_robo_checkbox").checked = false
  }
}

// ----------------------------------------------------------------- HIDE_NOTICE -----------------------------------------------------------------

var cheers_btn = localStorage.getItem("llama_btn_1")
if (cheers_btn) {
  body.classList.add("word_one")
}

function Toggle_Word_1 (zEvent) {
  var word_one = "word_one"
  var cheers_btn = localStorage.getItem("llama_btn_1")
  body.classList.toggle(word_one)
  if (cheers_btn !== word_one) {
    localStorage.setItem("llama_btn_1", word_one)
    document.getElementById("cword1_llama_checkbox").checked = true
  }
  if (cheers_btn === word_one) {
    localStorage.setItem("llama_btn_1", "")
    document.getElementById("cword1_llama_checkbox").checked = false
  }
}

// ----------------------------------------------------------------- CUSTOM_MODE -----------------------------------------------------------------

var header_bgcolor_selection = localStorage.getItem("llama_header_bgcolor")
var bars_bgcolor_selection = localStorage.getItem("llama_bars_bgcolor")
var cams_bgcolor_selection = localStorage.getItem("llama_cams_bgcolor")

var button_bgcolor_selection = localStorage.getItem("llama_button_bgcolor")
var button_textcolor_selection = localStorage.getItem("llama_button_textcolor")
var button_bordercolor_selection = localStorage.getItem(
  "llama_button_bordercolor"
)

var chat_bgcolor_selection = localStorage.getItem("llama_chat_bgcolor")
var chat_bubble_bgcolor_selection = localStorage.getItem(
  "llama_chat_bubble_bgcolor"
)
var chat_bubble_bordercolor_selection = localStorage.getItem(
  "llama_chat_bubble_bordercolor"
)

var user_bgcolor_selection = localStorage.getItem("llama_user_bgcolor")
var username_bgcolor_selection = localStorage.getItem("llama_username_bgcolor")
var username_textcolor_selection = localStorage.getItem(
  "llama_username_textcolor"
)

var theme_status = localStorage.getItem("thememode")
// ----------------------------------------------------------------- REAPPLY_THEME_CHOICE -----------------------------------------------------------------

if (theme_status) {
  body.classList.add("thememode")
  Toggle_Theme(theme_status)
}

if (theme_status === "custommode") {
  body.classList.add("custommode")
  document.documentElement.style.setProperty(
    "--custommodeheader-bgcolor",
    "#" + header_bgcolor_selection
  )
  document.documentElement.style.setProperty(
    "--custommodebars-bgcolor",
    "#" + bars_bgcolor_selection
  )
  document.documentElement.style.setProperty(
    "--custommodecams-bgcolor",
    "#" + cams_bgcolor_selection
  )

  document.documentElement.style.setProperty(
    "--custommodebutton-bgcolor",
    "#" + button_bgcolor_selection
  )
  document.documentElement.style.setProperty(
    "--custommodebutton-textcolor",
    "#" + button_textcolor_selection
  )
  document.documentElement.style.setProperty(
    "--custommodebutton-bordercolor",
    "#" + button_bordercolor_selection
  )

  document.documentElement.style.setProperty(
    "--custommodechat-bgcolor",
    "#" + chat_bgcolor_selection
  )
  document.documentElement.style.setProperty(
    "--custommodechat-bubble-bgcolor",
    "#" + chat_bubble_bgcolor_selection
  )
  document.documentElement.style.setProperty(
    "--custommodechat-bubble-bordercolor",
    "#" + chat_bubble_bordercolor_selection
  )

  document.documentElement.style.setProperty(
    "--custommodeuser-bgcolor",
    "#" + user_bgcolor_selection
  )
  document.documentElement.style.setProperty(
    "--custommodeusername-bgcolor",
    "#" + username_bgcolor_selection
  )
  document.documentElement.style.setProperty(
    "--custommodeusername-textcolor",
    "#" + username_textcolor_selection
  )
}

if (header_bgcolor_selection) {
  document.getElementById(
    "llama_header_bgcolor_selection"
  ).value = header_bgcolor_selection
  document.getElementById(
    "llama_bars_bgcolor_selection"
  ).value = bars_bgcolor_selection
  document.getElementById(
    "llama_cams_bgcolor_selection"
  ).value = cams_bgcolor_selection

  document.getElementById(
    "llama_button_bgcolor_selection"
  ).value = button_bgcolor_selection
  document.getElementById(
    "llama_button_textcolor_selection"
  ).value = button_textcolor_selection
  document.getElementById(
    "llama_button_bordercolor_selection"
  ).value = button_bordercolor_selection

  document.getElementById(
    "llama_chat_bgcolor_selection"
  ).value = chat_bgcolor_selection
  document.getElementById(
    "llama_chat_bubble_bgcolor_selection"
  ).value = chat_bubble_bgcolor_selection
  document.getElementById(
    "llama_chat_bubble_bordercolor_selection"
  ).value = chat_bubble_bordercolor_selection

  document.getElementById(
    "llama_user_bgcolor_selection"
  ).value = user_bgcolor_selection
  document.getElementById(
    "llama_username_bgcolor_selection"
  ).value = username_bgcolor_selection
  document.getElementById(
    "llama_username_textcolor_selection"
  ).value = username_textcolor_selection
}

// ----------------------------------------------------------------- CUSTOM_MODE_TOGGLE -----------------------------------------------------------------

function Toggle_Theme_Custom (zEvent) {
  var color_choice = "custommode"
  var theme_status = localStorage.getItem("thememode")
  body.classList.toggle(color_choice)
  if (theme_status !== color_choice) {
    localStorage.setItem("thememode", color_choice)
  }
  if (theme_status === color_choice) {
    localStorage.setItem("thememode", "")
  }
}

// ----------------------------------------------------------------- CAM_BG_COVER -----------------------------------------------------------------
var cam_bg_cover = localStorage.getItem("cam_bg_cover")
if (cam_bg_cover) {
  body.classList.add("cam_cover_on")
}

function Cam_BG_Cover (zEvent) {
  var cam_bg_cover_new = "cam_cover_on"
  var cam_bg_cover_current = localStorage.getItem("cam_bg_cover")
  body.classList.toggle(cam_bg_cover_new)
  if (cam_bg_cover_current !== cam_bg_cover_new) {
    localStorage.setItem("cam_bg_cover", cam_bg_cover_new)
    document.getElementById("cam_bg_cover").checked = true
  } else {
    localStorage.setItem("cam_bg_cover", "")
    document.getElementById("cam_bg_cover").checked = false
  }
}

// ----------------------------------------------------------------- CAM_BG_REPEAT -----------------------------------------------------------------
var cam_bg_repeat = localStorage.getItem("cam_bg_repeat")
if (cam_bg_repeat) {
  body.classList.add(cam_bg_repeat)
}

function Cam_BG_Repeat (zEvent) {
  var cam_bg_repeat_new = "cam_repeat_on"
  var cam_bg_repeat_current = localStorage.getItem("cam_bg_repeat")
  body.classList.toggle(cam_bg_repeat_new)
  if (cam_bg_repeat_current !== cam_bg_repeat_new) {
    localStorage.setItem("cam_bg_repeat", cam_bg_repeat_new)
    document.getElementById("cam_bg_repeat").checked = true
  }
  if (cam_bg_repeat_current === cam_bg_repeat_new) {
    localStorage.setItem("cam_bg_repeat", "")
    document.getElementById("cam_bg_repeat").checked = false
  }
}

// ----------------------------------------------------------------- CAM_BG_CENTER -----------------------------------------------------------------
var cam_bg_center = localStorage.getItem("cam_bg_center")
if (cam_bg_center) {
  body.classList.add(cam_bg_center)
}

function Cam_BG_Center (zEvent) {
  var cam_bg_center_new = "cam_center_on"
  var cam_bg_center_current = localStorage.getItem("cam_bg_center")
  body.classList.toggle(cam_bg_center_new)
  if (cam_bg_center_current !== cam_bg_center_new) {
    localStorage.setItem("cam_bg_center", cam_bg_center_new)
    document.getElementById("cam_bg_center").checked = true
  }
  if (cam_bg_center_current === cam_bg_center_new) {
    localStorage.setItem("cam_bg_center", "")
    document.getElementById("cam_bg_center").checked = false
  }
}

// ----------------------------------------------------------------- Chat_BG_COVER -----------------------------------------------------------------
var chat_bg_cover = localStorage.getItem("chat_bg_cover")
if (chat_bg_cover) {
  body.classList.add("chat_cover_on")
}

function Chat_BG_Cover (zEvent) {
  var chat_bg_cover_new = "chat_cover_on"
  var chat_bg_cover_current = localStorage.getItem("chat_bg_cover")
  body.classList.toggle(chat_bg_cover_new)
  if (chat_bg_cover_current !== chat_bg_cover_new) {
    localStorage.setItem("chat_bg_cover", chat_bg_cover_new)
    document.getElementById("chat_bg_cover").checked = true
  } else {
    localStorage.setItem("chat_bg_cover", "")
    document.getElementById("chat_bg_cover").checked = false
  }
}

// ----------------------------------------------------------------- Chat_BG_REPEAT -----------------------------------------------------------------
var chat_bg_repeat = localStorage.getItem("chat_bg_repeat")
if (chat_bg_repeat) {
  body.classList.add(chat_bg_repeat)
}

function Chat_BG_Repeat (zEvent) {
  var chat_bg_repeat_new = "chat_repeat_on"
  var chat_bg_repeat_current = localStorage.getItem("chat_bg_repeat")
  body.classList.toggle(chat_bg_repeat_new)
  if (chat_bg_repeat_current !== chat_bg_repeat_new) {
    localStorage.setItem("chat_bg_repeat", chat_bg_repeat_new)
    document.getElementById("chat_bg_repeat").checked = true
  }
  if (chat_bg_repeat_current === chat_bg_repeat_new) {
    localStorage.setItem("chat_bg_repeat", "")
    document.getElementById("chat_bg_repeat").checked = false
  }
}

// ----------------------------------------------------------------- Chat_BG_CENTER -----------------------------------------------------------------
var chat_bg_center = localStorage.getItem("chat_bg_center")
if (chat_bg_center) {
  body.classList.add(chat_bg_center)
}

function Chat_BG_Center (zEvent) {
  var chat_bg_center_new = "chat_center_on"
  var chat_bg_center_current = localStorage.getItem("chat_bg_center")
  body.classList.toggle(chat_bg_center_new)
  if (chat_bg_center_current !== chat_bg_center_new) {
    localStorage.setItem("chat_bg_center", chat_bg_center_new)
    document.getElementById("chat_bg_center").checked = true
  }
  if (chat_bg_center_current === chat_bg_center_new) {
    localStorage.setItem("chat_bg_center", "")
    document.getElementById("chat_bg_center").checked = false
  }
}

// ----------------------------------------------------------------- Userlist_BG_COVER -----------------------------------------------------------------
var userlist_bg_cover = localStorage.getItem("userlist_bg_cover")
if (userlist_bg_cover) {
  body.classList.add("userlist_cover_on")
}

function Userlist_BG_Cover (zEvent) {
  var userlist_bg_cover_new = "userlist_cover_on"
  var userlist_bg_cover_current = localStorage.getItem("userlist_bg_cover")
  body.classList.toggle(userlist_bg_cover_new)
  if (userlist_bg_cover_current !== userlist_bg_cover_new) {
    localStorage.setItem("userlist_bg_cover", userlist_bg_cover_new)
    document.getElementById("userlist_bg_cover").checked = true
  } else {
    localStorage.setItem("userlist_bg_cover", "")
    document.getElementById("userlist_bg_cover").checked = false
  }
}

// ----------------------------------------------------------------- Userlist_BG_REPEAT -----------------------------------------------------------------
var userlist_bg_repeat = localStorage.getItem("userlist_bg_repeat")
if (userlist_bg_repeat) {
  body.classList.add(userlist_bg_repeat)
}

function Userlist_BG_Repeat (zEvent) {
  var userlist_bg_repeat_new = "userlist_repeat_on"
  var userlist_bg_repeat_current = localStorage.getItem("userlist_bg_repeat")
  body.classList.toggle(userlist_bg_repeat_new)
  if (userlist_bg_repeat_current !== userlist_bg_repeat_new) {
    localStorage.setItem("userlist_bg_repeat", userlist_bg_repeat_new)
    document.getElementById("userlist_bg_repeat").checked = true
  }
  if (userlist_bg_repeat_current === userlist_bg_repeat_new) {
    localStorage.setItem("userlist_bg_repeat", "")
    document.getElementById("userlist_bg_repeat").checked = false
  }
}

// ----------------------------------------------------------------- Userlist_BG_CENTER -----------------------------------------------------------------
var userlist_bg_center = localStorage.getItem("userlist_bg_center")
if (userlist_bg_center) {
  body.classList.add(userlist_bg_center)
}

function Userlist_BG_Center (zEvent) {
  var userlist_bg_center_new = "userlist_center_on"
  var userlist_bg_center_current = localStorage.getItem("userlist_bg_center")
  body.classList.toggle(userlist_bg_center_new)
  if (userlist_bg_center_current !== userlist_bg_center_new) {
    localStorage.setItem("userlist_bg_center", userlist_bg_center_new)
    document.getElementById("userlist_bg_center").checked = true
  }
  if (userlist_bg_center_current === userlist_bg_center_new) {
    localStorage.setItem("userlist_bg_center", "")
    document.getElementById("userlist_bg_center").checked = false
  }
}

// ----------------------------------------------------------------- CUSTOM_MODE_PREVIEW -----------------------------------------------------------------

function Preview_Llama_Color (zEvent) {
  var llama_header_bgcolor_input_prev = document.getElementById(
    "llama_header_bgcolor_selection"
  ).value
  var llama_bars_bgcolor_input_prev = document.getElementById(
    "llama_bars_bgcolor_selection"
  ).value
  var llama_cams_bgcolor_input_prev = document.getElementById(
    "llama_cams_bgcolor_selection"
  ).value

  var llama_button_bgcolor_input_prev = document.getElementById(
    "llama_button_bgcolor_selection"
  ).value
  var llama_button_textcolor_input_prev = document.getElementById(
    "llama_button_textcolor_selection"
  ).value
  var llama_button_bordercolor_input_prev = document.getElementById(
    "llama_button_bordercolor_selection"
  ).value

  var llama_chat_bgcolor_input_prev = document.getElementById(
    "llama_chat_bgcolor_selection"
  ).value
  var llama_chat_bubble_bgcolor_input_prev = document.getElementById(
    "llama_chat_bubble_bgcolor_selection"
  ).value
  var llama_chat_bubble_bordercolor_input_prev = document.getElementById(
    "llama_chat_bubble_bordercolor_selection"
  ).value

  var llama_user_bgcolor_input_prev = document.getElementById(
    "llama_user_bgcolor_selection"
  ).value
  var llama_username_bgcolor_input_prev = document.getElementById(
    "llama_username_bgcolor_selection"
  ).value
  var llama_username_textcolor_input_prev = document.getElementById(
    "llama_username_textcolor_selection"
  ).value

  document.documentElement.style.setProperty(
    "--custommodeheader-bgcolor",
    "#" + llama_header_bgcolor_input_prev
  )
  document.documentElement.style.setProperty(
    "--custommodebars-bgcolor",
    "#" + llama_bars_bgcolor_input_prev
  )
  document.documentElement.style.setProperty(
    "--custommodecams-bgcolor",
    "#" + llama_cams_bgcolor_input_prev
  )

  document.documentElement.style.setProperty(
    "--custommodebutton-bgcolor",
    "#" + llama_button_bgcolor_input_prev
  )
  document.documentElement.style.setProperty(
    "--custommodebutton-textcolor",
    "#" + llama_button_textcolor_input_prev
  )
  document.documentElement.style.setProperty(
    "--custommodebutton-bordercolor",
    "#" + llama_button_bordercolor_input_prev
  )

  document.documentElement.style.setProperty(
    "--custommodechat-bgcolor",
    "#" + llama_chat_bgcolor_input_prev
  )
  document.documentElement.style.setProperty(
    "--custommodechat-bubble-bgcolor",
    "#" + llama_chat_bubble_bgcolor_input_prev
  )
  document.documentElement.style.setProperty(
    "--custommodechat-bubble-bordercolor",
    "#" + llama_chat_bubble_bordercolor_input_prev
  )

  document.documentElement.style.setProperty(
    "--custommodeuser-bgcolor",
    "#" + llama_user_bgcolor_input_prev
  )
  document.documentElement.style.setProperty(
    "--custommodeusername-bgcolor",
    "#" + llama_username_bgcolor_input_prev
  )
  document.documentElement.style.setProperty(
    "--custommodeusername-textcolor",
    "#" + llama_username_textcolor_input_prev
  )
}
// ----------------------------------------------------------------- CUSTOM_MODE_SAVE -----------------------------------------------------------------
function Save_Llama_Color (zEvent) {
  var llama_header_bgcolor = localStorage.getItem("llama_header_bgcolor")
  var llama_bars_bgcolor = localStorage.getItem("llama_bars_bgcolor")
  var llama_cams_bgcolor = localStorage.getItem("llama_cams_bgcolor")

  var llama_button_bgcolor = localStorage.getItem("llama_button_bgcolor")
  var llama_button_textcolor = localStorage.getItem("llama_button_textcolor")
  var llama_button_bordercolor = localStorage.getItem(
    "llama_button_bordercolor"
  )

  var llama_chat_bgcolor = localStorage.getItem("llama_chat_bgcolor")
  var llama_chat_bubble_bgcolor = localStorage.getItem(
    "llama_chat_bubble_bgcolor"
  )
  var llama_chat_bubble_bordercolor = localStorage.getItem(
    "llama_chat_bubble_bordercolor"
  )

  var llama_user_bgcolor = localStorage.getItem("llama_user_bgcolor")
  var llama_username_bgcolor = localStorage.getItem("llama_username_bgcolor")
  var llama_username_textcolor = localStorage.getItem(
    "llama_username_textcolor"
  )

  var llama_header_bgcolor_input_new = document.getElementById(
    "llama_header_bgcolor_selection"
  ).value
  var llama_bars_bgcolor_input_new = document.getElementById(
    "llama_bars_bgcolor_selection"
  ).value
  var llama_cams_bgcolor_input_new = document.getElementById(
    "llama_cams_bgcolor_selection"
  ).value

  var llama_button_bgcolor_input_new = document.getElementById(
    "llama_button_bgcolor_selection"
  ).value
  var llama_button_textcolor_input_new = document.getElementById(
    "llama_button_textcolor_selection"
  ).value
  var llama_button_bordercolor_input_new = document.getElementById(
    "llama_button_bordercolor_selection"
  ).value

  var llama_chat_bgcolor_input_new = document.getElementById(
    "llama_chat_bgcolor_selection"
  ).value
  var llama_chat_bubble_bgcolor_input_new = document.getElementById(
    "llama_chat_bubble_bgcolor_selection"
  ).value
  var llama_chat_bubble_bordercolor_input_new = document.getElementById(
    "llama_chat_bubble_bordercolor_selection"
  ).value

  var llama_user_bgcolor_input_new = document.getElementById(
    "llama_user_bgcolor_selection"
  ).value
  var llama_username_bgcolor_input_new = document.getElementById(
    "llama_username_bgcolor_selection"
  ).value
  var llama_username_textcolor_input_new = document.getElementById(
    "llama_username_textcolor_selection"
  ).value

  if (llama_header_bgcolor_input_new !== "") {
    document.documentElement.style.setProperty(
      "--custommodeheader-bgcolor",
      "#" + llama_header_bgcolor_input_new
    )
    document.documentElement.style.setProperty(
      "--custommodebars-bgcolor",
      "#" + llama_bars_bgcolor_input_new
    )
    document.documentElement.style.setProperty(
      "--custommodecams-bgcolor",
      "#" + llama_cams_bgcolor_input_new
    )

    document.documentElement.style.setProperty(
      "--custommodebutton-bgcolor",
      "#" + llama_button_bgcolor_input_new
    )
    document.documentElement.style.setProperty(
      "--custommodebutton-textcolor",
      "#" + llama_button_textcolor_input_new
    )
    document.documentElement.style.setProperty(
      "--custommodebutton-bordercolor",
      "#" + llama_button_bordercolor_input_new
    )

    document.documentElement.style.setProperty(
      "--custommodechat--bgcolor",
      "#" + llama_chat_bgcolor_input_new
    )
    document.documentElement.style.setProperty(
      "--custommodechat-bubble-bgcolor",
      "#" + llama_chat_bubble_bgcolor_input_new
    )
    document.documentElement.style.setProperty(
      "--custommodechat-bubble-bordercolor",
      "#" + llama_chat_bubble_bordercolor_input_new
    )

    document.documentElement.style.setProperty(
      "--custommodeuser-bgcolor",
      "#" + llama_user_bgcolor_input_new
    )
    document.documentElement.style.setProperty(
      "--custommodeusername-bgcolor",
      "#" + llama_username_bgcolor_input_new
    )
    document.documentElement.style.setProperty(
      "--custommodeusername-textcolor",
      "#" + llama_username_textcolor_input_new
    )

    localStorage.setItem("llama_header_bgcolor", llama_header_bgcolor_input_new)
    localStorage.setItem("llama_bars_bgcolor", llama_bars_bgcolor_input_new)
    localStorage.setItem("llama_cams_bgcolor", llama_cams_bgcolor_input_new)

    localStorage.setItem("llama_button_bgcolor", llama_button_bgcolor_input_new)
    localStorage.setItem(
      "llama_button_textcolor",
      llama_button_textcolor_input_new
    )
    localStorage.setItem(
      "llama_button_bordercolor",
      llama_button_bordercolor_input_new
    )

    localStorage.setItem("llama_chat_bgcolor", llama_chat_bgcolor_input_new)
    localStorage.setItem(
      "llama_chat_bubble_bgcolor",
      llama_chat_bubble_bgcolor_input_new
    )
    localStorage.setItem(
      "llama_chat_bubble_bordercolor",
      llama_chat_bubble_bordercolor_input_new
    )

    localStorage.setItem("llama_user_bgcolor", llama_user_bgcolor_input_new)
    localStorage.setItem(
      "llama_username_bgcolor",
      llama_username_bgcolor_input_new
    )
    localStorage.setItem(
      "llama_username_textcolor",
      llama_username_textcolor_input_new
    )
  } else {
    localStorage.setItem("llama_header_bgcolor", "")
    localStorage.setItem("llama_bars_bgcolor", "")
    localStorage.setItem("llama_cams_bgcolor", "")

    localStorage.setItem("llama_button_bgcolor", "")
    localStorage.setItem("llama_button_textcolor", "")
    localStorage.setItem("llama_button_bordercolor", "")

    localStorage.setItem("llama_chat_bgcolor", "")
    localStorage.setItem("llama_chat_bubble_bgcolor", "")
    localStorage.setItem("llama_chat_bubble_bordercolor", "")

    localStorage.setItem("llama_user_bgcolor", "")
    localStorage.setItem("llama_username_bgcolor", "")
    localStorage.setItem("llama_username_textcolor", "")
  }
}

// ----------------------------------------------------------------- CUSTOM_MODE_RESET -----------------------------------------------------------------

function Reset_Llama_Color (zEvent) {
  var llama_header_bgcolor = localStorage.getItem("llama_header_bgcolor")
  var llama_bars_bgcolor = localStorage.getItem("llama_bars_bgcolor")
  var llama_cams_bgcolor = localStorage.getItem("llama_cams_bgcolor")

  var llama_button_bgcolor = localStorage.getItem("llama_button_bgcolor")
  var llama_button_textcolor = localStorage.getItem("llama_button_textcolor")
  var llama_button_bordercolor = localStorage.getItem(
    "llama_button_bordercolor"
  )

  var llama_chat_bgcolor = localStorage.getItem("llama_chat_bgcolor")
  var llama_chat_bubble_bgcolor = localStorage.getItem(
    "llama_chat_bubble_bgcolor"
  )
  var llama_chat_bubble_bordercolor = localStorage.getItem(
    "llama_chat_bubble_bordercolor"
  )

  var llama_user_bgcolor = localStorage.getItem("llama_user_bgcolor")
  var llama_username_bgcolor = localStorage.getItem("llama_username_bgcolor")
  var llama_username_textcolor = localStorage.getItem(
    "llama_username_textcolor"
  )

  var llama_header_bgcolor_input = "22ADD5"
  var llama_bars_bgcolor_input = "C7CFD9"
  var llama_cams_bgcolor_input = "FFFFFF"

  var llama_button_bgcolor_input = "C7CFD9"
  var llama_button_textcolor_input = "FFFFFF"
  var llama_button_bordercolor_input = "000000"

  var llama_chat_bgcolor_input = "22ADD5"
  var llama_chat_bubble_bgcolor_input = "C7CFD9"
  var llama_chat_bubble_bordercolor_input = "FFFFFF"

  var llama_user_bgcolor_input = "22ADD5"
  var llama_username_bgcolor_input = "C7CFD9"
  var llama_username_textcolor_input = "FFFFFF"

  if (llama_header_bgcolor_input !== "") {
    document.documentElement.style.setProperty(
      "--custommodeheader-bgcolor",
      "#" + llama_header_bgcolor_input
    )
    document.documentElement.style.setProperty(
      "--custommodebars-bgcolor",
      "#" + llama_bars_bgcolor_input
    )
    document.documentElement.style.setProperty(
      "--custommodecams-bgcolor",
      "#" + llama_cams_bgcolor_input
    )

    document.documentElement.style.setProperty(
      "--custommodebutton-bgcolor",
      "#" + llama_button_bgcolor_input
    )
    document.documentElement.style.setProperty(
      "--custommodebutton-textcolor",
      "#" + llama_button_textcolor_input
    )
    document.documentElement.style.setProperty(
      "--custommodebutton-bordercolor",
      "#" + llama_button_bordercolor_input
    )

    document.documentElement.style.setProperty(
      "--custommodechat-bgcolor",
      "#" + llama_chat_bgcolor_input
    )
    document.documentElement.style.setProperty(
      "--custommodechat-bubble-bgcolor",
      "#" + llama_chat_bubble_bgcolor_input
    )
    document.documentElement.style.setProperty(
      "--custommodechat-bubble-bordercolor",
      "#" + llama_chat_bubble_bordercolor_input
    )

    document.documentElement.style.setProperty(
      "--custommodeuser-bgcolor",
      "#" + llama_user_bgcolor_input
    )
    document.documentElement.style.setProperty(
      "--custommodeusername-bgcolor",
      "#" + llama_username_bgcolor_input
    )
    document.documentElement.style.setProperty(
      "--custommodeusername-textcolor",
      "#" + llama_username_textcolor_input
    )

    localStorage.setItem("llama_header_bgcolor", llama_header_bgcolor_input)
    localStorage.setItem("llama_bars_bgcolor", llama_bars_bgcolor_input)
    localStorage.setItem("llama_cams_bgcolor", llama_cams_bgcolor_input)

    localStorage.setItem("llama_button_bgcolor", llama_button_bgcolor_input)
    localStorage.setItem("llama_button_textcolor", llama_button_textcolor_input)
    localStorage.setItem(
      "llama_button_bordercolor",
      llama_button_bordercolor_input
    )

    localStorage.setItem("llama_chat_bgcolor", llama_chat_bgcolor_input)
    localStorage.setItem(
      "llama_chat_bubble_bgcolor",
      llama_chat_bubble_bgcolor_input
    )
    localStorage.setItem(
      "llama_chat_bubble_bordercolor",
      llama_chat_bubble_bordercolor_input
    )

    localStorage.setItem("llama_user_bgcolor", llama_user_bgcolor_input)
    localStorage.setItem("llama_username_bgcolor", llama_username_bgcolor_input)
    localStorage.setItem(
      "llama_username_textcolor",
      llama_username_textcolor_input
    )

    document.getElementById(
      "llama_header_bgcolor_selection"
    ).value = llama_header_bgcolor_input
    document.getElementById(
      "llama_bars_bgcolor_selection"
    ).value = llama_bars_bgcolor_input
    document.getElementById(
      "llama_cams_bgcolor_selection"
    ).value = llama_cams_bgcolor_input

    document.getElementById(
      "llama_button_bgcolor_selection"
    ).value = llama_button_bgcolor_input
    document.getElementById(
      "llama_button_textcolor_selection"
    ).value = llama_button_textcolor_input
    document.getElementById(
      "llama_button_bordercolor_selection"
    ).value = llama_button_bordercolor_input

    document.getElementById(
      "llama_chat_bgcolor_selection"
    ).value = llama_chat_bgcolor_input
    document.getElementById(
      "llama_chat_bubble_bgcolor_selection"
    ).value = llama_chat_bubble_bgcolor_input
    document.getElementById(
      "llama_chat_bubble_bordercolor_selection"
    ).value = llama_chat_bubble_bordercolor_input

    document.getElementById(
      "llama_user_bgcolor_selection"
    ).value = llama_user_bgcolor_input
    document.getElementById(
      "llama_username_bgcolor_selection"
    ).value = llama_username_bgcolor_input
    document.getElementById(
      "llama_username_textcolor_selection"
    ).value = llama_username_textcolor_input
  } else {
    localStorage.setItem("llama_header_bgcolor", "")
    localStorage.setItem("llama_bars_bgcolor", "")
    localStorage.setItem("llama_cams_bgcolor", "")

    localStorage.setItem("llama_button_bgcolor", "")
    localStorage.setItem("llama_button_textcolor", "")
    localStorage.setItem("llama_button_bordercolor", "")

    localStorage.setItem("llama_chat_bgcolor", "")
    localStorage.setItem("llama_chat_bubble_bgcolor", "")
    localStorage.setItem("llama_chat_bubble_bordercolor", "")

    localStorage.setItem("llama_user_bgcolor", "")
    localStorage.setItem("llama_username_bgcolor", "")
    localStorage.setItem("llama_username_textcolor", "")
  }
}

// ----------------------------------------------------------------- CAM_BG_TOGGLE -----------------------------------------------------------------

function Toggle_User_BG (zEvent) {
  var userbg_status = localStorage.getItem("userbg")
  body.classList.toggle("user_bg")
  if (userbg_status !== "user_bg") {
    localStorage.setItem("userbg", "user_bg")
    document.getElementById("cam_bg_checkbox").checked = true
  } else {
    localStorage.setItem("userbg", "")
    document.getElementById("cam_bg_checkbox").checked = false
  }
}

// ----------------------------------------------------------------- SAVE_CAM_BG -----------------------------------------------------------------

var bg_status = localStorage.getItem("user_bg")
var userbg_status = localStorage.getItem("userbg")

var llama_bg = localStorage.getItem("llama_bg1")
var llama_bg_reloader = localStorage.getItem("llama_bg1_reload")

var llama_bg2 = localStorage.getItem("llama_bg2")
var llama_bg_reloader2 = localStorage.getItem("llama_bg2_reload")

var llama_bg3 = localStorage.getItem("llama_bg3")
var llama_bg_reloader3 = localStorage.getItem("llama_bg3_reload")

if (userbg_status) {
  body.classList.add(userbg_status)
}
if (llama_bg !== "") {
  document.documentElement.style.setProperty("--user-bg-image", llama_bg)
}

if (userbg_status) {
  body.classList.add(userbg_status)
}
if (llama_bg2 !== "") {
  document.documentElement.style.setProperty("--user-bg2-image", llama_bg2)
}

if (userbg_status) {
  body.classList.add(userbg_status)
}
if (llama_bg3 !== "") {
  document.documentElement.style.setProperty("--user-bg3-image", llama_bg3)
}

function Save_Llama_BG (zEvent) {
  var llama_bg1 = localStorage.getItem("llama_bg1")
  var llama_bg2 = localStorage.getItem("llama_bg2")
  var llama_bg3 = localStorage.getItem("llama_bg3")
  var llama_bginput1 = document.getElementById("bgSelection1").value
  var llama_bginput2 = document.getElementById("bgSelection2").value
  var llama_bginput3 = document.getElementById("bgSelection3").value

  if (llama_bginput1 !== "") {
    var llama_bginput1_url = "url(" + llama_bginput1 + ")"
    document.documentElement.style.setProperty(
      "--user-bg-image",
      llama_bginput1_url
    )
    localStorage.setItem("llama_bg1_reload", llama_bginput1)
    localStorage.setItem("llama_bg1", llama_bginput1_url)
  } else {
    document.documentElement.style.setProperty("--user-bg-image", "")
    localStorage.setItem("llama_bg1_reload", "")
    localStorage.setItem("llama_bg1", "")
  }

  if (llama_bginput2 !== "") {
    var llama_bginput2_url = "url(" + llama_bginput2 + ")"
    document.documentElement.style.setProperty(
      "--user-bg2-image",
      llama_bginput2_url
    )
    localStorage.setItem("llama_bg2_reload", llama_bginput2)
    localStorage.setItem("llama_bg2", llama_bginput2_url)
  } else {
    document.documentElement.style.setProperty("--user-bg2-image", "")
    localStorage.setItem("llama_bg2_reload", "")
    localStorage.setItem("llama_bg2", "")
  }

  if (llama_bginput3 !== "") {
    var llama_bginput3_url = "url(" + llama_bginput3 + ")"
    document.documentElement.style.setProperty(
      "--user-bg3-image",
      llama_bginput3_url
    )
    localStorage.setItem("llama_bg3_reload", llama_bginput3)
    localStorage.setItem("llama_bg3", llama_bginput3_url)
  } else {
    document.documentElement.style.setProperty("--user-bg3-image", "")
    localStorage.setItem("llama_bg3_reload", "")
    localStorage.setItem("llama_bg3", "")
  }
}

function Clear_Cam_BG (zEvent) {
  document.getElementById("bgSelection1").value = ""
  document.documentElement.style.setProperty("--user-bg-image", "")
  localStorage.setItem("llama_bg1_reload", "")
  localStorage.setItem("llama_bg1", "")
}

function Clear_Chat_BG (zEvent) {
  document.getElementById("bgSelection2").value = ""
  document.documentElement.style.setProperty("--user-bg2-image", "")
  localStorage.setItem("llama_bg2_reload", "")
  localStorage.setItem("llama_bg2", "")
}

function Clear_Userlist_BG (zEvent) {
  document.getElementById("bgSelection3").value = ""
  document.documentElement.style.setProperty("--user-bg3-image", "")
  localStorage.setItem("llama_bg3_reload", "")
  localStorage.setItem("llama_bg3", "")
}

// ----------------------------------------------------------------- BUBBLE_CHAT_TOGGLE -----------------------------------------------------------------

var bubble_status = localStorage.getItem("bubble_status")
if (bubble_status) {
  body.classList.add(bubble_status)
}

function Toggle_Bubble_Chat (zEvent) {
  var bubble_status = localStorage.getItem("bubble_status")
  body.classList.toggle("bubble_chat")
  if (bubble_status !== "bubble_chat") {
    localStorage.setItem("bubble_status", "bubble_chat")
    document.getElementById("bubble_chat_checkbox").checked = true
  } else {
    localStorage.setItem("bubble_status", "")
    document.getElementById("bubble_chat_checkbox").checked = false
  }
}
// ----------------------------------------------------------------- CHAT_TOGGLE -----------------------------------------------------------------

var chat_Status = localStorage.getItem("chat")
if (chat_Status) {
  body.classList.add(chat_Status)
}

function Toggle_Chat (cEvent) {
  var chat_Status = localStorage.getItem("chat")
  body.classList.toggle("hide_chat")
  if (chat_Status !== "hide_chat") {
    localStorage.setItem("chat", "hide_chat")
    document.getElementById("hide_chat_checkbox").checked = true
  } else {
    localStorage.setItem("chat", "")
    document.getElementById("hide_chat_checkbox").checked = false
  }
}

// ----------------------------------------------------------------- USER_LIST_TOGGLE -----------------------------------------------------------------

var userlist_Status = localStorage.getItem("user_status")
if (userlist_Status) {
  body.classList.add(userlist_Status)
}

function Toggle_UserList (cEvent) {
  var userlist_Status = localStorage.getItem("user_status")
  body.classList.toggle("hide_userlist")
  if (userlist_Status !== "hide_userlist") {
    localStorage.setItem("user_status", "hide_userlist")
    document.getElementById("hide_userlist_checkbox").checked = true
  } else {
    localStorage.setItem("user_status", "")
    document.getElementById("hide_userlist_checkbox").checked = false
  }
}

// ----------------------------------------------------------------- LTR_TOGGLE -----------------------------------------------------------------

var ltr_Status = localStorage.getItem("ltr")
if (ltr_Status) {
  body.classList.add(ltr_Status)
}

function Toggle_LTR (cEvent) {
  var ltr_Status = localStorage.getItem("ltr")
  body.classList.toggle("ltr_layout")
  if (ltr_Status !== "ltr_layout") {
    localStorage.setItem("ltr", "ltr_layout")
    document.getElementById("ltr_llama_checkbox").checked = true
  } else {
    localStorage.setItem("ltr", "")
    document.getElementById("ltr_llama_checkbox").checked = false
  }
}

// ----------------------------------------------------------------- REMOVE_CAM_BORDERS -----------------------------------------------------------------

function Toggle_No_Border (zEvent) {
  var yt_status = localStorage.getItem("no_border")
  body.classList.toggle("no_border")

  if (yt_status !== "no_border") {
    localStorage.setItem("no_border", "no_border")
    document.getElementById("cam_border_checkbox").checked = true
  }
  if (yt_status === "no_border") {
    localStorage.setItem("no_border", "")
    document.getElementById("cam_border_checkbox").checked = false
  }
}

// ----------------------------------------------------------------- REMOVE_CAM_PADDING -----------------------------------------------------------------

function Toggle_No_Padding (zEvent) {
  var pad_status = localStorage.getItem("no_padding")
  body.classList.toggle("no_padding")
  if (pad_status !== "no_padding") {
    localStorage.setItem("no_padding", "no_padding")
    document.getElementById("cam_spacing_checkbox").checked = true
  }
  if (pad_status === "no_padding") {
    localStorage.setItem("no_padding", "")
    document.getElementById("cam_spacing_checkbox").checked = false
  }
}

// ----------------------------------------------------------------- TOGGLE_MINI_YT -----------------------------------------------------------------

var yt_status = localStorage.getItem("yt")
if (yt_status) {
  body.classList.add(yt_status)
}

function Toggle_MiniYT (zEvent) {
  var yt_status = localStorage.getItem("yt")
  body.classList.toggle("mini_yt")
  if (yt_status !== "mini_yt") {
    localStorage.setItem("yt", "mini_yt")
  }
  if (yt_status === "mini_yt") {
    localStorage.setItem("yt", "")
  }
}

// ----------------------------------------------------------------- THEME_TOGGLE -----------------------------------------------------------------
function Toggle_DefaultTheme (color) {
  var theme_status = localStorage.getItem("thememode")
  body.classList.remove("custommode")
  body.classList.remove("thememode")
  localStorage.setItem("thememode", "")
  document.documentElement.style.setProperty("--thememode-bgcolor", "")
  document.documentElement.style.setProperty("--thememode-bordercolor", "")
  document.documentElement.style.setProperty("--thememode-lightbgcolor", "")
  document.documentElement.style.setProperty("--thememode-textcolor", "")
  document.documentElement.style.setProperty("--thememode-buttontext", "")

  document.documentElement.style.setProperty("--thememode-roombg", "")
  document.documentElement.style.setProperty("--thememode-userbg", "")
  document.documentElement.style.setProperty("--thememode-chatheaderbg", "")
  document.documentElement.style.setProperty("--thememode-chatbg", "")
  document.documentElement.style.setProperty("--thememode-messagebg", "")
}

function Toggle_Theme (color) {
  var thememode_variable = "thememode"
  var thememode_status = localStorage.getItem(thememode_variable)
  body.classList.add("thememode")
  body.classList.remove("custommode")
  if (thememode_status !== color) {
    localStorage.setItem(thememode_variable, color)
  }
  var llama_theme_bgcolor
  var llama_theme_bordercolor
  var llama_theme_lightbgcolor
  var llama_theme_textcolor
  var llama_theme_buttontext
  var llama_theme_cambg = ""
  var llama_theme_userbg = ""
  var llama_theme_chatheaderbg = ""
  var llama_theme_chatbg = ""
  var llama_theme_messagebg = ""

  if (color === "pink") {
    llama_theme_bgcolor = "#ffd1dc"
    llama_theme_bordercolor = "#ea98ab"
    llama_theme_lightbgcolor = "#ffe1e6"
    llama_theme_textcolor = "#FFFFFF"
    llama_theme_buttontext = "#ffd1dc"
  } else if (color === "green") {
    llama_theme_bgcolor = "#042500"
    llama_theme_bordercolor = "#217c16"
    llama_theme_lightbgcolor = "#00500d"
    llama_theme_textcolor = "#FFFFFF"
    llama_theme_buttontext = "#042500"
  } else if (color === "blue") {
    llama_theme_bgcolor = "#111949"
    llama_theme_bordercolor = "#596ce0"
    llama_theme_lightbgcolor = "#2a388b"
    llama_theme_textcolor = "#FFFFFF"
    llama_theme_buttontext = "#111949"
  } else if (color === "mauve") {
    llama_theme_bgcolor = "#9168b2"
    llama_theme_bordercolor = "#d6b7ef"
    llama_theme_lightbgcolor = "#BF8FE5"
    llama_theme_textcolor = "#000000"
    llama_theme_buttontext = "#9168b2"
  } else if (color === "orange") {
    llama_theme_bgcolor = "#b33700"
    llama_theme_bordercolor = "#ff8d10"
    llama_theme_lightbgcolor = "#ff4f00"
    llama_theme_textcolor = "#000000"
    llama_theme_buttontext = "#b33700"
  } else if (color === "red") {
    llama_theme_bgcolor = "#590000"
    llama_theme_bordercolor = "#d02323"
    llama_theme_lightbgcolor = "#860000"
    llama_theme_textcolor = "#FFFFFF"
    llama_theme_buttontext = "#590000"
  } else if (color === "purple") {
    llama_theme_bgcolor = "#280048"
    llama_theme_bordercolor = "#b14fff"
    llama_theme_lightbgcolor = "#550098"
    llama_theme_textcolor = "#FFFFFF"
    llama_theme_buttontext = "#280048"
  } else if (color === "black") {
    llama_theme_bgcolor = "#2C2F33"
    llama_theme_bordercolor = "#23272a"
    llama_theme_lightbgcolor = "#191919"
    llama_theme_textcolor = "#FFFFFF"
    llama_theme_buttontext = "#7289da"
  } else if (color === "buds") {
    llama_theme_bgcolor = "#042500"
    llama_theme_bordercolor = "#217c16"
    llama_theme_lightbgcolor = "#00500d"
    llama_theme_textcolor = "#FFFFFF"
    llama_theme_buttontext = "#042500"
    llama_theme_cambg
      = "url(https://kpfa.org/wp-content/uploads/2015/10/weed-wallpaper-65.jpg)"
  } else if (color === "splat") {
    llama_theme_bgcolor = "transparent"
    llama_theme_bordercolor = "#51bc02"
    llama_theme_lightbgcolor = "#282828"
    llama_theme_textcolor = "#FFFFFF"
    llama_theme_buttontext = "#FFFFFF"
    llama_theme_cambg = "url(https://i.ibb.co/C18JNgK/splatbg.jpg)"
    llama_theme_userbg = "url(https://i.ibb.co/7nrB9LT/test.png)"
    llama_theme_chatheaderbg
      = "url(https://i.ibb.co/XsTjVk0/splay-bg-header2.png)"
    llama_theme_chatbg = "url(https://i.ibb.co/TrKBZFn/splat-chat-bg3.png)"
    llama_theme_messagebg = "url(https://i.ibb.co/FWFnhc4/messagebg.png)"
  }
  document.documentElement.style.setProperty(
    "--thememode-bgcolor",
    llama_theme_bgcolor
  )
  document.documentElement.style.setProperty(
    "--thememode-bordercolor",
    llama_theme_bordercolor
  )
  document.documentElement.style.setProperty(
    "--thememode-lightbgcolor",
    llama_theme_lightbgcolor
  )
  document.documentElement.style.setProperty(
    "--thememode-textcolor",
    llama_theme_textcolor
  )
  document.documentElement.style.setProperty(
    "--thememode-buttontext",
    llama_theme_buttontext
  )

  document.documentElement.style.setProperty(
    "--thememode-roombg",
    llama_theme_cambg
  )
  document.documentElement.style.setProperty(
    "--thememode-userbg",
    llama_theme_userbg
  )
  document.documentElement.style.setProperty(
    "--thememode-chatheaderbg",
    llama_theme_chatheaderbg
  )
  document.documentElement.style.setProperty(
    "--thememode-chatbg",
    llama_theme_chatbg
  )
  document.documentElement.style.setProperty(
    "--thememode-messagebg",
    llama_theme_messagebg
  )
}
