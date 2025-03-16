const express = require('express');
const app = express();
const port = 3000; // Choose your desired port

// Sample project data (replace with your actual data)
const projectsData = [
    {
        title: "Rock and Mine Detection Analysis for Submarine",
        description:
            "Developed a logistic regression model to classify rocks and mines in underwater environments, crucial for submarine navigation. This involved data collection, preprocessing, feature engineering, and model evaluation. The model achieved high accuracy and was integrated into a real-time submarine navigation system.",
        link: "#",
    },
    {
        title: "Titanic Classification",
        description:
            "Performed exploratory data analysis (EDA) to understand passenger demographics and survival rates. Preprocessed the data by handling missing values, encoding categorical variables, and normalizing features to improve model performance.",
        link: "#",
    },
    {
        title: "Stock Prediction",
        description:
            "Developed a machine learning model to predict stock prices using historical stock data. This involved data preprocessing, cleaning, feature engineering, and model training. The project aimed to provide insights into market trends and assist in investment decisions.",
        link: "#",
    },
];

// Route to fetch project data
app.get("/projects", (req, res) => {
    res.json(projectsData);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});