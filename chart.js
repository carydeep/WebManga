const labels = [
    '27-4-2021',
    '28-4-2021',
    '29-4-2021',
    '30-4-2021',
    '31-4-2021',
    '01-5-2021',
];
const data = {
    labels: labels,
    datasets: [{
        label: 'User View',
        backgroundColor: '#ff2566',
        borderColor: 'rgb(255, 0, 0)',
        color: '#ffffff',
        fill: {
            target: 'origin',
            above: 'rgba(255, 85, 127,.05)'
        },
        tension: 0.5,
        data: [100, 10, 20, 30, 70, 31, 45]
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'General view',
                padding: {
                    top: 10,
                    bottom: 30
                },
                color: '#ffffff',
                font: {
                    size: 20
                }
            },
            legend: {
                display: true,
                labels: {
                    color: '#ffffff'
                }
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#d9d9d9',
                    font: {
                        size: 9
                    }
                }
            },
            y: {
                ticks: {
                    color: '#d9d9d9',
                    font: {
                        size: 9
                    }
                }
            }
        }
    }
};

var myChart = new Chart(
    document.getElementById('generalView'),
    config
);



//comment
const labelsUser = [
    '27-4-2021',
    '28-4-2021',
    '29-4-2021',
    '30-4-2021',
    '31-4-2021',
    '01-5-2021',
];
const dataUser = {
    labels: labelsUser,
    datasets: [{
        label: 'User Comment',
        backgroundColor: 'rgb(0, 204, 153)',
        borderColor: 'rgb(0, 204, 153)',
        color: '#ffffff',
        fill: {
            target: 'origin',
            above: 'rgba(0, 204, 153,0.05)'
        },
        tension: 0.5,
        data: [500, 1000, 120, 300, 250, 310, 450]
    }]
};

const configUser = {
    type: 'line',
    data: dataUser,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'General comment',
                padding: {
                    top: 10,
                    bottom: 30
                },
                color: '#ffffff',
                font: {
                    size: 20
                }
            },
            legend: {
                display: true,
                labels: {
                    color: '#ffffff'
                }
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#d9d9d9',
                    font: {
                        size: 9
                    }
                }
            },
            y: {
                ticks: {
                    color: '#d9d9d9',
                    font: {
                        size: 9
                    }
                }
            }
        }
    }
};

var chartUser = new Chart(
    document.getElementById('generalUser'),
    configUser
);



//chapter upload
const labelschapter = [
    '27-4-2021',
    '28-4-2021',
    '29-4-2021',
    '30-4-2021',
    '31-4-2021',
    '01-5-2021',
];
const dataChapter = {
    labels: labelschapter,
    datasets: [{
        label: 'Amount upload',
        backgroundColor: 'rgb(51, 102, 255)',
        borderColor: 'rgb(51, 102, 255)',
        color: '#ffffff',
        fill: {
            target: 'origin',
            above: 'rgba(51, 102, 255,0.05)'
        },
        tension: 0.5,
        data: [500, 1000, 120, 300, 250, 310, 450]
    }]
};

const configChapter = {
    type: 'line',
    data: dataChapter,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'General chapter upload',
                padding: {
                    top: 10,
                    bottom: 30
                },
                color: '#ffffff',
                font: {
                    size: 20
                }
            },
            legend: {
                display: true,
                labels: {
                    color: '#ffffff'
                }
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#d9d9d9',
                    font: {
                        size: 9
                    }
                }
            },
            y: {
                ticks: {
                    color: '#d9d9d9',
                    font: {
                        size: 9
                    }
                }
            }
        }
    }
};

var chartChapter = new Chart(
    document.getElementById('generalChapter'),
    configChapter
);



//User dang ky
const labelsLogin = [
    '27-4-2021',
    '28-4-2021',
    '29-4-2021',
    '30-4-2021',
    '31-4-2021',
    '01-5-2021',
];
const dataLogin = {
    labels: labelsLogin,
    datasets: [{
        label: 'Number Register',
        backgroundColor: 'rgb(153, 0, 204)',
        borderColor: 'rgb(153, 0, 204)',
        color: '#ffffff',
        fill: {
            target: 'origin',
            above: 'rgba(153, 0, 204,0.05)'
        },
        tension: 0.5,
        data: [500, 1000, 120, 300, 250, 310, 450]
    }]
};

const configLogin = {
    type: 'line',
    data: dataLogin,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'New User',
                padding: {
                    top: 10,
                    bottom: 30
                },
                color: '#ffffff',
                font: {
                    size: 20
                }
            },
            legend: {
                display: true,
                labels: {
                    color: '#ffffff'
                }
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#d9d9d9',
                    font: {
                        size: 9
                    }
                }
            },
            y: {
                ticks: {
                    color: '#d9d9d9',
                    font: {
                        size: 9
                    }
                }
            }
        }
    }
};

var chartChapter = new Chart(
    document.getElementById('generalRegister'),
    configLogin
);


//top-manga
const dataManga = {
    labels: [
        'Attack on titan',
        'One Piece',
        'Blech',
        'Puco no Pico',
        'Solo leveling'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100,400,200],
        backgroundColor: [
            'rgb(102, 153, 255)',
            'rgb(255, 0, 0)',
            'rgb(255, 0, 255)',
            'rgb(255, 255, 0)',
            'rgb(102, 255, 102)'
        ],
        hoverOffset: 4
    }]
};

const configManga = {
    type: 'doughnut',
    data: dataManga,
    options:{
        plugins: {
            title: {
                display: true,
                text: 'Top 5 manga',
                padding: {
                    top: 10,
                    bottom: 30
                },
                color: '#ffffff',
                font: {
                    size: 20
                }
            },
            legend: {
                display: true,
                labels: {
                    color: '#ffffff'
                }
            },
        }
    }
};

var chartManga = new Chart(
    document.getElementById('top-5-manga'),
    configManga
);