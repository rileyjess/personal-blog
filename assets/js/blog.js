// Change the theme
const mainContent = document.querySelector('body');
const themeChange = document.querySelector('.theme-toggle-btn');

// Set default theme to light
let theme = 'light';

// Listen for a click event on the theme toggle button
themeChange.addEventListener('click', function () {
    // If theme is light, apply the dark background on click
    if (theme === 'light') {
        theme = 'dark';
        mainContent.setAttribute('class', 'dark');
    }
    // If the theme is dark, apply light background on click
    else {
        theme = 'light';
        mainContent.setAttribute('class', 'light');
    }
});


// Retrieve the form submission information from local storage, then display the form inputs as a new blog post
const blogContainer = document.querySelector('.blog-container');

function displayBlogPost() {

  const blogPost = JSON.parse(localStorage.getItem('storedBlogPost'));

  console.log(blogPost);

  if (blogPost !== null) {
    const blogPostContainer = document.createElement("div");
    blogPostContainer.setAttribute('class', 'blog-post');

    const blogPostTitle = document.createElement("h2");
    blogPostTitle.setAttribute('class', 'blog-header');
    blogPostTitle.textContent = blogPost.blogTitle;
    blogContainer.appendChild(blogPostTitle);

    const blogPostContent = document.createElement("p");
    blogPostContent.setAttribute('class', 'blog-content-text');
    blogPostContent.textContent = blogPost.blogContent;
    blogContainer.appendChild(blogPostContent);

    const blogPostUsername = document.createElement("p");
    blogPostUsername.setAttribute('class', 'blog-username-text');
    blogPostUsername.textContent = 'Posted by:' + ' ' + blogPost.username;
    blogContainer.appendChild(blogPostUsername);

    blogContainer.appendChild(blogPostContainer);
}};


// When the page loads, the blogs will be displayed
function init() {
    displayBlogPost();
}
  
init();