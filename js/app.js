// VARIABLES //
const lineGraph = document.getElementsByClassName('lineChartBox');
const barChart = document.getElementsByClassName('barChartBox');
const doughnutChart = document.getElementsByClassName('doughnutChartBox');
//**********//

Chart.defaults.global.legend.display = false;

// TRAFFIC CHART //
let lineTrafficChart = new Chart(lineGraph, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [
      {
        label: '',
        data: [250, 800, 750, 1000, 1250, 950, 500, 1150, 2100, 2250, 2300],
        backgroundColor: 'rgba(115, 119, 191, 0.25)',
        borderColor: '#7477bf',
        borderWidth: 1,
        pointBorderWidth: 1.8,
        pointRadius: 4,
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: '#e7e8f9',
        lineTension: 0,
        
      }
    ]
  },
});



// BAR CHART //
let barTrafficChart = new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        label: '# of Hits',
        data: [50, 75, 150, 200, 350, 200, 350],
        backgroundColor: [
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)'
            ],
            borderColor: [
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)'
            ],
            borderWidth: 1
      }
    ]
  },
  options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                  }
                }
              ]
            }
          }
});


// DONUT CHART //

let doughnutUsersChart = new Chart(doughnutChart, {
  type: 'doughnut',
  data: {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [
      {
        data: [15, 20, 60],
        backgroundColor: ['#74b1bf', '#81c98f', '#7377bf'],
        hoverBackgroundColor: ['#56aabd', '#67c97a', '#6368c0'],
      }
    ]
    },
    options: {
        legend: {
            display: true,
            position: 'right'
        },
    }
    });


Chart.defaults.global.responsive = true;



// HIDE ALERT //

const close = document.querySelector('.close');

close.addEventListener ('click', () => {
    close.parentNode.style.display = "none";
});


// MESSAGE USER //

let messageForm = document.querySelector('.message-user');


messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let inputValue = messageForm.querySelector('input').value;
  let textareaValue = messageForm.querySelector('textarea').value;
  console.log(inputValue);
  // check for entry
  if(inputValue !== ""  && textareaValue !== ""){
    // show the message
    alert("Your message has been sent to " + inputValue + ".");
    // clear both fields
    messageForm.querySelector('input').value = "";
    messageForm.querySelector('textarea').value = "";
  }


  if(inputValue === "" && textareaValue !== "") {
      alert("Please enter a recipient.");
    } else if(inputValue !== "" && textareaValue === "") {
      alert("Please enter a message for " + inputValue + ".");
    } else if(inputValue === "" && textareaValue === ""){
      alert("You must enter a message and recipient.");
  }
});





// set Navigation Items to active when clicked
const mainNavigation = document.getElementById("navigationbar");
const trafficNavigation = document.getElementById("trafficNavigation");

function setToActive(nav) {
  const navItems = nav.getElementsByTagName("li");
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function() {
      let current = nav.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].classList.remove("active");
      }
      this.classList += "active";
    });
  }
}

setToActive(mainNavigation);
setToActive(trafficNavigation);