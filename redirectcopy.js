function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br/><br/>MUON COPY THI VAO DAY : <a href=https://www.facebook.com/B%E1%BA%A5t-%C4%91%E1%BB%99ng-s%E1%BA%A3n-ven-s%C3%A0i-g%C3%B2n-100103529354289>https://www.facebook.com/B%E1%BA%A5t-%C4%91%E1%BB%99ng-s%E1%BA%A3n-ven-s%C3%A0i-g%C3%B2n-100103529354289</a>";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;
