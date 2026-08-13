from pydantic import BaseModel, Field
from datetime import datetime, date

class TaskSchema(BaseModel):
      title : str
      description : str
      priority : str = "medium"
      # due_date : datetime = datetime.now()
      due_date: datetime = Field(default_factory=datetime.now)
      status: str
     


# class UserResponseSchema(BaseModel):
#       name : str
#       username : str
#       email : str
#       id : int


# class LoginSchema(BaseModel):
#     username : str
#     password : str 