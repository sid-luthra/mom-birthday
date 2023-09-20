import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const modules = import.meta.glob("../assets/images/*.jpeg", { as: "raw" });

const images = [];

for (const path in modules) {
  const p = new URL(path, import.meta.url).href;
  images.push(p);
}

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

shuffle(images);

export default function Gallery() {
  return (
    <ResponsiveMasonry
      className="gallery-container"
      columnsCountBreakPoints={{ 350: 2, 900: 3 }}
    >
      <Masonry gutter="5px">
        <div>Test message! Happy birthday mom! We love you so much.</div>
        {images.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
