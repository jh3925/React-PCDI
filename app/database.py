import sqlalchemy as _sql
import sqlalchemy.ext.declarative as _declarative
import sqlalchemy.orm as _orm

#Change (USER) to your username, (PASSWORD) to password, and (DATABASE NAME) to your database name 
DATABASE_URL = "postgresql://(USER):(PASSWORD)@localhost:5432/(DATABASE NAME)"

engine = _sql.create_engine(DATABASE_URL)

SessionLocal = _orm.sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = _declarative.declarative_base()
