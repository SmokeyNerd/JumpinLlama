// ==UserScript==
// @name         JumpinLlama : 2020 Theme
// @namespace    https://www.smokeyllama.com
// @version      2020.10
// @description  Editing Overall Theme of JumpIn. Install and refresh.
// @author       SmokeyLlama
// @match        https://jumpin.chat/*
// @exclude      https://jumpin.chat/smokeyllama
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @run-at       document-end
// @license      MIT
// @updateURL    https://github.com/SmokeyLlama/jumpinllama/raw/master/jumpin_theme.user.js
// @downloadURL  https://github.com/SmokeyLlama/jumpinllama/raw/master/jumpin_theme.user.js
// ==/UserScript==

/** Table of Nonsense:
 * ------------------------------------------------------------------------
 * Files now load through .css and .js
 * ------------------------------------------------------------------------
 */

var llama_ver = "22"
var file_style = "https://smokeyllama.github.io/JumpinLlama/style.css?ver" + llama_ver
var file_java = "https://smokeyllama.github.io/JumpinLlama/javascript.js?ver" + llama_ver

var llama_style = document.createElement("link")
var llama_java = document.createElement("script")

llama_style.setAttribute("rel", "stylesheet")
llama_style.setAttribute("type", "text/css")
llama_style.setAttribute("href", file_style)
llama_java.setAttribute("src", file_java)

document.getElementsByTagName("head")[0].appendChild(llama_style)
document.body.appendChild(llama_java)
