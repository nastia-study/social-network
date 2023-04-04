import { dialogsReducer } from "./dialogs-reducer";
import { postsReducer } from "./posts-reducer";

export const store = {
  _callSubscriber() {
    console.log('im callback listener');
  },
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      posts: [
        {
          id: 0, 
          text: 'Hi, how are you?'
        },
        {
          id: 1, 
          text: 'Kill me please..'
        },
        {
          id: 2, 
          text: 'I wanna ride monstertruck'
        },
        {
          id: 3, 
          text: 'Such a good weather I shit my pants'
        },
      ],
      newPostText: '',
    }
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    postsReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber()
  },
};