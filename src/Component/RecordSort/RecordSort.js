import React from 'react';
import './style.css';
import Bar from '../Bar/Bar';

class RecordSort extends React.Component {
    render() {
        return (
            <div>
                <Bar wordings={{desc: '七天浏览排行'}} />
                <div className="display_table">
                    <table>
                        <thead>
                            <tr>
                                <th className="left">页面名称</th>
                                <th>浏览量</th>
                                <th>访客数</th>
                                <th>分享访客次数</th>
                                <th>分享访问人数</th>
                            </tr>
                        <tbody>
                            <tr>
                                <td className="left">一镇一品</td>
                                <td>11</td>
                                <td>5</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td className="left">测试</td>
                                <td>5</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td className="left">回复</td>
                                <td>2</td>
                                <td>4</td>
                                <td>0</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td className="left">还会</td>
                                <td>2</td>
                                <td>9</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td className="left">fas</td>
                                <td>1</td>
                                <td>3</td>
                                <td>4</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                        </thead>
                    </table>
                </div>
                <div className="weme-logo">
                    <a href="https://itunes.apple.com/cn/app/id1238570295">
                        <img src="http://7.pic.paopaoche.net/up/2017-6/2017629152929.png" alt=""/>
                        <span>懂事儿</span>
                    </a>
                    <div className="fiex-nav">
                        <div className="fiex-nav-mes">
                            <a href="https://www.baidu.com">
                                <img className="fiex-nav-img" src={require('../../images/xiaoxi.png')} />
                                <span className="fiex-nav-text">客户消息</span>
                            </a>
                        </div>
                        <div className="fiex-nav-mag">
                            <a href="https://www.baidu.com">
                                <img className="fiex-nav-img" src={require('../../images/lingdang.png')} alt=""/>
                                <span className="fiex-nav-text">通知
                                <label className="fiex-nav-text-active">18</label></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default RecordSort;