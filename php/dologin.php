<?php
	session_start();

	include "conn.php";

	$username = $_POST["username"];
	$password = $_POST["password"];

	//验证用户名是否占用
	$sql1 = "SELECT * FROM users WHERE username = '{$username}' AND password = '{$password}'";
	//执行
	$result1 = mysql_query($sql1);
	//验证长度
	if(mysql_num_rows($result1) != 0){
		//找到了匹配项，登录成功了
		echo 1;
		//写session
		$_SESSION["login"] = true;
		$_SESSION["username"] = $username;
		exit;
	}else{
		echo -1;

		$_SESSION["login"] = false;
		$_SESSION["username"] = "";
	}
?>