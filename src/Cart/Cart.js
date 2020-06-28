import React, { Component } from 'react';
import "antd/dist/antd.css";
import { connect } from 'react-redux';
import { Typography, Button } from "antd";
import '../Movie.css';

const { Title } = Typography;


export class Cart extends Component {
    render() {
        
        let cartMovies = this.props.cart.length ? (
            this.props.cart.map(movie => {
                return (
                    <div className="posters" key={movie.id}>
                        <img className="movie-img" src={movie.img} alt="posters"width={238} height={340}/>
                        <div className="movie-title">
                            <Title level={4} style={{color: "white"}}>{movie.name}</Title>
                        </div>
                    </div>
                )
            })
        ) : (
            <Title level={1} style={{color: 'white'}}>You Cart Is Empty</Title>
        )

        return (
            <div className="movies">
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
