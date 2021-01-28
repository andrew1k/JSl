		let mess;
		let login = prompt("Who r u?");
		(login == "Andrew") ? mess = "Admin" :
		(login == "Anastasia") ? mess = "Wife" :
		(login == "") ? mess = "There is no login" :
		mess = "";

		alert(mess);
