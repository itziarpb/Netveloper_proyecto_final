"""empty message

Revision ID: bb1272e5394c
Revises: 49584ecd95e0
Create Date: 2023-01-17 14:43:25.178794

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bb1272e5394c'
down_revision = '49584ecd95e0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('category', schema=None) as batch_op:
        batch_op.add_column(sa.Column('playlistitems_id_category', sa.Integer(), nullable=False))
        batch_op.drop_constraint('category_prueba_fkey', type_='foreignkey')
        batch_op.create_foreign_key(None, 'play_list_items', ['playlistitems_id_category'], ['id'])
        batch_op.drop_column('prueba')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('category', schema=None) as batch_op:
        batch_op.add_column(sa.Column('prueba', sa.INTEGER(), autoincrement=False, nullable=False))
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.create_foreign_key('category_prueba_fkey', 'play_list_items', ['prueba'], ['id'])
        batch_op.drop_column('playlistitems_id_category')

    # ### end Alembic commands ###
