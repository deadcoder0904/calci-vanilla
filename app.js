var btns = [
  {
    alt: "Google Play",
    src: "./assets/google-play-badge.png",
    href: "https://play.google.com/store/apps/details?id=com.futurosms"
  }
];

document.addEventListener("DOMContentLoaded", function() {
  var $btns = document.getElementById("btns");

  var renderBtns = function(data, sel) {
    var boxes = [];
    data.forEach(function(item, i) {
      var box =
        "<a href=" +
        item.href +
        " target='_blank' rel='noopener noreferrer'><img src=" +
        item.src +
        " alt= " +
        item.alt +
        " width='350' height='150' /></a>";
      boxes.push(box);
    });
    sel.innerHTML = boxes.join("");
  };

  renderBtns(btns, $btns);
});
