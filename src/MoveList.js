import React, { Component } from 'react';
import Moves from './Moves';
import './MoveList.css';
import { Typography } from "antd";

const { Title } = Typography;

export class MoveList extends Component {
    render() {
        return (
            <div className="movies">
                {Moves.map(move => (
                    <div className="posters" key={move.id} >
                        <img src={move.img} alt="posters"width={238} height={340}/>
                        <div className="movie-title">
                            <Title level={4} style={{color: "white"}}>{move.name}</Title>
                        </div>
                    </div>
                ))}
            </div>
            
        )
    }
}

export default MoveList
