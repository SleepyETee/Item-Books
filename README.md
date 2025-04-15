# Item Books Catalog

## Overview
Item Books is a dynamic catalog website for in-game items from my AR Dungeon Scavenger Tower Defense project. The catalog presents a rich dataset that includes attributes such as id, name, category, description, value, rarity, rating, element, and bonus effect.

## Features
- **Filtering:** View items by category (shard, tower, enemy, tool, potion, scroll).
- **Searching:** Case-insensitive search by item name.
- **Sorting:** Alphabetically sort items.
- **Value Range Filtering:** Display items within a specified value range.
- **Shuffling:** Randomize the order of items.
- **Resetting:** Restore the catalog to its default dataset.
- **Grouping Toggle:** Switch between standard and grouped view (by category).
- **CRUD Operations:** Add, edit, and delete items interactively.

## Data Structure
Data is stored as an array of objects in `scripts.js`, with each object representing an item with multiple attributes:
- `id`, `name`, `category`, `description`, `value`
- `rarity`, `rating`, `element`, and `bonusEffect`

## How to Run
Simply open `index.html` in a modern browser. Use the controls to interact with and modify the catalog.

## Deployment
This project is published on GitHub Pages: [YOUR_GITHUB_PAGES_URL]

## Reflection
I built Item Books to showcase dynamic data operations on an imaginative dataset inspired by my game project. The operations include filtering, searching, sorting, grouping, shuffling, and CRUD functionality. This project challenged me to combine multiple array methods and event handling techniques while ensuring a polished UI. If given more time, I would integrate persistence using localStorage and add more sophisticated UI animations.

## Tools Used
- Visual Studio Code
- GitHub & GitHub Pages
- MDN Web Docs and various JavaScript tutorials

## Direct Link to JavaScript Code
[https://github.com/yourusername/item-books-catalog/blob/main/scripts.js](https://github.com/yourusername/item-books-catalog/blob/main/scripts.js)
