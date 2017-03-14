<?php
	include "conn.php";

	$username = $_POST["username"];
	$password = $_POST["password"];

	//验证用户名是否占用
	$sql1 = "SELECT * FROM users WHERE username = '{$username}'";
	//执行
	$result1 = mysql_query($sql1);
	//验证长度
	if(mysql_num_rows($result1) != 0){
		//被占用了
		echo -1;
		exit;
	};
	

	//插入
	$sql2 = "INSERT INTO users (username,password) VALUES ('{$username}' , '{$password}')";
	//执行
	$result2 = mysql_query($sql2);

	if($result2 == 1){
		echo 1;
	}else{
		echo -2;
	}
?>