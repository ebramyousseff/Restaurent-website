import {Row, Col } from 'react-bootstrap';



const Category = ({filterCategory, allCategory})=> {

    //to filter by Category
    const onFilter= (cat) => {
        filterCategory(cat)
    }
    return (
        <Row className='my-2 mb-5'>
            <Col sm= '12' className='d-flex justify-content-center'>
                {
                    allCategory.length >= 1 ? (
                       allCategory.map((cat)=>{
                        return (
                            <div>
                            <button onClick={()=> onFilter(cat)} className='btn mx-2'>{cat}</button>
                            </div>
                        )
                       }) 
                    ) : <h3> No Data to show</h3>
                }
               
            </Col>
        </Row>
    )
}
export default Category;