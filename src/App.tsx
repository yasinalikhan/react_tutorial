// src/App.tsx
import "./App.css";
import PhotoGallery from "./PhotoGallery"; // Import your new component

function App() {
  return (
    <>
      {/* You can keep or remove existing App content here */}
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        My React Application
      </h1>
      <hr />

      {/* Render the PhotoGallery component */}
      <PhotoGallery />

      <hr style={{ marginTop: "40px" }} />
      <p style={{ textAlign: "center", fontSize: "0.8em", color: "#777" }}>
        End of App Content.
      </p>
    </>
  );
}

export default App;
