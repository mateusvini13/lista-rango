# Desafio Frontend Goomer: :fork_and_knife: Lista Rango :fork_and_knife:

Projeto do desafio para desenvolvedores Frontend da Goomer, Lista Rango. O projeto se trata de uma listagem de restaurantes e seus cardápios, com informações sobre seus horários de funcionamento, pratos e promoções.

### :space_invader: Rodando o projeto

Clone o projeto: 

:floppy_disk: `$ git clone https://github.com/mateusvini13/lista-rango.git`

Instale as dependências:

:dvd: `$ yarn`

Por fim, rode o projeto:

:tada: `$ yarn start`

O projeto foi desenvolvido usando a versão 12.14.1 do *Node.js*. Caso ocorra algum erro nas bibliotecas, recomendamos usar esta versão.

O projeto também pode ser acessado diretamente em [listarango.netlify.app](https://listarango.netlify.app/).

#### :computer: Estrutura de pastas do código fonte

 - :file_folder: **assets**: Arquivos como fontes e imagens
 - :file_folder: **components**: Componentes gerais usados em várias páginas
 - :file_folder: **functions**: Funções de uso geral
 - :file_folder: **pages**: Páginas do projeto
 - :file_folder: **services**: Serviços, como a conexão com a API

## :video_game: Desafios

A principal dificuldade encontrada no projeto foi o tratamento de horários. No fim, foi optado por uma função que transforma os horários em minutos para melhor manipulação com lógica básica, dispensando o uso de bibliotecas de tratamento de data e hora. Essa mesma função foi adaptada para uso tanto na checagem de restaurantes abertos quanto para pratos em promoção.

Também foram realizados alguns tratamentos relacionados à alguns retornos inconsistentes de API. Alguns restaurantes, por exemplo, não retornam seus horários de funcionamento.  Alguns pratos também não possuem imagens e alguns nomes de grupos vieram duplicados, apenas com diferenças de capitalização no texto, o que foi tratado no front.

A API não retorna descrições para os produtos, então foram mantidos os textos *Lorem Ipsum* como descrições. Foi uma escolha pessoal, pois o design parecia vazio sem estes. No caso dos restaurantes, a descrição foi substituída pelos endereços.

Ainda na descrição dos restaurantes, a listagem de horários ficou um pouco confusa comparada com o design, já q os hrários dos restaurantes não são divididos sempre em três períodos como os do Design exemplo, e também não é informado se o dia 1 deve ser considerado sempre como "domingos e feriados" ou apenas domingo.

Apesar de não especificado no desafio ou design, uma versão mobile também foi desenvolvida com algumas adaptações.

## :notes: Melhorias

 - Alguns trechos do código poderiam ter comentários mais descritivos
 - Funções de tratamento de data para checagem de aberto/fechado e horário de promoções pode ser otimizada
 - Utilizar transições e animações de CSS em alguns componentes como o menu dropdown do cardápio
 - Melhorar os textos dos toasts de erro de retorno das APIs