from sqlalchemy import create_engine

from sqlalchemy.orm import sessionmaker, declarative_base

from utils.settings import settings



Base = declarative_base()

engine = create_engine(url= settings.DB_CONNECTION)

Session = sessionmaker(bind= engine)


def get_db():
    # Session = LocalSession()
    
    LocalSession = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)
    Session = LocalSession()

    try:
        yield Session
    finally: 
        
        Session.close()