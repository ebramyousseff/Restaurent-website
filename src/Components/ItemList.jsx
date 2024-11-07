import {Card, Row, Col } from 'react-bootstrap';



const ItemList = ({itemsData})=>{
    return (
        <Row>
            {
                itemsData.length >= 1 ? (itemsData.map((item)=> {
                     return(
                        <Col key={item.id} sm='12' className='mb-3'>
                        <Card className='d-flex flex-row' style={{background:'#eeee'}}>
                            <Card.Img style={{height: '180px', width: '252px'}}  variant="top" src={item.imgUrl} />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-between'>
                                    <div className='item-title'>{item.title}</div>
                                    <div className='item-price'>{item.price}</div>
                                </Card.Title>
                                <Card.Text><div className='item-discription'>{item.description}
                                </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                     )   
                })) : <h3 className='text-center'>No Meals to show</h3>
            }
            
        </Row>
    )
}
export default ItemList;