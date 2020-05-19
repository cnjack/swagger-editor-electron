const { app, BrowserWindow } = require('electron')
const windowStateKeeper = require('electron-window-state');

function createWindow () {
  // Create the browser window.
  const mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });
  let win = new BrowserWindow({
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindowState.manage(win);
  // and load the index.html of the app.
  win.loadFile('dist/index.html')
}

app.on('ready', createWindow)