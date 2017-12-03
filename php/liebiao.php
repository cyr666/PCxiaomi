<?php
error_reporting(0);
$w = $_GET["w"];
$arr = array(
	"小米",
	"小蚁",
	"小米4",
	"小米5",
	"小米6",
	"相机",
	"小蚁运动相机",
	"小米手环",
	"小盒子",
	"充电宝",
	"运动鞋",
	"路由器",
	"手环",
	"耳机",
	"m ax",
	"m i5",
	"m i note",
	"内存卡",
	"能量套装",
	"电水壶"
);
$str = "dfdf";

$len = count($arr);

for($i = 0; $i<$len; $i++){
	if(strpos($arr[$i],$w)!==false){
		$str.="|".$arr[$i];
	};
};
echo $str;
?>