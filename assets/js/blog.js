// saved-entry contains "user", "title" and "content" keys
// saved-entry is the first localStorage
// Get first saved post
const lastPost = JSON.parse(localStorage.getItem('saved-entry'));
const backButton = document.getElementById("back-button");
let user = lastPost.user;
let title = lastPost.title;
let content = lastPost.content;

// Saves the last user post lastpost
function saveLastMessage(){
  savePosts();
  // Uses first save-entry and crceates first lastPost
  const savedPost = {
    lstUser: user,
    lstTitle: title,
    lstContent: content
  };
  localStorage.setItem('lastPost', JSON.stringify(savedPost));

  if (savedPost !== null){
    history.back();
  }
}

// saves lastPost on lastPost2
function savePosts(){
  savePosts2();
  const lstMessage = JSON.parse(localStorage.getItem('lastPost'));
  if (lstMessage !== null){
    const savedPosts = {
      savedUPost2: lstMessage.lstUser,
      savedTPost2: lstMessage.lstTitle,
      savedCPost2: lstMessage.lstContent
    }
    localStorage.setItem('lastPost2', JSON.stringify(savedPosts));
  };
}

// saves lastPost2 on lastPost3
function savePosts2(){
  const lstMessage = JSON.parse(localStorage.getItem('lastPost2'));
  if (lstMessage !== null){
    const savedPosts2 = {
      savedUPost3: lstMessage.savedUPost2,
      savedTPost3: lstMessage.savedTPost2,
      savedCPost3: lstMessage.savedCPost2
    }
    localStorage.setItem('lastPost3', JSON.stringify(savedPosts2));
  };
}

// Renders message of the first post saved-blog:{}
function renderMessage(){
  document.getElementById('last-title').innerHTML = title;
  document.getElementById('content').innerHTML = content;
  document.getElementById('autor-subtitle').innerHTML = `Posted by: ${user}`;
}

// Renders last-saved message post lastPost:{}
function renderLastMessage(){
  const lstMessage = JSON.parse(localStorage.getItem('lastPost'));
  if (lstMessage !== null){
    document.getElementById('saved-title1').innerHTML = lstMessage.lstTitle;
    document.getElementById('saved-autor1').innerHTML = `Posted by: ${lstMessage.lstUser}`;
    document.getElementById('saved-content1').innerHTML = lstMessage.lstContent;
  };
}

// renders the message in lastPost2
function renderLastMessage1(){
  const lstMessage = JSON.parse(localStorage.getItem('lastPost2'));
  if (lstMessage !== null){
    document.getElementById('saved-title2').innerHTML = lstMessage.savedTPost2;
    document.getElementById('saved-autor2').innerHTML = `Posted by: ${lstMessage.savedUPost2}`;
    document.getElementById('saved-content2').innerHTML = lstMessage.savedCPost2;
  };
}
// renders the message in lastPost3
function renderLastMessage2(){
  const lstMessage = JSON.parse(localStorage.getItem('lastPost3'));
  if (lstMessage !== null){
    document.getElementById('saved-title3').innerHTML = lstMessage.savedTPost3;
    document.getElementById('saved-autor3').innerHTML = `Posted by: ${lstMessage.savedUPost3}`;
    document.getElementById('saved-content3').innerHTML = lstMessage.savedCPost3;
  };
}

renderMessage();
renderLastMessage();
renderLastMessage1();
renderLastMessage2();

backButton.addEventListener('click', saveLastMessage);
  
