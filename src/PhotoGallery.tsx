// src/PhotoGallery.tsx
// Removed useState and useEffect imports as they are now encapsulated in useFetch
import useFetch from "./useFetch"; // Import our new custom hook

// Define an interface for a Photo object
interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function PhotoGallery() {
  // Use the custom useFetch hook to get data, loading, and error states.
  // We specify Photo[] as the generic type for the data we expect.
  // We also use destructuring with an alias: 'data' from the hook is renamed to 'photos' locally.
  const {
    data: photos,
    loading,
    error,
  } = useFetch<Photo[]>(
    "https://jsonplaceholder.typicode.com/photos?_limit=10"
  );

  // Conditional Rendering based on the states returned by useFetch
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
      <h2>Photo Gallery (Powered by useFetch Hook)</h2>

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

      {/* Only render photos if not loading, no error, and photos data exists */}
      {!loading &&
        !error &&
        photos &&
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
                  src={photo.thumbnailUrl}
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
          <p>No photos found.</p> // Message if fetch successful but no photos
        ))}
    </div>
  );
}

export default PhotoGallery;
