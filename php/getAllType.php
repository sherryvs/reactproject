<?php
	//链接数据库
	include "conn.php";
	//发出请求
	$sql = "SELECT * FROM types ORDER BY id";
	//执行
	$result = mysql_query($sql);
	//遍历，依次推入大数组
	$R = array();
	while($row = mysql_fetch_array($result)){
		array_push($R, $row);
	}
	echo json_encode($R) ;
?>