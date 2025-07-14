// src/useFetch.ts
import { useEffect, useState } from "react";

// Define a generic type <T> so this hook can fetch any type of data (e.g., Photo[], User[], etc.)
function useFetch<T>(url: string) {
  // State to hold the fetched data
  const [data, setData] = useState<T | null>(null);
  // State to track if the data is currently being loaded
  const [loading, setLoading] = useState(true);
  // State to hold any error messages
  const [error, setError] = useState<string | null>(null);

  // useEffect Hook to perform the data fetching side effect
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true at the start of the fetch
        setError(null); // Clear any previous errors

        const response = await fetch(url); // Perform the network request

        if (!response.ok) {
          // If the HTTP response was not OK (e.g., 404, 500), throw an error
          throw new Error(
            `HTTP error! Status: ${response.status} ${response.statusText}`
          );
        }

        const result: T = await response.json(); // Parse the JSON response
        setData(result); // Update the data state with the fetched result
      } catch (err: any) {
        // Catch any errors that occur during the fetch process
        console.error("Error in useFetch:", err);
        setError(err.message || "An unknown error occurred during fetch."); // Set the error state
      } finally {
        setLoading(false); // Always set loading to false once the operation is complete
      }
    };

    // Only fetch data if the URL is provided
    if (url) {
      fetchData();
    }

    // The effect re-runs whenever the 'url' dependency changes.
    // This ensures that if the URL changes, a new fetch operation is initiated.
  }, [url]);

  // Return the data, loading status, and error status
  return { data, loading, error };
}

export default useFetch;
