
var advance_iframe = document.getElementsByTagName('iframe');
var advance_a = document.getElementsByTagName('a')[0];

advance_a.parentNode.removeChild(advance_a);

for (var i = 0; i < advance_iframe.length; i++) {
    advance_iframe[i].style.display = 'none';
}
