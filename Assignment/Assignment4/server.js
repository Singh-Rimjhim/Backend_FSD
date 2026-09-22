const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// GET all requests
app.get("/api/requests", (req, res) => {
    const data = fs.readFileSync("requests.json", "utf8");
    res.json(JSON.parse(data));
});

// GET request by ID
app.get("/api/requests/:id", (req, res) => {
    const data = fs.readFileSync("requests.json", "utf8");
    const requests = JSON.parse(data);

    const request = requests.find(
        item => item.id == req.params.id
    );

    if (!request) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    res.json(request);
});

// POST a new request
app.post("/api/requests", (req, res) => {
    const data = fs.readFileSync("requests.json", "utf8");
    const requests = JSON.parse(data);

    const newRequest = {
        id: Date.now(),
        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    requests.push(newRequest);

    fs.writeFileSync(
        "requests.json",
        JSON.stringify(requests, null, 2)
    );

    res.status(201).json(newRequest);
});

// PUT - Update a request
app.put("/api/requests/:id", (req, res) => {
    const data = fs.readFileSync("requests.json", "utf8");
    const requests = JSON.parse(data);

    const index = requests.findIndex(
        item => item.id == req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    requests[index] = {
        ...requests[index],
        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    fs.writeFileSync(
        "requests.json",
        JSON.stringify(requests, null, 2)
    );

    res.json(requests[index]);
});

// DELETE - Delete a request
app.delete("/api/requests/:id", (req, res) => {
    const data = fs.readFileSync("requests.json", "utf8");
    const requests = JSON.parse(data);

    const index = requests.findIndex(
        item => item.id == req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    const deletedRequest = requests.splice(index, 1)[0];

    fs.writeFileSync(
        "requests.json",
        JSON.stringify(requests, null, 2)
    );

    res.json({
        message: "Request deleted successfully",
        request: deletedRequest
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});