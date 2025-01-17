const sliderBlock = document
  .getElementsByClassName("news-grid")[0]
  .getElementsByTagName("news-slider-block");
// finds the sliders in the grid section
if (sliderBlock.length > 0) {
  for (let i = 0; i < sliderBlock.length; i++) {
    sliderBlock[i].tabIndex = -1;
    // removes focus from slider blocks
    const hiddenEl = sliderBlock[i].querySelectorAll(
      '[aria-label="1 / 1"][aria-hidden="true"]'
    );
    // finds the hidden areas of the sliders

    for (let h = 0; h < hiddenEl.length; h++) {
      hiddenEl[h].tabIndex = -1;
      // removes focus hidden areas

      const linkesInHiddenEl = hiddenEl[h].getElementsByClassName(
        "internal-link",
        "news-feed-post-link",
        "clickable"
      );
      //finds links in the hidden elements

      for (let k = 0; k < linkesInHiddenEl.length; k++) {
        linkesInHiddenEl[k].tabIndex = -1;
      }
    } // removes focus from all the hidden links

    const shownEl = sliderBlock[i].querySelectorAll(
      '[aria-label="1 / 1"][aria-hidden="false"][tabindex="0"]'
    );
    // finds the visible areas

    for (let h = 0; h < shownEl.length; h++) {
      shownEl[h].tabIndex = -1;
      // removes general focus
      const linkesInShownEl = shownEl[h].getElementsByClassName(
        "internal-link",
        "news-feed-post-link",
        "clickable"
      );
      //finds all the links in the visible part

      const articles = shownEl[h].getElementsByTagName("article");
      articles[0].tabIndex = -1;
      linkesInShownEl[0].tabIndex = -1;
      // removes spesific focus
    }
  }
}

const name = document.getElementById("up-profile-name");
name && name.setAttribute("aria-level", "1");

const searchInput = document.getElementsByClassName("ds-search-input");
searchInput[0] && searchInput[0].setAttribute("aria-label", "Search");

const accordion = document.getElementsByClassName("accordion-widget");
// find the accordion
for (let y = 0; y < accordion.length; y++) {
  //loop thorw it if there is more than one
  const icons = accordion[y].getElementsByClassName("we-icon");
  // find all the icons
  for (let x = 0; x < icons.length; x++) {
    icons[x].setAttribute("aria-hidden", "true");
  }
}