
function Lista() {
    //declarando um array com opbjetos para mapear e exibir na tela
    const tarefas = [{
        tarefa: "React",
        tempo: "02:00:00"
    }, {
        tarefa: "JavaScript",
        tempo: "01:00:00"
    }, {
        tarefa: "Typescript",
        tempo: "03:00:00"
    }]

  return (
    // aside para declarar conteudo distante ou lateral da pagina
    <aside>
        <h2>Estudos do dia</h2>
        <ul>
            {/* usando mapa para percorrer todos os objetos e devolver o conteudo do objeto*/}
            {tarefas.map((item, index) => {
                return (
                    <li key={index}>
                        {/* sempre usar o "key" para evitar erros de match */}
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                )
            })}
         </ul>
    </aside>
  )
}

export default Lista;