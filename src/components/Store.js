import React from 'react'
import { Col, Row } from 'react-bootstrap'
import storeItems from "../data/storeItems.json"
import StoreItem from './StoreItem'

const Store = () => {

    return (
        <div>
            <h1>Store</h1>

            <Row xs={1} md={2} lg={4} className='g-3'>
                {storeItems.map((item)=> {
                    return(
                        <Col key={item.id}>
                            <StoreItem {...item} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}
export default Store;


