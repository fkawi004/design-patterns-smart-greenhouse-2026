"""Establish an empty Phase 1 migration baseline.

Revision ID: 001_baseline
Revises:
"""

revision = "001_baseline"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    """Record the baseline without creating business tables."""
    pass


def downgrade() -> None:
    """Remove only the recorded baseline revision."""
    pass

