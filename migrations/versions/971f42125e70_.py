"""empty message

Revision ID: 971f42125e70
Revises: fea155be7406
Create Date: 2023-01-13 19:04:30.467974

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '971f42125e70'
down_revision = 'fea155be7406'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('video', sa.Column('playlistitems_id', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'video', 'play_list_items', ['playlistitems_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'video', type_='foreignkey')
    op.drop_column('video', 'playlistitems_id')
    # ### end Alembic commands ###
