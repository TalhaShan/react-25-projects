import QRCode from 'react-qr-code';
import './App.css';
import Accordioan from './components/accordian';
import ImageSlider from './components/imageslider';
import LoadMoreData from './components/load-more-data';
import RandomColor from './components/randomColor';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';

function App() {
  return (
    <div className="App">
      {/* <RandomColor />
       <StarRating noOfStars={10} />
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"} />  
        <LoadMoreData />
        <TreeView menus={menus} />
      */
        <QRCodeGenerator />
      }
    </div>
  );
}

export default App;
