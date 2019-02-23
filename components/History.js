import React, { Component } from 'react'
import { connect } from 'react-redux'

class History extends Component {

    render() {
        if (this.props.number == 0) {
            return (
                <div>
                    <ul>
                        <li>ถามหมอ</li>
                    </ul>
                    <style jsx>{`
                    //History
                        ul {
                        list-style-type: none;
                        overflow: hidden;
                        }
                        li {
                        margin-left: 5px;
                        margin-right: 5px;
                        margin-bottom: 10px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: 10px;
                        padding-right: 10px;
                        color: white;
                        background-color: #3f51b5;
                        cursor: pointer;
                        float: left;
                        } 
                    `}</style>
                </div>
            );
        }
        else if (this.props.number == 1 || this.props.number == 2) {
            return (
                <div>
                    <ul>
                        <li>ถามหมอ</li>
                        <li>{this.props.history[0]}</li>
                    </ul>
                    <style jsx>{`
                    //History
                        ul {
                        list-style-type: none;
                        overflow: hidden;
                        }
                        li {
                        margin-left: 5px;
                        margin-right: 5px;
                        margin-bottom: 10px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: 10px;
                        padding-right: 10px;
                        color: white;
                        background-color: #3f51b5;
                        cursor: pointer;
                        float: left;
                        } 
                    `}</style>
                </div>
            );
        }
        else if (this.props.number == 3) {
            return (
                <div>
                    <ul>
                        <li>ถามหมอ</li>
                        <li>{this.props.history[0]}</li>
                        <li>{this.props.history[2]}</li>
                    </ul>
                    <style jsx>{`
                    //History
                        ul {
                        list-style-type: none;
                        overflow: hidden;
                        }
                        li {
                        margin-left: 5px;
                        margin-right: 5px;
                        margin-bottom: 10px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: 10px;
                        padding-right: 10px;
                        color: white;
                        background-color: #3f51b5;
                        cursor: pointer;
                        float: left;
                        } 
                    `}</style>
                </div>
            );
        }
        else if (this.props.number == 4) {
            return (
                <div>
                    <ul>
                        <li>ถามหมอ</li>
                        <li>{this.props.history[0]}</li>
                        <li>{this.props.history[2]}</li>
                        <li>{this.props.history[3]}</li>
                    </ul>
                    <style jsx>{`
                    //History
                        ul {
                        list-style-type: none;
                        overflow: hidden;
                        }
                        li {
                        margin-left: 5px;
                        margin-right: 5px;
                        margin-bottom: 10px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: 10px;
                        padding-right: 10px;
                        color: white;
                        background-color: #3f51b5;
                        cursor: pointer;
                        float: left;
                        } 
                    `}</style>
                </div>
            );
        }
        else if (this.props.number == 5) {
            return (
                <div>
                    <ul>
                        <li>ถามหมอ</li>
                        <li>{this.props.history[0]}</li>
                        <li>{this.props.history[2]}</li>
                        <li>{this.props.history[3]}</li>
                        <li>{this.props.history[4]}</li>
                    </ul>
                    <style jsx>{`
                    //History
                        ul {
                        list-style-type: none;
                        overflow: hidden;
                        }
                        li {
                        margin-left: 5px;
                        margin-right: 5px;
                        margin-bottom: 10px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: 10px;
                        padding-right: 10px;
                        color: white;
                        background-color: #3f51b5;
                        cursor: pointer;
                        float: left;
                        } 
                    `}</style>
                </div>
            );
        }
        else if (this.props.number == 5) {
            return (
                <div>
                    <ul>
                        <li>ถามหมอ</li>
                        <li>{this.props.history[0]}</li>
                        <li>{this.props.history[2]}</li>
                        <li>{this.props.history[3]}</li>
                        <li>{this.props.history[4]}</li>
                        <li>{this.props.history[5]}</li>
                    </ul>
                    <style jsx>{`
                    //History
                        ul {
                        list-style-type: none;
                        overflow: hidden;
                        }
                        li {
                        margin-left: 5px;
                        margin-right: 5px;
                        margin-bottom: 10px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: 10px;
                        padding-right: 10px;
                        color: white;
                        background-color: #3f51b5;
                        cursor: pointer;
                        float: left;
                        } 
                    `}</style>
                </div>
            );
        }
        else if (this.props.number == 6) {
            return (
                <div>
                    <ul>
                        <li>ถามหมอ</li>
                        <li>{this.props.history[0]}</li>
                        <li>{this.props.history[2]}</li>
                        <li>{this.props.history[3]}</li>
                        <li>{this.props.history[4]}</li>
                        <li>{this.props.history[5]}</li>
                    </ul>
                    <style jsx>{`
                    //History
                        ul {
                        list-style-type: none;
                        overflow: hidden;
                        }
                        li {
                        margin-left: 5px;
                        margin-right: 5px;
                        margin-bottom: 10px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: 10px;
                        padding-right: 10px;
                        color: white;
                        background-color: #3f51b5;
                        cursor: pointer;
                        float: left;
                        } 
                    `}</style>
                </div>
            );
        }
        else if (this.props.number == 7) {
            return (
                <div>
                    <ul>
                        <li>ถามหมอ</li>
                        <li>{this.props.history[0]}</li>
                        <li>{this.props.history[2]}</li>
                        <li>{this.props.history[3]}</li>
                        <li>{this.props.history[4]}</li>
                        <li>{this.props.history[5]}</li>
                        <li>{this.props.history[6]}</li>
                    </ul>
                    <style jsx>{`
                    //History
                        ul {
                        list-style-type: none;
                        overflow: hidden;
                        }
                        li {
                        margin-left: 5px;
                        margin-right: 5px;
                        margin-bottom: 10px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: 10px;
                        padding-right: 10px;
                        color: white;
                        background-color: #3f51b5;
                        cursor: pointer;
                        float: left;
                        } 
                    `}</style>
                </div>
            );
        }
        else if (this.props.number == 8) {
            return (
                <div>
                    <ul>
                        <li>ถามหมอ</li>
                        <li>{this.props.history[0]}</li>
                        <li>{this.props.history[2]}</li>
                        <li>{this.props.history[3]}</li>
                        <li>{this.props.history[4]}</li>
                        <li>{this.props.history[5]}</li>
                        <li>{this.props.history[6]}</li>
                        <li>{this.props.history[7]}</li>
                    </ul>
                    <style jsx>{`
                    //History
                        ul {
                        list-style-type: none;
                        overflow: hidden;
                        }
                        li {
                        margin-left: 5px;
                        margin-right: 5px;
                        margin-bottom: 10px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: 10px;
                        padding-right: 10px;
                        color: white;
                        background-color: #3f51b5;
                        cursor: pointer;
                        float: left;
                        } 
                    `}</style>
                </div>
            );
        }
        else if (this.props.number == 9) {
            return (
                <div>
                    <ul>
                        <li>ถามหมอ</li>
                        <li>{this.props.history[0]}</li>
                        <li>{this.props.history[2]}</li>
                        <li>{this.props.history[3]}</li>
                        <li>{this.props.history[4]}</li>
                        <li>{this.props.history[5]}</li>
                        <li>{this.props.history[6]}</li>
                        <li>{this.props.history[7]}</li>
                        <li>{this.props.history[8]}</li>
                    </ul>
                    <style jsx>{`
                    //History
                        ul {
                        list-style-type: none;
                        overflow: hidden;
                        }
                        li {
                        margin-left: 5px;
                        margin-right: 5px;
                        margin-bottom: 10px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: 10px;
                        padding-right: 10px;
                        color: white;
                        background-color: #3f51b5;
                        cursor: pointer;
                        float: left;
                        } 
                    `}</style>
                </div>
            );
        }
        else if (this.props.number == 10) {
            return (
                <div>
                    <ul>
                        <li>ถามหมอ</li>
                        <li>{this.props.history[0]}</li>
                        <li>{this.props.history[2]}</li>
                        <li>{this.props.history[3]}</li>
                        <li>{this.props.history[4]}</li>
                        <li>{this.props.history[5]}</li>
                        <li>{this.props.history[6]}</li>
                        <li>{this.props.history[7]}</li>
                        <li>{this.props.history[8]}</li>
                        <li>{this.props.history[9]}</li>
                    </ul>
                    <style jsx>{`
                    //History
                        ul {
                        list-style-type: none;
                        overflow: hidden;
                        }
                        li {
                        margin-left: 5px;
                        margin-right: 5px;
                        margin-bottom: 10px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: 10px;
                        padding-right: 10px;
                        color: white;
                        background-color: #3f51b5;
                        cursor: pointer;
                        float: left;
                        } 
                    `}</style>
                </div>
            );
        }
        else if (this.props.number == 11) {
            return (
                <div>
                    <ul>
                        <li>ถามหมอ</li>
                        <li>{this.props.history[0]}</li>
                        <li>{this.props.history[2]}</li>
                        <li>{this.props.history[3]}</li>
                        <li>{this.props.history[4]}</li>
                        <li>{this.props.history[5]}</li>
                        <li>{this.props.history[6]}</li>
                        <li>{this.props.history[7]}</li>
                        <li>{this.props.history[8]}</li>
                        <li>{this.props.history[9]}</li>
                        <li>{this.props.history[10]}</li>
                    </ul>
                    <style jsx>{`
                    //History
                        ul {
                        list-style-type: none;
                        overflow: hidden;
                        }
                        li {
                        margin-left: 5px;
                        margin-right: 5px;
                        margin-bottom: 10px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: 10px;
                        padding-right: 10px;
                        color: white;
                        background-color: #3f51b5;
                        cursor: pointer;
                        float: left;
                        } 
                    `}</style>
                </div>
            );
        }

    }
}

const mapStateToProps = ({ history, number }) => {
    return { history, number }
}

export default connect(mapStateToProps)(History);