// Save the input in the form to local storage

const blogUsername = document.querySelector('#username');
const blogTitle = document.querySelector('#blog-title');
const blogContent = document.querySelector('#blog-content');
const submitButton = document.querySelector('.submit-btn');
const msgDiv = document.querySelector('#msg');

// Create a function that will display a message in the message div
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

// When the submit button is clicked, the username, title, and content will saved to local storage
submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  // If the username, title, or content fields do not have content, an error message will display
  if (blogUsername.value === '') {
    displayMessage('error', 'Username cannot be blank! Please add a username before continuing.');
  } else if (blogTitle.value === '') {
    displayMessage('error', 'Title cannot be blank! Please add a title before continuing.');
  } else if (blogContent.value === '') {
    displayMessage('error', 'Content cannot be blank! Please add content before continuing.');
  } else {

    const blogPost = {
      title: blogTitle.value,
      content: blogContent.value.trim(),
      username: blogUsername.value
    }

    // Save items to local storage
    const allPosts = JSON.parse(localStorage.getItem('storedBlogPosts')) || [];
    allPosts.push(blogPost);
    localStorage.setItem('storedBlogPosts', JSON.stringify(allPosts));
    
    // Take the user to the blog page
    window.location.href = "blog.html";
  }
}
);