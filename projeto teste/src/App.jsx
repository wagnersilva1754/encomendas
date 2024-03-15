import React, { useState } from 'react';
import './App.css';

function App() {
  const [encomendas, setEncomendas] = useState([]);

  const registrarEncomenda = () => {
    const nome = document.getElementById('nome').value;
    const id = document.getElementById('id').value;
    const organizacao = document.getElementById('organizacao').value;
    const quantidade = document.getElementById('quantidade').value;
    const tipo = document.getElementById('tipo').value;
    const dataEncomenda = document.getElementById('data-encomenda').value;
    const dataEntrega = document.getElementById('data-entrega').value;

    const novaEncomenda = {
      nome,
      id,
      organizacao,
      quantidade,
      tipo,
      dataEncomenda,
      dataEntrega,
    };

    setEncomendas([...encomendas, novaEncomenda]);
    alert('Encomenda registrada');
  };

  const marcarEntregue = (index) => {
    const senha = prompt('Digite a senha para marcar como entregue:');
    if (senha === '1234' || senha === '456' || senha === '789') {
      const encomendasAtualizadas = encomendas.filter((_, i) => i !== index);
      setEncomendas(encomendasAtualizadas);
      alert('Encomenda marcada como entregue');
    } else {
      alert('Senha incorreta');
    }
  };

  const calcularCorEncomenda = (encomenda) => {
    const hoje = new Date();
    const dataEntrega = new Date(encomenda.dataEntrega);
    const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
    const diferencaDias = Math.round((dataEntrega - hoje) / umDiaEmMilissegundos);

    if (diferencaDias > 0) {
      return '#00ff00'; // Verde
    } else if (diferencaDias === 0) {
      return '#ffff00'; // Amarelo
    } else {
      return '#ff0000'; // Vermelho
    }
  };

  return (
    <div id="container">
      <h1>Encomendas</h1>
      <div id="form-container">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" />
        </div>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" />
        </div>
        <div className="form-group">
          <label htmlFor="organizacao">Organização:</label>
          <input type="text" id="organizacao" />
        </div>
        <div className="form-group">
          <label htmlFor="quantidade">Quantidade:</label>
          <input type="number" id="quantidade" />
        </div>
        <div className="form-group">
          <label htmlFor="tipo">Tipo de Munição:</label>
          <input type="text" id="tipo" />
        </div>
        <div className="form-group">
          <label htmlFor="data-encomenda">Data de Encomenda:</label>
          <input type="date" id="data-encomenda" />
        </div>
        <div className="form-group">
          <label htmlFor="data-entrega">Data de Entrega:</label>
          <input type="date" id="data-entrega" />
        </div>
        <button onClick={registrarEncomenda}>Registrar</button>
      </div>

      <div id="resumo">
        {encomendas.map((encomenda, index) => (
          <div key={index} className="encomenda" style={{ backgroundColor: calcularCorEncomenda(encomenda) }}>
            <p><strong>Nome:</strong> {encomenda.nome}</p>
            <p><strong>ID:</strong> {encomenda.id}</p>
            <p><strong>Organização:</strong> {encomenda.organizacao}</p>
            <p><strong>Quantidade:</strong> {encomenda.quantidade}</p>
            <p><strong>Tipo de Munição:</strong> {encomenda.tipo}</p>
            <p><strong>Data de Encomenda:</strong> {encomenda.dataEncomenda}</p>
            <p><strong>Data de Entrega:</strong> {encomenda.dataEntrega}</p>
            <button onClick={() => marcarEntregue(index)}>Entregue</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
