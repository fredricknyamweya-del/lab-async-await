// Write your code here!
// index.js

// Async function to fetch posts from external API
// index.js

// Async function to fetch posts from external API
async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();
    displayPosts(posts);

  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Function to display posts on the page
function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Call the async function when the script loads
getPosts();
