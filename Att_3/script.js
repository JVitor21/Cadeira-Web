document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep');
    const consultarButton = document.getElementById('consultar');
    const resultadoTexto = document.getElementById('resultado-texto');
   
    // Função assíncrona para consultar o CEP
    const consultarCep = async () => {
        // Remove caracteres não numéricos
        const cep = cepInput.value.replace(/\D/g, '');
        
        // Valida o comprimento do CEP
        if (cep.length !== 8) {
            resultadoTexto.textContent = 'CEP inválido'
            return;
        }

        try {
            // Faz a requisição à API do ViaCEP
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json();

            // Exibe os dados ou mensagem de erro
            if (data.erro) {
                resultadoTexto.textContent = 'CEP não encontrado';
            }
            else {
                resultadoTexto.innerHTML = `
                    <strong>Logradouro:</strong> ${data.logradouro}<br>
                    <strong>Bairro:</strong> ${data.bairro}<br>
                    <strong>Cidade:</strong> ${data.localidade}<br>
                    <strong>Estado:</strong> ${data.uf}<br>`;
            }
        }
        catch (error) {
            resultadoTexto.textContent = 'Erro ao consultar o CEP'
        }
    };
    // Adiciona o listener ao botão
    consultarButton.addEventListener('click', consultarCep);
});

//Ceps para teste
//Sao Paulo SP Cep 01153000
//RJ Copacabana CEP 22041012
//Porto Alegre Cep 29500000