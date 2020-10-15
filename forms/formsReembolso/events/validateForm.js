  
function validateForm(form){
	var msg = false;
	
	// Requisitante
	
	if(form.getValue("cpf") == ""){
		msg = true;
	}
	
	if(form.getValue("rg") == ""){
		msg = true;
	}
	
	if(form.getValue("dptmento") == ""){
		msg = true;
	}
	
	if(msg == true){
		throw "Favor preencher todos os campos!";
	}
}