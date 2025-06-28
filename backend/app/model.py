# Author Ilija - python app/model.py - Ovo trenira model i sačuva model.pkl i vectorizer.pkl u app/


import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
import joblib
import os

def train_model():
    # df = pd.read_csv('phishing_dataset.csv')
    df = pd.read_csv('phishing_dataset.csv')
    X = df['email_text']
    y = df['label']  # 1 = phishing, 0 = legit

    vec = TfidfVectorizer()
    X_vec = vec.fit_transform(X)

    model = RandomForestClassifier()
    model.fit(X_vec, y)

    os.makedirs('app', exist_ok=True)
    joblib.dump(model, 'app/model.pkl')
    joblib.dump(vec, 'app/vectorizer.pkl')

if __name__ == '__main__':
    train_model()
