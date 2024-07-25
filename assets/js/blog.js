// Change the theme

// Retrieve the form submission information from local storage

// Display the form inputs as a new post

const blogContainer = document.querySelector('.blog-container');

function createBlogPost() {

  const username = localStorage.getItem('Username');
  const blogTitle = localStorage.getItem('Blog-Title');
  const blogContent = localStorage.getItem('Blog-Content');

  console.log(username);
  console.log(blogTitle);
  console.log(blogContent);

  if (blogContent !== null) {
    const blogPostContainer = document.createElement("div");
    blogPostContainer.setAttribute('class', 'blog-post');

    const blogPostTitle = document.createElement("h2");
    blogPostTitle.setAttribute('class', 'blog-header');
    blogPostTitle.textContent = blogTitle;
    blogContainer.appendChild(blogPostTitle);

    const blogPostContent = document.createElement("p");
    blogPostContent.setAttribute('class', 'blog-content-text');
    blogPostContent.textContent = blogContent;
    blogContainer.appendChild(blogPostContent);

    const blogPostUsername = document.createElement("p");
    blogPostUsername.setAttribute('class', 'blog-username-text');
    blogPostUsername.textContent = 'Posted by:' + '' + username;
    blogContainer.appendChild(blogPostUsername);

    blogContainer.appendChild(blogPostContainer);
}};

function init() {
    createBlogPost();
}
  
init();