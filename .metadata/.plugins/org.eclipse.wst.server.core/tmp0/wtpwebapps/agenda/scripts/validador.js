/**
 *Validação de formulário 
 *@author Jair Freitas
 */
 
 function validar(){
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if(nome === ""){
		alert('Preencha o campo nome!')
		frmContatos.nome.focus()
		return false
	}else if(fone === ""){
		alert('Preencha o campo fone!')
		frmContatos.fone.focus()
		return false
	}else {
		document.forms["frmContato"].submit()
	}
}