FROM python:3.9-buster

COPY ./app /app
WORKDIR /app

# 実装中
RUN apt-get update && \
    apt-get install --no-install-recommends -y postgresql-client && \
    apt-get clean

# pipを使ってpoetryをインストール
RUN pip install poetry

RUN poetry install --only main
RUN poetry config virtualenvs.create false
RUN poetry config virtualenvs.in-project false

EXPOSE 80
CMD poetry run uvicorn main:app --host 0.0.0.0 --port 80 --reload