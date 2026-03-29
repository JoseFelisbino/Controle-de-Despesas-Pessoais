const service = require('../service/despesaService');

const listar = (requisicao, resposta) => {
    try {
        const respostaServiceListar = service.listarDespesas();
        return resposta.status(200).json(respostaServiceListar);
    } catch (error) {
        return resposta.status(500).json({message: error.message});
    }
}

const buscarPorId = (requisicao, resposta) => {
    try {
        const id = Number(requisicao.params.id);
        const respostaServiceBuscaId = service.buscarPorId(id);
        resposta.status(200).json(respostaServiceBuscaId);
    } catch (error) {
        return resposta.status(400).json({message: error.message});
    }
}

const filtroPorClassificacao = (requisicao, resposta) => {
    try {
        const classificacaoFiltrada = requisicao.params.classificacao;
        const respostaServiceFiltro = service.filtrarPorClassificacao(classificacaoFiltrada);
        resposta.status(200).json(respostaServiceFiltro);
    } catch (error) {
        return resposta.status(404).json({message: error.message});
    }
}

const cadastrar = (requisicao, resposta) => {
    try {
        const novaDespesa = requisicao.body;
        const despesaCriada = service.cadastrar(novaDespesa);
        return resposta.status(201).json(despesaCriada);
    } catch (error) {
        return resposta.status(400).json({message: error.message});
    }
}

const atualizar = (requisicao, resposta) => {
    try {
        const id = Number(requisicao.params.id);
        const dadosAtualizados = requisicao.body;
        const despesaAtualizada = service.atualizar(id, dadosAtualizados);
        return resposta.status(200).json(despesaAtualizada);
    } catch (error) {
        return resposta.status(404).json({message: error.message});
    }
}

const deletar = (requisicao, resposta) => {
    try {
        const id = Number(requisicao.params.id);
        const despesaDeleta = service.deletar(id);
        return resposta.status(200).json({message: "Despesa deletada com sucesso"});
    } catch (error) {
        return resposta.status(404).json({message: error.message})
    }
}

module.exports = {
    listar,
    buscarPorId,
    filtroPorClassificacao,
    cadastrar,
    atualizar,
    deletar
}