const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST:
      let newPost = {
        id: state.posts.length,
        text: state.newPostText
      };
      // state.posts.push(newPost);
      // state.newPostText = '';
      // return state;
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost]
      }

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return {
        ...state,
        newPostText: action.text
      }

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text
});