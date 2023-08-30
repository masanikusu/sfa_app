import logging
from datetime import datetime, timedelta, date

logger = logging.getLogger('main.py').getChild(__name__)

def jst_now():
    # 現在日時をJST（UTC+9時間）で返却
    return datetime.utcnow() + timedelta(hours=9)


def formatDate(value: datetime):
    d_week = '日月火水木金土'
    index = value.strftime('%u')
    week = d_week[int(index)]
    day = value.strftime('%Y年%m月%d日') + f'({week})' + ' ' + value.strftime('%H:%M:%S')
    return day

def formatDateOnly(value: date):
    d_week = '日月火水木金土'
    index = value.strftime('%u')
    week = d_week[int(index)]
    day = value.strftime('%Y年%m月%d日') + f'({week}) '
    return day
