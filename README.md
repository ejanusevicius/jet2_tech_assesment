# Jet2 technical assesment

This repository contains the technical assesment given to Edvinas Janusevicius by Jet2.

## Getting Started

Download this repository to your machine and start "index.html" if it's ran on a live server, or "index_regular_open.html" if the file is ran through basic file browser.

### Project breakdown

Below given are the requirements for the test and how each requirement has been tackled:

1) Mobile-first => Customised Bootstrap Grid and Media Queries have been used to make this fully responsive, according to the requirement.
2) A clear naming convention => BEM (Block Element Modifier) convention has been used here where "page" is the block.
3) CSS preprocessor => Sass was used compiled and used in this test, compiling was done with Koala (Sass files are found scss folder, while compiled css and source maps are in css folder).
4) JS to fire to modal => Since no framework has been chosen the task has been completed using Vanilla JavaScript ES6+, which was compiled into ES5 using Babel to enable better browser-compatibility.
5) Must work on Chrome, Safari, IE9 => Babel was used to compile ES6+ into ES5, also alteratives have been found for methods that are not supported by browsers (mainly IE).

BONUS TASKS:

1) Ability to have more than one modal => There are two buttons that generate two different modals (behind the scenes a different content argument is passed into the same "openModal" function, thus reducing logic but allowing more than one modal.
2) BEM => BEM has been used as a naming convention.
3) ES6 => Purely ES6+ syntax has been used. Original ES6+ files are held in "index_precompiled_es6.js" file, while "index.js" holds compiled ES5 version.



## Authors

* **Edvinas Janusevicius**

