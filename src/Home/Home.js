import React, { Component } from 'react';
import Movies from '../Movies-img/Movies';
import { Typography, Button } from "antd";
import "antd/dist/antd.css";
import './Home.css';
import $ from 'jquery';
import Favorites from '../Favorites/Favorites';

const { Title } = Typography;

export class Home extends Component {
    constructor(){
        super();
        this.state={
            favorite: [],
            selectMovie: Movies[0],
            disabled: false
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
        
        for(let i = 0; i < favorites.length; i++){
            if(favorites.includes(movie)){
                this.setState({
                    disabled: true
                })

            }
        }

        this.setState({
            favorite: favorites,
        });

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

        const movie = this.state.favorite;
        // console.log(movie)



        return (
            <div className="movies">
                {Movies.map(movie => (
                    <div className="posters" key={movie.id}>
                        <img className="movie-img" id={movie.id} src={movie.img} alt="posters"width={238} height={340} onMouseOver={() => this.changeMovie(movie)}/>
                        <div className="movie-title">
                            <Title level={4} style={{color: "white"}}>{movie.name}</Title>
                            <Button type="primary" disabled={this.state.disabled} onClick={() => this.addToFavorites(movie)}>Click</Button>
                        </div>
                    </div>
                ))}

            </div>
            
        )
    }
}

export default Home
