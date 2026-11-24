from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Забота на дому API")

class SosRequest(BaseModel):
    worker_id: int
    ward_id: int
    comment: str = "Требуется срочная помощь"

@app.get("/wards")
def get_wards():
    return [{"id": 1, "name": "Иванова Мария Петровна", "status": "ожидает визит"}]

@app.post("/sos")
def trigger_sos(data: SosRequest):
    return {"status": "alert_sent", "worker_id": data.worker_id, "ward_id": data.ward_id}
