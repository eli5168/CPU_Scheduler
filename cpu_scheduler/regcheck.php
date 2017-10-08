<?php
	if(isset($_POST["Submit"]) && $_POST["Submit"] == "register")
	{
		$user = $_POST["username"];
		$psw = $_POST["password"];
		$psw_confirm = $_POST["confirm"];
		if($user == "" || $psw == "" || $psw_confirm == "")
		{
			echo "<script>alert('Can not empty!'); history.go(-1);</script>";
		}
		else
		{
			if($psw == $psw_confirm)
			{   
				$link = new mysqli("localhost","root","","elisql");		
				$sql = "select username from user where UserName = '$_POST[username]'";	
				$result = mysqli_query($link,$sql);	
				$num = mysqli_num_rows($result);
				if($num != 0)	//If it has created
				{
					echo "<script>alert('username has be created'); history.go(-1);</script>";
				}
				else	//not be created
				{
					$sql_insert = "insert into user (UserName,Password) values('$_POST[username]','$_POST[password]')";
					$res_insert = mysqli_query($link,$sql_insert);
					//$num_insert = mysql_num_rows($res_insert);
					if($res_insert == TRUE)
					{
						echo "<script>alert('Successful!'); history.go(-1);</script>";
					}
					else
					{
						echo "<script>alert('Something Wrong'); history.go(-1);</script>";
					}
				}
			}
			else
			{
				echo "<script>alert('password is not identical'); history.go(-1);</script>";
			}
		}
	}
	else
	{
		echo "<script>alert('fail submit'); history.go(-1);</script>";
	}
?>