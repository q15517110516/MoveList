import React, { Component } from 'react';
// import Movies from '../Movies-img/Movies';
import { Typography, Button } from "antd";
import "antd/dist/antd.css";
import './Home.css';
import $ from 'jquery';
import Favorites from '../Favorites/Favorites';
import { connect } from 'react-redux';

const { Title } = Typography;

export class Home extends Component {
    constructor(){
        super();
        this.state={
            favorite: [],
            // selectMovie: Movies[0],
            disabled: false,
            btnLabel: "Add"
        }
    }


    changeMovie = (movie) => {
        this.setState({
            // selectMovie: movie
        });
        // console.log(movie);
    }

    addToFavorites = (movie) => {
        let favorites = this.state.favorite;
        let movieID = movie.id;

        // this.setState({
        //     btnLabel: 'Already Added'
        // })

        // if selected movie already added in favorite
        if(this.checkMovie(movieID)){
            console.log('already added');
            // let index = favorites.findIndex(x => x.id == movieID);
        }
        //if not, add the movie in favorite
        else{
            favorites.push(movie);
        }

        this.setState({
            favorite: favorites,
        });

        console.log(this.state.favorite);

    }

    // check if selected movie is already in favorites
    checkMovie = (movieID) => {
        let favorites = this.state.favorite;
        return favorites.some(function(item){
            return item.id === movieID;
        })
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
        console.log(this.props.movies)
        return (
            <div className="movies">
                {this.props.movies.map(movie => (
                    <div className="posters" key={movie.id}>
                        <img className="movie-img" id={movie.id} src={movie.img} alt="posters"width={238} height={340} onMouseOver={() => this.changeMovie(movie)}/>
                        <div className="movie-title">
                            <Title level={4} style={{color: "white"}}>{movie.name}</Title>
                            <Button type="primary" disabled={this.state.disabled} onClick={() => this.addToFavorites(movie)}>{this.state.btnLabel}</Button>
                        </div>
                    </div>
                ))}

            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Home)
