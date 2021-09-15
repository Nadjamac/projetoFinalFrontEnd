import React, { useState, useEffect } from 'react';

export default function App() {
  // criacao do estado da lista de contatos
  const [tarefa, setTarefa] = useState([
    {
      Title: "Manha",
      description:"higienização",
      priority:"Alta",
      status:"concluido",
      term:"15min"
    },
    {
    Title: "Manha",
    description:"tomar cafe",
    priority:"Alta",
    status:"concluido",
    term:"20min"
    },

    {
      Title: "Manha",
      description:"banho",
      priority:"Alta",
      status:"concluido",
      term:"20min"
      },
    {
      Title: "Manha",
      description:"trabalhar",
      priority:"Alta",
      status:"concluido",
      term:"8hs"
      },

    {
      title:"Tarde",
      description:"Almoçar",
      priority:"Alta",
      status:"não concluso",
      term:"1hr"
      
    },

    {
      title:"tarde",
      description:"Cafe da tarde",
      priority:"media",
      status:"em conclusão",
      term:"15min"
      
    },
    {
      title:"noite",
      description:"jantar",
      priority:"Alta",
      status:"em conclusão",
      term:"1hr"
      
    },

    {
      title:"noite",
      description:"academia ",
      priority:"media",
      status:"em conclusão",
      term:"1hr"
    },

    {
      title:"noite",
      description:"lanche ",
      priority:"Alta",
      status:"em conclusão",
      term:"1hr"
    },

    {
      title:"noite",
      description:"ler livro ",
      priority:"media",
      status:"em conclusão",
      term:"1hr"
    }
    
  ])
  
  // estado responsavel pelo input nome
  const [titletarefa, setTitletarefa] = useState("");

  // estado responsavel pelo input telefone
  const [descriptiontarefa ,setDescriptiontarefa] = useState("");

  // estado responsavel a informar ao sistema o modo de edicao
  const [statustarefa, setStatustarefa] = useState(false);

  // estado responsavel há obter o indice do contato que deve ser editado
  const [termtarefa, setTermtarefa] = useState(null);

  const[editando,setEditando]=useState(false);
  
  const [indiceEditando,setIndiceEditando]=useState(null);

  useEffect(() => {
    // se estou no indice e estou em modo de edicao entro no if
    if((indiceEditando !== null) && editando) {
      // apos verificar que possui indice de edicao e contem modo de contato
      // atualiza o estados dos inputs com o nome e telefone do item que deseja editar
      setDescription(descriptiontarefa[indiceEditando].description)
      setStatustarefa(status[indiceEditando].status)
    }
  }, [indiceEditando])


  // responsavel por atualizar o estado nome de acordo com as alteracoes
  const handleTitleChange = (evento) => {
    setDescriptiontarefa(evento.target.value);
  }

  // responsavel por atualizar o estado telefone de acordo com as alteracoes
  const handlePriorityChange = (evento) => {
    setStatus(evento.target.value);
  }


  // responsavel pelo cadastro e edicao de um novo contato
  const handleSubmit = (evento) => {
    evento.preventDefault();
    // verifica se esta em modo de edicao
    if(editando) {
      const tarefasAtualizadas = tarefa.map((title,indice) => {
        // se encontrar um indice no map igual ao indice que deseja editar
        // atualiza os dados desse objeto e depois retorna ele para o array
        if(indiceEditando === indice) {
          tarefas.title = tarefaTitle;
          tarefas.description = tarefaDescription;
        }
        return description
      });

      // atualiza o estado dos contatos com a nova lista atualizada
      setTitle(tarefasAtualizadas);

      // desativa o modo de edicao
      setEditando(false);

      // limpa o indice do elemento que seria editado
      setIndiceEditando(null);
    } else {
      // caso nao estiver em modo de edicao, adiciona o contato na lista
      setTarefas([
        ...tarefas,
        {
          tarefas: titleTarefas,
          description: descriptionTarefas,
        }
      ]);
      setTitletarefas("");
      setDescriptiontarefas("");
    }
  }


  // filtra os elementos de acordo com o indice recebido via funcao
  // e so retorna os que forem diferente do indice passado
  const handleDelete = (indice) => {
    setTarefas(tarefas.filter((tarefas, indiceContato) => indice !== indiceContato))
  };

  return (
    <div>
      <h1>TAREFAS</h1>
      <h2>Cadastre uma nova tarefa</h2>
      {/* {nomeContato}
      {telefoneContato} */}
      <form onSubmit={handleSubmit}>
        <label>Digite o Titulo:</label>
        <input type="text" value={titletarefa} onChange={handleTitleChange}/>
        <br/>
        <label>Digite descrição:</label>
        <input type="" value={descriptiontarefa} onChange={handleDescriptionChange}/>
        <br/>
        <button type="submit">Salvar</button>
      </form>
      <ul>
        {tarefa.map((tarefa, indice) => (
          <li key={indice}>
            <p>
              { tarefa.title }
            </p>
            <p>
              { tarefa.description }
            </p>
            <button type="button" onClick={() => handleDelete(indice) }>Excluir</button>
            <button type="button" onClick={() => {
              setEditando(true);
              setIndiceEditando(indice);
            }}>Editar</button>
          </li>
        ))}

        {/* Mostra a chave do objeto de forma indivudal de acordo com o indice do array */}
        {/* {contatos[1].nome}
        {contatos[1].telefone} */}
      </ul>
    </div>
  )
}