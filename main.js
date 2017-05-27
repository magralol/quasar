const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const width = 800
const height = 500

let win

function createWindow () {
  win = new BrowserWindow({
        title: "Quasar | *untitled",
        width: width,
        height: height,
        minWidth: width, 
        minHeight: height,
        center: true,
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'bin/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools()

  win.on('closed', () => {

    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})


