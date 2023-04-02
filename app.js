const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
burger.addEventListener("click", () => {
    menu.classList.toggle("disp")
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
    });
    wow.init();
    document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
    };