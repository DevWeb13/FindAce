const cardObjectDefinitions = [
  { id: 1, imagePath: '/images/ClubsA.svg' },
  { id: 2, imagePath: '/images/Clubs2.svg' },
  { id: 3, imagePath: '/images/Clubs3.svg' },
  { id: 4, imagePath: '/images/Clubs4.svg' },
  { id: 5, imagePath: '/images/Clubs5.svg' },
  { id: 6, imagePath: '/images/Clubs6.svg' },
  { id: 7, imagePath: '/images/Clubs7.svg' },
  { id: 8, imagePath: '/images/Clubs8.svg' },
  { id: 9, imagePath: '/images/Clubs9.svg' },
  { id: 10, imagePath: '/images/Clubs10.svg' },
  { id: 11, imagePath: '/images/ClubsJ.svg' },
  { id: 12, imagePath: '/images/ClubsQ.svg' },
  { id: 13, imagePath: '/images/ClubsK.svg' },
  { id: 14, imagePath: '/images/DiamondsA.svg' },
  { id: 15, imagePath: '/images/Diamonds2.svg' },
  { id: 16, imagePath: '/images/Diamonds3.svg' },
  { id: 17, imagePath: '/images/Diamonds4.svg' },
  { id: 18, imagePath: '/images/Diamonds5.svg' },
  { id: 19, imagePath: '/images/Diamonds6.svg' },
  { id: 20, imagePath: '/images/Diamonds7.svg' },
  { id: 21, imagePath: '/images/Diamonds8.svg' },
  { id: 22, imagePath: '/images/Diamonds9.svg' },
  { id: 23, imagePath: '/images/Diamonds10.svg' },
  { id: 24, imagePath: '/images/DiamondsJ.svg' },
  { id: 25, imagePath: '/images/DiamondsQ.svg' },
  { id: 26, imagePath: '/images/DiamondsK.svg' },
  { id: 27, imagePath: '/images/HeartsA.svg' },
  { id: 28, imagePath: '/images/Hearts2.svg' },
  { id: 29, imagePath: '/images/Hearts3.svg' },
  { id: 30, imagePath: '/images/Hearts4.svg' },
  { id: 31, imagePath: '/images/Hearts5.svg' },
  { id: 32, imagePath: '/images/Hearts6.svg' },
  { id: 33, imagePath: '/images/Hearts7.svg' },
  { id: 34, imagePath: '/images/Hearts8.svg' },
  { id: 35, imagePath: '/images/Hearts9.svg' },
  { id: 36, imagePath: '/images/Hearts10.svg' },
  { id: 37, imagePath: '/images/HeartsJ.svg' },
  { id: 38, imagePath: '/images/HeartsQ.svg' },
  { id: 39, imagePath: '/images/HeartsK.svg' },
  { id: 40, imagePath: '/images/SpadesA.svg' },
  { id: 41, imagePath: '/images/Spades2.svg' },
  { id: 42, imagePath: '/images/Spades3.svg' },
  { id: 43, imagePath: '/images/Spades4.svg' },
  { id: 44, imagePath: '/images/Spades5.svg' },
  { id: 45, imagePath: '/images/Spades6.svg' },
  { id: 46, imagePath: '/images/Spades7.svg' },
  { id: 47, imagePath: '/images/Spades8.svg' },
  { id: 48, imagePath: '/images/Spades9.svg' },
  { id: 49, imagePath: '/images/Spades10.svg' },
  { id: 50, imagePath: '/images/SpadesJ.svg' },
  { id: 51, imagePath: '/images/SpadesQ.svg' },
  { id: 52, imagePath: '/images/SpadesK.svg' },
];

const cardBackImgPath = '/images/JokerR.svg';

const cardContainerElem = document.querySelector('.cardContainer');

function createCard(cardItem) {
  // create div elements that make up a card
  const cardElem = createElement('div');
  const cardInnerElem = createElement('div');
  const cardFrontElem = createElement('div');
  const cardBackElem = createElement('div');

  //create front and back image elements for a card
  const cardFrontImage = createElement('img');
  const cardBackImage = createElement('img');

  // add class and id to card element
  addClassToElement(cardElem, 'card');
  addIdToElement(cardElem, cardItem.id);

  // add class to card inner element
  addClassToElement(cardInnerElem, 'cardInner');

  // add class to card front element
  addClassToElement(cardFrontElem, 'cardFront');

  // add class to card back element
  addClassToElement(cardBackElem, 'cardBack');

  // add src attribute and appropriate value to img element - back of card
  addSrcToImageElem(cardBackImage, cardBackImgPath);

  // add src attribute and appropriate value to img element - front of card
  addSrcToImageElem(cardFrontImage, cardItem.imagePath);

  //assign class to back image element
  addClassToElement(cardBackImage, 'cardImg');

  //assign class to front image element
  addClassToElement(cardFrontImage, 'cardImg');

  // add back image element as child element to card back element
  addChildElement(cardBackElem, cardBackImage);

  // add front image element as child element to card front element
  addChildElement(cardFrontElem, cardFrontImage);

  // add card front element as child element to card inner element
  addChildElement(cardInnerElem, cardFrontElem);

  // add card back element as child element to card inner element
  addChildElement(cardInnerElem, cardBackElem);

  //add card inner element as child element to card element
  addChildElement(cardElem, cardInnerElem);

  return cardElem;
}

function createElement(elemType) {
  return document.createElement(elemType);
}

function addClassToElement(elem, className) {
  elem.classList.add(className);
}

function addIdToElement(elem, id) {
  elem.id = id;
}

function addSrcToImageElem(elem, src) {
  elem.src = src;
}

function addChildElement(parentElem, childElem) {
  parentElem.appendChild(childElem);
}
