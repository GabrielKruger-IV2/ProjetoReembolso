function beforeSendValidate(numState, nextState){
	var $iptDespesas = document.querySelectorAll("[name^='valor___']");
	var $iptDatas = document.querySelectorAll("[name^='dt_despesa___']");
	var $iptFiles = document.querySelectorAll("[name^='uploaded___']");
	
	if(numState == 0 || numState == 1){		
		if($iptDespesas.length <= 0){
	      throw "Insira uma despesa na tabela!"
		}
		
		else{
			for(var i = 0; i < $iptDespesas.length; i++){
				if($iptDespesas[i].value.length <= 0){
					throw "Preencha todos os valores gastos!"
				}
				
				else if($iptDatas[i].value.length <= 0){
					throw "Informe as datas de todas as despesas!"
				}
				
				else if($iptFiles[i].value.length <= 0){
					throw "Envie todos os comprovantes!"
				}
			}
		}
	}
}