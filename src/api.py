import fastapi, uvicorn
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
app = fastapi.FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

import time
@app.get("/")
async def root():
    time.sleep(1)
    return [
        {'id': 1, "name": "user1"},
        {'id': 2, "name": "user2"},
        {'id': 3, "name": "user3"}
    ]


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
