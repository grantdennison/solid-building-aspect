const images = [];

function importAllImages(r) {
  r.keys().forEach(key => images.push(r(key)));
}

const imagesContext = require.context(
  '../../images/slider/',
  false,
  /\.(png|jpe?g|svg)$/
); // Adjust the file extensions as needed

importAllImages(imagesContext);

export default images;
