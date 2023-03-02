"""empty message

Revision ID: d62fc282e64b
Revises: 133c802a49fb
Create Date: 2023-02-27 15:49:09.257603

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd62fc282e64b'
down_revision = '133c802a49fb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('coment', schema=None) as batch_op:
        batch_op.alter_column('coment',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=600),
               existing_nullable=False)
        batch_op.drop_constraint('coment_coment_key', type_='unique')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('coment', schema=None) as batch_op:
        batch_op.create_unique_constraint('coment_coment_key', ['coment'])
        batch_op.alter_column('coment',
               existing_type=sa.String(length=600),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)

    # ### end Alembic commands ###