// import PropTypes from 'prop-types'; 
import Ferrari from "../src/assets/csm_LaFerrari-web-doppel_c73fdfaa63.jpg";
import Porsche from "../src/assets/porsche.jpg";
// import Uxer from "../public/userIcon.jpg"

import ListCars from "./components/ListCars";


import './App.css';


function App() {

  const testCallBack = name => alert(`Hello ${name}`);

  const cars = [
    {
      imgSrc : "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/AMG-G-63/8591/1630666326351/front-left-side-47.jpg?tr=w-375",
      name : "Mercedes",
      price:`50 000 $`
    },
    {
      imgSrc : Ferrari,
      name : "Ferrari",
      price:`70 000 $`
    },
    {
      imgSrc : Porsche,
      name : "Porsche",
      price:`90 000 $`
    }
  ]

  // let gomycode = props.MsgGomycode
  return (
    <div>
      {/* <img src="/userIcon.jpg" alt="testImg" /> */}
      <ListCars carsList={cars} test="test" testCallBack={testCallBack} />
    </div>
  );
}

// App.defaultProps = {
//   MsgGomycode : "from gomycode"
// }

// App.propTypes = {
//   MsgGomycode: PropTypes.string
// }

export default App;
