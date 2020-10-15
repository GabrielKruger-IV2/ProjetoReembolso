function afterProcessCreate(processId){
	var parentProcess = hAPI.getParentInstance(processId);
	
	if(parentProcess){
        setChildTable(parentProcess);
    }
}

function setChildTable(numProcessoPai){
    var cardData = hAPI.getCardData(numProcessoPai);
    var keys = cardData.keySet().toArray();

    for(var key in keys){
        var field = keys[key];

        if (field.indexOf("companyid___") > -1) {
            var childData = new java.util.HashMap();
          	var index = field.replace("companyid___", "");

          	childData.put("valor",cardData.get("valor___" + index));
          	childData.put("dt_despesa",cardData.get("dt_despesa___" + index));
          	childData.put("uploaded",cardData.get("uploaded___" + index));
          	childData.put("apagar",cardData.get("apagar___" + index));

            hAPI.addCardChild("tableItens",childData)
         }
    }
}
