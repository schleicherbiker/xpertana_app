const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

app.on('ready', () => {
    let win = new BrowserWindow({width:1296, height: 732, autoHideMenuBar: true});
    win.loadURL(`file://${__dirname}/index.html`);

    
    function addSession() {
        session = $("<div>");
        session.addClass("session");
        session.text("whats up");
        $("#sessionList").append(session);
    }

    addSession();
    addSession();

    $("#sessionChat").text("blahsdgfds");

});