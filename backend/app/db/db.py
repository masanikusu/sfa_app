import environment.env as env
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import declarative_base, sessionmaker

ASYNC_DB_URL = 'postgresql+asyncpg://%s:%s@%s:%s/%s' % (
  env.DB_USER,
  env.DB_PASS,
  env.DB_PORT,
  env.DB_USER,
  env.DB_NAME,
)


async_engine = create_async_engine(ASYNC_DB_URL, echo=False)
async_session = sessionmaker(async_engine, class_=AsyncSession)

Base = declarative_base()

async def get_db():
    async with async_session() as session:
        yield session