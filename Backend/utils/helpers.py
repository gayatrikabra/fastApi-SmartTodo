from fastapi import Request, HTTPException, status, Depends
from sqlalchemy.orm import Session
from datetime import datetime
from Authentication_User.models import UserModel
import jwt
from jwt.exceptions import InvalidTokenError
from utils.settings import settings
from utils.db import get_db


def is_authenticated(request: Request, db: Session = Depends(get_db)):
    try:
        token = request.headers.get("Authorization")
      

        if not token:
            raise HTTPException(status_code=401, detail="You are unauthorized")

        token = token.split(" ")[-1]

        data = jwt.decode(
            token,
            settings.SECRET_KEY,
            algorithms=[settings.ALGORITHM]
        )

        user_id = data.get("user_id")  # or "id"

        user = db.query(UserModel).filter(UserModel.id == user_id).first()

        if not user:
            raise HTTPException(status_code=401, detail="You are unauthorized")

        return user

    except InvalidTokenError:
        raise HTTPException(status_code=401, detail="You are unauthorized")

