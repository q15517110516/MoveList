import React, { Component } from 'react';
import { Typography, Button } from "antd";
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.css';
import '../Movie.css';
import { connect } from 'react-redux';
import { addToFavorites, 
            addToCart 
        } from '../Actions/Actions';


const { Title } = Typography;

export class Home extends Component {
    
    addToFavorites = (id) => {
        this.props.addToFavorites(id)
    }

    addToCart = (id) => {
        this.props.addToCart(id)
    }

    render() {
        // const buttons = this.state.isMouseOver ? this.props.movie : null;
        let movieList = this.props.movies.map(movie => {
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
                            <Button type="primary" onClick={() => this.addToFavorites(movie.id)}>ADD1</Button>
                            <Button type="primary" onClick={() => this.addToCart(movie.id)}>ADD2</Button>
                        </div>
                    </div>
                    <div className="movie-title">
                        <Title level={4} style={{color: "white"}}>{movie.name}</Title>
                    </div>
                </div>
            )
        })
        return (
            <div className="movies">
                {movieList}
            </div>
            
        )
    }
}

// takes the state in our reducer and pass it as props in our file
const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToFavorites: (id) => {dispatch(addToFavorites(id))},
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
