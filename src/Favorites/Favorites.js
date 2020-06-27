import React, { Component } from 'react';
import "antd/dist/antd.css";
import { connect } from 'react-redux';
import { Typography, Button } from "antd";
import '../Movie.css';

const { Title } = Typography;

export class Favorites extends Component {
    
    render() {
        
        
        let addedMovies = this.props.favorite.length ? (
            this.props.favorite.map(movie => {
                return (
                    <div className="posters" key={movie.id}>
                        <img className="movie-img" id={movie.id} src={movie.img} alt="posters"width={238} height={340}/>
                        <div className="movie-title">
                            <Title level={4} style={{color: "white"}}>{movie.name}</Title>
                        </div>
                    </div>
                )
            })
        ) : (
            <Title level={1} style={{color: 'white'}}>You Don't Have Favorite Movies</Title>
        )
        return (
            <div className="movies">
                {addedMovies}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favorite: state.favorite
    }
}

export default connect(mapStateToProps)(Favorites)
