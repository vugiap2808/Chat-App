import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { sendMessage, typeText } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import AppBar from 'material-ui/lib/app-bar';
import Paper from 'material-ui/lib/paper';
import style from '../containers/style'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';


class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    //const { dispatch, sendMessage, typeText } = this.props
  }

  componentWillReceiveProps(nextProps) {
    //if (nextProps.send !== this.props.sendMessage) {
      //const { dispatch, sendMessage } = nextProps
      //dispatch(sendMessage())
    //}
  }

  handleChange(e) {
    this.props.dispatch(typeText(e.target.value))
  }

  handleClick(e) {
    this.props.dispatch(sendMessage({userName: 'user5',content: this.props.typeText}))
  }


  
  render() {
    const {message} = this.props
      var list = message.map((item) => {
        return (
         <ListItem>{
              item.userName + ': ' + item.content
             }
            </ListItem> 
        )
      })
    return (
      <div>
          <AppBar
              title="Chat App"
              iconClassNameRight="muidocs-icon-navigation-expand-more">
              <FlatButton label="Login" />
          </AppBar>
            

            <Paper style={style} zDepth={5}>

              {list}
              
              <div align="left">

              <TextField hintText="Type a message" 
                    floatingLabelText="Message.." fullWidth="true"
                    onChange = { this.handleChange} />

              <RaisedButton label="Send"
                  onClick = {
                    this.handleClick
                  }
               ></RaisedButton>

              </div>
            </Paper>
       
      </div>
    )
  }
}



function mapStateToProps(state) {
  const {sendMessage, typeText} = state
  console.log(sendMessage)
  console.log(typeText)
  /*const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  }*/

  const message=sendMessage
  
  return {
    /*selectedReddit,
    posts,
    isFetching,
    lastUpdated,*/
    typeText,
    message
  }
}

export default connect(mapStateToProps)(App)
