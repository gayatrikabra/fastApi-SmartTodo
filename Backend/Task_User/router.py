from fastapi import APIRouter, status, Depends
from Task_User.dtos import TaskSchema
from utils.db import get_db
from sqlalchemy.orm import Session
from Task_User import controllers
from Authentication_User.models import UserModel
from utils.helpers import is_authenticated

task_routes = APIRouter(prefix='/tasks')

@task_routes.post('/add', status_code= status.HTTP_201_CREATED)
def add(body : TaskSchema, user : UserModel = Depends(is_authenticated), db : Session = Depends(get_db), ):
    return controllers.add(body, user, db)

@task_routes.put('/edit/{id}', status_code= status.HTTP_200_OK)
def edit(body : TaskSchema, id: int, user: UserModel = Depends(is_authenticated), db: Session = Depends(get_db), ):
    return controllers.edit(body, id, user, db)

@task_routes.delete('/delete/{id}', status_code= status.HTTP_200_OK)
def delete(id: int,user: UserModel = Depends(is_authenticated), db: Session = Depends(get_db)):
    return controllers.delete(id, user, db)

@task_routes.get('/show', status_code= status.HTTP_200_OK)
def show(user: UserModel = Depends(is_authenticated), db: Session = Depends(get_db)):
    return controllers.show(user,db)