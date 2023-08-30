import environment.env as env
from db.models import Base
from sqlalchemy import create_engine

DB_URL = 'postgresql+psycopg2://%s:%s@%s:%s/%s' % (
    env.DB_USER,
    env.DB_PASS,
    env.DB_HOST,
    env.DB_PORT,
    env.DB_NAME,
)

engine = create_engine(DB_URL, echo=True)

def reset_database():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)

if __name__ == '__main__':
    reset_database()