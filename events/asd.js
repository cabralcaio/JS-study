/**
 * Criar uma função responsável por mostrar o alerta na tela
 */
    let count = 0;
 function mostrarAlerta() {
    /**
     * o objeto document é um objeto que faz uma representação 
     * do HTML do seu site dentro do Javascript
     */
  
    /**
     * getElementById serve para recuperar um elemento HTML pelo seu id
     */
  
    /**
     * A propriedade classList retorna um array com todas as classes CSS que
     * um elemento possui
     */
  
    /**
     * classList.add() serve para adicionar novas classes dinamicamente
     * dentro de um elemento HTML
     */
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')
    count ++
    document.getElementById("p1").innerHTML = count
  }
  
  function fecharAlerta() {
    /**
     * classList.remove() remove uma classe dinamicamente de dentro
     * de um elemento HTML
     */
     const divAlerta = document.getElementById('alerta')
     divAlerta.classList.remove('mostrar')
  }
  
  const btnMostrar = document.getElementById('mostrar')
  const btnFechar = document.getElementById('fechar')
  
  /**
   * addEventListener é um método que te permite
   * ouvir eventos do HTML pelo Javascript
   */
  /**
   * Se eu precisar passar uma função como parâmetro para outra
   * eu passo a referência dela, ou seja, a função sem os parênteses
   * na frente
   */
  btnMostrar.addEventListener('click', mostrarAlerta)
  btnFechar.addEventListener('click', fecharAlerta)