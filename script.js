document.addEventListener("DOMContentLoaded", function() {
  
  const gridItems = document.querySelectorAll(".grid-item");

  const stanzaLists = [
    ["pick — mistake"],
    ["of us a promise"],
    ["or so, they say"],
    ["failure is"]
  ];

  gridItems.forEach((item, index) => {
    item.dataset.index = 0;
    item.dataset.originalText = item.textContent;

    item.addEventListener("click", function () {
      let currentIndex = Number(this.dataset.index);

      if (currentIndex === 0) {
        this.textContent = stanzaLists[index][0];
        this.dataset.index = 1;
      } else {
        this.textContent = this.dataset.originalText;
        this.dataset.index = 0;
      }
      
    });

  });

});