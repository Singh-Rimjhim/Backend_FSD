const form = document.getElementById("requestForm");
const requestsList = document.getElementById("requestsList");

// Get all requests
async function loadRequests() {
    const response = await fetch("/api/requests");
    const requests = await response.json();

    requestsList.innerHTML = "";

    requests.forEach(request => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${request.studentName}</h3>
            <p><strong>Email:</strong> ${request.email}</p>
            <p><strong>Category:</strong> ${request.category}</p>
            <p><strong>Description:</strong> ${request.description}</p>
            <p><strong>Priority:</strong> ${request.priority}</p>
            <button onclick="editRequest(${request.id})">
             Edit
            </button>
            <button onclick="deleteRequest(${request.id})">
                Delete
            </button>

            <hr>
        `;

        requestsList.appendChild(div);
    });
}

// Submit a new request
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const requestData = {
        studentName: document.getElementById("studentName").value,
        email: document.getElementById("email").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        priority: document.getElementById("priority").value
    };

    const response = await fetch("/api/requests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
    });

    if (response.ok) {
        alert("Request submitted successfully!");
        form.reset();
        loadRequests();
    }
});

// Delete a request
async function deleteRequest(id) {
    const response = await fetch(`/api/requests/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        alert("Request deleted successfully!");
        loadRequests();
    }
}
// Edit a request
async function editRequest(id) {
    const response = await fetch(`/api/requests/${id}`);
    const request = await response.json();

    document.getElementById("studentName").value = request.studentName;
    document.getElementById("email").value = request.email;
    document.getElementById("category").value = request.category;
    document.getElementById("description").value = request.description;
    document.getElementById("priority").value = request.priority;

    form.dataset.editId = id;
}
// Load requests when page opens
loadRequests();