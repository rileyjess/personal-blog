// Save the input in the form to local storage

const username = document.querySelector('#username');
const blogTitle = document.querySelector('#blog-title');
const blogContent = document.querySelector('#blog-content');
const submitButton = document.querySelector('.submit-btn');
const msgDiv = document.querySelector('#msg');

// Create a function that will display a message in the #msg div
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}

// When the submit button is clicked, the username, title, and content will saved to local storage
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const blogPosts = {
      blogTitle: blogTitle.value,
      blogContent: blogContent.value.trim(),
      username: username.value,
    }
  
    // If the username, title, or content fields do not have content, an error message will display
    if (username.value === '') {
      displayMessage('error', 'Username cannot be blank! Please add a username before continuing.');
    } else if (blogTitle.value === '') {
      displayMessage('error', 'Title cannot be blank! Please add a title before continuing.');
    } else if (blogContent.value === '') {
      displayMessage('error', 'Content cannot be blank! Please add content before continuing.');
    //   If there are no errors, clicking the button will bring the user to the blog page
    } else {
      window.location.href = "blog.html";
    }

    // Save items to local storage
    localStorage.setItem('storedBlogPosts', JSON.stringify(blogPosts));
});