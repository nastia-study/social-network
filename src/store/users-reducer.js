const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_LOADING = 'SET_IS_LOADING';

let initialState = {
  users: [],
  totalCount: 0,
  currentPage: 1,
  isLoading: false,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (action.id === user.id) {
            return {...user, isFollowed: true}
          }
          return user;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (action.id === user.id) {
            return {...user, isFollowed: false}
          }
          return user;
        })
      }
    case SET_USERS:
      return {
        ...state, 
        users: [...action.users]
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default: 
      return state;
  }
};

export const followActionCreator = (id) => ({
  type: FOLLOW,
  id
});

export const unfollowActionCreator = (id) => ({
  type: UNFOLLOW,
  id
});

export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users
});

export const setTotalCountAC = (value) => ({
  type: SET_TOTAL_COUNT,
  totalCount: value
});

export const setCurrentPageAC = (page) => ({
  type: SET_CURRENT_PAGE,
  currentPage: page
});

export const setIsLoadingAC = (value) => ({
  type: SET_IS_LOADING,
  isLoading: value
});