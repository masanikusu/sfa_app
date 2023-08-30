from typing import Optional

from fastapi import status


class ApiError(Exception):
    status_code: int = status.HTTP_500_INTERNAL_SERVER_ERROR
    detail: str = 'API Error'

    def __init__(self, reason: Optional[str] = None):
        if reason:
            self.reason = reason

    def __str__(self):
        return f'{self.detail}\n{self.reason}'

class AuthError(ApiError):
    status_code: int = status.HTTP_401_UNAUTHORIZED
    detail: str = 'Authentication Error.'