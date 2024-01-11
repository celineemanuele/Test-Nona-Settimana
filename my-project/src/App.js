import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Component/MyNavbar';
import MyGenres from './Component/MyGenres';
import MyFooter from './Component/MyFooter';
import GalleryHP from './Component/GalleryHP';
import GallerySV from './Component/GallerySV';
import GalleryLOTR from './Component/GalleryLOTR';

function App() {
  const appStyle = {
    backgroundColor: "#221f1f",
    height: "100%",
  };

    return (
    <div className="App" style={appStyle}>
      <MyNavbar />
      <MyGenres />
      <GalleryHP/>
      <GallerySV/>
      <GalleryLOTR/>
      <MyFooter/>
    </div>
  );
}

export default App;
