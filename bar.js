var data = [4, 8, 15, 16, 23, 42];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select(".chart")		//select chart container using class selector, TOA var chart = d3.select(".chart");
 .selectAll("div")		//initiate data join by defining selection to which we join data, TOA var bar = chart.selectAll("div");
    .data(data)			//join data to selection using seleciton.data, TOA var barUpdate = bar.data(data);
  .enter().append("div")	//instantiate missing elements by appending to enter select, TOA var barEnter = barUpdate.enter().append("div");
    .style("width", function(d) { return x(d) + "px"; })	//Now set width of each new bar as multiple of associated data value, d.
    .text(function(d) { return d; });	//set text of each bar
