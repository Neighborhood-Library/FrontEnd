<?php
//Log the user in
$con = mysql_connect("localhost","username","password");
mysql_query("INSERT INTO onlineUsers (username) VALUE ('$username')") //Assuming the user's username is stored in $username
?>

<?php
//Clear Cookies, etc.
$con = mysql_connect("localhost","username","password");
mysql_query("DELETE FROM onlineUsers WHERE username = '$username'") //Assuming the user's username is stored in $username
?>