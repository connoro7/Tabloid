document.addEventListener('DOMContentLoaded', () => {


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
    console.log('clicked')
  });
  // get textarea div
  //add eventlistener to textareaelement
  //function should set item to local storage
  let cache = {};
  const note = document.querySelector('#note')
  note.addEventListener("change", function (event) {
    console.log('note change event dispatched')
    cache = event.target.checked;
    

    const key = window.location.toString()
    //console.log(key);
    const value = 'textarea\ncontent'

    
});



  })
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