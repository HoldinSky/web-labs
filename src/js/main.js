$(function () {
  const orderButton = $(".hero-button-order");

  orderButton.on("click", function (e) {
    e.preventDefault();
    console.log("Order button is clicked");
  });
});

// tab implementation

const headers = document.querySelectorAll("[class^='tab-header-'");
headers.forEach((header) => {
  header.addEventListener("click", () => {
    const activeTabIndex = header.className.substring(
      "tab-header-".length,
      "tab-header-".length + 1
    );

    let prevActiveContentIndex;

    headers.forEach((h) => {
      if (!h.className.includes("active-header")) return;

      h.classList.remove("active-header");

      prevActiveContentIndex = h.className.substring(
        "tab-header-".length,
        "tab-header-".length + 1
      );
    });

    header.classList.add("active-header");

    const prevActiveContent = document.querySelector(
      `.tab-content-${prevActiveContentIndex}`
    );

    prevActiveContent.classList.remove("active-content");

    document
      .querySelector(`.tab-content-${activeTabIndex}`)
      .classList.add("active-content");
  });
});

// char counter in message form

const textArea = document.getElementById("form-message");
let characterCounter = document.getElementById("char-count");

const maxNumberOfChars = 1000;

const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length;
  let counter = maxNumberOfChars - numOfEnteredChars;

  characterCounter.textContent = counter;
  if (counter <= 0) {
    this.value = this.value.substring(0, maxChars);
  }
};

textArea.addEventListener("input", countCharacters);
