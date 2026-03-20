import { useState } from "react";

function CrudPecas() {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [pecas, setPecas] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  function adicionarOuAtualizarPeca() {
    if (editandoId !== null) {
      const novaLista = pecas.map((peca) =>
        peca.id === editandoId
          ? { ...peca, nome, quantidade, preco }
          : peca
      );

      setPecas(novaLista);
      setEditandoId(null);
    } else {
      const novaPeca = {
        id: Date.now(),
        nome,
        quantidade,
        preco,
      };

      setPecas([...pecas, novaPeca]);
    }

    setNome("");
    setQuantidade("");
    setPreco("");
  }

  function removerPeca(id) {
    const novaLista = pecas.filter((peca) => peca.id !== id);
    setPecas(novaLista);
  }

  function editarPeca(peca) {
    setNome(peca.nome);
    setQuantidade(peca.quantidade);
    setPreco(peca.preco);
    setEditandoId(peca.id);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Estoque de Peças de Carros</h1>

    <div style={{ marginBottom: "10px" }}>
  <label>Nome da peça:</label>
  <br />
  <input
    type="text"
    placeholder="Ex: Pastilha de freio"
    value={nome}
    onChange={(e) => setNome(e.target.value)}
  />
</div>

<div style={{ marginBottom: "10px" }}>
  <label>Quantidade:</label>
  <br />
  <input
    type="number"
    placeholder="Ex: 10"
    value={quantidade}
    onChange={(e) => setQuantidade(e.target.value)}
  />
</div>

<div style={{ marginBottom: "10px" }}>
  <label>Preço em reais:</label>
  <br />
  <input
  type="number"
  placeholder="Ex: 120"
  value={preco}
  onChange={(e) => setPreco(e.target.value)}
/>
</div>

      <button onClick={adicionarOuAtualizarPeca}>
        {editandoId !== null ? "Atualizar" : "Adicionar"}
      </button>

      <hr />

      <ul>
        {pecas.map((peca) => (
          <li key={peca.id}>
            {peca.nome} | Qtd: {peca.quantidade} | {Number(peca.preco).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
})}
            <button onClick={() => editarPeca(peca)}>Editar</button>
            <button onClick={() => removerPeca(peca.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudPecas;