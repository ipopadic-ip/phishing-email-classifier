import { useState } from 'react';
import axios from 'axios';
import './EmailForm.css';

export default function EmailForm() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [training, setTraining] = useState(false);
  const [trainStatus, setTrainStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await axios.post('http://localhost:5000/predict', { text });
      setResult(res.data.result);
    } catch (err) {
      setResult('An error occurred while submitting.');
    }
    setLoading(false);
  };

  const handleRetrain = async () => {
    setTraining(true);
    setTrainStatus(null);
    try {
      const res = await axios.post('http://localhost:5000/train');
      setTrainStatus(res.data.message || 'Model retrained successfully.');
    } catch (err) {
      setTrainStatus('An error occurred while retraining the model.');
    }
    setTraining(false);
  };

  return (
    <div className="app-container">
        <div className="profile-header">
            <h1>Ilija Popadić</h1>
            <h3>Software Engineer | Aspiring AI Security Engineer</h3>
            <p>Engineering the Next Generation of Secure AI Systems</p>
        </div>

      <div className="email-checker">
        <h2>📧 Phishing Email Detector</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            rows="10"
            placeholder="Enter email content here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Analyzing...' : 'Check Email'}
          </button>
        </form>
        {result && (
          <p className={`result ${result === 'phishing' ? 'phishing' : 'legit'}`}>
            Rezultat: {result === 'phishing' ? '⚠️ Phishing' : '✅ Legitimate'}
          </p>
        )}
        <hr />
        <button className="retrain-btn" onClick={handleRetrain} disabled={training}>
          {training ? 'Retraining model...' : '🔁 Retrain Model'}
        </button>
        {trainStatus && <p className="train-status">{trainStatus}</p>}
      </div>
    </div>
  );
}
