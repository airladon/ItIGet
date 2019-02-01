"""empty message

Revision ID: b493d11f3cc3
Revises: 24ad076f2ac4
Create Date: 2019-02-01 10:11:25.908419

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b493d11f3cc3'
down_revision = '24ad076f2ac4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('emails',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('email', sa.Binary(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('users', sa.Column('encrypted_email', sa.String(length=120), nullable=True))
    op.create_index(op.f('ix_users_encrypted_email'), 'users', ['encrypted_email'], unique=True)
    op.drop_index('ix_users_email', table_name='users')
    op.drop_column('users', 'email')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=True))
    op.create_index('ix_users_email', 'users', ['email'], unique=True)
    op.drop_index(op.f('ix_users_encrypted_email'), table_name='users')
    op.drop_column('users', 'encrypted_email')
    op.drop_table('emails')
    # ### end Alembic commands ###
