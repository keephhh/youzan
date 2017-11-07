import React from 'react';
import PropTypes from 'prop-types';
 //import { Route } from 'react-router-dom';
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
//     Redirect,
//         Link
// } from 'react-router-dom'
import './style.css';

// console.log(Link)

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const {onClick, id} = this.props;
        onClick(id);
    }
    render() {
        return (
            <div className="contain">
                <div className="weme-store-board">
                    <div className="weme-title">
                        <div className="weme-store-board-logo">
                            <i className="iconfont icon-zan">&#xe6a0;</i>
                        </div>
                        <div className="weme-store-board-desc">
                            <h2>一镇一品OTOB</h2>
                            <ul className="control-label">
                                <li>个人认证</li>
                                <li className="active">担保交易</li>
                                <li>线下门店</li>
                            </ul>

                        </div>
                    </div>
                    <div className="weme-btn">
                        <a href="" className="link-btn">发布商品</a>
                        <a href="" className="link-btn">新建微页面</a>
                        <a href="" className="link-btn-enter">访问店铺</a>
                    </div>
                </div>
                <div className="weme-box">
                    <ul>
                        <li><span>0</span><span>昨日浏览量</span></li>
                        <li><span>0</span><span>昨日访客数</span></li>
                        <li><span>0</span><span>昨日商品浏览量</span></li>
                        <li><span>0</span><span>昨日商品访客数</span></li>
                        <li><span className="weme-box-link">4</span><span>微页面</span></li>
                        <li><span className="weme-box-link">13</span><span>商品</span></li>
                    </ul>
                </div>
            </div>

        )
    }
}
export default Header;