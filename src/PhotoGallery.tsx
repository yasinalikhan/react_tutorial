// src/PhotoGallery.tsx
import { useEffect, useState } from "react";

// Define an interface for a Photo object for TypeScript
interface Photo {
  albumId: number; // Keep all properties from the API for type safety, even if not directly used
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function PhotoGallery() {
  // State variables for data, loading status, and error messages
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Async function to fetch data from the API
  const fetchPhotos = async () => {
    try {
      setLoading(true); // Set loading to true when starting the fetch
      setError(null); // Clear any previous errors

      // Fetch data from JSONPlaceholder with a limit of 10 photos
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );

      // Check if the network request was successful (status 200-299)
      if (!response.ok) {
        // If not successful, throw an error
        throw new Error(
          `HTTP error! status: ${response.status} - ${response.statusText}`
        );
      }

      // Parse the JSON response
      const data: Photo[] = await response.json(); // Explicitly type data as Photo[]

      // Update the 'photos' state with the fetched data
      setPhotos(data);
    } catch (err: any) {
      // Catch any errors during the fetch or JSON parsing
      console.error("Error fetching photos:", err);
      // Update the 'error' state with the error message
      setError(
        err.message || "An unknown error occurred while fetching photos."
      );
    } finally {
      // This block runs after try or catch, ensuring loading is set to false
      setLoading(false);
    }
  };

  // useEffect hook to call fetchPhotos when the component mounts
  useEffect(() => {
    fetchPhotos(); // Execute the data fetching function
  }, []); // Empty dependency array means this effect runs ONLY ONCE after the initial render

  // Conditional Rendering based on state
  return (
    <div
      className="photo-gallery"
      style={{
        padding: "20px",
        border: "1px solid #eee",
        borderRadius: "8px",
        margin: "20px auto",
        maxWidth: "800px",
        textAlign: "center",
      }}
    >
      <h2>Photo Gallery</h2>

      {loading && (
        <p style={{ fontSize: "1.2em", color: "#555" }}>Loading photos...</p>
      )}

      {error && (
        <p
          style={{
            color: "red",
            fontWeight: "bold",
            border: "1px solid red",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Error: {error}
        </p>
      )}

      {!loading &&
        !error && // Only render photos if not loading and no error
        (photos.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              gap: "15px",
            }}
          >
            {photos.map((photo) => (
              <div
                key={photo.id}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <img
                  src={photo.thumbnailUrl} // Use thumbnailUrl for smaller images
                  alt={photo.title}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "4px",
                  }}
                />
                <p style={{ fontSize: "0.9em", marginTop: "5px" }}>
                  {photo.title}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No photos found.</p> // Message if no photos are returned
        ))}
    </div>
  );
}

export default PhotoGallery;
