from pydantic import BaseModel
from typing import List, Optional

class TransformRequest(BaseModel):
    text: Optional[str] = ""
    url: Optional[str] = ""
    simplify: bool = False

class WordToken(BaseModel):
    original: str
    bionic_html: str
    inversion_risk: bool

class TransformResponse(BaseModel):
    original_text: str
    transformed_text: str
    word_matrix: List[WordToken]
    title: Optional[str] = None
    image_url: Optional[str] = None
    site_name: Optional[str] = None
