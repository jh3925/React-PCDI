#This file is used to handle database requests, responses, and CRUD operations

import database as Database
import models as Models
from sqlalchemy.orm import Session

from passlib.context import CryptContext

#Create a table (if it doesn't exist) based on the models.py file
def create_table():
    Database.Base.metadata.create_all(bind=Database.engine)

#Band aid fix for the database not being created on startup
Database.Base.metadata.create_all(bind=Database.engine)

#Access the database
def get_db():
    db = Database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password: str):
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)

#CRUD operations for the User table
#Create
def create_user(user: Models.User, db: Session):
    db_user = Models.User(username=user.username, email=user.email, hashed_password=get_password_hash(user.hashed_password))
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

#Read
def get_user_by_id(user_id: int, db: Session):
    return db.query(Models.User).filter(Models.User.id == user_id).first()

def get_user_by_email(email: str, db: Session):
    return db.query(Models.User).filter(Models.User.email == email).first()

def get_user_by_username(username: str, db: Session):
    return db.query(Models.User).filter(Models.User.username == username).first()

def get_all_users(db: Session, page: int = 0, limit: int = 100):
    return db.query(Models.User).offset(page).limit(limit).all()

#Update
def update_user_by_id(user_id: int, user: Models.User, db: Session):
    db.query(Models.User).filter(Models.User.id == user_id).update({"username": user.username, "email": user.email})
    db.commit()
    return "User updated"

#Delete
def delete_user_by_id(user_id: int, db: Session):
    db.query(Models.User).filter(Models.User.id == user_id).delete()
    db.commit()
    return "User deleted"