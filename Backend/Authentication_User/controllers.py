from Authentication_User.dtos import LoginSchema, UserSchema
from sqlalchemy.orm import Session
from Authentication_User.models import UserModel
from fastapi import HTTPException, status, Depends
import jwt
from jwt.exceptions import InvalidTokenError
from pwdlib import PasswordHash
from utils.db import get_db
from utils.settings import settings



def register(body : UserSchema, db : Session = Depends(get_db)):
    is_user = db.query(UserModel).filter(UserModel.username == body.username).first()
    if is_user:
        raise HTTPException(400, detail= "Username already exist ...")
    
    is_user = db.query(UserModel).filter(UserModel.email == body.email).first()
    if is_user: 
        raise HTTPException(400, detail= "Email already exist ...")
    
    hash_password = get_password_hash(body.password)

    new_user = UserModel(
        name = body.name,
        username = body.username,
        hash_password = hash_password,
        email = body.email

    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


password_hash = PasswordHash.recommended()
def get_password_hash(password):
    return password_hash.hash(password)

def verify_password(plain_password, hashed_password):
    return password_hash.verify(plain_password, hashed_password)

def login(body : LoginSchema, db : Session):
     user = db.query(UserModel).filter(UserModel.username == body.username).first()
     if not user:
        raise HTTPException(status_code= status.HTTP_401_UNAUTHORIZED, detail = "You Entered wrong username")
    
     if not verify_password(body.password, user.hash_password):
        raise HTTPException(status_code= status.HTTP_401_UNAUTHORIZED, detail = "You Entered wrong password")
    
    #  exp_time = datetime.now() + timedelta(minutes= settings.EXP_TIME)

    # # print(exp_time)
    
   
     token = jwt.encode({"user_id" : user.id}, settings.SECRET_KEY, settings.ALGORITHM)
     print(token)
       

    #  return {"msg" : "Login done","token" : token}

     return {     "access_token": token,     "token_type": "bearer" }

  