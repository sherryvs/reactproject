<?php
	//链接数据库
	include "conn.php";

	$id = $_GET["id"];
	//发出请求
	$sql = "SELECT * FROM tiezi WHERE id = {$id}";
	//执行
	$result = mysql_query($sql);
	//遍历，依次推入大数组
	$row = mysql_fetch_array($result);
		
	echo $row["content"];
?>
