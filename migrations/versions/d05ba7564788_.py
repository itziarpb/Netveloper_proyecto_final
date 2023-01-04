"""empty message

Revision ID: d05ba7564788
Revises: c9cf03b7c0b3
Create Date: 2023-01-04 19:30:38.845214

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd05ba7564788'
down_revision = 'c9cf03b7c0b3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'name',
               existing_type=sa.VARCHAR(length=80),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'name',
               existing_type=sa.VARCHAR(length=80),
               nullable=False)
    # ### end Alembic commands ###
