document.addEventListener('DOMContentLoaded', () => {
  const noteChange = document.querySelector("#note");
  const saveNote = document.querySelector("#save");

  // Get the current tab's URL
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const url = tabs[0].url;

  // Check if there's a note saved for this URL
  const note = localStorage.getItem(url);

  // If a note was found, display it in the text area
  if (note) {
    const noteChange = document.querySelector("#note");
    noteChange.value = note;
  }
});

  saveNote.addEventListener('click', () => {
    const text = noteChange.value;

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      // Get the URL of the current tab
      const url = tabs[0].url;
      localStorage.setItem(url, text);
    });
  })

  
  //   // Do something with the URL
  //  console.log(url);
  //  const urlName = storeURL(url);

  //  let note = localStorage[key]
  //  if(note == null) {
  //    note = "";
  //    console.log('im null');
  //  }
  //  noteChange.value = note;
  //  saveNote.onclick = () => {
  //    //localStorage.setItem( note, noteChange )
  //    console.log('here');
  //    localStorage[url] = noteChange.value;
  //  }
 

  function storeURL(url){
    const key = url.String();
    
  }
  //console.log(key);
  //const key = window.location.toString()
  //localStorage.removeItem(note);
  //let noteContetnt = localStorage.getItem(note);

  // //saveNote.addEventListener("click", function(){
  //   console.log('heelo');

  // })
  

  chrome.storage.local.set({
  'key1': 'value',    
    'key2': 'value',
    'key3': 'value',
    'key3': 'value',
    'key4': 'value',
    'key5': 'value',
  'key6': 'value'
  });
  chrome.storage.local.set({ key: value }).then(() => {
  console.log("Value is set to " + value);
chrome.storage.local.get(["key"]).then((result) => {
  console.log("Value currently is " + result.key);
});

  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript
    console.log('clicked')
  });
  // get textarea div
  //add eventlistener to textareaelement
  //function should set item to local storage
  // let cache = {};
  // const saveNote = document.querySelector('note')
  // note.addEventListener("onchange", function (event) {
  //   console.log('note change event dispatched')
  //   cache = event.target.checked;
    

    
    //console.log(key);
    const value = 'textarea\ncontent'

    
});



});

//attach action.onClicked to extension button so that when clicked, it asynchronously preloads localStorage

/*
// ! Asynchronous preload from storage
 // Where we will expose all the data we retrieve from storage.sync.
const storageCache = { count: 0 };
// Asynchronously retrieve data from storage.sync, then cache it.
const initStorageCache = chrome.storage.sync.get().then((items) => {
  // Copy the data retrieved from storage into storageCache.
  Object.assign(storageCache, items);
});

chrome.action.onClicked.addListener(async (tab) => {
  try {
    await initStorageCache;
  } catch (e) {
    // Handle error that occurred during storage initialization.
  }

  // Normal action handler logic.
  storageCache.count++;
  storageCache.lastTabId = tab.id;
  chrome.storage.sync.set(storageCache);
});
*/