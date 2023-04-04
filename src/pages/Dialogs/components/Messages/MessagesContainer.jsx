import { connect } from 'react-redux';
import { sendMessageActionCreator } from '../../../../store/dialogs-reducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (text) => {
      dispatch(sendMessageActionCreator(text));
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;