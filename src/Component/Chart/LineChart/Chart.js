
import React from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/line'
import './style.css'
import Bar from '../../Bar/Bar';
import { lineOption }  from "../../../options";


import {changeRecordStatus} from '../../../Action/RecordAction';


export default class LineReact extends React.Component {

    constructor(props) {
        super(props)
        this.initPie = this.initPie.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            item: [
                {
                    value: [10,12,13,14,15,12,13],
                    label: "商品浏览量",
                },
                {
                    value: [10,12,13,14,15,12,13],
                    label: "商品访客数",
                },
                {
                    value: [10,12,13,14,15,12,13],
                    label: "浏览量",
                },
            ]
        }
    }

    handleClick(){
        const {dispatch} = this.props;
        dispatch(changeRecordStatus())
    }

    initPie() {
        let myChart = echarts.init(this.ID) //初始化echarts

        let item = this.state.item;

        var option = lineOption;
        for (var i = 0; i < item.length; i++) {
            option.legend.data.push(item[i].label)
            option.series.push({
                name: item[i].label,
                type: 'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: item[i].value
            })
        }

        console.log(option.series)




        //设置options
        myChart.setOption(lineOption);

        window.onresize = function() {
            myChart.resize()
        }
    }

    componentDidMount() {
        this.initPie()
    }

    componentDidUpdate() {
        this.initPie()
    }

    render() {


        const { width="100%", height="300px" } = this.props
        return (
            <div className="E_chart">
                <Bar wordings={{desc: '流量趋势'}} />
                <div className="button_chart">
                    <button>我的商铺</button>
                </div>
                <div ref={ID => this.ID = ID} style={{width, height}}></div>
            </div>

        )
    }
}