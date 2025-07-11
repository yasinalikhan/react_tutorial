// src/App.tsx
import { useEffect, useState } from 'react'; // Make sure useState and useEffect are imported!
import './App.css'; // Keep your CSS import

function App() {
  // State variables to hold the fetched data, loading status, and any errors
  const [posts, setPosts] = useState<any[]>([]); // Using any[] for simplicity here, but in real TS we'd define a Post interface
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Async function to fetch data from the API
  const fetchPosts = async () => {
    try {
      // 1. Set loading to true before starting the fetch operation
      setLoading(true);
      setError(null); // Clear any previous errors

      // 2. Make the API request using await fetch()
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      // 3. Check if the response was successful (status code 200-299)
      if (!response.ok) {
        // If not successful, throw an error with the status text
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }

      // 4. Parse the JSON response using await response.json()
      const data = await response.json();

      // 5. Update the 'posts' state with the fetched data
      setPosts(data);

    } catch (err: any) { // Type 'any' for err for now, in real TS you'd use 'unknown' and narrow
      // 6. If an error occurs during fetch or parsing, catch it
      console.error('Error fetching posts:', err);
      // Update the 'error' state with the error message
      setError(err.message || 'An unknown error occurred');
    } finally {
      // 7. This block always runs, regardless of success or failure
      // Set loading to false once the operation is complete
      setLoading(false);
    }
  };

  // useEffect hook to call fetchPosts when the component mounts
  useEffect(() => {
    fetchPosts(); // Call the async function
  }, []); // The empty dependency array [] means this effect runs only once after the initial render

  // Conditional rendering based on loading, error, and data presence
  return (
    <>
      <h1>Blog Posts from JSONPlaceholder</h1>

      {loading && <p>Loading posts...</p>} {/* Show loading message if loading is true */}

      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>Error: {error}</p>} {/* Show error message if error exists */}

      {!loading && !error && ( // Only render the list if not loading and no error
        <div>
          <h2>Posts:</h2>
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                {/* Optionally, you could show the body too: <p>{post.body}</p> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;