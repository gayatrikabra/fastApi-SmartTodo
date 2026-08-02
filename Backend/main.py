# from fastapi import FastAPI


# from utils.db import Base, engine

# # from src.tasks.models import TaskModel

# from Authentication_User.router import auth_routes
# from Task_User.router import task_routes


# Base = Base.metadata.create_all(engine)

# app = FastAPI(title="This is my task management application")

# app.include_router(auth_routes)
# app.include_router(task_routes)

# from fastapi.middleware.cors import CORSMiddleware

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from utils.db import Base, engine
from Authentication_User.router import auth_routes
from Task_User.router import task_routes

# create tables
Base.metadata.create_all(engine)

app = FastAPI(title="Task Management App")

# CORS FIRST
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000",
    "https://extended-vanity-choosing.ngrok-free.dev"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# routers
app.include_router(auth_routes)
app.include_router(task_routes)