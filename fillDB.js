var casual = require('casual')

module.exports = () => {
  const data = { posts: [] }
  // Create 25 posts
  for (let i = 0; i < 25; i++) {
    data.posts.push({ id: i, title: casual.title, content: casual.sentences(n=50), author: casual.name })
  }
  return data
}

// on remplit la BDD du json-server via la commande
// json-server -p 4000 --watch fillDB.js
// le end point http://localhost:4000/posts permet de retourner nos posts 