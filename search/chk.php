<?php
//先接收前输入框里的值
$w = $_GET["w"];

$arr = array(
	"javascript",
	"java",
	"jscript",
	"vbscript",
	"actionscript",
	"c++",
	"c#"
);

$str = "";

$len = count($arr);

for($i = 0; $i<$len; $i++){
	if(strpos($arr[$i],$w)!==false){
		$str.="|".$arr[$i];
	};
};
echo $str;
?>