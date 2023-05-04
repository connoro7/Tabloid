
##

# Tabloid

> Codesmith CTRI 16 Hackathon
> Connor Dillon and David Chuang


## Project Requirements:

HTML:
- build html for popup

CSS:
- styling
- size of note
- resizing --> FIX SIZE
- scrolling on content overflow

JS:
- handle note storage (localstorage?)
  - handle multiple tabs with the same URL
- handle tab close logic
- handle note saving
  --> event listen on text area update, save on event dispatch

Stretch Goals:
- Lock Note --> readonly = true
- Markdown support

## Getting Started

- Fork this repo
- Install packages `npm install`
- Run the bundler, `npm run bundle`
- Load unpacked app into Chrome
- Open Tabloid in the extension toolbar
- Tabloid pages are saved according to the tab URL
    - Accidentally close the tab? No problem! Your notes will be there when you come back.
    - Data persistence across multiple tabs with the same URL, and across multiple browsers.

## Built With
- localStorage API - Notes are stored locally to your browser, and persist across browser windows.

## Authors
- **Connor Dillon** - _Developer_ - [connoro7](https://github.com/connoro7)
- See also the list of [contributors](REPO-BASE-URL/contributors) who participated in this project.

## License
- This project is licensed under the MIT License.

