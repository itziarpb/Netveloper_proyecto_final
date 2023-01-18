"""empty message

Revision ID: 219e439c5c96
Revises: a56843cf4a57
Create Date: 2023-01-17 14:36:20.663615

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '219e439c5c96'
down_revision = 'a56843cf4a57'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('category', schema=None) as batch_op:
        batch_op.add_column(sa.Column('category_youtube_id', sa.String(length=120), nullable=False))
        batch_op.create_unique_constraint(None, ['category_youtube_id'])
        batch_op.drop_constraint('category_playlistitems_id_fkey', type_='foreignkey')
        batch_op.drop_column('playlistitems_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('category', schema=None) as batch_op:
        batch_op.add_column(sa.Column('playlistitems_id', sa.INTEGER(), autoincrement=False, nullable=False))
        batch_op.create_foreign_key('category_playlistitems_id_fkey', 'play_list_items', ['playlistitems_id'], ['id'])
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('category_youtube_id')

    # ### end Alembic commands ###
