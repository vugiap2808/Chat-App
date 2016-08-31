import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import pushFireBase from '../actions'
import { sendMessage, typeText, createServer } from '../actions'
import ListMessages from '../components/ListMessages'
import Input from '../components/Input'
import AppBar from 'material-ui/lib/app-bar';
import Paper from 'material-ui/lib/paper';
import style from '../containers/style'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import {pushToFireBase, getMessagesFromFireBase} from '../actions/connectFirebase'


class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({newMessage: ''})
    //getMessagesFromFireBase()
    //this.props.dispatch(createServer())
  }

  componentWillReceiveProps(nextProps) {
    //if (nextProps.send !== this.props.sendMessage) {
      //const { dispatch, sendMessage } = nextProps
      //dispatch(sendMessage())
    //}
  }

  handleChange(e) {
        this.setState({newMessage: e.target.value})
    
  }

  handleClick(e) {
    //this.props.dispatch(sendMessage({userName: 'user5',content: this.state.newMessage}))
    pushToFireBase('user5',this.state.newMessage)
    this.setState({newMessage: ''})
    //createNewServer(this.state.sendMessage)
  }



  
  render() {
    const { messages } = this.props
    
    return (
      <div>
          <AppBar
              title="Chat App"
              iconClassNameRight="muidocs-icon-navigation-expand-more">
              <FlatButton label="Login" />
          </AppBar>
            

            <Paper style={style} zDepth={5}>

              <ListMessages
                messages = {messages}
              ></ListMessages>
              
              <div align="left">
                <Input
                  handleChange= {this.handleChange}
                  value = {this.state.newMessage}
                  handleClick = {this.handleClick}
                ></Input>
              </div>

            </Paper>
       
      </div>
    )
  }
}



function mapStateToProps(state) {
  const { sendMessage} = state
  //console.log(sendMessage)
  /*const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  }*/
  const messages=sendMessage
  
  return {
    /*selectedReddit,
    posts,
    isFetching,
    lastUpdated,*/
    messages
  }
}

export default connect(mapStateToProps)(App)
