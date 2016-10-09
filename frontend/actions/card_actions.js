export const GET_CARDS = 'GET_CARDS';
export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const CREATE_CARDS = 'CREATE_CARDS';

export const getCards = deckId => ({
  type: GET_CARDS,
  deckId
});

export const receiveCards = data => ({
  type: RECEIVE_CARDS,
  data
});

export const createCards = (cards, deckId) => ({
  type: CREATE_CARDS,
  cards,
  deckId
});
