<?php
$host = 'localhost';
$user = 'root';
$ps = '1234567890';
$db = mysql_connect($host,$user,$ps);

if(!$db) {
	die("link error".mysql_error());
	exit;
}

if(!mysql_select_db('vesta', $db)) {
	echo "select error";
	exit;
}
setlocale(LC_ALL,"zh_TW.UTF-8");
mysql_query("SET NAMES UTF8");

$post_data = $_POST;

$dishes = $post_data['course'];
$tree = array();
$root = rand(1,250);
array_push($tree, $root);

for($i=1;$i<$dishes;$i++){
	print_r("%d\n",$i);
	$chose = array('id'=>'0','relation'=>'0');
	foreach($tree as $t) {
		$sql = "SELECT second_id, relation FROM recipe_relation WHERE first_id = $t";
		$rtn = mysql_query($sql);
		$next_candy = array();
		if($rtn){
			while($next = mysql_fetch_assoc($rtn)) {
				array_push($next_candy, $next);
			}
		}
		$cnt = 0;	
		while(true) {
			$cnt ++;
			if($cnt> 90000 ) {
				break;
			}
			if(count($next_candy)== 0)break;
			$rand_id = rand(0,count($next_candy)-1);
			$tmp = $next_candy[$rand_id];
			if($tmp['relation'] > $chose['relation'] && !in_array($tmp['second_id'],$tree)){
				$chose['id'] = $tmp['second_id'];
				$chose['relation'] = $tmp['relation'];
				break;
			}
		}

	}
	array_push($tree, $chose['id']);
}
$ans = array();
foreach($tree as $t) {
	$sql = "SELECT * FROM recipe WHERE id = $t";
	$rtn = mysql_query($sql);
	while($data = mysql_fetch_assoc($rtn)){
		$tmp = array('name'=>$data['name'],'ingredient'=>$data['ingredient']);
		array_push($ans,$tmp);
	}
}


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Content-type: application/json; chartset=utf-8');
echo json_encode($ans);
