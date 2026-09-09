from fastapi import APIRouter, HTTPException, Depends
from app.schemas.transform import TransformRequest, TransformResponse
from app.services.ai_service import AIService
from app.services.text_service import TextProcessorService, WebScraperService
from app.repositories.mock_repo import TextLogRepository

router = APIRouter(prefix="/api", tags=["Transformation"])

def get_ai_service(): 
    return AIService()

def get_text_service(): 
    return TextProcessorService()

def get_scraper_service(): 
    return WebScraperService()

def get_repo(): 
    return TextLogRepository()

@router.post("/transform", response_model=TransformResponse)
async def transform_text(
    payload: TransformRequest,
    ai_service: AIService = Depends(get_ai_service),
    text_service: TextProcessorService = Depends(get_text_service),
    scraper_service: WebScraperService = Depends(get_scraper_service),
    repo: TextLogRepository = Depends(get_repo)
):
    source_text = ""
    extracted_title = None
    extracted_image = None
    extracted_site = None
    
    if payload.url.strip():
        scraped_data = await scraper_service.extract_clean_text(payload.url)
        source_text = scraped_data["body_text"]
        extracted_title = scraped_data["title"]
        extracted_image = scraped_data["image_url"]
        extracted_site = scraped_data["site_name"]
    elif payload.text.strip():
        source_text = payload.text
        extracted_title = "Pasted Workspace Content"
        extracted_site = "User Workspace Scratchpad"
    else:
        raise HTTPException(status_code=400, detail="You must provide either a text block or a valid website URL address.")
        
    if "Error trying to process URL" in source_text:
        raise HTTPException(status_code=422, detail=source_text)

    processed_text = source_text
    
    if payload.simplify:
        processed_text = await ai_service.simplify_text(source_text)
        
    await repo.log_transformation(source_text, processed_text)
    word_matrix = text_service.generate_token_matrix(processed_text)
    
    return TransformResponse(
        original_text=source_text,
        transformed_text=processed_text,
        word_matrix=word_matrix,
        title=extracted_title,
        image_url=extracted_image,
        site_name=extracted_site
    )
