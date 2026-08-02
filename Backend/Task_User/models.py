from sqlalchemy import Column,String, Integer, DateTime, ForeignKey

from utils.db import Base

class TaskModel(Base):
    Base.__tablename__ = "task_table"

    id  = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    description = Column(String)
    priority = Column(String) 
    due_date = Column(DateTime)
    status = Column(String)

    user_id = Column(Integer,ForeignKey("user_table.id", ondelete= "CASCADE"))


   