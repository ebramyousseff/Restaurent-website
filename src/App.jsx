import {Container} from 'react-bootstrap';
import NavBar from './Components/Navbar';
import Header from './Components/Header';
import Category from './Components/Category';
import ItemList from './Components/ItemList';
import {items} from './data'
import React ,{ useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

//filter by category

function App() {
const [itemsData, setItemsData] = useState(items)

//show just category whithout repeat
const allCategory = ['الكل', ...new Set(items.map ((i)=>i.category))]
const filterCategory = (cat) => {
  if (cat === 'الكل'){
    setItemsData(items)
  }else {
    const newArr = items.filter((item) => item.category === cat)
  setItemsData(newArr)
  }
  
}

// filter By Search
const filterBySearch = (word) => {
  if (word !== ""){
    const newArr = items.filter((item) => item.title === word)
  setItemsData(newArr)
  }
  
}

// const filterBySearch = (word) => {
//   if (word !== "") {
//     const newArr = items.filter((item) => item.title.toLowerCase().includes(word.toLowerCase()));
//     setItemsData(newArr);
//   } else {
//     setItemsData(items); // Reset to original list if search is cleared
//   }
// };


  return (
    <div>
      <NavBar  filterBySearch={filterBySearch}/>
      <Container>
        <Header/>
        <Zoom>
          <Category filterCategory={filterCategory} allCategory={allCategory}/> 
        </Zoom>
        <Bounce>
          <ItemList itemsData={itemsData}/>
        </Bounce>
      </Container>
    </div>
  )
}

export default App
