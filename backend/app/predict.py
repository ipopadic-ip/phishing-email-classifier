import joblib

model = joblib.load('app/model.pkl')
vectorizer = joblib.load('app/vectorizer.pkl')

def predict(text):
    vec = vectorizer.transform([text])
    result = model.predict(vec)[0]
    return "phishing" if result == 1 else "legit"
