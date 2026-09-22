const form = document.getElementById("requestForm");
const requestsList = document.getElementById("requestsList");

// Load all requests
async function loadRequests() {
    try {
        const response = await fetch("/api/requests");

        if (!response.ok) {
            throw new Error("Failed to load requests");
        }

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

                <button onclick="deleteRequest(${request.id})">
                    Delete
                </button>
            `;

            requestsList.appendChild(div);
        });

    } catch (error) {
        console.error(error);
    }
}


// Submit request
form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const requestData = {
        studentName: document.getElementById("studentName").value,
        email: document.getElementById("email").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        priority: document.getElementById("priority").value
    };

    console.log("Sending:", requestData);

    try {
        const response = await fetch("/api/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Submission failed");
        }

        alert("Request submitted successfully!");

        form.reset();

        loadRequests();

    } catch (error) {
        console.error("Error:", error);
        alert("Could not submit request. Check the browser console.");
    }
});


// Delete request
async function deleteRequest(id) {
    try {
        const response = await fetch(`/api/requests/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Delete failed");
        }

        alert("Request deleted successfully!");

        loadRequests();

    } catch (error) {
        console.error(error);
        alert("Could not delete request.");
    }
}


// Load requests when page opens
loadRequests();