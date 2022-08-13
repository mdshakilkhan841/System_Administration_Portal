let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bi-text-right", "bi-text-indent-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bi-text-indent-right","bi-text-right");//replacing the iocns class
 }
}


///------------ Load charts ---------------///
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Da'],
  ['More than 3 weeks', 5],
  ['Free', 2],
  ['1 week to 3 weeks', 4],
  ['0 day to 1 week', 2],
]);

// Optional; add a title and set the width and height of the chart
var options={'title':'Storage Activities',pieHole: 0.4, 'width':550, 'height':300};

// Display the chart inside the <div> element with id="piechart"
var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}