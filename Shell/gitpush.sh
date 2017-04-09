cd
cd documents/coding/CodingDojo
git status
echo "Do you wish to continue?"
select yn in "yes" "no"; do
case $yn in
        yes ) break;;
        no ) exit;;
esac
done
git add .
git status
echo "Continue?"
select yn in "yes" "no"; do
case $yn in
        yes ) break;;
        no ) exit;;
esac
done
echo "Reason for Update"
read message_variable
git commit -m "$message_variable"
git push origin master
