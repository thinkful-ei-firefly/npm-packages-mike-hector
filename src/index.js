import $ from 'jQuery';
import './index.css';
import api from './api.js';
import store from './store.js';
import shoppingList from './shopping-list.js';
/* global */

$(document).ready(function() {
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message));
});