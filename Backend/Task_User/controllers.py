from Task_User.dtos import TaskSchema
from sqlalchemy.orm import Session
from Task_User.models import TaskModel
from fastapi import HTTPException, status, Depends
import jwt
from jwt.exceptions import InvalidTokenError
from pwdlib import PasswordHash
from utils.db import get_db
from Authentication_User.models import UserModel



def add(body : TaskSchema, user: UserModel, db : Session = Depends(get_db)):
     data  = body.model_dump()   
    #  print(data)
     
     new_task = TaskModel(
             title = data['title'],
             description = data['description'],
             priority = data['priority'],
             due_date = data['due_date'],
             status = data['status'],
             user_id = user.id
   
        )
    

     db.add(new_task)
     db.commit()
     db.refresh(new_task)
     return {"data added:" : new_task}

def delete(task_id : int, user: UserModel, db: Session = Depends(get_db)):
    one_task = db.query(TaskModel).get(task_id)
    if not one_task:
        raise HTTPException(404, detail="Task ID is incorrect")
    
    if one_task.user_id != user.id : 
        raise HTTPException(401, detail="You are not allowed to Delete this task")
    
    db.delete(one_task)
    db.commit()

    return None

def edit(body : TaskSchema, task_id : int, user: UserModel, db: Session = Depends(get_db)):
       one_task : TaskModel = db.query(TaskModel).get(task_id)
       print(one_task)
       if not one_task:
            raise HTTPException(404, detail="Task ID is incorrect")
       if one_task.user_id != user.id : 
        raise HTTPException(401, detail="You are not allowed to Edit this task")
    
       one_task.title = body.title
       one_task.description = body.description
       one_task.priority = body.priority
       one_task.due_date = body.due_date
       one_task.status = body.status
    
       db.add(one_task)
       db.commit()
       db.refresh(one_task)

       return one_task


def show(user: UserModel, db : Session = Depends(get_db)):
     tasks =db.query(TaskModel).filter(TaskModel.user_id == user.id).all()
     return tasks

