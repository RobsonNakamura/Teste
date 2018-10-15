/**
 * Eventos para desabilitar os paneis no decorrer do andamento das atividades.
 * Dep. Fluig - Wanderley (29/06/2018)
 */

function enableFields(form) {
	var activity = getValue('WKNumState');
	
	// Atividade Inicio
	if (activity == 0){
		form.setEnabled('nome_soli', false);
		form.setEnabled('email_soli', false);
	}
	
	// Atividade Aprovar Solicitação
	if (activity == 37) {
		form.setEnabled('dataentrega', false);
		form.setEnabled('info_derivacao', false);
		form.setEnabled('info_conteudo', false);
		form.setEnabled('info_titulo', false);
		form.setEnabled('publico_alvo', false);
		form.setEnabled('nome_projeto', false);
		form.setEnabled('tipo_peca_text', false);
		form.setEnabled('tamanho_peca_cm', false);
		form.setEnabled('tipo_peca', false);
		form.setEnabled('dep_soli', false);
		form.setEnabled('email_soli', false);
		form.setEnabled('nome_soli', false);
		form.setEnabled('tamanho_peca_lar', false);
		form.setEnabled('tamanho_peca_alt', false);
		form.setEnabled('dimensao', false);
	}
	
	// Atividade Alterar Solicitação
	if (activity == 38) {
		form.setEnabled('aprov_soli', false);
		form.setEnabled('info_aprov_soli', false);
	}
	
	// Ativiade Executar Solicitação
	if (activity == 39) {
		form.setEnabled('dataentrega', false);
		form.setEnabled('info_derivacao', false);
		form.setEnabled('info_conteudo', false);
		form.setEnabled('info_titulo', false);
		form.setEnabled('publico_alvo', false);
		form.setEnabled('nome_projeto', false);
		form.setEnabled('tipo_peca_text', false);
		form.setEnabled('tamanho_peca_cm', false);
		form.setEnabled('tipo_peca', false);
		form.setEnabled('dep_soli', false);
		form.setEnabled('email_soli', false);
		form.setEnabled('nome_soli', false);
		form.setEnabled('tamanho_peca_lar', false);
		form.setEnabled('tamanho_peca_alt', false);
		form.setEnabled('dimensao', false);
		form.setEnabled('nome_resp', false);
		form.setEnabled('email_resp', false);
	}
	
	// Atividade Validar Projeto
	if (activity == 40) {
		form.setEnabled('data_fim_dev', false);
		form.setEnabled('data_inicio_dev', false);
		form.setEnabled('email_resp', false);
		form.setEnabled('nome_resp', false);
		form.setEnabled('dataentrega', false);
		form.setEnabled('info_derivacao', false);
		form.setEnabled('info_conteudo', false);
		form.setEnabled('info_titulo', false);
		form.setEnabled('publico_alvo', false);
		form.setEnabled('nome_projeto', false);
		form.setEnabled('tipo_peca_text', false);
		form.setEnabled('tamanho_peca_cm', false);
		form.setEnabled('tipo_peca', false);
		form.setEnabled('dep_soli', false);
		form.setEnabled('email_soli', false);
		form.setEnabled('nome_soli', false);
		form.setEnabled('obs_resp_projet', false);
		form.setEnabled('data_fim_dev', false);
		form.setEnabled('data_inicio_dev', false);
		form.setEnabled('tamanho_peca_lar', false);
		form.setEnabled('tamanho_peca_alt', false);
		form.setEnabled('dimensao', false);
		form.setEnabled('email_resp', false);
		form.setEnabled('nome_resp', false);
	}
	
	// Atividade Aprovar Projeto
	if (activity == 41) {
		form.setEnabled('data_fim_dev', false);
		form.setEnabled('obs_resp_projet', false);
		form.setEnabled('data_inicio_dev', false);
		form.setEnabled('email_resp', false);
		form.setEnabled('nome_resp', false);
		form.setEnabled('dataentrega', false);
		form.setEnabled('info_derivacao', false);
		form.setEnabled('info_conteudo', false);
		form.setEnabled('info_titulo', false);
		form.setEnabled('publico_alvo', false);
		form.setEnabled('nome_projeto', false);
		form.setEnabled('tipo_peca_text', false);
		form.setEnabled('tamanho_peca_cm', false);
		form.setEnabled('tamanho_peca_lar', false);
		form.setEnabled('tamanho_peca_alt', false);
		form.setEnabled('dimensao', false);
		form.setEnabled('tipo_peca', false);
		form.setEnabled('dep_soli', false);
		form.setEnabled('email_soli', false);
		form.setEnabled('nome_soli', false);
		form.setEnabled('soli_aprov_proj', false);
		form.setEnabled('soli_obs_proj', false);
	}	
	
	// Atividade Alterar Projeto
	if (activity == 42) {
		form.setEnabled('dataentrega', false);
		form.setEnabled('info_derivacao', false);
		form.setEnabled('info_conteudo', false);
		form.setEnabled('info_titulo', false);
		form.setEnabled('publico_alvo', false);
		form.setEnabled('nome_projeto', false);
		form.setEnabled('tipo_peca_text', false);
		form.setEnabled('tamanho_peca_cm', false);
		form.setEnabled('tamanho_peca_lar', false);
		form.setEnabled('tamanho_peca_alt', false);
		form.setEnabled('dimensao', false);
		form.setEnabled('tipo_peca', false);
		form.setEnabled('dep_soli', false);
		form.setEnabled('email_soli', false);
		form.setEnabled('nome_soli', false);
		form.setEnabled('soli_obs_proj', false);
		form.setEnabled('soli_aprov_proj', false);
	}
	
	// Atividade Ajustar Projeto
	if (activity == 44) {
		form.setEnabled('nome_soli', false);
		form.setEnabled('email_soli', false);
		form.setEnabled('dep_soli', false);
		form.setEnabled('tipo_peca', false);
		
		form.setEnabled('tamanho_peca_cm', false);
		form.setEnabled('tamanho_peca_lar', false);
		form.setEnabled('tamanho_peca_alt', false);
		form.setEnabled('dimensao', false);
		
		form.setEnabled('tipo_peca_text', false);
		form.setEnabled('nome_projeto', false);
		form.setEnabled('publico_alvo', false);
		form.setEnabled('dataentrega', false);
		form.setEnabled('info_titulo', false);
		form.setEnabled('info_conteudo', false);
		form.setEnabled('info_derivacao', false);

		form.setEnabled('aprov_projeto', false);
		form.setEnabled('info_aprov_proj', false);
	}
}

