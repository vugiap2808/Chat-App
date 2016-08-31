var firebase = require('firebase')

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAjADlVFGLLq64JtC2n31JUqAwO-BH4K2I",
    authDomain: "chattest-44cb3.firebaseapp.com",
    databaseURL: "https://chattest-44cb3.firebaseio.com",
    storageBucket: "chattest-44cb3.appspot.com",
  };
  firebase.initializeApp(config);

/*export function createNewServer (listMessage)
{
	var database = firebase.database()
	var ref = database.ref("server")
	var messageRef = ref.child('saving-messages')
	for(var i=0;i<6;i++)
	{
		messageRef.child(i).set({
			userName: listMessage[i].userName,
			message: listMessage[i].content
		})
	}
}*/
var database = firebase.database()
var	ref = database.ref('server/saving-messages')
var messageRef = ref.child('list-messages')
var newRef = database.ref('server/saving-messages/list-messages')
  newRef.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  console.log("UserName: " + newPost.userName);
  console.log("Message: " + newPost.message);
  console.log("Previous Post ID: " + prevChildKey);
})

export function pushToFireBase (userName,message)
{
	messageRef.push({
		userName: userName,
		message: message
	})
}

    
