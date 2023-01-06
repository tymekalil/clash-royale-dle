"use strict";

import data from "./cards-troops.js";

const answersEl = document.querySelector(".answer");

const cards = data.cards;
const card = cards[0];

const cardKeys = Object.keys(card);
const cardSize = cardKeys.length;

for (let i = 1; i < cardSize - 5; i++) {
  const tile = document.createElement("div");
  tile.className = "card-tile";
  tile.innerHTML = card[cardKeys[i]];
  answersEl.appendChild(tile);
}
