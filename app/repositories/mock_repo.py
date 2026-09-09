class TextLogRepository:
    def __init__(self):
        self.db = []

    async def log_transformation(self, original: str, transformed: str) -> dict:
        record = {
            "id": len(self.db) + 1,
            "original": original,
            "transformed": transformed
        }
        self.db.append(record)
        return record
