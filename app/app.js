document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("posts-container");
  const resultContainer = document.getElementById("result-container");

  document.getElementById("load-posts").addEventListener("click", async () => {
    const posts = await fetchPosts();
    renderPosts(posts);
  });

  document.getElementById("load-ids").addEventListener("click", async () => {
    const ids = await getPostIds();
    renderResult("All Post IDs:", ids.join(", "));
  });

  document.getElementById("load-nam-posts").addEventListener("click", async () => {
    const posts = await getPostsWithNam();
    renderPosts(posts);
  });

  document.getElementById("load-simplified").addEventListener("click", async () => {
    const posts = await getSimplifiedPosts();
    renderResult("Simplified Posts:", JSON.stringify(posts, null, 2));
  });

  document.getElementById("load-id-sum").addEventListener("click", async () => {
    const sum = await getTotalPostIdSum();
    renderResult("Total Sum of Post IDs:", sum);
  });

  function renderPosts(posts) {
    postsContainer.innerHTML = "";

    posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.classList.add("col-md-4");

      postElement.innerHTML = `
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${post.title}</h5>
                      <p class="card-text">${post.body}</p>
                  </div>
              </div>
          `;

      postsContainer.appendChild(postElement);
    });
  }

  function renderResult(title, content) {
    resultContainer.innerHTML = `
          <div class="alert alert-info">
              <h4>${title}</h4>
              <pre>${content}</pre>
          </div>
      `;
  }
});
