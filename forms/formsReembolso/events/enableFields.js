function enableFields(form){
	var activity = getValue("WKNumState");
		
	if(activity == 11 || activity == 0){	
		form.setEnabled('obsFiscal', false);
		form.setEnabled('obsFinanceiro', false);
	}
	 else if(activity == 12){	
		form.setEnabled('nome', false);
		form.setEnabled('dt_agora', false);
		form.setEnabled('cpf', false);
		form.setEnabled('rg', false);
		form.setEnabled('dptmento', false);
		form.setEnabled('obsFinanceiro', false);
	}

	
	else if(activity == 7 || activity == 6){
		form.setEnabled('nome', false);
		form.setEnabled('dt_agora', false);
		form.setEnabled('cpf', false);
		form.setEnabled('rg', false);
		form.setEnabled('dptmento', false);
		form.setEnabled('obsFiscal', false);
	}
}