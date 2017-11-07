import React from 'react';
import './style.css';

class Bar extends React.Component {
    render() {
        const wordings = this.props.wordings || {
            desc: '流量趋势',
        }
        return (
            <div className="echart-header">
                <label>{wordings.desc}</label>
                <ul className="weme-link">
                    <li>详细》</li>
                </ul>
                <div className="weme-question">
                    <span>?</span>
                </div>
            </div>
        )
    }
}
export default Bar;