const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  users: [
    {
      id: 1,
      name: 'Jack'
    },
    {
      id: 2,
      name: 'Marie'
    },
    {
      id: 3,
      name: 'Alex'
    },
    {
      id: 4,
      name: 'Jim'
    },
    {
      id: 5,
      name: 'Tommy'
    },
  ],
  messages: [
    {
      id: 1,
      text: 'Hi!'
    },
    {
      id: 2,
      texte: 'Hey'
    },
    {
      id: 3,
      text: 'How are you?'
    },
    {
      id: 4,
      text: 'amazing'
    },
    {
      id: 5,
      text: 'wow'
    },
  ],
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      let newMessage = {
        id: state.messages.length,
        text: action.message
      };
      // state.messages.push(newMessage);
      return {
        ...state, 
        messages: [...state.messages, newMessage]
      }

    default: 
      return state;
  }
}

export const sendMessageActionCreator = (text) => ({
  type: SEND_MESSAGE,
  message: text
});