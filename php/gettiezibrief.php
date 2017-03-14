<?php
	//链接数据库
	include "conn.php";

	//检查是否有page属性
	if(!isset($_GET["page"])){
		$page = 0;
	}else{
		$page = $_GET["page"];
	}

	$pagesize = 4;
	$skip = $page * $pagesize;
	
 

	//检查是否有type属性
	if($_GET["type"] == "all"){
		//发出请求

		$sql = "SELECT * FROM tiezi ORDER BY id DESC LIMIT {$skip},{$pagesize}  ";
	}else{
		$type = $_GET["type"];
		//用户输入的$type是一个字符串，比如shouji、diannao 等等
		//我们的tiezi 表里面存储的是数字，所以现在要根据types反查id
		$rr = mysql_query("SELECT * FROM types WHERE url = '{$type}'");
		$rrr = mysql_fetch_array($rr);
		$typeid = $rrr["id"];
		//发出请求
		$sql = "SELECT * FROM tiezi WHERE type = {$typeid} ORDER BY id DESC  LIMIT {$skip},{$pagesize} ";
	}
	
	
	//执行
	$result = mysql_query($sql);
	
 

	// //遍历，依次推入大数组
	$R = array();
	while($row = mysql_fetch_array($result)){
		//遍历到的这个元素的内容
		$content = $row["content"];
		//PHP正则去拿到图片列表
		preg_match_all('/<img src\=\"(.*?)\"/',$content,$matches1);
		
		preg_match_all('~[\x{4e00}-\x{9fa5}]+~u',$content,$matches2);

		array_push($R, array("id" => $row["id"] , "title" => $row["title"] , "pics" => $matches1[1] , "brief" => join("",$matches2[0])));
	}
	echo json_encode($R) ;
?>