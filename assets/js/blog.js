// Change the theme

// Retrieve the form submission information from local storage

// Display the form inputs as a new post

const blogContainer = document.querySelector('.blog-container');

// function displayBlogPosts() {

//   const blogPosts = JSON.parse(localStorage.getItem('storedBlogPosts'));

//   console.log(blogPosts);

//   if (blogPosts !== null) {
//     const blogPostContainer = document.createElement("div");
//     blogPostContainer.setAttribute('class', 'blog-post');

//     const blogPostTitle = document.createElement("h2");
//     blogPostTitle.setAttribute('class', 'blog-header');
//     blogPostTitle.textContent = blogPosts.blogTitle;
//     blogContainer.appendChild(blogPostTitle);

//     const blogPostContent = document.createElement("p");
//     blogPostContent.setAttribute('class', 'blog-content-text');
//     blogPostContent.textContent = blogPosts.blogContent;
//     blogContainer.appendChild(blogPostContent);

//     const blogPostUsername = document.createElement("p");
//     blogPostUsername.setAttribute('class', 'blog-username-text');
//     blogPostUsername.textContent = 'Posted by:' + ' ' + blogPosts.username;
//     blogContainer.appendChild(blogPostUsername);

//     blogContainer.appendChild(blogPostContainer);
// }};

function displayBlogPosts() {
  const blogPosts = JSON.parse(localStorage.getItem('storedBlogPosts'));
  const blogPostsArray =  Object.keys(blogPosts).map(key => blogPosts[key]);

  if (blogPostsArray !== null) {
    blogPostsArray.forEach(post => {
      const blogPostContainer = document.createElement("div");
      blogPostContainer.setAttribute('class', 'blog-post');

      const blogPostTitle = document.createElement("h2");
      blogPostTitle.setAttribute('class', 'blog-header');
      blogPostTitle.textContent = blogPosts.blogTitle;
      blogPostContainer.appendChild(blogPostTitle);

      const blogPostContent = document.createElement("p");
      blogPostContent.setAttribute('class', 'blog-content-text');
      blogPostContent.textContent = blogPosts.blogContent;
      blogPostContainer.appendChild(blogPostContent);

      const blogPostUsername = document.createElement("p");
      blogPostUsername.setAttribute('class', 'blog-username-text');
      blogPostUsername.textContent = 'Posted by: ' + blogPosts.username;
      blogPostContainer.appendChild(blogPostUsername);

      blogContainer.appendChild(blogPostContainer);
    });
  }
}


function init() {
    displayBlogPosts();
}
  
init();