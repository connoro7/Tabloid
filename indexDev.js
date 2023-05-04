document.addEventListener('DOMContentLoaded', () => {
  const textArea = document.querySelector("#note");
  const saveBtn = document.querySelector("#saveBtn");
  const clearBtn = document.querySelector('#clearBtn')

  // Get the full URL of the current tab, use as key for local storage
  let key = chrome.tabs.query({ active: true, currentWindow: true }, async function(tabs) {
    const url = await tabs[0].url;
    (function storeURL(url) {
      key = url;
      console.log(key);
    })(url);
  });
  
  let noteContent = localStorage.getItem(key)
  if(noteContent === null) {
    console.log('Existing note not found, creating new note');
    noteContent = "";
  }
  textArea.value = noteContent;

  saveBtn.onclick = () => {
    console.log('Saving note...');
    try {
      localStorage[key] = textArea.value;
      console.log('Note saved');
    } catch (error) {
      console.log(error)
    }
  }

  clearBtn.onclick = () => {
    localStorage.removeItem(key);
    textArea.value = ''
      console.log('Note cleared')
  };
});