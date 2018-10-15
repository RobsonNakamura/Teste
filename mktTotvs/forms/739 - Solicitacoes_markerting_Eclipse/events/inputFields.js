function inputFields(form) {
	if (form
			&& form.getValue("data_entrega")
			&& form.getValue("data_entrega").match(
					"^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
		var split = form.getValue("data_entrega").split('/');
		form.setValue("data_entrega", split[2] + '-' + split[1] + '-'
				+ split[0]);
	}
	
	if (form
			&& form.getValue("data_inicio_dev")
			&& form.getValue("data_inicio_dev").match(
					"^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
		var split = form.getValue("data_inicio_dev").split('/');
		form.setValue("data_inicio_dev", split[2] + '-' + split[1] + '-'
				+ split[0]);
	}
	
	if (form
			&& form.getValue("data_fim_dev")
			&& form.getValue("data_fim_dev").match(
					"^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
		var split = form.getValue("data_fim_dev").split('/');
		form.setValue("data_fim_dev", split[2] + '-' + split[1] + '-'
				+ split[0]);
	}
}