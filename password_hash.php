<?php

	//print_r($_POST); die;
	
	$response = null;

	if(isset($_POST['data'])){
		$data	= $_POST['data'];
		$inicio	= microtime(true);

		$cost10	= password_hash($data, PASSWORD_DEFAULT);
		$fin10	= microtime(true);
		$cost12	= password_hash($data, PASSWORD_DEFAULT, ['cost' => 12,]);
		$fin12	= microtime(true);
		$cost15	= password_hash($data, PASSWORD_DEFAULT, ['cost' => 15,]);
		$fin15	= microtime(true);
		
		$response = array(
						'cost10' => $cost10, 'time10' => (float) number_format($fin10 - $inicio, 2),
						'cost12' => $cost12, 'time12' => (float) number_format($fin12 - $fin10, 2),
						'cost15' => $cost15, 'time15' => (float) number_format($fin15 - $fin12, 2),
					);
	}

	header('Content-Type: application/json');
	echo(json_encode($response));