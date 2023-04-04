const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      let newMessage = {
        id: state.messages.length,
        text: action.message
      };
      state.messages.push(newMessage);
      return state;

    default: 
      return state;
  }
}

export const sendMessageActionCreator = (text) => ({
  type: SEND_MESSAGE,
  message: text
});