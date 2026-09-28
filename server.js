const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Cloud Deployment</title>
            <style>
                body {
                    margin: 0;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: linear-gradient(135deg, #141e30, #243b55);
                    font-family: Arial, sans-serif;
                }

                .card {
                    background: white;
                    padding: 40px;
                    width: 400px;
                    text-align: center;
                    border-radius: 20px;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
                }

                h1 {
                    color: #243b55;
                }

                p {
                    color: #555;
                    font-size: 16px;
                }

                .status {
                    margin-top: 25px;
                    padding: 15px;
                    background: #e8f5e9;
                    color: #16803c;
                    border-radius: 10px;
                    font-weight: bold;
                }
            </style>
        </head>

        <body>
            <div class="card">
                <h1>☁️ Cloud Deployment</h1>

                <p>Student Web Application</p>

                <div class="status">
                    ✓ Application is running successfully!
                </div>
            </div>
        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});