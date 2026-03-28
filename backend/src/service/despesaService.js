const despesas = require('../model/despesasModel');

const listarDespesas = () => {
    return despesas;
}

const buscarPorId = (id) => {
    return despesas.find((despesa) => despesa.id === id)
}

const filtrarPorStatus = (status) => {
    return despesas.find((despesa) => despesa.classificacao === status);
}

const cadastrar = (novaDespesa) => {
    const id = despesas.length + 1;

    const despesa = {
        id,
        ...novaDespesa
    }

    despesas.push(despesa);

    return despesa;
}

const atualizar = (id, dadosAtualizados) => {
    const index = despesas.findIndex((d) => d.id === id);

    if (index === -1) return null;

    despesas[index] = {
        ...despesas[index],
        ...dadosAtualizados
    }

    return despesas[index];
}

const deletar = (id) => {
    const index = despesas.findIndex((d) => d.id === id);

    if (index === -1) return false;

    despesas.slice(index, 1);

    return true;
}

module.exports = {
    listarDespesas,
    buscarPorId,
    filtrarPorStatus,
    cadastrar,
    atualizar,
    deletar
}