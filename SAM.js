/* Global variables */

/* Game infos */
var sGameName;
var GameCredits;


var aCommands = null;

var nClick = 0;
var sCurrentPageLabel;

function Init(){
    console.log("add listner");
    document.getElementById('body').addEventListener('click', PlayNext, true);
    document.getElementById('footer').innerHTML = 'Game created by ' + GameCredits + ' with <a href="https://github.com/vjncenzo/SimpleAdventureMaker">SimpleAdventureMaker</a>';
    document.getElementById('title').innerHTML = sGameName;
    document.title = sGameName;

    sCurrentPageLabel = Object.keys(aCommands)[0];
    PlayNext();
}

function PlayNext(){
    console.log("PlayNext");
    if(nClick >= aCommands[sCurrentPageLabel].length )
        return;
    var cmd = aCommands[sCurrentPageLabel][nClick];    
    var c = cmd[0].toUpperCase();
    nClick++;
    console.log("nClick: " + nClick + " cmd: " + c);
    switch(c){
        case 'I':
        ChangeImg(cmd[1]);
        PlayNext();
        break;

        case 'T':
        AddText(cmd[1]);
        break;

        case 'B':
        AddButton(cmd[1], cmd[2]);
        PlayNext();
        break;

        case 'R':
        AddRestartButton(cmd[1]);
        break;
    }

}


function ChangeImg(newImgUrl){
    console.log("ChangeImg: " + newImgUrl);
    document.getElementById("foto").setAttribute('src', newImgUrl);
}

function Clear(){
    console.log("Clear");
    document.getElementById('canv').innerHTML = "";
}

function AddText(text){
    console.log("AddText: " + text);
    // verifico se 
    o = document.getElementById("text");
    if(o){
        o.innerHTML += '<br/>' + text;
    } else {
        var node = document.createElement("div");
        node.setAttribute('id','text');
        var textnode = document.createTextNode(text);
        node.appendChild(textnode);
        document.getElementById("canv").appendChild(node);
    }
}
function SetPage(page){
    console.log("SetPage: " + page);
    sCurrentPageLabel = page;
    nClick = 0;
    Clear();
    PlayNext();
    /* restore the onclick handler on the body */
    //console.log("add listner");
    //document.getElementById('body').addEventListener('click', PlayNext);
}
function AddRestartButton(str){
    console.log("AddRestartButton: " + str);
    var node = document.createElement("div");
    node.setAttribute('id','RestartBtn');
    node.addEventListener('click', RestartGame);
    a = document.createElement('a');
    a.setAttribute("href", 'javascript:void(0)');
    var textnode = document.createTextNode(str);
    a.appendChild(textnode);
    node.appendChild(a);
    document.getElementById("canv").appendChild(node);    
}
function RestartGame(){
    SetPage(Object.keys(aCommands)[0]);
}

function AddButton(text, url){
    console.log("AddButton: " + text + " url: " + url);
    var node = document.createElement("div");
    node.setAttribute('id','btn');
    cmd = 'SetPage("' + url + '");';
    node.setAttribute('onclick',cmd);
    a = document.createElement('a');
    a.setAttribute("href", 'javascript:void(0)');
    var textnode = document.createTextNode(text);
    a.appendChild(textnode);
    node.appendChild(a);
    document.getElementById("canv").appendChild(node);
    /* If I add a button I have to disable the click lister of Body, user ha to click on the button! */
    //console.log("remove listner");
    //document.getElementById('body').removeEventListener('click', PlayNext);
}