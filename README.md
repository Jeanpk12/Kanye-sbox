## Projeto Kanye'sBox

Este projeto consiste em um card React chamado Kanye'sBox, que exibe uma citação aleatória do rapper Kanye West, famoso por suas frases polêmicas e nonsense. O componente busca as citações utilizando a API pública https://api.kanye.rest/

![image](https://github.com/Jeanpk12/Kanyesbox/assets/122842874/1f25ee2e-d95a-42a8-8e96-d11cf195a680)

## Componente QuoteBox

O componente QuoteBox é responsável por exibir uma caixa de citação com a foto de Kanye West e uma citação aleatória atribuída a ele. Abaixo estão os detalhes do componente:

### Arquivo Fonte

O componente está localizado em `src/components/QuoteBox.js`.

### Funcionamento

O componente utiliza React hooks, como `useState` e `useEffect`, para gerenciar o estado da citação e para buscar uma nova citação quando o componente é montado.

Quando o componente é montado, é feita uma chamada para a API pública [https://api.kanye.rest/](https://api.kanye.rest/) para obter uma citação aleatória do Kanye West.

A citação é exibida na caixa de citação, juntamente com uma imagem do Kanye West.

Ao clicar no botão "A new shit", uma nova citação é buscada e exibida na caixa de citação.

### Estilos

Os estilos do componente estão definidos em um arquivo separado, `styles.js`, que está localizado na mesma pasta do componente.
