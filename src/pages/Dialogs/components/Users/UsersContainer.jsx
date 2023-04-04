import { connect } from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.dialogsPage.users
  }
};

const mapDispatchToProps = () => {
  return {}
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;