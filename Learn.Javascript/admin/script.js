		let login = prompt("Login");
		

		if (login == 'Admin') {
			let pass = prompt("Pass"); 
			if (pass = "31415") {
				alert("U r welcome");
			}
			else if (pass == '' || pass == null ) {
				alert("Canceled");
			}
			else {
				alert("U r not welcome");
			}
		}
		else if (login == '' || login == null) {
			alert("Canceled");
		}
		else {
			alert("I dont know u");
		}