const electron = require('electron');
const {app, BrowserWindow} = electron;

console.log(__dirname);

app.on('ready', () => {
    let win = new BrowserWindow({width:1296, height: 732, autoHideMenuBar: true});
    win.loadURL(`file://${__dirname}/index.html`);

});