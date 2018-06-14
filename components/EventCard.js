import React, { Component } from "react";
import Link from "next/link";
class EventCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    animate = () => {
        this.setState({
            animated: !this.state.animated
        })
    }

    render() {
        const opacity = this.props.show ? 1 : 0;
        return (
            <div style={{ opacity }}
                className="card"
                onClick={() => this.props.handleClick(this.props.index, this.refs.cool)}
                ref="cool">
                <div className="element" style={{ cursor: "pointer" }}>
                    <div className="img-container">
                        <img src={this.props.src} />
                    </div>

                    <div className="event-title"><p>{this.props.title}</p></div>
                </div >
                <style jsx>{`
                div.card{
                    width: 25%;
                    height: auto;
                    background: #eeeeee;
                    z-index: 10;
                    transition: transform 0.6s;
                    margin:5px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                    border-radius:4px;
                }
        .element{
            width: 100%;
            height: auto;
            border-radius:50%;  
        }
        .img-container{
            width:100%;
            height:auto;
        }
        img{
            width:100%;
            height:auto;
        }
        .event-title{
            text-align:center;
        }
        .normal{
            transition : all 1s;
        }
        @keyframes cool{
            from{
                position:fixed;
            }
            to{
                position:fixed;
            left:20px;
            top:20px;
            }
        }
        .animate{
            position:fixed;
            left:20px;
            top:20px;
            animation:cool 1s;
        }
        `}

                </style>
            </div>
        )
    }
}
export default EventCard;