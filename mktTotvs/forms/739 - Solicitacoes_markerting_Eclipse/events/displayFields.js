function displayFields(form,customHTML){

	if(getValue("WKNumState") == 0){
		
		var matricula = getValue("WKUser");
		var fields = new Array("colleagueName","login","mail");
		var constraints = new Array();
		var constraint = DatasetFactory.createConstraint("colleaguePK.colleagueId", matricula, matricula, ConstraintType.MUST);		
		var dataset;
		var username; 
		var login;		
		
		constraints.push(constraint);
		dataset = DatasetFactory.getDataset("colleague", fields, constraints, null);
		username = dataset.getValue(0, "colleagueName");
		login = dataset.getValue(0,"login");
		mail = dataset.getValue(0,"mail");
	
		form.setValue("solicitante", username);
		form.setValue("nome_soli", username);
		form.setValue("email_soli", mail);
		form.setValue("datasolicitacao", getCurrentDate());
	}
	
	form.setShowDisabledFields(true);
	form.setHidePrintLink(false);
	customHTML.append("<script> var CURRENT_STATE = "+getValue("WKNumState")+";</script>");
	
	var activity = getValue('WKNumState');
	var user = getValue('WKUser');

	var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", user, user, ConstraintType.MUST);
	var constraints = new Array(c1);
	var dataset = DatasetFactory.getDataset("colleague", null, constraints, null);
	
	var nomeResp = dataset.getValue(0,"colleaguename");
	var emailResp = dataset.getValue(0,"mail");
	
	// Atividade Inicio
	if(getValue("WKNumState") == 0 || getValue("WKNumState") == 4 ){
		form.setVisibleById("div_aprov_solicitacao", false);
		form.setVisibleById("div_dev_solicitacao", false);
		form.setVisibleById("div_valid_projeto", false);
		form.setVisibleById("div_aprov_projeto", false);
	}
	
	// Atividade Aprovar Solicitação
	if(getValue("WKNumState") == 37 || getValue("WKNumState") == 9){
		form.setVisibleById("div_dev_solicitacao", false);
		form.setVisibleById("div_valid_projeto", false);
		form.setVisibleById("div_aprov_projeto", false);
	}
	
	// Atividade Alterar Solicitação
	if(getValue("WKNumState") == 38){
		form.setVisibleById("div_dev_solicitacao", false);
		form.setVisibleById("div_valid_projeto", false);
		form.setVisibleById("div_aprov_projeto", false);
	}
	
	// Ativiade Executar Solicitação
	if(getValue("WKNumState") == 39){
		form.setVisibleById("div_aprov_solicitacao", false);
		form.setVisibleById("div_valid_projeto", false);
		form.setVisibleById("div_aprov_projeto", false);
		
		// Carregamento automatico do nome e email do responsável
		form.setValue('nome_resp',nomeResp);
        form.setValue('email_resp',emailResp);
	}
	
	// Atividade Validar Projeto
	if(getValue("WKNumState") == 40){
		form.setVisibleById("div_aprov_solicitacao", false);
		form.setVisibleById("div_aprov_projeto", false);
	}
	
	// Atividade Aprovar Projeto
	if(getValue("WKNumState") == 41){
		form.setVisibleById("div_aprov_solicitacao", false);
	}
	
	// Atividade Alterar Projeto
	if(getValue("WKNumState") == 42){
		form.setVisibleById("div_aprov_solicitacao", false);
		form.setVisibleById("div_aprov_projeto", false);
	}
	
	// Atividade Ajustar Projeto
	if(getValue("WKNumState") == 44){
		form.setVisibleById("div_aprov_solicitacao", false);
		form.setVisibleById("div_valid_projeto", false);
	}

	function getCurrentDate(){
		var df = new java.text.SimpleDateFormat("dd/MM/yyyy");
		var cal = java.util.Calendar.getInstance();
		return df.format(cal.getTime());
	}
}
