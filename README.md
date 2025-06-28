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
- ✅ **Demo Video:** [Watch on YouTube](#) <!-- replace # with your video link -->

---

## ⚙️ **Tech Stack**

- **Backend:** Python, Flask, Flask-CORS, scikit-learn, pandas, joblib
- **Frontend:** React, Axios

---
