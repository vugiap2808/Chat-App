import { combineReducers } from 'redux'
import {
  SELECT_REDDIT, INVALIDATE_REDDIT,
  REQUEST_POSTS, RECEIVE_POSTS, SEND_MESSAGE
} from '../actions'

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
        action.message = {userName:'user4',content: document.getElementById('text')}
        return [...state, action.message]
    default:
      return state
  }
}

function selectedReddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_REDDIT:
      return action.reddit
    default:
      return state
  }
}

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_REDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsByReddit(state = { }, action) {
  switch (action.type) {
    case INVALIDATE_REDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.reddit]: posts(state[action.reddit], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit,
  sendMessage
})

export default rootReducer
