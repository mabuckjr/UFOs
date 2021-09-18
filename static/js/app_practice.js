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

// Start function to filter table using D3
function handleClick() {
    // Get the datetime values from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check if a date was entered and filter the data using that date
    if (date) {
        // Apply filter to the table data to keep only the rows 
        // where datetime matches filtered date value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the FILTERED data
    // @NOTE: If no date's entered, filteredData === tableData
    buildTable(filteredData);
};
//Attach an event to "listen" for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);