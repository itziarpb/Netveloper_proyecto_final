"""empty message

Revision ID: 946ad398f1a1
Revises: 18e91ce30860
Create Date: 2023-01-16 19:56:37.293273

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '946ad398f1a1'
down_revision = '18e91ce30860'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('video', schema=None) as batch_op:
        batch_op.alter_column('videodescription',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.Text(),
               existing_nullable=False)
        batch_op.drop_constraint('video_videodescription_key', type_='unique')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('video', schema=None) as batch_op:
        batch_op.create_unique_constraint('video_videodescription_key', ['videodescription'])
        batch_op.alter_column('videodescription',
               existing_type=sa.Text(),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)

    # ### end Alembic commands ###
