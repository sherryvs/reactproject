<?php
	session_start();

	//如果设置了login session
	if(isset($_SESSION["login"])){
		echo '{"login":true,"username":"' . $_SESSION["username"] . '"}'; 
	}else{
		echo '{"login":false}'; 
	}
?>