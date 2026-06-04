// Global Chart.js Configuration to match Portfolio Theme
Chart.defaults.color = '#a0aabf'; // text-muted
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.font.size = 13;

const tooltipConfig = {
    backgroundColor: 'rgba(10, 14, 26, 0.9)', // bg-card
    titleColor: '#e4e8f1',
    bodyColor: '#a0aabf',
    borderColor: 'rgba(100, 255, 218, 0.2)', // accent-cyan thin
    borderWidth: 1,
    padding: 12,
    cornerRadius: 8,
    displayColors: true
};

const gridConfig = {
    color: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)'
};

document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. Benchmark Comparison Chart
    // ==========================================
    const benchmarkCtx = document.getElementById('benchmarkChart');
    if (benchmarkCtx) {
        new Chart(benchmarkCtx, {
            type: 'bar',
            data: {
                labels: ['OurMultiScale', 'ResNet50', 'MobileNetV3Large', 'EfficientNetB0', 'EfficientNetV2S', 'EfficientNetB3'],
                datasets: [
                {
                    label: 'Accuracy',
                    data: [0.900, 0.780, 0.600, 0.580, 0.560, 0.540],
                    backgroundColor: 'rgba(100, 255, 218, 0.8)',
                    borderRadius: 4
                },
                {
                    label: 'Macro-F1',
                    data: [0.901, 0.780, 0.574, 0.557, 0.531, 0.501],
                    backgroundColor: 'rgba(189, 147, 249, 0.8)',
                    borderRadius: 4
                }
            ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: '#e4e8f1',
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: tooltipConfig
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1.0,
                        grid: gridConfig,
                        title: {
                            display: true,
                            text: 'Score',
                            color: '#a0aabf'
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        }
                    }
                }
            }
        });
    }
    // ==========================================
    // 2. Per-Class Performance Chart
    // ==========================================
    const perClassCtx = document.getElementById('perClassChart');
    if (perClassCtx) {
        new Chart(perClassCtx, {
            type: 'bar',
            data: {
                labels: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
                datasets: [
                {
                    label: 'Val Precision',
                    data: [1.00, 0.833, 1.00, 1.00, 0.750],
                    backgroundColor: 'rgba(100, 255, 218, 0.3)',
                    borderColor: 'rgba(100, 255, 218, 1)',
                    borderWidth: 1,
                    borderRadius: 4
                },
                {
                    label: 'Test Precision',
                    data: [1.0, 0.769, 1.0, 1.0, 0.833],
                    backgroundColor: 'rgba(100, 255, 218, 0.8)',
                    borderRadius: 4
                },
                {
                    label: 'Val Recall',
                    data: [0.90, 1.00, 0.80, 0.90, 0.90],
                    backgroundColor: 'rgba(189, 147, 249, 0.3)',
                    borderColor: 'rgba(189, 147, 249, 1)',
                    borderWidth: 1,
                    borderRadius: 4
                },
                {
                    label: 'Test Recall',
                    data: [0.80, 1.0, 0.80, 0.90, 1.0],
                    backgroundColor: 'rgba(189, 147, 249, 0.8)',
                    borderRadius: 4
                },
                {
                    label: 'Val F1-Score',
                    data: [0.947, 0.909, 0.889, 0.947, 0.818],
                    backgroundColor: 'rgba(255, 121, 198, 0.3)',
                    borderColor: 'rgba(255, 121, 198, 1)',
                    borderWidth: 1,
                    borderRadius: 4
                },
                {
                    label: 'Test F1-Score',
                    data: [0.889, 0.869, 0.889, 0.947, 0.909],
                    backgroundColor: 'rgba(255, 121, 198, 0.8)',
                    borderRadius: 4
                }
            ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: '#e4e8f1',
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: tooltipConfig
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1.05,
                        grid: gridConfig,
                        title: {
                            display: true,
                            text: 'Score',
                            color: '#a0aabf'
                        }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // ==========================================
    // 3. Training Convergence Curves
    // ==========================================
    const epochs = Array.from({length: 41}, (_, i) => i);
    const lossTrain = [0.775, 0.644, 0.599, 0.543, 0.527, 0.515, 0.501, 0.494, 0.457, 0.442, 0.434, 0.425, 0.417, 0.411, 0.394, 0.391, 0.385, 0.379, 0.377, 0.369, 0.371, 0.356, 0.356, 0.356, 0.348, 0.344, 0.346, 0.348, 0.34, 0.342, 0.341, 0.334, 0.338, 0.342, 0.334, 0.336, 0.334, 0.336, 0.338, 0.338, 0.334];
    const lossVal = [0.745, 0.48, 1.038, 0.598, 0.477, 0.299, 1.048, 0.954, 0.282, 0.386, 0.622, 0.373, 0.375, 0.494, 0.415, 0.365, 0.358, 0.247, 0.388, 0.407, 0.283, 0.306, 0.294, 0.279, 0.279, 0.265, 0.294, 0.253, 0.279, 0.289, 0.276, 0.279, 0.278, 0.299, 0.308, 0.293, 0.295, 0.275, 0.272, 0.269, 0.269];
    const accTrain = [0.371, 0.482, 0.522, 0.569, 0.59, 0.621, 0.634, 0.651, 0.697, 0.707, 0.726, 0.729, 0.734, 0.756, 0.771, 0.788, 0.797, 0.801, 0.816, 0.825, 0.835, 0.844, 0.85, 0.858, 0.861, 0.862, 0.866, 0.873, 0.874, 0.875, 0.875, 0.881, 0.882, 0.884, 0.886, 0.887, 0.894, 0.892, 0.886, 0.892, 0.892];
    const accVal = [0.36, 0.458, 0.458, 0.529, 0.611, 0.544, 0.423, 0.463, 0.62, 0.651, 0.571, 0.676, 0.662, 0.692, 0.734, 0.724, 0.751, 0.765, 0.739, 0.747, 0.758, 0.758, 0.779, 0.788, 0.79, 0.799, 0.812, 0.805, 0.785, 0.808, 0.818, 0.835, 0.805, 0.799, 0.799, 0.818, 0.799, 0.799, 0.799, 0.818, 0.818];
    const f1Val = [0.22, 0.395, 0.4, 0.505, 0.597, 0.475, 0.393, 0.402, 0.591, 0.645, 0.574, 0.674, 0.661, 0.692, 0.734, 0.723, 0.753, 0.768, 0.741, 0.747, 0.758, 0.759, 0.778, 0.786, 0.788, 0.797, 0.811, 0.808, 0.791, 0.81, 0.818, 0.835, 0.808, 0.803, 0.802, 0.822, 0.802, 0.802, 0.802, 0.823, 0.823];

    const commonLineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top', labels: { color: '#e4e8f1', usePointStyle: true, padding: 10 } },
            tooltip: { ...tooltipConfig, mode: 'index', intersect: false }
        },
        scales: {
            y: { beginAtZero: false, grid: gridConfig, title: { display: true, text: 'Value', color: '#a0aabf' } },
            x: { grid: { display: false }, title: { display: true, text: 'Epoch', color: '#a0aabf' } }
        }
    };

    const lossCtx = document.getElementById('lossChart');
    if (lossCtx) {
        new Chart(lossCtx, {
            type: 'line',
            data: {
                labels: epochs,
                datasets: [
                    {
                        label: 'Train Loss',
                        data: lossTrain,
                        borderColor: 'rgba(100, 255, 218, 0.8)',
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        borderWidth: 2,
                        pointRadius: 0,
                        tension: 0.3
                    },
                    {
                        label: 'Val Loss',
                        data: lossVal,
                        borderColor: 'rgba(189, 147, 249, 0.8)',
                        backgroundColor: 'rgba(189, 147, 249, 0.1)',
                        borderWidth: 2,
                        pointRadius: 0,
                        tension: 0.3
                    }
                ]
            },
            options: commonLineOptions
        });
    }

    const accCtx = document.getElementById('accChart');
    if (accCtx) {
        new Chart(accCtx, {
            type: 'line',
            data: {
                labels: epochs,
                datasets: [
                    {
                        label: 'Train Acc',
                        data: accTrain,
                        borderColor: 'rgba(100, 255, 218, 0.8)',
                        borderWidth: 2,
                        pointRadius: 0,
                        tension: 0.3
                    },
                    {
                        label: 'Val Acc',
                        data: accVal,
                        borderColor: 'rgba(189, 147, 249, 0.8)',
                        borderWidth: 2,
                        pointRadius: 0,
                        tension: 0.3
                    }
                ]
            },
            options: commonLineOptions
        });
    }

    const f1Ctx = document.getElementById('f1Chart');
    if (f1Ctx) {
        new Chart(f1Ctx, {
            type: 'line',
            data: {
                labels: epochs,
                datasets: [
                    {
                        label: 'Val Macro-F1',
                        data: f1Val,
                        borderColor: 'rgba(255, 121, 198, 0.8)',
                        borderWidth: 2,
                        pointRadius: 0,
                        borderDash: [5, 5],
                        tension: 0.3
                    }
                ]
            },
            options: commonLineOptions
        });
    }

    });

// Exploration Target Chart
const targetCtx = document.getElementById('explorationTargetChart');
if (targetCtx) {
    const targetChart = new Chart(targetCtx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Type_3 + Cluster 0', 'Type_5 + Cluster 3', 'Type_4 + Cluster 0'],
            datasets: [
                {
                    label: 'Mineralized %',
                    data: [47.4, 27.7, 16.7],
                    backgroundColor: 'rgba(100, 255, 218, 0.8)',
                    borderColor: 'rgba(100, 255, 218, 1)',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: 'Oxidic %',
                    data: [31.6, 25.0, 3.3],
                    backgroundColor: 'rgba(189, 147, 249, 0.6)',
                    borderColor: 'rgba(189, 147, 249, 1)',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: 'Sulfidic %',
                    data: [15.8, 2.7, 13.3],
                    backgroundColor: 'rgba(255, 121, 198, 0.6)',
                    borderColor: 'rgba(255, 121, 198, 1)',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: 'Priority Score (x100)',
                    data: [141.9, 130.8, 57.2],
                    type: 'line',
                    borderColor: 'rgba(255, 171, 64, 1)',
                    backgroundColor: 'rgba(255, 171, 64, 0.2)',
                    borderWidth: 3,
                    pointBackgroundColor: 'rgba(255, 171, 64, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255, 171, 64, 1)',
                    fill: false,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    labels: { color: '#a0aabf', font: { family: 'Inter', size: 12 } }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 20, 35, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#a0aabf',
                    borderColor: 'rgba(100, 255, 218, 0.2)',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    stacked: true,
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#a0aabf', font: { family: 'Inter' } }
                },
                y: {
                    stacked: true,
                    type: 'linear',
                    display: true,
                    position: 'left',
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#a0aabf', callback: function(value) { return value + '%' } }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: { drawOnChartArea: false },
                    ticks: { color: 'rgba(255, 171, 64, 1)' }
                }
            }
        }
        });
    }


