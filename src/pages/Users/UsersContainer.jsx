import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import { 
  followActionCreator, 
  setCurrentPageAC, 
  setIsLoadingAC, 
  setTotalCountAC, 
  setUsersActionCreator, 
  unfollowActionCreator 
} from "../../store/users-reducer";
import Users from "./UsersC";
import Loader from '../../components/Loader/Loader';

class UsersApiContainer extends React.Component {

  componentDidMount() {
    this.props.setIsLoading(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`)
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalCount(res.data.totalCount);
      });
      this.props.setIsLoading(false);
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.setIsLoading(true);
    console.log(window.state);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalCount(res.data.totalCount);
        this.props.setIsLoading(false);
      });
  }

  render () {
    return (
      <>
        {
          this.props.isLoading ? 
            <Loader /> : 
            <Users 
              onPageChange={this.onPageChange} 
              users={this.props.users}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
            />
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followActionCreator(id));
    },
    unfollow: (id) => {
      dispatch(unfollowActionCreator(id));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setTotalCount: (count) => {
      dispatch(setTotalCountAC(count));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setIsLoading: (value) => {
      dispatch(setIsLoadingAC(value));
    },
  }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer);