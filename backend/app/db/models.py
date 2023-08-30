import environment.env as env
from db.db import Base
from db.encryption import PGPString
from sqlalchemy import (BigInteger, Boolean, Column, Date, DateTime,
                        ForeignKey, Integer, Float, Numeric, String,
                        text)
from sqlalchemy.orm import relationship


class Department(Base):
    __tablename__ = 'm_department'
    __table_args__ = { 'comment': '部署マスタ' }

    department_cd = Column(String, primary_key=True, autoincrement=False, comment='部署コード')
    department_name = Column(String, nullable=False, comment='部署名')
    start_at = Column(DateTime, nullable=False, server_default='2000-01-01 00:00:00', comment='適用開始日時')
    end_at = Column(DateTime, nullable=False, server_default='2999-12-31 23:59:59', comment='適用終了日時')
    is_delete = Column(Boolean, nullable=False, server_default='FALSE', comment='論理削除フラグ')
    create_user = Column(Integer, ForeignKey('users.user_id', name='m_department_create_user_fkey'), comment='作成者')
    create_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP'), comment='作成日時')
    update_user = Column(Integer, ForeignKey('users.user_id', name='m_department_update_user_fkey'), comment='更新者')
    update_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP'), comment='更新日時')


class Users(Base):
    __tablename__ = 'users'
    __table_args__ = { 'comment': 'ユーザー' }

    user_cd = Column(Integer, primary_key=True, comment='ユーザーID', unique=True)
    user_name = Column(String, comment='ユーザー名')
    department_cd = Column(String, ForeignKey('m_department.department_cd', name='users_department_cd_fkey'), comment='所属部署')
    # role_id = Column(Integer, ForeignKey('roles.role_id'), comment='ロールID')
    start_at = Column(DateTime, nullable=False, server_default='2000-01-01 00:00:00', comment='適用開始日時')
    end_at = Column(DateTime, nullable=False, server_default='2999-12-31 23:59:59', comment='適用終了日時')
    is_delete = Column(Boolean, nullable=False, server_default='FALSE', comment='論理削除フラグ')
    create_user = Column(Integer, ForeignKey('users.user_id', name='users_create_user_fkey'), comment='作成者')
    create_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP'), comment='作成日時')
    update_user = Column(Integer, ForeignKey('users.user_id', name='users_update_user_fkey'), comment='更新者')
    update_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP'), comment='更新日時')

    create_user_rel = relationship('Users', foreign_keys=[create_user])
    update_user_rel = relationship('Users', foreign_keys=[update_user])


class Client(Base):
    __tablename__ = 'm_client'
    __table_args__ = { 'comment': '顧客マスタ'}

    client_cd = Column(Integer, primary_key=True, comment='顧客コード', unique=True)
    client_name = Column(String, comment='顧客名')
    client_charge = Column(String, comment='担当者名')
    start_at = Column(DateTime, nullable=False, server_default='2000-01-01 00:00:00', comment='適用開始日時')
    end_at = Column(DateTime, nullable=False, server_default='2999-12-31 23:59:59', comment='適用終了日時')
    is_delete = Column(Boolean, nullable=False, server_default='FALSE', comment='論理削除フラグ')
    create_user = Column(Integer, ForeignKey('users.user_id', name='users_create_user_fkey'), comment='作成者')
    create_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP'), comment='作成日時')
    update_user = Column(Integer, ForeignKey('users.user_id', name='users_update_user_fkey'), comment='更新者')
    update_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP'), comment='更新日時')


class Product(Base):
    __tablename__ = 'm_product'
    __table_args__ = { 'comment': '商品マスタ'}

    product_cd = Column(Integer, primary_key=True, comment='商品コード', unique=True)
    product_name = Column(String, comment='商品名')
    product_price = Column(Integer, comment='商品価格')
    start_at = Column(DateTime, nullable=False, server_default='2000-01-01 00:00:00', comment='適用開始日時')
    end_at = Column(DateTime, nullable=False, server_default='2999-12-31 23:59:59', comment='適用終了日時')
    is_delete = Column(Boolean, nullable=False, server_default='FALSE', comment='論理削除フラグ')
    create_user = Column(Integer, ForeignKey('users.user_id', name='m_terminal_create_user_fkey'), comment='作成者')
    create_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP'), comment='作成日時')
    update_user = Column(Integer, ForeignKey('users.user_id', name='m_terminal_update_user_fkey'), comment='更新者')
    update_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP'), comment='更新日時')


class Project(Base):
    __tablename__ = 'm_project'
    __table_args__ = { 'comment': 'プロジェクトマスタ'}

    project_cd = Column(Integer, primary_key=True, comment='プロジェクトコード', unique=True)
    project_name = Column(String, comment='プロジェクト名')
    client_cd = Column(Integer, ForeignKey('m_client.client_cd'), index=True, comment='顧客コード')
    accuracy = Column(Integer, comment='確度')
    negotiator = Column(Integer, ForeignKey('users.user_id'), comment='商談担当者')
    start_at = Column(DateTime, nullable=False, server_default='2000-01-01 00:00:00', comment='適用開始日時')
    end_at = Column(DateTime, nullable=False, server_default='2999-12-31 23:59:59', comment='適用終了日時')
    is_delete = Column(Boolean, nullable=False, server_default='FALSE', comment='論理削除フラグ')
    create_user = Column(Integer, ForeignKey('users.user_id', name='m_terminal_create_user_fkey'), comment='作成者')
    create_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP'), comment='作成日時')
    update_user = Column(Integer, ForeignKey('users.user_id', name='m_terminal_update_user_fkey'), comment='更新者')
    update_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP'), comment='更新日時')


class Quotation(Base):
    __tablename__ = 'm_quotation'
    __table_args__ = { 'comment': '見積マスタ' }

    quotation_cd = Column(Integer, primary_key=True, comment='見積書コード', unique=True)
    quotation_name = Column(String, comment='見積書名')
    client_cd = Column(Integer, ForeignKey('m_client.client_cd'), comment='顧客名')
    product_cd = Column(Integer, ForeignKey('m_product.product_cd'), comment='商品コード')
    start_at = Column(DateTime, nullable=False, server_default='2000-01-01 00:00:00', comment='適用開始日時')
    end_at = Column(DateTime, nullable=False, server_default='2999-12-31 23:59:59', comment='適用終了日時')
    is_delete = Column(Boolean, nullable=False, server_default='FALSE', comment='論理削除フラグ')
    create_user = Column(Integer, ForeignKey('users.user_id', name='m_terminal_create_user_fkey'), comment='作成者')
    create_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP'), comment='作成日時')
    update_user = Column(Integer, ForeignKey('users.user_id', name='m_terminal_update_user_fkey'), comment='更新者')
    update_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP'), comment='更新日時')


class Report(Base):
    __tablename__ = 'm_business_report'
    __table_args__ = { 'comment': '商談報告マスタ' }

    report_cd = Column(Integer, primary_key=True, comment='商談報告コード')
    report_title = Column(String, comment='タイトル')
    client_cd = Column(Integer, ForeignKey('m_client.client_cd'), comment='顧客コード')
    content = Column(String, comment='商談概要')
    start_at = Column(DateTime, nullable=False, server_default='2000-01-01 00:00:00', comment='適用開始日時')
    end_at = Column(DateTime, nullable=False, server_default='2999-12-31 23:59:59', comment='適用終了日時')
    is_delete = Column(Boolean, nullable=False, server_default='FALSE', comment='論理削除フラグ')
    create_user = Column(Integer, ForeignKey('users.user_id', name='m_terminal_create_user_fkey'), comment='作成者')
    create_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP'), comment='作成日時')
    update_user = Column(Integer, ForeignKey('users.user_id', name='m_terminal_update_user_fkey'), comment='更新者')
    update_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP'), comment='更新日時')
