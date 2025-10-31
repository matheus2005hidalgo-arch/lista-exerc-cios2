let valor = Number(prompt("Digite um valor:"))

let valorformatado = valor.toLocaleString("pt-br",{style:"currency",
    currency:"BRL"
} )

alert("valor em reais:" + valorformatado)