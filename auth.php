<?php
if ($_GET['error']) {
    echo "Oooops!!! Not users with login - {$_GET['login']}";
} else
    echo "Congratulations!!! {$_GET['login']}, you are logined";
 ?>