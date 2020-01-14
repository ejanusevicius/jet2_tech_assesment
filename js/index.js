// elements
const pageContainer = document.querySelector(".js--page__container");
const pageButton = document.querySelector(".js--page__button");
const dummyButton = document.querySelector(".js--page__button--dummy");
const closeButton = document.querySelector(".js--page__modalButton--outlined");


// content for the main modal
const modalOne = `
        <div class="row page__modalBody">

            <div class="page__primaryContainer">
                <div class="page__greenIcon">
                    <i class="fas fa-check page__checkMark"></i>
                </div>

                <div class="page__textContainer">
                    <h1 class="page__primaryText">Congratulations your jet2 holiday booking has been confirmed</h1>
                </div>
            </div>

            <div class="page__secondaryContainer">
                <p class="page__secondaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse a dicta, id dolorem recusandae, temporibus sunt hic nobis excepturi nam facere ad quia consequuntur? Blanditiis sequi explicabo cum pariatur!</p>
            </div>

        </div>

        <div class="row page__modalFooter">
            <div class="col-xs-6 page__footerCol">
                <button class="page__modalButton page__modalButton--outlined js--page__modalButton--outlined">Cancel</button>
            </div>

            <div class="col-xs-6">
                <button class="page__modalButton page__modalButton--filled">Continue</button>
            </div>

        </div>
`;
// Dummy content for the second modal
const modalTwo = `<p style="margin: 2rem 2rem">This is the second modal, showing the ability to have more than one modals on the page!
A string with HTML markup for this text is passed into a function that generates the modal. This makes the JS more modular i.e. the logic is the same for each modal but the content can be changed if desired.
<span style="color: red">You can turn off this modal by clicking the backdrop</span></p>`;

//functions
const openModal = (modalContent) => {

    const modalMarkUp = `
        <div class="page__modal js--page__modal container animated fadeIn fast">

        ${modalContent}
        
        </div>
        <div class="page__backdrop js--page__backdrop animated fadeIn faster"></div>
        `;

    pageContainer.insertAdjacentHTML('afterbegin', modalMarkUp);
}

const closeModal = (target) => {
    //Check if the "Cancel" button or the backdrop is clicked
    if(Object.values(target.classList).includes("js--page__modalButton--outlined") 
    || Object.values(target.classList).includes("js--page__backdrop")) {
        //Remove both backdrop and the modal
        [document.querySelector(".js--page__modal"), document.querySelector(".js--page__backdrop")].forEach( el => {
            el.parentNode.removeChild(el);
        })
    }
}


//event handlers
pageButton.addEventListener("click", () => openModal(modalOne));
dummyButton.addEventListener("click", () => openModal(modalTwo));
pageContainer.addEventListener("click", event => closeModal(event.target));
