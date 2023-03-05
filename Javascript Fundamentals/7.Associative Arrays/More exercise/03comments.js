function comments(input) {
  const userList = [];
  const articlesList = [];
  const commentSection = {};

  for (const line of input) {
    if (line.includes('user')) {
      const userName = line.split(' ').pop();

      if (!userList.includes(userName)) {
        userList.push(userName);
      }
    } else if (line.includes('article')) {
      const articleName = line.split(' ').pop();

      if (!articlesList.includes(articleName)) {
        articlesList.push(articleName);
      }
    } else if (line.includes('posts on')) {
      const [userName, articleInfo] = line.split(' posts on ');
      const [articleName, commentTitle, comment] = articleInfo.split(/: |, /g);

      if (userList.includes(userName) && articlesList.includes(articleName)) {
        if (!commentSection.hasOwnProperty(articleName)) {
          commentSection[articleName] = [];
        }
        commentSection[articleName].push({ userName, commentTitle, comment });
      }
    }
  }
  
  const sortedComments = Object.keys(commentSection).sort((a,b) => commentSection[b].length - commentSection[a].length);
  
  for (const article of sortedComments) {
    console.log(`Comments on ${article}`);
    const comments = commentSection[article]
    
    comments.sort((a,b) => a.userName.localeCompare(b.userName))
    
    for (const comment of comments) {
        console.log(`--- From user ${comment.userName}: ${comment.commentTitle} - ${comment.comment}`);
    }
  }
}

comments([
  'user aUser123',
  'someUser posts on someArticle: NoTitle, stupidComment',
  'article Books',
  'article Movies',
  'article Shopping',
  'user someUser',
  'user uSeR4',
  'user lastUser',
  'uSeR4 posts on Books: I like books, I do really like them',
  'uSeR4 posts on Movies: I also like movies, I really do',
  'someUser posts on Shopping: title, I go shopping every day',
  'someUser posts on Movies: Like, I also like movies very much',
]);
console.log('------------');
comments([
  'user Mark',
  'Mark posts on someArticle: NoTitle, stupidComment',
  'article Bobby',
  'article Steven',
  'user Liam',
  'user Henry',
  'Mark posts on Bobby: Is, I do really like them',
  'Mark posts on Steven: title, Run',
  'someUser posts on Movies: Like',
]);
