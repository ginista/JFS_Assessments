let currentPage = 1;
const itemsPerPage = 10;
let userData = [];  // Variable to store all user data

// Function to fetch user data from the provided URL
function getUserData(page) {
    currentPage = page;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage - 1;
    const recordsToShow = userData.slice(startIndex, endIndex + 1);

    displayRecords(recordsToShow);
}

// Function to display records
function displayRecords(records) {
    const tableBody = document.getElementById("message");
    tableBody.innerHTML = "";  // Clear previous records

    records.forEach(record => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${record.id}</td><td>${record.name}</td><td>${record.email}</td>`;
        tableBody.appendChild(row);
    });
}

// Function to handle the "Previous" button click
function previousPage() {
    if (currentPage > 1) {
        getUserData(currentPage - 1);
    }
}

// Function to handle the "Next" button click
function nextPage() {
    const totalPages = Math.ceil(userData.length / itemsPerPage);
    if (currentPage < totalPages) {
        getUserData(currentPage + 1);
    }
}

// Fetch initial user data
function fetchUserData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                userData = JSON.parse(this.responseText);
                getUserData(currentPage);  // Display initial page
            } else {
                console.error("Failed to fetch user data.");
            }
        }
    };
    
    
    xhttp.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json", true);
    xhttp.send();
}

// Call the function to fetch initial user data
fetchUserData();
