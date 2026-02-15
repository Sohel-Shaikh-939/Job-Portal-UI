import React, { useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ResumeScore = () => {
  const { loginInfo } = useSelector((store) => store.Header);
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculateScore = async (e) => {
    e.preventDefault();
    if (!resumeText || !jobDescription) {
      setError('Please provide both Resume text and Job Description.');
      return;
    }
    setError('');
    setLoading(true);
    setResult(null);

    try {
      // Assuming the backend endpoint is running locally
      const response = await axios.post('http://localhost:8080/resume-score', {
        resume: resumeText,
        jobDescription: jobDescription
      }, {
        headers: {
          Authorization: localStorage.getItem("auth"),
        }
      });

      if (response.data && response.data.score !== undefined) {
        setResult(response.data);
      } else {
        setError('Failed to calculate score. Please try again.');
        console.error("Invalid response format:", response.data);
      }
    } catch (err) {
      console.error("Error calculating score:", err);
      setError('Something went wrong. Ensure backend is running and configured.');
    } finally {
      setLoading(false);
    }
  };

  if (!loginInfo.Authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Login Required</h2>
          <p className="text-gray-600 mb-8">
            Please log in as a Candidate or Employer to use the Resume Score Finder feature.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Use the <strong>"Candidate Login"</strong> or <strong>"Employer Login"</strong> button in the header.
            </p>
            <Link 
              to="/"
              className="inline-block bg-faintGreen text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition duration-200"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
            Resume Score Finder
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Paste your resume and the job description to get an AI-powered compatibility score.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleCalculateScore}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="resume" className="mb-2 text-sm font-medium text-gray-700">
                Resume Text
              </label>
              <textarea
                id="resume"
                rows="10"
                className="p-3 w-full border border-gray-300 rounded-md focus:ring-faintGreen focus:border-faintGreen"
                placeholder="Paste your resume content here..."
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="jobDescription" className="mb-2 text-sm font-medium text-gray-700">
                Job Description
              </label>
              <textarea
                id="jobDescription"
                rows="10"
                className="p-3 w-full border border-gray-300 rounded-md focus:ring-faintGreen focus:border-faintGreen"
                placeholder="Paste the job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-center font-semibold">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-faintGreen hover:bg-green-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-faintGreen transition-colors duration-200`}
            >
              {loading ? 'Calculating...' : 'Calculate Score'}
            </button>
          </div>
        </form>

        {loading && (
           <div className="flex justify-center mt-4">
             <Spinner />
           </div>
        )}

        {result && (
          <div className="mt-8 border-t border-gray-200 pt-8 animate-fade-in">
            <div className="flex flex-col items-center">
              <div className="relative h-40 w-40 flex items-center justify-center">
                 <svg className="h-full w-full transform -rotate-90">
                   <circle
                     className="text-gray-200"
                     strokeWidth="10"
                     stroke="currentColor"
                     fill="transparent"
                     r="70"
                     cx="80"
                     cy="80"
                   />
                   <circle
                     className={`${
                       result.score >= 70 ? 'text-green-500' : result.score >= 40 ? 'text-yellow-500' : 'text-red-500'
                     } transition-all duration-1000 ease-out`}
                     strokeWidth="10"
                     strokeDasharray={440}
                     strokeDashoffset={440 - (440 * result.score) / 100}
                     strokeLinecap="round"
                     stroke="currentColor"
                     fill="transparent"
                     r="70"
                     cx="80"
                     cy="80"
                   />
                 </svg>
                 <span className="absolute text-3xl font-bold text-gray-800">{result.score}%</span>
              </div>
              <p className="mt-4 text-xl font-semibold text-gray-700">MatchType Score</p>
            </div>

            {result.missingKeywords && result.missingKeywords.length > 0 && (
              <div className="mt-8 bg-red-50 p-6 rounded-lg border border-red-100">
                <h3 className="text-lg font-medium text-red-800 mb-4">Missing Keywords / Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  {result.missingKeywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {result.feedback && (
                <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Feedback:</h3>
                    <p className="text-blue-900">{result.feedback}</p>
                </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeScore;
