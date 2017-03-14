<?php
	include "conn.php";

	$title = $_POST["title"];
	$content = $_POST["content"];
	$leixing = $_POST["leixing"];

	//set_magic_quotes_runtime("on");
	// $content = addslashes($content);
	// $content = htmlentities($content);
	//插入
	$sql = "INSERT INTO tiezi (title,content,type) VALUES ('{$title}' , '{$content}' , '{$leixing}')";
	//执行
	$result = mysql_query($sql);

	if($result == 1){
		echo 1;
	}else{
		echo -1;
	}
?>