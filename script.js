"use strict";

fetch("https://github.com/tdera06/clash-royale-dle/blob/main/cards.json")
  .then((response) => response.json())
  .then((json) => console.log(json));
