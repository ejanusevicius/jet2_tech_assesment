// elements
var pageContainer = document.querySelector(".js--page__container");
var pageButton = document.querySelector(".js--page__button");
var dummyButton = document.querySelector(".js--page__button--dummy");
var closeButton = document.querySelector(".js--page__modalButton--outlined"); // content for the main modal

var modalOne = "\n        <div class=\"row page__modalBody\">\n\n            <div class=\"page__primaryContainer\">\n                <div class=\"page__greenIcon\">\n                    <i class=\"fas fa-check page__checkMark\"></i>\n                </div>\n\n                <div class=\"page__textContainer\">\n                    <h1 class=\"page__primaryText\">Congratulations your jet2 holiday booking has been confirmed</h1>\n                </div>\n            </div>\n\n            <div class=\"page__secondaryContainer\">\n                <p class=\"page__secondaryText\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse a dicta, id dolorem recusandae, temporibus sunt hic nobis excepturi nam facere ad quia consequuntur? Blanditiis sequi explicabo cum pariatur!</p>\n            </div>\n\n        </div>\n\n        <div class=\"row page__modalFooter\">\n            <div class=\"col-xs-6 page__footerCol\">\n                <button class=\"page__modalButton page__modalButton--outlined js--page__modalButton--outlined\">Cancel</button>\n            </div>\n\n            <div class=\"col-xs-6\">\n                <button class=\"page__modalButton page__modalButton--filled\">Continue</button>\n            </div>\n\n        </div>\n"; // Dummy content for the second modal

var modalTwo = "<p style=\"margin: 2rem 2rem\">This is the second modal, showing the ability to have more than one modals on the page!\nA string with HTML markup for this text is passed into a function that generates the modal. This makes the JS more modular i.e. the logic is the same for each modal but the content can be changed if desired.\n<span style=\"color: red\">You can turn off this modal by clicking the backdrop</span></p>"; //functions

var openModal = function openModal(modalContent) {
  var modalMarkUp = "\n        <div class=\"page__modal js--page__modal container animated fadeIn fast\">\n\n        ".concat(modalContent, "\n        \n        </div>\n        <div class=\"page__backdrop js--page__backdrop animated fadeIn faster\"></div>\n        ");
  pageContainer.insertAdjacentHTML('afterbegin', modalMarkUp);
};

var closeModal = function closeModal(target) {
  //Check if the "Cancel" button or the backdrop is clicked
  var classList = Object.keys(target.classList).map(function (key) {
    return target.classList[key];
  });
  console.log(classList);
  // could have used .includes but not compatible ith IE
  if (classList.join(' ').indexOf("js--page__modalButton--outlined") !== -1
   || classList.join(' ').indexOf("js--page__backdrop") !== -1) {
    //Remove both backdrop and the modal
    [document.querySelector(".js--page__modal"), document.querySelector(".js--page__backdrop")].forEach(function (el) {
      el.parentNode.removeChild(el);
    });
  }
}; //event handlers


pageButton.addEventListener("click", function () {
  return openModal(modalOne);
});
dummyButton.addEventListener("click", function () {
  return openModal(modalTwo);
});
pageContainer.addEventListener("click", function (event) {
  return closeModal(event.target);
});