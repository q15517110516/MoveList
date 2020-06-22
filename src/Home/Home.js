import React, { Component } from 'react';
import Movies from '../Movies';
import { Typography } from "antd";
import "antd/dist/antd.css";
import './Home.css';
import $ from 'jquery';

const { Title } = Typography;

export class Home extends Component {
    constructor(){
        super();
        this.state={
            favorite: "",
            message: "12345",
            selectMovie: Movies[0],
            visible: false
        }
    }

    changeMovie = (id) => {
        this.setState({
            selectMovie: id
        });
        console.log(id);
    }

    
    showButtons = (visible) => {
        this.setState({
            visible
        })
        console.log(visible)
    }

    // handleEvent = (event) => {
    //     if(event.type === "mouseenter"){
    //         this.setState({
                
    //         });
            
            
    //     }
    //     else{
    //         this.setState({
    //             message: "12345"
    //         });
    //     }
        
    // }

    addToFavorites = () => {
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
        return (
            <div className="movies">
                {Movies.map(movie => (
                    <div className="posters" key={movie.id}>
                        <img className="movie-img" id={movie.id} src={movie.img} alt="posters"width={238} height={340} onMouseOver={() => {this.changeMovie(movie.id); this.showButtons(true)}} onMouseOut={() => this.showButtons(false)}/>
                        <div className="mask" style={(this.state.visible && this.state.id == movie.id) ? {display: "block"} : {display: "none"}}>{movie.id}</div>
                        
                        <div className="movie-title">
                            <Title level={4} style={{color: "white"}}>{movie.name}</Title>
                        </div>
                    </div>
                ))}

            </div>
            
        )
    }
}

export default Home
