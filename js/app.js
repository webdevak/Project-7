/*---------- Global Variables ----------------*/
const alertBanner = document.getElementById("alert");
const trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById("daily-users-graph");
const mobileCanvas = document.getElementById("mobile-users-chart");
const userInput = document.getElementById("input");
const messageArea = document.getElementById("textarea");
const sendButton = document.getElementById("send");
const bell = document.getElementById("bell");
const greenCircle = document.querySelector(".green-circle");

const hourly = [500, 750, 1000, 1250, 1500, 2000, 2500, 2250, 1150, 1750, 1850];
const daily = [200, 350, 2000, 2250, 1500, 2000, 2500, 2250, 1150, 1750, 1850];
const weekly = [100, 350, 2000, 2250, 1500, 2000, 1500, 1250, 2150, 2750, 2350];
const monthly = [
  200,
  250,
  3000,
  1150,
  1300,
  2300,
  1300,
  2230,
  2150,
  2750,
  2350,
];

// Alert banner styling--------------------------
alertBanner.style.backgroundColor = "#6A5ACD";
alertBanner.style.color = "#ffffff";

/* ------------ Data for traffic line chart -------------*/

let trafficData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      label: "Hourly",
      data: hourly,
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 1,
    },
  ],
};

let trafficOptions = {
  maintainAspectRatio: false,
  animation: {
    duration: 0,
  },
  scales: {
    yAxis: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};

// ----------- Functions for updated traffic navigation---------------//

function updateChart() {
  trafficChart.data.datasets[0].data = hourly;
  trafficChart.update();
}

function updateChart1() {
  trafficChart.data.datasets[0].data = daily;
  trafficChart.update();
}

function updateChart2() {
  trafficChart.data.datasets[0].data = weekly;
  trafficChart.update();
}

function updateChart3() {
  trafficChart.data.datasets[0].data = monthly;
  trafficChart.update();
}

/*-----------Code to create line chart---------------*/
const trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: trafficData,
  options: trafficOptions,
});

/* ------------ Data for daily traffic bar chart -------------*/
let dailyUsersData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      data: [50, 100, 150, 200, 250, 300, 350],
      backgroundColor: "#7477BF",
      borderWidth: 1,
    },
  ],
};

let dailyUsersOptions = {
  scales: {
    yAxis: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};
/*-----------Code to create dailyUsers bar graph---------------*/
let dailyUsersChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyUsersData,
  options: dailyUsersOptions,
});

/* ------------ Data for daily traffic bar chart -------------*/
let mobileUserData = {
  labels: ["Phones", "Tablets", "Desktops"],
  datasets: [
    {
      label: "# of Users",
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: ["#7477BF", "#78CF82", "#51b6c8"],
    },
  ],
};

const mobileUserOptions = {
  legend: {
    position: "right",
    labels: {
      boxWidth: 20,
      fontStyle: "bold",
    },
  },
};
/*-----------Code to create mobileUsers doughnut chart---------------*/
let mobileUsersChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileUserData,
  options: mobileUserOptions,
});

/* ------------ Alert Banner template literal -------------*/
alertBanner.innerHTML = `<div class="alert-banner"> <p><strong>Alert:</strong> 
                        You have <strong>7</strong> 
                        overdue tasks to complete.
                        <p class="alert-banner-close">x</p>
                         </div>`;
const x = document.querySelector(".alert-banner-close");

/* ------------ Click event listner for Alert -------------*/
alertBanner.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});

/* ------------ Click event listner for Send Button -------------*/
sendButton.addEventListener("click", (e) => {
  const button = e.target;
  // Making sure that user and message fields are filld out also notifying user message has been sent
  if (userInput.value === "" && messageArea.value === "") {
    alert("Both user and message fields must be filled out before sending");
  } else if (userInput.value === "") {
    alert("Please fill out the user field");
  } else if (messageArea.value === "") {
    alert("Please fill out the message field");
  } else {
    alert(`Message has been sent to: ${userInput.value}`);
  }
});

// When bell icon is clicked alert pops up notifying user
bell.addEventListener("click", (e) => {
  const element = e.target;
  alert("Alert! Response from Shannon");
  alert("Alert! Respnse from Victoria");
  // Green circle disappears after alerts have been viewed-----
  greenCircle.style.display = "none";
});

//--------- When clicked each traffic nav option changes color and background-----------
const list = document.getElementsByTagName("ul")[0];

list.addEventListener("click", (e) => {
  const element = e.target;
  const lis = list.children;
  for (let i = 0; i < lis.length; i++) {
    if (element.classList == "traffic-nav-link") {
      if (lis[i] !== e.target) {
        lis[i].style.backgroundColor = "";
        lis[i].style.color = "";
      } else {
        lis[i].style.backgroundColor = "rgb(38, 233,38)";
        lis[i].style.color = "#fff";
      }
    }
  }
});

// --------Local storage ----------------------------------

// Variables for local storage
const receive = document.getElementById('recieve');
const not = document.getElementById('not');
const public = document.getElementById('public');
const nonPublic = document.getElementById('nonpublic');
const timeZone = document.getElementById('mySelect');


      // Click event listener for save button
document.getElementById('save').addEventListener('click', function(){
  // setItem for settings
  localStorage.setItem('recieve', receive.checked = 'true');
  localStorage.setItem('not', receive.unchecked = 'false');
  localStorage.setItem('public', public.checked = 'true');
  localStorage.setItem('nonpublic', public.checked = 'false');
  localStorage.setItem('eastern', timeZone.selectedIndex = '1');
 
   
      if (receive.checked === true) {
          localStorage.getItem(receive);
      } else if (receive.checked === false) {
        localStorage.getItem(not);
      }
    
    alert('Settings successfully saved');
});

// Click event listener for cancel button
document.getElementById('cancel').addEventListener('click', function(){
  const cancel = confirm('Are you sure you want to cancel changes?');

    if (cancel) {
       // if canceled
    localStorage.setItem('recieve', receive.checked = null);
    localStorage.setItem('not', not.checked = null);
    localStorage.setItem('public', public.checked = null);
    localStorage.setItem('nonpublic', nonPublic.checked = null);
    localStorage.setItem('timeZone', timeZone.selectedIndex = null);

    }

    const loadSettings = function() {
      if (receive !== null) {
        receive.checked = (receive === 'true');
      }
      if (not !== null) {
        not.checked = (not === 'true')
      }
      if (public !== null) {
        public.checked = (public === 'true')
      }
      if (nonPublic !== null) {
        nonPublic.checked = (nonPublic === 'true')
      }
      if (timeZone !== null) {
        timeZone.selectedIndex = (timeZone === 'true')
      }

    }

});





