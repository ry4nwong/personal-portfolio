# Generated by Django 5.2 on 2025-04-23 04:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("portfolio", "0005_project_slug_alter_project_long_description_and_more"),
    ]

    operations = [
        migrations.RenameField(
            model_name="summarysection",
            old_name="order",
            new_name="display_order",
        ),
        migrations.AlterField(
            model_name="summarysection",
            name="description",
            field=models.TextField(default="No description yet"),
        ),
    ]
