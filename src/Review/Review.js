import React, { Component } from 'react';
import '../Movie.css';
import { Typography, Button } from "antd";
import "antd/dist/antd.css";
import { connect } from 'react-redux';

const { Title } = Typography;


export class Review extends Component {

    render() {

        let myMovie = this.props.myMovies.length ? (
            this.props.myMovies.map(movie => {
                return (
                    <div className="posters" key={movie.id}>
                        <div className="posters-container">
                            <img 
                                className="movie-img" 
                                src={movie.img} 
                                alt="posters" 
                                width={238} 
                                height={340}
                            />
                            <div className="card-img-overlay">
                                <Button 
                                    className="btn" 
                                    ghost
                                    shape="round"
                                    // onClick={() => this.checkOut(this.props.cart)}
                                >
                                    Play
                                </Button>
                            </div>
                            
                        </div>
                        
                        <div className="movie-title">
                            <Title level={4} style={{color: "white"}}>{movie.name}</Title>
                        </div>
                    </div>
                )
            })
        ) : (
            <Title level={1} style={{color: 'white'}}>You Don't Have Purchased Movies</Title>

        )
        return (
            <div className="movies">
                {myMovie}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myMovies: state.myMovies
    }
}


export default connect(mapStateToProps)(Review)
