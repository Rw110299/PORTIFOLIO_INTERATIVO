from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import declarative_base, sessionmaker

DB_HOST = "localhost"
DB_PORT = 3306
DB_USER = "root"
DB_PASSWORD = "Rw110299+"
DB_NAME = "portifolio_interativo"

engine = create_engine(
    f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}", echo=True
)

Base = declarative_base()
SessionLocal = sessionmaker(bind=engine)
metadata = MetaData()
