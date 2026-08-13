
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware

# from utils.db import Base, engine
# from Authentication_User.router import auth_routes
# from Task_User.router import task_routes

# # create tables
# Base.metadata.create_all(engine)

# app = FastAPI(title="Task Management App")
# @app.get("/")
# def root():
#     return {"message": "Task Management API is running"}

# # CORS FIRST
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000",
#     "https://extended-vanity-choosing.ngrok-free.dev"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # routers
# app.include_router(auth_routes)
# app.include_router(task_routes)


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from utils.db import Base, engine
from Authentication_User.router import auth_routes
from Task_User.router import task_routes


# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Task Management App")


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://precious-illumination-production-fce6.up.railway.app/",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Root endpoint
@app.get("/")
def root():
    return {"message": "Task Management API is running"}


# Routers
app.include_router(auth_routes)
app.include_router(task_routes)



from sqlalchemy import text
from fastapi import FastAPI

app = FastAPI()

@app.get("/db-test")
def db_test():
    try:
        with engine.connect() as connection:
            result = connection.execute(text("SELECT 1"))
            return {
                "status": "success",
                "database": "PostgreSQL is connected",
                "result": result.scalar()
            }
    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }