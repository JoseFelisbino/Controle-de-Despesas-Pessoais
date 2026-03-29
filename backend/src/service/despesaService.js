const despesas = require('../model/despesasModel');

const listarDespesas = () => {
    return despesas;
}

const buscarPorId = (id) => {
    const despesa = despesas.find((despesa) => despesa.id === id);

    if (!despesa) {
        throw new Error("Despesa não encontrada");
    }

    return despesa;
}

const filtrarPorStatus = (status) => {
    const despesa = despesas.find((despesa) => despesa.classificacao === status);

    if (!despesa) {
        throw new Error("Despesa não encontrada");
    }
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

    if (index === -1) {
        throw new Error("Despesa não encontrada");

    }

    despesas[index] = {
        ...despesas[index],
        ...dadosAtualizados
    }

    return despesas[index];
}

const deletar = (id) => {
    const index = despesas.findIndex((d) => d.id === id);

    if (index === -1) {
        throw new Error("Despesa não encontrada");
    }

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