<?php

	//print_r($_POST); die;
	
	$response = null;

	if(isset($_POST['data'])){
		$data	= $_POST['data'];

		$cost10	= password_hash($data, PASSWORD_DEFAULT);
		$cost12	= password_hash($data, PASSWORD_DEFAULT, ['cost' => 12,]);
		$cost15	= password_hash($data, PASSWORD_DEFAULT, ['cost' => 15,]);
		
		$response = array(
						'cost10' => $cost10,
						'cost12' => $cost12,
						'cost15' => $cost15,
					);
	}

	header('Content-Type: application/json');
	echo(json_encode($response));