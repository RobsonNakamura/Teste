/**
 * Eventos para esconder campos de largura, altura e dimensão de peça.
 * Dep. Fluig - Wanderley (29/06/2018)
 */

function opcao(){
	
	var opcaoselecionada = document.getElementById("tipo_peca").value;
	
	if (opcaoselecionada == "Adesivo" || opcaoselecionada == "Anuncio_midia" || opcaoselecionada == "Backdrop" || opcaoselecionada == "Banner" || 
			opcaoselecionada == "Caixa" || opcaoselecionada == "Cartao_impresso" || opcaoselecionada == "Cartaz" || opcaoselecionada == "Cupom" ||
			opcaoselecionada == "Flyer_panfleto" || opcaoselecionada == "Papelaria" || opcaoselecionada == "Placa" || opcaoselecionada == "Adesivo"){
		document.getElementById('div_tamanho_peca_cm').style.display = '';
	}
	
	if (opcaoselecionada == "TBC" || opcaoselecionada == "Anuncio_vaga" || opcaoselecionada == "Comunicado_interno" ||  
			opcaoselecionada == "Manual" || opcaoselecionada == "Convite" || opcaoselecionada == "Kit_eventos"){
		document.getElementById('div_tamanho_peca_cm').style.display = 'none';
	}
	
	if (opcaoselecionada == "Outros"){
		document.getElementById('div_tamanho_peca_cm').style.display = 'none';
		document.getElementById('div_peca_outros').style.display = '';
	}
	
	if (opcaoselecionada != "Outros"){
		document.getElementById('div_peca_outros').style.display = 'none';
	}
	
	if (opcaoselecionada == ""){
		document.getElementById('div_tamanho_peca_cm').style.display = 'none';
	}

	// Bloqueio calendario
	
	//Esta linha cria a variável calendário que receberá a chamada FLUIGC.calendar():
	var calendario = FLUIGC.calendar("#dataentrega");
	
	// Cria a variável com a data atual:
	var dataAtual = new Date();
	
	// Adiciona 3 dias na data atual
	var dias = 3;
	
	// Incrementa a quantidade de dias na data atual:
	dataAtual.setDate(dataAtual.getDate() + dias);
	
	// Define que o valor mínimo a ser selecionado no calendário:
	calendario.setMinDate(dataAtual);

}
