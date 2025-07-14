// src/App.tsx
import "./App.css";
// Make sure to import PhotoGallery
import PhotoGallery from "./PhotoGallery";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        My React Application
      </h1>
      <hr />

      {/* Render the PhotoGallery component, now powered by useFetch */}
      <PhotoGallery />

      <hr style={{ marginTop: "40px" }} />
      <p style={{ textAlign: "center", fontSize: "0.8em", color: "#777" }}>
        End of App Content.
      </p>
    </>
  );
}

export default App;
