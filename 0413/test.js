// 1) Scroll Navigation
let scrollValue = [580, 1228, 1915];
var aTags = document.querySelectorAll('header li');
for(var i = 0; i < aTags.length; i ++) {
    aTags[i].onclick = function(e) {
        e.preventDefault();
        var target = document.getElementById(this.getAttribute("href"));

        window.scrollTo({
            'behavior': 'smooth',
            'top': scrollValue[i]
        });
    }
}