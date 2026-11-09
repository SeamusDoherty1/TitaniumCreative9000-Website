import { useState, useEffect } from 'react';

// 1. Match all PNGs in the target folder relative to this file
const imageModules = import.meta.glob('../assets/Funny Bits Chapters/Chapter 5/*.png');

export default function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = [];
      for (const path in imageModules) {
        // 2. Resolve the actual build URL for each image
        const mod = await imageModules[path]();
        loadedImages.push(mod.default);
      }
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`img-${index}`} width="150" />
      ))}
    </div>
  );
}
function ChapterIcons({chapterName = "Chapter Name", folderPath, pathid="Path name"}){
    return(
        <>
            <div>
                <div>

                </div>
            </div>
        </>
    )
}