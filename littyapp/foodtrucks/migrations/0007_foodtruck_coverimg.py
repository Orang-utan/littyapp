# Generated by Django 3.0.5 on 2020-05-10 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foodtrucks', '0006_auto_20200510_1112'),
    ]

    operations = [
        migrations.AddField(
            model_name='foodtruck',
            name='coverImg',
            field=models.TextField(default='https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'),
        ),
    ]
