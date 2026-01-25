import { GoogleGenAI } from "@google/genai";
import { InspirationResponse } from "../types";

// Note: In a real production build, this key should be handled via a proxy server to avoid exposure.
// However, per instructions, we use process.env.API_KEY directly.
const API_KEY = process.env.API_KEY || '';

export const generateDailyInspiration = async (): Promise<InspirationResponse> => {
  if (!API_KEY) {
    // Fallback if no key is provided during demo
    return {
      verse: "Psalm 119:105",
      message: "Your word is a lamp for my feet, a light on my path. Even without a direct connection right now, know that Light is guiding you.",
      reference: "Bible"
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    const prompt = `
      Generate a short, uplifting spiritual message for a visitor to "The Great Light Interdenominational Ministries" website.
      Themes: Light, Salvation, Hope, Transformation, Faith, Grace, Love, Peace, Joy, Redemption, Healing, Strength.
      
      IMPORTANT: Be creative and varied. Pick a different verse each time from anywhere in the Bible.
      Use a random seed based on this timestamp: ${Date.now()}
      
      Return the response in strictly valid JSON format with this schema:
      {
        "verse": "The bible verse text",
        "reference": "Book Chapter:Verse",
        "message": "A 2-3 sentence encouraging thought based on the verse"
      }
      Do not include markdown code blocks. Just the JSON string.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const data = JSON.parse(text) as InspirationResponse;
    return data;

  } catch (error) {
    console.error("Error fetching inspiration:", error);
    return {
      verse: "Matthew 5:14",
      message: "You are the light of the world. A town built on a hill cannot be hidden. Keep shining!",
      reference: "Bible"
    };
  }
};
