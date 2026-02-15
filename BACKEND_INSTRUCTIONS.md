# Backend Implementation Instructions (Groq API Version)

I apologize for the issues with previous APIs. **Groq is the most reliable, fastest, and free option available right now.** Use this one.

## Step 1: Get Free Groq API Key
1. Go to [Groq Console](https://console.groq.com/keys).
2. Login (you can use your Google account).
3. Click **"Create API Key"**.
4. Copy the key (starts with `gsk_...`).
5. Update your `.env` file:
   ```
   GROQ_API_KEY=gsk_your_copied_key_here
   ```

## Step 2: Install SDK  
Run this command in your `Job Poral Backend` folder:
```powershell
npm install groq-sdk
```

## Step 3: Update Route File
Replace the ENTIRE content of **`resumeScoreRoutes.js`** (`c:\Users\shaik\OneDrive\Desktop\Job Poral Backend\Routes\resumeScoreRoutes.js`) with this code:

```javascript
require("dotenv").config();
const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

exports.calculateScore = async (req, res) => {
  try {
    const { resume, jobDescription } = req.body;

    if (!resume || !jobDescription) {
      return res.status(400).json({ error: "Both resume and job description are required" });
    }

    const prompt = `You are an expert ATS (Applicant Tracking System).
      Compare the Resume against the Job Description.

      JOB DESCRIPTION:
      ${jobDescription}

      RESUME:
      ${resume}

      Task:
      1. Calculate a match score (0-100) based on skills, experience, and keywords.
      2. List missing keywords.
      3. Provide brief feedback.

      Output JSON ONLY in this exact format (no markdown, no backticks):
      {
        "score": number,
        "missingKeywords": ["keyword1", "keyword2"],
        "feedback": "string"
      }`;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.1,
      response_format: { type: "json_object" }, 
    });

    const result = completion.choices[0]?.message?.content || "";
    const jsonResponse = JSON.parse(result);

    res.json(jsonResponse);

  } catch (error) {
    console.error("Error generating score:", error);
    res.status(500).json({ error: "Failed to generate score details." });
  }
};
```

## Step 4: Restart Backend
Restart your server (`npm start`). **This one will work.**
