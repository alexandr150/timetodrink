import React from 'react';
import "./ProgressBar.css";

class ProgressBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: 0
        }
    };

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({progress: this.props.progress});
    };

    componentDidMount() {
        this.setState({progress: this.props.progress});
    }

    render() {
        let topProgressLine = parseInt(this.state.progress / 10 , 10);
        if (topProgressLine >= 10) topProgressLine = 10;
        for (let i = 0; i < topProgressLine; i++) {
            document.getElementById('line' + i).style.backgroundColor = '#f1000e';
        }
        return (
            <div>
                <div className='line9' id='line9'/>
                <div className='line8' id='line8'/>
                <div className='line7' id='line7'/>
                <div className='line6' id='line6'/>
                <div className='line5' id='line5'/>
                <div className='line4' id='line4'/>
                <div className='line3' id='line3'/>
                <div className='line2' id='line2'/>
                <div className='line1' id='line1'/>
                <div className='line0' id='line0'/>
            </div>
        );
    };
}


export default ProgressBar;