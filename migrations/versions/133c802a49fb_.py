"""empty message

Revision ID: 133c802a49fb
Revises: cadf6a8130b2
Create Date: 2023-02-06 20:41:01.794450

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '133c802a49fb'
down_revision = 'cadf6a8130b2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('channel', schema=None) as batch_op:
        batch_op.alter_column('channelid',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=240),
               existing_nullable=False)
        batch_op.alter_column('channelbanner',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=240),
               existing_nullable=False)
        batch_op.alter_column('channeltitle',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=240),
               existing_nullable=False)

    with op.batch_alter_table('play_list_items', schema=None) as batch_op:
        batch_op.alter_column('playlistid',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=240),
               existing_nullable=False)
        batch_op.alter_column('playlisttitle',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=240),
               existing_nullable=False)
        batch_op.alter_column('thumbnails',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=240),
               existing_nullable=False)

    with op.batch_alter_table('video', schema=None) as batch_op:
        batch_op.alter_column('videoid',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=240),
               existing_nullable=False)
        batch_op.alter_column('videotitle',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=240),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('video', schema=None) as batch_op:
        batch_op.alter_column('videotitle',
               existing_type=sa.String(length=240),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
        batch_op.alter_column('videoid',
               existing_type=sa.String(length=240),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)

    with op.batch_alter_table('play_list_items', schema=None) as batch_op:
        batch_op.alter_column('thumbnails',
               existing_type=sa.String(length=240),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)
        batch_op.alter_column('playlisttitle',
               existing_type=sa.String(length=240),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
        batch_op.alter_column('playlistid',
               existing_type=sa.String(length=240),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)

    with op.batch_alter_table('channel', schema=None) as batch_op:
        batch_op.alter_column('channeltitle',
               existing_type=sa.String(length=240),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
        batch_op.alter_column('channelbanner',
               existing_type=sa.String(length=240),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)
        batch_op.alter_column('channelid',
               existing_type=sa.String(length=240),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)

    # ### end Alembic commands ###
