const electron = require('electron');
const bootstrap = require('bootstrap@3');
const {app, BrowserWindow} = electron;

console.log(__dirname);

app.on('ready', () => {
    let win = new BrowserWindow({width:1080, height: 600});
    win.loadURL(`file://${__dirname}/index.html`);
});