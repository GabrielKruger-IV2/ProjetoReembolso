$(".btn1").click(() => {
    $("[name^=nota___]").fileupload({
        dataType: 'json',
        start: () => FLUIGC.loading(window).show(),
        done: (e, data) => {
            let file = data.result.files[0];
            let a = e.target.id.split("___");
            let index = a[a.length - 1];
    
            saveDocuments(file, index);
        },
        fail: (e, data) => {
            console.log("Falha no upload!", data);
        },
        stop: () => FLUIGC.loading(window).hide()
    });
});
    
function saveDocuments(file, index) {
    $.ajax({
        url: '/api/public/ecm/document/createDocument',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            "description": file.name,
            "parentId": 40671,
            "attachments": [{
                "fileName": file.name
            }]
        })
    }).done((result) => {
        $("#uploaded___" + index).val(result.content.description)
        $("#apagar___" + index).val(result.content.id)

        FLUIGC.toast({
            message: 'Documento salvo com sucesso!',
            type: 'success'
        });
    }).fail((result) => {
        console.log("Falha ao salvar o documento.");

        FLUIGC.toast({
            message: 'Falha ao salvar o documento!',
            type: 'danger'
        });
    });
}

function openDocument(id){
    var splitedId = id.split("___");
    var docIndex = splitedId[1];
    var docId = $("#apagar___" + docIndex).val();

    if($("#uploaded___" + docIndex).val().length > 0){
        var parentOBJ;

        if(window.opener){
            parentOBJ = window.opener.parent;
        }
        
        else {
            parentOBJ = parent;
        }

        var cfg = {
            url: "/ecm_documentview/documentView.ftl",
            maximized: true,
            title: "Visualizador de Documentos",
            callBack: function () {
                parentOBJ.ECM.documentView.getDocument(docId, 1000);
            },
            customButtons: []
        };

        parentOBJ.ECM.documentView.panel = parentOBJ.WCMC.panel(cfg);
    }
}

function deleteDocument(id){
    var splitedId = id.split("___");
    var docIndex = splitedId[1];
    var docId = $("#apagar___" + docIndex).val();

    if(docId.length >= 0){
        top.WCMAPI.Create({
            url: "http://devfluig.iv2.com.br/api/public/2.0/documents/deleteDocument/" + docId,
            method: "POST",
            success: e => {
                $("#apagar___" + docIndex).val('');
                $("#uploaded___" + docIndex).val('');
    
                FLUIGC.toast({
                    message: 'Documento deletado com sucesso!',
                    type: 'success'
                });
            },
            error: e => {
                console.log("Falha ao deletar o arquivo", e);
                
                FLUIGC.toast({
                    message: 'Falha ao deletar o documento!',
                    type: 'danger'
                });
            }
        });
    }
}