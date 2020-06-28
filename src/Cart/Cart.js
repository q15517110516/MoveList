import React, { Component } from 'react';
import "antd/dist/antd.css";
import { connect } from 'react-redux';
import { Typography, 
        Button,
        Table  } from "antd";
import './Cart.css';

const { Title } = Typography;

const columns = [
    {
        title: 'Movie',
        dataIndex: 'img',
        render: movie => <img src={movie} alt="posters" width={119} height={170}/>
    },
    {
        title: 'Name',
        dataIndex: 'name'
    },
    // {
    //     title: 'Price',
    //     dataIndex: 'price'
    // },
    // {
    //     title: 'Quantity',
    //     dataIndex: 'quantity'
    // }
]


export class Cart extends Component {
    constructor(){
        super();
        this.state = {
            selectedRowKeys: [],
            
            // loading: false
        }
    }

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ 
            selectedRowKeys 
        });
    };


    render() {

        // add key to each movie
        const selectedMovies = this.props.cart;
        for(let i = 0; i < this.props.cart.length; i++){
            selectedMovies[i].key = this.props.cart[i].id;
        }
        

        const { selectedRowKeys } = this.state;

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        }
        
        const hasSelected = selectedRowKeys.length > 0;


        let cartMovies = this.props.cart.length ? (
            
            <Table 
                    rowSelection={{
                        type: 'checkbox',
                        ...rowSelection
                    }} 
                    // rowKey={() => this.getID(this.props.cart)}
                    pagination={false} 
                    scroll={{ y: 1000 }} 
                    columns={columns} 
                    dataSource={selectedMovies} />
        ) : (
            <Title level={1} style={{color: 'white'}}>You Cart Is Empty</Title>
        )

        return (
            <div className="cart">
                {cartMovies}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart)
