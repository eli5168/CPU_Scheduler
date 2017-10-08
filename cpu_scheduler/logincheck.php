<?php
	if(isset($_POST["submit"]) && $_POST["submit"] == "login")
	{
		$user = $_POST["username"];
		$psw = $_POST["password"];
		if($user == "" || $psw == "")
		{
			echo "<script>alert('Enter username and password'); history.go(-1);</script>";
		}
		else
		{
			$con = new mysqli("localhost","root","","elisql");	
			$sql = "select UserName,Password from user where UserName = '$_POST[username]' and Password = '$_POST[password]'";
			$result = mysqli_query($con,$sql);
			$num = mysqli_num_rows($result);
			if($num != 0)
			{
                echo "<script>alert('Login In Successfully..');window.location.href='scheduling.html'</script>";
			}
			else
			{
				echo "<script>alert('Wrong username or password');history.go(-1);</script>";
			}
		}
	}
	else
	{
		echo "<script>alert('fail submit'); history.go(-1);</script>";
	}

?>