import React , {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Chart from '../../components/UI/Charts/ApexChart';

export const GraphBuilder = props => {
    const [chartData, setChartData] = useState({
        options: {            
            plotOptions: {
                bar: {
                    horizontal: true,
                    distributed: true
                }
            },
            yaxis: {
                labels: {
                    maxWidth: 360
                }
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '16px',
                    colors: ['#fff']
                }
            },
            xaxis: {                
                labels: {
                    trim: false,                    
                },
                categories: ["Male", "Female", "Unknown"]
            },
            theme: {
                mode: 'light',
                palette: 'palette5'
            }
        },           
        series: [
            {
                name: "Quantity",
                data: []
            }
        ]
    });
    const countGender = () => {
        let male = 0,
            female = 0,
            unknown =0;
        props.characters.forEach(element => {            
            if(element.gender === 'Male') male++
            if(element.gender === 'Female') female++
            if(element.gender === 'unknown') unknown++
        });
        const newSeries = [male, female, unknown]
        const updatedSeries = [{
            ...chartData.series[0],
            data: newSeries
        }];
        setChartData({options: chartData.options, series: updatedSeries})
    };

    useEffect(() => {
        if(props.loaded) countGender()
    }, [])

    return(
        <Chart 
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height="250"
        />
    )
}
const mapStateToProps = state => {
    return {
        characters: state.listReducer.results,
        loaded: state.listReducer.loaded
    }
}
export default connect(mapStateToProps)(GraphBuilder)