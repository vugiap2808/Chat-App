import { combineReducers } from 'redux'
import {TYPE_TEXT, SEND_MESSAGE, CREATE_SERVER} from '../actions'
import {pushToFireBase, createServer} from '../actions/connectFirebase'

var initialState = {
  messages: [
    {
      userName:'user1',content:'abc'
    },
    {
      userName:'user2' , content:'abc'
    },

    {
      userName:'user2',content:'xyz'
    },
    {
      userName:'user2' , content:'abcc'
    },
    {
      userName:'user2' , content:'abc'
    },
    {
      userName:'user2' , content:'abc'
    },
  ]
}



function sendMessage(state = initialState.messages, action)
{
  switch (action.type) {
      case SEND_MESSAGE:

        return [...state, action.message]
    default:
      return state
  }
}

function typeText(state = '', action)
{
  switch (action.type) {
    case TYPE_TEXT:
      state = action.text
      return state
    default:
      return state
  }
}

/*function createServerMessages(state = true, action)
{
  switch (action.type) {
    case CREATE_SERVER:
      createNewServer(initialState)
      return true
    default:
      return false
  }
}*/


const rootReducer = combineReducers({
  sendMessage,
  typeText
  //createServerMessages
})

export default rootReducer
