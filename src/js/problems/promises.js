let posts = [
  {title: 'post1', description: 'description1'},
  {title: 'post2', description: 'description2'},
]

const getPosts = () => {
  posts.forEach((post) => {
    let elem = document.createElement('li');
    elem.innerHTML = `${post.title}`;
    document.getElementById('content').appendChild(elem);
  });
  document.getElementById('content').appendChild(document.createElement('hr'));
}

const createPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({title: 'post3', description: 'description 3'});

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }

    }, 1000);
  });
}

createPost()
  .then(getPosts)
  .catch(err => console.log(err));
//getPosts();
