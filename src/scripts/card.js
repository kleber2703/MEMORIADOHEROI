//Class to manage card creation and actions
class CardManager {
    // Attributes
    flippedCards = new Set();
    urlFactory;

    //  Constructor
    constructor(factory) {
        this.urlFactory = factory;
    }

    // Generate new card based in the hero number
    gen(heroNumber) {
        let template = document.getElementById("cardTemplate");
        let clone = template.content.cloneNode(true);

        clone.children[0].addEventListener('click',
        event => this.onClick(event)
        );
        
        return clone; // Return the modified clone
    }

    //Handle click events
    onClick(event) {
        this.flip(event.target);
    }

    //Change card state

    //Flip the received card
    flip(cardNode) {
        cardNode.children[0].classList.add('selected');
    }

    //Unflip the received card
    unFlip(cardNode) {
        cardNode.children[0].classList.remove('selected');
    }

    //Set received card as matched
    disable(cardNode) {
        cardNode.children[0].classList.add('selected');
        this.unFlip(cardNode);
    }
}