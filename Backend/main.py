from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from sqlalchemy.orm import Session

from utils.db import Base, engine, get_db
from Authentication_User.router import auth_routes
from Task_User.router import task_routes
from Authentication_User.models import UserModel


# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Task Management App")


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://precious-illumination-production-fc24.up.railway.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Root endpoint
@app.get("/")
def root():
    return {"message": "Task Management API is running"}


# Database test
# @app.get("/db-test")
# def db_test():
#     try:
#         with engine.connect() as connection:
#             result = connection.execute(text("SELECT 1"))

#             return {
#                 "status": "success",
#                 "database": "PostgreSQL is connected",
#                 "result": result.scalar()
#             }

#     except Exception as e:
#         return {
#             "status": "error",
#             "message": str(e)
#         }




from sqlalchemy import inspect

@app.get("/tables-test")
def tables_test():
    inspector = inspect(engine)

    return {
        "tables": inspector.get_table_names()
    }


@app.get("/users-test")
def users_test(db: Session = Depends(get_db)):
    users = db.query(UserModel).all()

    return [
        {
            "id": user.id,
            "name": user.name,
            "username": user.username,
            "email": user.email
        }
        for user in users
    ]
# Routers
app.include_router(auth_routes)
app.include_router(task_routes)