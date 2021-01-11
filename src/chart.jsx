import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = (props) => {

    const data = {
        // labels: ['jan', 'feb', 'march', 'apr', 'may', 'jun'],
        datasets: [
            {
                label: 'Total Confirmed',
                data: [props.totalConfirmed],
                backgroundColor: 'grey'
            },
            {
                label: 'New Confirmed',
                data: [props.newConfirmed],
                backgroundColor: 'orange'
            },
            {
                label: 'Total Recovered',
                data: [props.totalRecovered],
                backgroundColor: 'green'
            },
            {
                label: 'Total Deaths',
                data: [props.totalDeaths],
                backgroundColor: 'red'
            }
        ]
    }

    const option = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        min:0,
                        // max:100000000,
                        // setpSize:1000000
                    }
                }
            ]
        }
    }

    return(
        <div className="chart-block">
            <Bar
                data={data}
                options={option}
            />
        </div>
    )
}

export default Chart;