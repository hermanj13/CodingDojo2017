# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-24 00:17
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='books',
            name='reviewer',
        ),
    ]
