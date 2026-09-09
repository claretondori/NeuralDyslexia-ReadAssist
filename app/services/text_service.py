import re
import httpx
from bs4 import BeautifulSoup
from typing import List
from app.schemas.transform import WordToken

class TextProcessorService:
    def generate_token_matrix(self, text: str) -> List[WordToken]:
        words = text.split(" ")
        matrix = []
        for word in words:
            clean_word = re.sub(r'[^\w]', '', word)
            if not clean_word:
                matrix.append(WordToken(original=word, bionic_html=word, inversion_risk=False))
                continue
            
            length = len(clean_word)
            fixation_len = 1 if length <= 3 else (2 if length <= 5 else 3)
            fixation = clean_word[:fixation_len]
            remainder = word[fixation_len:]
            
            matrix.append(WordToken(
                original=word,
                bionic_html=f"<strong>{fixation}</strong>{remainder}",
                inversion_risk=bool(re.search(r'[bdpq]', clean_word))
            ))
        return matrix

class WebScraperService:
    async def extract_clean_text(self, url: str) -> dict:
        try:
            async with httpx.AsyncClient(timeout=10.0, follow_redirects=True) as client:
                headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) NeuralDyslexiaReadAssist/1.0"}
                response = await client.get(url, headers=headers)
                if response.status_code != 200:
                    raise Exception(f"Failed to load website. Status code: {response.status_code}")
            
            soup = BeautifulSoup(response.text, "html.parser")
            
            title = None
            if soup.find("meta", property="og:title"):
                title = soup.find("meta", property="og:title")["content"]
            elif soup.find("title"):
                title = soup.find("title").get_text()
                
            image_url = None
            if soup.find("meta", property="og:image"):
                image_url = soup.find("meta", property="og:image")["content"]
                
            site_name = None
            if soup.find("meta", property="og:site_name"):
                site_name = soup.find("meta", property="og:site_name")["content"]
            
            for extra_tag in soup(["script", "style", "nav", "footer", "header", "aside", "form"]):
                extra_tag.extract()
                
            paragraphs = soup.find_all(['p', 'h1', 'h2', 'h3'])
            clean_text = " ".join([p.get_text().strip() for p in paragraphs if p.get_text().strip()])
            truncated_text = clean_text[:7500] if clean_text else "No extractable text content found on this webpage."
            
            return {
                "body_text": truncated_text,
                "title": title if title else "Extracted Article Web View",
                "image_url": image_url,
                "site_name": site_name if site_name else "External Web Source"
            }
            
        except Exception as e:
            return {
                "body_text": f"Error trying to process URL link content: {str(e)}",
                "title": "Extraction Failed",
                "image_url": None,
                "site_name": "Error Source"
            }
