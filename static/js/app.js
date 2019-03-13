// from data.js
var tableData = data;
tbody = d3.select("tbody")

// YOUR CODE HERE!
function insertData(data){
  tbody.text("")
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td").text(value)
    })
  })
}
insertData(tableData)


var inputText = d3.select("#datetime")
var button = d3.select(".btn btn-default")

// filter data with desired date
function changeHandler(){
    d3.event.preventDefault();
    console.log(inputText.property("value"));
    var new_table = tableData.filter(sighting => sighting.datetime===inputText.property("value"))
    insertData(new_table)
}

// event listener to handle change and click
inputText.on("change", changeHandler)
button.on("click", changeHandler)