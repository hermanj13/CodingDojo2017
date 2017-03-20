cd
cd documents/coding/Platos
rm -r apps/login_register/migrations apps/main/migrations apps/schedules/migrations apps/user_profile/migrations
mkdir apps/login_register/migrations apps/main/migrations apps/schedules/migrations apps/user_profile/migrations
touch apps/login_register/migrations/__init__.py apps/main/migrations/__init__.py apps/schedules/migrations/__init__.py apps/user_profile/migrations/__init__.py
cd
source documents/coding/CodingDojo/Python/myEnvironments/djangoEnv/bin/activate
cd
cd documents/coding/Platos/
python manage.py makemigrations
python manage.py migrate
