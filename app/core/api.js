const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch posts");
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

async function fetchPostById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch post with ID ${id}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching post with ID ${id}:`, error);
    return null;
  }
}

async function getPostIds() {
  const posts = await fetchPosts();
  const postIds = posts.map(post => post.id);
  return postIds;
}

async function getPostsByUserIdGreaterThanFive() {
  const posts = await fetchPosts();
  return posts.filter(post => post.userId > 5);
}


async function getPostsWithBodyLengthGreaterThan100() {
  const posts = await fetchPosts();
  return posts.filter(post => post.body.length > 100);
}

async function getPostsWithNam() {
  const posts = await fetchPosts();
  return posts.filter(post => post.title.includes("nam"));
}

async function getSimplifiedPosts() {
  const posts = await fetchPosts();
  return posts.map(post => ({ id: post.id, title: post.title }));
}

async function getTotalPostIdSum() {
  const posts = await fetchPosts();
  return posts.reduce((sum, post) => sum + post.id, 0);
}
