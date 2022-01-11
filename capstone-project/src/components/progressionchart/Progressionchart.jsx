import "./Progressionchart.css"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import NavigationBar from '../navigationbar/NavigationBar';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);
const Progressionchart = () => {
    return <div>
        <NavigationBar />
        <div className="graph">
            <Bar
                data={{
                    labels: ['exercise1', 'Exercise2', 'Exercise3', 'Exercise4', 'Exercise5', 'Exercise6'],
                    datasets: [
                        {
                            label: 'Strength Progression',
                            data: [100, 135, 35, 225, 35, 10],
                            backgroundColor: ['rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        },
                        {
                            label: 'Quantity',
                            data: [100, 104, 67, 508, 900, 50],
                            backgroundColor: 'Orange',
                            borderColor: 'red',
                        }
                    ]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </div>
    </div>
}

export default Progressionchart