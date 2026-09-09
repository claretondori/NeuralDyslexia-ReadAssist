from openai import OpenAI
from app.config import settings

class AIService:
    def __init__(self):
        self.client = OpenAI(api_key=settings.OPENAI_API_KEY)

    async def simplify_text(self, text: str) -> str:
        try:
            response = self.client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {
                        "role": "system",
                        "content": "You are an expert cognitive assistive AI. Rewrite the user text to maximize readability for individuals with severe dyslexia. Break down long run-on sentences, use active voice, replace rare vocabulary with simpler words, and maintain the exact original meaning."
                    },
                    {"role": "user", "content": text}
                ],
                max_tokens=600,
                temperature=0.3
            )
            return response.choices.message.content
        except Exception:
            return text