document.addEventListener("DOMContentLoaded", function() {
    // ==========================================
    // Figure 11 Charts
    // ==========================================
    
    // Plot 3: XRF Geochemical Cluster Distribution
    const ctxBar = document.getElementById('fig11BarChart');
    if (ctxBar) {
        new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: ['0', '1', '2', '3', '4'],
                datasets: [{
                    label: 'Number of Samples',
                    data: [68, 50, 290, 115, 80],
                    backgroundColor: 'rgba(0, 255, 255, 0.5)',
                    borderColor: 'rgba(0, 255, 255, 1)',
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { 
                        beginAtZero: true, 
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { color: '#8b9bb4', font: { size: 10 } }
                    },
                    x: { 
                        grid: { display: false },
                        ticks: { color: '#8b9bb4', font: { size: 10 } },
                        title: { display: true, text: 'Geochemical Cluster', color: '#8b9bb4', font: { size: 10 } }
                    }
                }
            }
        });
    }

    // Plot 5: Geochemical Cluster Distribution by Lithology (Stacked)
    const ctxStacked = document.getElementById('fig11StackedChart');
    if (ctxStacked) {
        new Chart(ctxStacked, {
            type: 'bar',
            data: {
                labels: ['Lith_1', 'Lith_2', 'Lith_3', 'Lith_4', 'Lith_5'],
                datasets: [
                    { label: 'Cluster 0', data: [0, 10, 20, 30, 10], backgroundColor: '#6272a4' }, // Purple
                    { label: 'Cluster 1', data: [5, 10, 0, 5, 30], backgroundColor: '#8be9fd' }, // Cyan
                    { label: 'Cluster 2', data: [15, 100, 5, 3, 165], backgroundColor: '#50fa7b' }, // Green
                    { label: 'Cluster 3', data: [0, 0, 0, 0, 115], backgroundColor: '#ff79c6' }, // Pink
                    { label: 'Cluster 4', data: [5, 15, 5, 2, 55], backgroundColor: '#f1fa8c' } // Yellow
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { 
                        position: 'right',
                        labels: { color: '#e4e8f1', boxWidth: 10, font: { size: 9 } }
                    }
                },
                scales: {
                    x: { 
                        stacked: true,
                        grid: { display: false },
                        ticks: { color: '#8b9bb4', font: { size: 9 }, maxRotation: 45, minRotation: 45 }
                    },
                    y: { 
                        stacked: true,
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { color: '#8b9bb4', font: { size: 10 } }
                    }
                }
            }
        });
    }

    // Plot 6: Overall Mineralization Distribution (Pie)
    const ctxPie = document.getElementById('fig11PieChart');
    if (ctxPie) {
        new Chart(ctxPie, {
            type: 'pie',
            data: {
                labels: ['other', 'oxidic', 'sulfidic'],
                datasets: [{
                    data: [89.5, 7.9, 2.7],
                    backgroundColor: [
                        'rgba(139, 233, 253, 0.8)', // Cyan
                        'rgba(255, 184, 108, 0.8)', // Orange
                        'rgba(80, 250, 123, 0.8)'   // Green
                    ],
                    borderColor: [
                        'rgba(139, 233, 253, 1)',
                        'rgba(255, 184, 108, 1)',
                        'rgba(80, 250, 123, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: { color: '#e4e8f1', boxWidth: 12, font: { size: 10 } }
                    }
                }
            }
        });
    }
});
