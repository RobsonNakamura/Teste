//Validação dos campos obrigatorios 

function validateForm(form){
	
	var activity = getValue('WKNumState');
	
	var msg = "";
	
	if(activity == 0 || activity == 4){
		
		if(form.getValue("dep_soli") == ""){
			msg += "Preencha o campo departamento do solicitante";
		}
		
		if(form.getValue("tipo_peca") == ""){
			msg += "<br />Preencha o campo tipo de peça";
		}
		
		if(form.getValue("nome_projeto") == ""){
			msg += "<br />Preencha o campo nome do projeto";
		}
		
		if(form.getValue("publico_alvo") == ""){
			msg += "<br />Preencha o campo publico alvo";
		}
		
		if(form.getValue("dataentrega") == ""){
			msg += "<br />Preencha o campo data necessidade do projeto";
		}
		
		if(form.getValue("info_titulo") == ""){
			msg += "<br />Preencha o campo titulo do projeto";
		}
		
		if(form.getValue("info_conteudo") == ""){
			msg += "<br />Preencha o campo conteudo do projeto";
		}
		
		if(form.getValue("info_derivacao") == ""){
			msg += "<br />Preencha o campo derivação da peça";
		}
	}
	
	if(activity == 39){
		
		if(form.getValue("data_inicio_dev") == ""){
			msg += "Preencha o campo data inicio do desenvolvimento";
		}
		
		if(form.getValue("data_fim_dev") == ""){
			msg += "Preencha o campo data conclusão do desenvolvimento";
		}
		
		if(form.getValue("obs_resp_projet") == ""){
			msg += "Preencha o campo observações do responsavel pelo projeto";
		}
		
	}
	
	if(msg != ""){
		throw msg;
		
	}
}