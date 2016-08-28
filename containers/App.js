import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit, sendMessage } from '../actions'
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
    //this.handleChange = this.handleChange.bind(this)
    //this.handleRefreshClick = this.handleRefreshClick.bind(this)
    this.state = {text: ''}
  }

  componentDidMount() {
    const { dispatch, sendMessage } = this.props
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.send !== this.props.sendMessage) {
      const { dispatch, sendMessage } = nextProps
      dispatch(sendMessage({userName:'user4', content: 'dfashjf'}))
    }
  }

  handleChange(nextReddit) {
    this.props.dispatch(selectReddit(nextReddit))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedReddit } = this.props
    dispatch(invalidateReddit(selectedReddit))
    dispatch(fetchPostsIfNeeded(selectedReddit))

  }


  
  render() {
    const { selectedReddit, posts, isFetching, lastUpdated,message,sendMessage} = this.props
    //const isEmpty = posts.length === 0
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
            {list}

            <Paper style={style} zDepth={5}>
              <div align="left">
              <TextField id ='text' value ={this.state.text} hintText="Type a message" floatingLabelText="Message.." fullWidth="true"
               onChange = {(textVal) => {
                this.setState({text: textVal.target.value})
                console.log(textVal.target.value)
               }} />
               <RaisedButton label="Send" style={style}/>
              </div>
            </Paper>
       
      </div>
    )
  }
}



function mapStateToProps(state) {
  const { selectedReddit,sendMessage, postsByReddit } = state
  console.log(sendMessage)
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  }

  const message=sendMessage
  
  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated,
    message
  }
}

export default connect(mapStateToProps)(App)
