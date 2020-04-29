import React, { useState, useEffect } from "react";
import ImagesCard from './components/ImagesCard'

function App() {
  // app level stat
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid-cols-3 grid gap-4">
        {images.map(image =>(
          <ImagesCard key={image.id} image={image} />
        ))}
      </div>
    </div>

  );
}

export default App;
