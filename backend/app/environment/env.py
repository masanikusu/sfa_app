import json
import os
import logging

# DB接続情報
DB_USER = os.getenv('DB_USER')
DB_PASS = os.getenv('DB_PASS')
DB_PORT = os.getenv('DB_PORT')
DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_NAME')

# 暗号化パスワード
PGP_PASSWORD = os.getenv('PGP_PASSWORD')

# ログレベル
APP_LOG_LEVEL = os.getenv('APP_LOG_LEVEL') if os.getenv('APP_LOG_LEVEL') else logging.INFO
SQL_LOG_LEVEL = os.getenv('SQL_LOG_LEVEL') if os.getenv('SQL_LOG_LEVEL') else logging.ERROR


