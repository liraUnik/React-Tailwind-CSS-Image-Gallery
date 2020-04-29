import React, { useState, useEffect } from "react";

function App() {
  // app level stat
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl">Photo by LiRA</div>
        <ul>
          <li>
            <strong>Views:</strong>
            4000
          </li>
          <li>
            <strong>Downloads:</strong>
            400
          </li>
          <li>
            <strong>Likes:</strong>
            356
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 mr-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 mr-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 mr-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #tag1
        </span>
      </div>
    </div>
  );
}

export default App;
