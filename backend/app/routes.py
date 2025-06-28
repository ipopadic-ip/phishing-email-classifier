from flask import Blueprint, request, jsonify
from app.predict import predict
from app.model import train_model

bp = Blueprint('api', __name__)

@bp.route('/predict', methods=['POST'])
def predict_email():
    data = request.get_json()
    email_text = data.get('text', '')
    prediction = predict(email_text)
    return jsonify({'result': prediction})

@bp.route('/train', methods=['POST'])
def retrain_model():
    try:
        train_model()
        return jsonify({"message": "Model retrained successfully."})
    except Exception as e:
        return jsonify({"error": str(e)}), 500