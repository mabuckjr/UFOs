// import the data from data.js
const tableData = data;
// Reference the HTML table using D3
var tbody = d3.select("tbody");

// Start function to create UFO table
function buildTable(data) {
    // First clear out the table/existing data
    tbody.html("");
    //Loop through each object in the data and append the cells in each row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}