import React, { Component } from 'react';
import "antd/dist/antd.css";
import { connect } from 'react-redux';
import { Typography, 
        Table,
        Button  } from "antd";
import './Cart.css';
import { removeMovie } from '../Actions/Actions';
import {
    DeleteOutlined
    } from '@ant-design/icons';


const { Title } = Typography;


export class Cart extends Component {
    constructor(){
        super();
        this.state = {
            selectedRowKeys: [],
            totalPrice: 0,
            columns: [
                {
                    title: 'Movie',
                    dataIndex: 'img',
                    render: (movie) => <img src={movie} alt="posters" width={119} height={170}/>
                },
                {
                    title: 'Name',
                    dataIndex: 'name'
                },
                {
                    title: 'Price',
                    dataIndex: 'price',
                    render: (price) => <span>${price}</span>
                },
                {
                    title: 'Remove',
                    key: 'remove',
                    render: (movie) => <a><DeleteOutlined style={{fontSize: "30px"}} onClick={() => this.removeMovie(movie.id)}/></a>
                }
            ]
            
        }
    }

    
    onSelectChange = (selectedRowKeys, selectedMovie) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        // console.log(selectedMovie.price);

        this.setState({ 
            selectedRowKeys,
        })
    }

    // getTotalPrice = (selectedMovie) => {
    //     this.setState({
    //         totalPrice: this.state.totalPrice + selectedMovie.price
    //     })
    // }

    removeMovie = (id) => {
        this.props.removeMovie(id)
    }


    render() {

        // add key to each movie
        const selectedMovies = this.props.cart;
        for(let i = 0; i < this.props.cart.length; i++){
            selectedMovies[i].key = this.props.cart[i].id;
        };
        

        const { selectedRowKeys, columns, totalPrice } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            // onSelect: this.getTotalPrice,
        };
        const hasSelected = selectedRowKeys.length > 0;


        let cartMovies = this.props.cart.length ? (
            <div className="cartTable">
                <Table
                    rowSelection={{
                        type: 'checkbox',
                        ...rowSelection
                    }} 
                    pagination={false} 
                    scroll={{ y: 1000 }} 
                    columns={columns} 
                    dataSource={selectedMovies} 
                />
                <span>Total: {(this.props.totalPrice).toFixed(2)}</span>
                
                <Button className="checkoutBtn" type="primary" disabled={!hasSelected} style={{ marginTop: 16 }}>Check Out</Button>
                <span >
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>

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
        cart: state.cart,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeMovie: (id) => {dispatch(removeMovie(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
