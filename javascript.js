var body = document.body

// ------------ LLAMA_NOTICE_CREATOR ----------------*/
var LlamaMain = document.createElement("div")

LlamaMain.innerHTML = `
<style>
body.llama_window {overflow:hidden;}
</style>
<div id="mydiv" style="display:none;">
<div id="mydivheader">

<div id="game_head" class="game_head">
<div id ="window_title" class="window_title" style="display: inline-block; margin-right: 150px;">Llama Window</div>

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
<iframe src="" class="scrollingContainer" id="game_list"  name="" style="border:0px;width: 105%;overflow-x: hidden;height: 95%;" scrolling="yes" allow="autoplay; microphone; camera"></iframe>
</div>
</div>
</div>
<style>
#HW_JL_frame {
    background: #fff;
    border: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    z-index: 2147483647;
    transition: height 0.3s ease-out;}
</style>
<div id="New_Llama_Notice" onclick="Toggle_Llama_Box('notice','')">
<label style="cursor:pointer;">
<div class="theme_alert_notice">

<iframe id="HW_JL_frame" src="https://headway-widget.net/widgets/7XkGbx" sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups allow-forms allow-popups-to-escape-sandbox" tabindex="0" aria-hidden="false" style="height:330px;width:345px;"></iframe>
<br><div style="background: white;border-radius: 100px;"><center><small>Script Last Updated: 12/28/19</small><br><a href="https://www.smokeyllama.com/" style="color:gray;text-decoration:none;">Smokeyllama.com</a></center></div>
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

function Toggle_Llama_Chat_Options () {
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
<img src="https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@9ada4fbd26a289f24d0416136e05ae449c748437/images/llamaicon.png" width="20px">
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
    .addEventListener("click", function () {
      Clear_User_BG("1")
    }, false)
  document
    .getElementById("Clear_Chat_BG")
    .addEventListener("click", function () {
      Clear_User_BG("2")
    }, false)
  document
    .getElementById("Clear_Userlist_BG")
    .addEventListener("click", function () {
      Clear_User_BG("3")
    }, false)

  document
    .getElementById("Save_Llama_BG")
    .addEventListener("click", Save_Llama_BG, false)

  document
    .getElementById("cam_bg_cover")
    .addEventListener("click", function () {
      User_BG_Settings("cam", "cover")
    }, false)
  document
    .getElementById("cam_bg_repeat")
    .addEventListener("click", function () {
      User_BG_Settings("cam", "repeat")
    }, false)
  document
    .getElementById("cam_bg_center")
    .addEventListener("click", function () {
      User_BG_Settings("cam", "center")
    }, false)

  document
    .getElementById("chat_bg_cover")
    .addEventListener("click", function () {
      User_BG_Settings("chat", "cover")
    }, false)
  document
    .getElementById("chat_bg_repeat")
    .addEventListener("click", function () {
      User_BG_Settings("chat", "repeat")
    }, false)
  document
    .getElementById("chat_bg_center")
    .addEventListener("click", function () {
      User_BG_Settings("chat", "center")
    }, false)

  document
    .getElementById("userlist_bg_cover")
    .addEventListener("click", function () {
      User_BG_Settings("userlist", "cover")
    }, false)
  document
    .getElementById("userlist_bg_repeat")
    .addEventListener("click", function () {
      User_BG_Settings("userlist", "repeat")
    }, false)
  document
    .getElementById("userlist_bg_center")
    .addEventListener("click", function () {
      User_BG_Settings("userlist", "center")
    }, false)
  // LOADING VARIABLES IN GROUPS
  document.addEventListener(
    "input",
    function (event) {
      // Only run for #theme_wizard select
      if (event.target.id !== "theme_wizard") {
        return
      }
      if (event.target.value === "Default Theme") {
        Toggle_Theme("default")
      } else if (event.target.value === "PINK") {
        Toggle_Theme("pink")
      } else if (event.target.value === "GREEN") {
        Toggle_Theme("green")
      } else if (event.target.value === "BLUE") {
        Toggle_Theme("blue")
      } else if (event.target.value === "MAUVE") {
        Toggle_Theme("mauve")
      } else if (event.target.value === "ORANGE") {
        Toggle_Theme("orange")
      } else if (event.target.value === "RED") {
        Toggle_Theme("red")
      } else if (event.target.value === "PURPLE") {
        Toggle_Theme("purple")
      } else if (event.target.value === "BLACK") {
        Toggle_Theme("black")
      } else if (event.target.value === "BUDS") {
        Toggle_Theme("buds")
      } else if (event.target.value === "SPLAT") {
        Toggle_Theme("splat")
      } else if (event.target.value === "CUSTOM") {
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
  var llamabgs = ["1", "2", "3"]
  llamabgs.forEach(function (llamabg) {
    var llama_bg = localStorage.getItem("llama_bg" + llamabg)
    var llama_bg_reloader = localStorage.getItem("llama_bg" + llamabg + "_reload")
    if (llama_bg !== "") {
      document.getElementById("bgSelection" + llamabg).value = llama_bg_reloader
    }
    if (llama_bg) {
      document.documentElement.style.setProperty("--user-bg" + llamabg + "-image", llama_bg)
    }
  })

  var userbg_status = localStorage.getItem("userbg")
  var theme_status = localStorage.getItem("thememode")

  if (userbg_status === "user_bg") {
    document.getElementById("cam_bg_checkbox").checked = true
  }

  // ------- SET DROPDOWN CHOICE -------
  if (theme_status) {
    document.getElementById("theme_wizard").selectedIndex = 0
  }
  if (theme_status === "") {
    document.getElementById("theme_wizard").selectedIndex = 1
  } else if (theme_status === "pink") {
    document.getElementById("theme_wizard").selectedIndex = 2
  } else if (theme_status === "green") {
    document.getElementById("theme_wizard").selectedIndex = 3
  } else if (theme_status === "blue") {
    document.getElementById("theme_wizard").selectedIndex = 4
  } else if (theme_status === "mauve") {
    document.getElementById("theme_wizard").selectedIndex = 5
  } else if (theme_status === "orange") {
    document.getElementById("theme_wizard").selectedIndex = 6
  } else if (theme_status === "red") {
    document.getElementById("theme_wizard").selectedIndex = 7
  } else if (theme_status === "purple") {
    document.getElementById("theme_wizard").selectedIndex = 8
  } else if (theme_status === "black") {
    document.getElementById("theme_wizard").selectedIndex = 9
  } else if (theme_status === "buds") {
    document.getElementById("theme_wizard").selectedIndex = 10
  } else if (theme_status === "splat") {
    document.getElementById("theme_wizard").selectedIndex = 11
  } else if (theme_status === "custommode") {
    document.getElementById("theme_wizard").selectedIndex = 12
  }

  // ----------------------------------------------------------------- Userlist_BG_Settings -----------------------------------------------------------------

  var bgsets = ["cam", "chat", "userlist"]
  bgsets.forEach(function (bgset) {
    var bgsubs = ["cover", "repeat", "center"]
    bgsubs.forEach(function (bgsub) {
      var bg_setting = localStorage.getItem(bgset + "_bg_" + bgsub)
      if (bg_setting) {
        body.classList.add(bgset + "_bg_" + bgsub)
        document.getElementById(bgset + "_bg_" + bgsub).checked = true
      }
    })
  })

  function User_BG_Settings (type, subtype) {
    var bg_new = type + "_" + subtype + "_on"
    var bg_get = type + "_bg_" + subtype
    var bg_current = localStorage.getItem(bg_get)
    body.classList.toggle(bg_new)
    if (bg_current !== bg_new) {
      localStorage.setItem(bg_get, bg_new)
      document.getElementById(bg_get).checked = true
    } else {
      localStorage.setItem(bg_get, "")
      document.getElementById(bg_get).checked = false
    }
  }

  // ----------------------------------------------------------------- Make the DIV element draggable:
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

  function Toggle_Word_1_Action () {
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
      Toggle_Llama_Box("tube", "home")
      document.getElementById("llama_web").setAttribute("style", "display:inline-block; ")
      document.getElementById("web__llamaOption").setAttribute("style", "display:none; ")
      document.getElementById("mydiv").setAttribute("style", "display:inline-block; ")
    } else if (zEvent === "hideweb") {
      body.classList.remove("llama_window")
      document.getElementById("web__llamaOption").setAttribute("style", "display:inline-flex; ")
      document.getElementById("llama_web").setAttribute("style", "display:none; ")
      document.getElementById("mydiv").setAttribute("style", "display:none; ")
      iframe.src = ""
    } else if (zEvent === "ytbackup") {
      var tc = "https://tinychat.com/room/"
      iframe.src = tc + params
    } else if (zEvent === "home") {
      var home = "https://smokeyllama.com/game_time/main/game/web_window.php"
      iframe.src = home
    }

    if (zEvent === "max") {
      document.getElementById("window_title").setAttribute("style", "margin-right: 150px;display:inline-block;")
      document.getElementById("iframe_box").style.display = ""
      document.getElementById("Max_Game").style.display = "none"
      document.getElementById("mydiv").style.height = "605px"
      document.getElementById("Res_Game").style.display = "inline"
    } else if (zEvent === "min") {
      document.getElementById("window_title").style.display = "none"
      document.getElementById("iframe_box").style.display = "none"
      document.getElementById("mydiv").style.width = "221px"
      document.getElementById("Max_Game").style.display = "none"
      document.getElementById("Mini_Game").style.display = "none"
      document.getElementById("Res_Game").style.display = "inline"
      document
        .getElementById("mydiv")
        .setAttribute("style", "left:0px; top:92.4%; height:29px; border-bottom-right-radius: 0px;border-bottom-left-radius: 0px; -webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none;")
    } else if (zEvent === "res") {
      document.getElementById("window_title").setAttribute("style", "margin-right: 150px;display:inline-block;")
      document.getElementById("iframe_box").style.display = ""
      document.getElementById("mydiv").setAttribute("style", "left:20px; top:10%;")
      document.getElementById("mydiv").style.height = ""
      document.getElementById("Max_Game").style.display = "inline"
      document.getElementById("Mini_Game").style.display = "inline"
      document.getElementById("Res_Game").style.display = "none"
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

function Toggle_Robo_Llama () {
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

function Toggle_Word_1 () {
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

function Toggle_Theme_Custom () {
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


// ----------------------------------------------------------------- CUSTOM_MODE_PREVIEW -----------------------------------------------------------------

function Preview_Llama_Color () {
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
function Save_Llama_Color () {
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

function Reset_Llama_Color () {
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

function Toggle_User_BG () {
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
var userbg_status = localStorage.getItem("userbg")

if (userbg_status) {
  body.classList.add(userbg_status)
}

var custombgs = ["1", "2", "3"]
custombgs.forEach(function (custombg) {
  var loadbg = localStorage.getItem("llama_bg" + custombg)
  if (loadbg !== "") {
    document.documentElement.style.setProperty("--user-bg" + custombg + "-image", loadbg)
  }
})

function Save_Llama_BG () {
  var bgs = ["1", "2", "3"]

  bgs.forEach(function (bg) {
    var save_bgelement = "bgSelection" + bg
    var save_bgvar = "--user-bg" + bg + "-image"
    var save_bgreload = "llama_bg" + bg + "_reload"
    var save_bg = "llama_bg" + bg
    var llama_bginput = document.getElementById(save_bgelement).value

    if (llama_bginput !== "") {
      var llama_bginput_url = "url(" + llama_bginput + ")"
      document.documentElement.style.setProperty(save_bgvar, llama_bginput_url)
      localStorage.setItem(save_bgreload, llama_bginput)
      localStorage.setItem(save_bg, llama_bginput_url)
    } else {
      document.documentElement.style.setProperty(save_bgvar, "")
      localStorage.setItem(save_bgreload, "")
      localStorage.setItem(save_bg, "")
    }
  })
}

function Clear_User_BG (type) {
  var bgelement = "bgSelection" + type
  var bgvar = "--user-bg" + type + "-image"
  var bgreload = "llama_bg" + type + "_reload"
  var bg = "llama_bg" + type

  document.getElementById(bgelement).value = ""
  document.documentElement.style.setProperty(bgvar, "")
  localStorage.setItem(bgreload, "")
  localStorage.setItem(bg, "")
}
// ----------------------------------------------------------------- BUBBLE_CHAT_TOGGLE -----------------------------------------------------------------

var bubble_status = localStorage.getItem("bubble_status")
if (bubble_status) {
  body.classList.add(bubble_status)
}

function Toggle_Bubble_Chat () {
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

function Toggle_Chat () {
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

function Toggle_UserList () {
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

function Toggle_LTR () {
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

function Toggle_No_Border () {
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

function Toggle_No_Padding () {
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

function Toggle_MiniYT () {
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
  if (color === "default") {
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
  } else if (color === "pink") {
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
      = "url(https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@6a40bce97c841029ee442a8a297e2b2c976a8bd1/images/bud/mainbg.jpg)"
  } else if (color === "splat") {
    llama_theme_bgcolor = "transparent"
    llama_theme_bordercolor = "#51bc02"
    llama_theme_lightbgcolor = "#282828"
    llama_theme_textcolor = "#FFFFFF"
    llama_theme_buttontext = "#FFFFFF"
    llama_theme_cambg = "url(https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@6157c7e0ae1a3a3149ac7629a50cd55fada590eb/images/splatoon/mainbg.jpg)"
    llama_theme_userbg = "url(https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@6157c7e0ae1a3a3149ac7629a50cd55fada590eb/images/splatoon/userbg.png)"
    llama_theme_chatheaderbg
      = "url(https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@6157c7e0ae1a3a3149ac7629a50cd55fada590eb/images/splatoon/headerbg.png)"
    llama_theme_chatbg = "url(https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@6157c7e0ae1a3a3149ac7629a50cd55fada590eb/images/splatoon/chatbg.png)"
    llama_theme_messagebg = "url(https://cdn.jsdelivr.net/gh/SmokeyLlama/JumpinLlama@6157c7e0ae1a3a3149ac7629a50cd55fada590eb/images/splatoon/messagebg.png)"
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
