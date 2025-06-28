# 🛡️ Phishing Email Classifier

A full-stack project for classifying emails as **legitimate** or **phishing** using **Python (Flask)** and **React**.

---

## 📌 **Project Overview**

This project builds a **phishing email classifier** trained on a custom dataset, exposed via a **REST API (Flask)**, and consumed by a simple **React frontend** for user input and classification display.

### ✨ **Key Features**

- ✅ **Custom dataset** (12 samples, extendable with larger Kaggle datasets)
- ✅ **Python RandomForestClassifier** with TfidfVectorizer text features
- ✅ **REST API endpoints:**
  - `/predict` – returns *"legit"* or *"phishing"*
  - `/train` – retrains the model on a new CSV dataset
- ✅ **React UI** for testing the model in real-time
- ✅ **Demo Video:** [Watch on YouTube](https://youtu.be/3lV3m6ewS8U?si=O8hC0cC-1F79qU3o) <!-- replace # with your video link -->

---

## ⚙️ **Tech Stack**

- **Backend:** Python, Flask, Flask-CORS, scikit-learn, pandas, joblib
- **Frontend:** React, Axios

---

## 🔬 **Testing the API**

- You can test endpoints using Postman or cURL:
- POST http://localhost:5000/predict
  - ✅ Predict endpoint example
    - Body (JSON):
    - { "text": "Hey boss, I've attached the final version of the report." }
    - Returns: legit

  - ✅ Phishing example
    - { "text": "You have been selected for a free prize! Click here to claim now." }
    - Returns: "phishing"

## 👤 Author
Ilija Popadić
Software Engineer | Aspiring AI Security Engineer

LinkedIn [#](https://www.linkedin.com/in/ilija-popadic-27a4a72b3/)

YouTube Demo [#](https://youtu.be/3lV3m6ewS8U?si=gZqBkL8hJMcDcbU9)



---
