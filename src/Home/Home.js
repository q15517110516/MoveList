import React, { Component } from 'react';
import Movies from '../Movies-img/Movies';
import { Typography } from "antd";
import "antd/dist/antd.css";
import './Home.css';
import $ from 'jquery';
import Favorites from '../Favorites/Favorites';
import copy from 'copy-to-clipboard';
import { OmitProps } from 'antd/lib/transfer/ListBody';

const { Title } = Typography;

export class Home extends Component {
    constructor(){
        super();
        this.state={
            favorite: [],
            selectMovie: Movies[0],
        }
    }


    changeMovie = (movie) => {
        this.setState({
            selectMovie: movie
        });
        // console.log(movie);
    }

    addToFavorites = (movie) => {
        
        let favorites = this.state.favorite;

        favorites.push(movie);

        this.setState({
            favorite: favorites
        });
        
        console.log(this.state.favorite)


    }


    componentDidMount = () => {
        // $(function(){
        //     $(".movie-img").mouseover(function(){          
        //         $(".mask").show();
                
        //     });
        //     $(".movie-img").mouseout(function(){
        //         $(".mask").hide();
        //     });
        // });
        
    }


    render() {

        // const movie = this.state.selectMovie;
        // console.log(this.state.favorite)

        return (
            <div className="movies">
                {Movies.map(movie => (
                    <div className="posters" key={movie.id}>
                        <img className="movie-img" id={movie.id} src={movie.img} alt="posters"width={238} height={340} onMouseOver={() => this.changeMovie(movie)}/>
                        <div className="movie-title">
                            <Title level={4} style={{color: "white"}}>{movie.name}</Title>
                            <button onClick={() => this.addToFavorites(movie)}>Click</button>
                            
                        </div>
                    </div>
                ))}

            </div>
            
        )
    }
}

export default Home
