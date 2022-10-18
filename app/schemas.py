#Example schemas.py
#TODO: Add password hashing via OAuth2

import pydantic as _pydantic
import datetime as _dt

class _BaseUser(_pydantic.BaseModel):
    username: str
    email: str

class User(_BaseUser):
    id: int
    date_created: _dt.datetime

class CreateUser(_BaseUser):
    pass