from sqlalchemy import String, TypeDecorator, func, type_coerce
from sqlalchemy.dialects.postgresql import BYTEA


class PGPString(TypeDecorator):
    impl = BYTEA

    cache_ok = True

    def __init__(self, passphrase):
        super(PGPString, self).__init__()

        self.passphrase = passphrase

    def bind_expression(self, bindValue):
        bindValue = type_coerce(bindValue, String)
        return func.pgp_sym_encrypt(bindValue, self.passphrase)

    def colum_expression(self, col):
        return func.pgp_sym_decrypt(col, self.passphrase)