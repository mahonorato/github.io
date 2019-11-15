(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{243:function(a,e,o){"use strict";o.r(e);var s=o(0),i=Object(s.a)({},function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"bibliotecas-libname"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bibliotecas-libname","aria-hidden":"true"}},[a._v("#")]),a._v(" Bibliotecas (LIBNAME)")]),a._v(" "),o("p",[a._v("Para acessar um arquivos de dados é necessário informar o "),o("strong",[a._v("local")]),a._v(" onde está armazenado o arquivo e seu "),o("strong",[a._v("nome")]),a._v(". Manter essas referencias espalhadas pelo código é uma prática que nos leva a um esforço de manutenção maior quando temos que fazer alterações na estrutura de armazenamento dos arquivos.")]),a._v(" "),o("p",[a._v("Para facilitar o referenciamento aos arquivos e as manutenções o SAS oferece uma forma eficiente de organizá-los: as bibliotecas de dados definidas pelo comando "),o("strong",[a._v("LIBNAME")]),a._v(".\nOs arquivos de uma biblioteca possuem duas características comuns:")]),a._v(" "),o("ul",[o("li",[a._v("São do mesmo tipo de dados; e")]),a._v(" "),o("li",[a._v("Estão armazenados na mesma pasta.")])]),a._v(" "),o("h2",{attrs:{id:"criando-uma-biblioteca"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#criando-uma-biblioteca","aria-hidden":"true"}},[a._v("#")]),a._v(" Criando uma biblioteca")]),a._v(" "),o("p",[a._v("O comando LIBNAME possui a seguinte sintaxe:")]),a._v(" "),o("p",[o("strong",[o("code",[a._v('LIBNAME nome_biblioteca engine "caminho";')])])]),a._v(" "),o("p",[a._v("Onde:")]),a._v(" "),o("ul",[o("li",[o("p",[o("strong",[a._v("nome_biblioteca")]),a._v(' - é o nome que será dado a biblioteca. Este nome deve ter oito caracteres ou menos, deve começar por letra ou "_" e pode ser formado por letras, numeros e "_" somente.')])]),a._v(" "),o("li",[o("p",[o("strong",[a._v("engine")]),a._v(' - Define que tratamento deverá ser aplicado aos dados daquela biblioteca. Com essa definição, o SAS lê diretamente os dados sem que tenhamos que importá-los manualmente, como fazemos com arquivos individuais. O tipo "'),o("strong",[a._v("Base")]),a._v('" é utilizado para Excel, Hadoop, tabelas  SAS, Teradata e outros tipos de dados estruturados.')])]),a._v(" "),o("li",[o("p",[o("strong",[a._v("caminho")]),a._v(" - Define a localização ou a URL para conexão dos dados. Pode ser um caminho físico ou uma conexão a uma banco de dados.")])])]),a._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",[a._v("Como LIBNAME é um "),o("em",[a._v("comando global")]),a._v(" não é necessário colocar um comando RUN após ele.")])]),a._v(" "),o("p",[a._v("Exemplos:")]),a._v(" "),o("p",[o("strong",[o("code",[a._v('Libname lib_faturamento base "e:/analise/faturamento/data";')])])]),a._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",[a._v("A engine padrão é a "),o("strong",[a._v("base")]),a._v(". de forma que o comando pode ser reescrito sem menciona-la como abaixo:")])]),a._v(" "),o("p",[o("strong",[o("code",[a._v('libname lib_faturamento base "e:/analise/faturamento/data";')])])]),a._v(" "),o("h2",{attrs:{id:"consultando-os-dados-da-biblioteca"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consultando-os-dados-da-biblioteca","aria-hidden":"true"}},[a._v("#")]),a._v(" Consultando os dados da biblioteca")]),a._v(" "),o("p",[a._v("A sintaxe para acessar os objetos de uma biblioteca é:\n"),o("strong",[o("code",[a._v("nome_biblioteca.nome_objeto")])])]),a._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",[a._v("Não é necessário digitar a extensão dos arquivos contidos na biblioteca.")]),a._v(" "),o("p",[a._v('Uma biblioteca só "existe" até que a sessão de trabalho seja encerrada ou até que seja explicitamente excluída.')])]),a._v(" "),o("h2",{attrs:{id:"excluindo-uma-biblioteca"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#excluindo-uma-biblioteca","aria-hidden":"true"}},[a._v("#")]),a._v(" Excluindo uma biblioteca")]),a._v(" "),o("p",[a._v("Quando definimos uma conexão para uma fonte de dados como arquivos de texto, planilhas ou tabelas de banco de dadosm podemos em determinadas situações manter o acesso à esses objetos bloqueados para outros usuários ou processos. Assim, Ao encerrar a execução do programa que definiu a biblioteca, é uma boa prática excluir a biblioteca para liberar enetuais arquivos bloqueados. O comando para excluir uma biblioteca é:")]),a._v(" "),o("p",[o("strong",[o("code",[a._v("LIBNAME nome_biblioteca CLEAR;")])])]),a._v(" "),o("h2",{attrs:{id:"bibliotecas-adicionais"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bibliotecas-adicionais","aria-hidden":"true"}},[a._v("#")]),a._v(" Bibliotecas Adicionais")]),a._v(" "),o("p",[a._v("Quando uma sessão SAS é iniciada, várias bibliotecas são definidas automaticamente: "),o("strong",[a._v("Work")]),a._v(" e "),o("strong",[a._v("SASHELP")])]),a._v(" "),o("ul",[o("li",[o("strong",[a._v("WORK")]),a._v(" - É uma biblioteca temporária definida automaticamente no início de uma sessão de trabalho.")])]),a._v(" "),o("p",[a._v('Os objetos criados nessa biblioteca são excluídos automaticamente ao final do trabalho. Esta também é a biblioteca padrão. Caso não seja especificado um nome de bibliote para uma tabela, a mesma será criada em WORK. Os dois comandos abaixo "apontam" para o mesmo objeto '),o("em",[a._v("minha_tabela")]),a._v(" na biblioteca WORK.")]),a._v(" "),o("p",[o("code",[a._v("data=work.minha_tabela")]),a._v(" é o mesmo que:")]),a._v(" "),o("p",[o("code",[a._v("data=minha_tabela")])]),a._v(" "),o("ul",[o("li",[o("strong",[a._v("SASHELP")]),a._v(" - É definida automaticamente, também e possui uma coleção de dados de exemplo.")])]),a._v(" "),o("p",[o("code",[a._v("data=sashelp.air")])]),a._v(" "),o("p",[o("code",[a._v("data=sashelp.baseball")])]),a._v(" "),o("p",[o("code",[a._v("data=sashelp.cars")])]),a._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",[a._v("O administrador do SAS também pode definir bibliotecas para que sejam carregadas automaticamente em seu ambiente de trabalho.")])]),a._v(" "),o("h2",{attrs:{id:"engines"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#engines","aria-hidden":"true"}},[a._v("#")]),a._v(" Engines")]),a._v(" "),o("h3",{attrs:{id:"lendo-dados-do-excell"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lendo-dados-do-excell","aria-hidden":"true"}},[a._v("#")]),a._v(" Lendo Dados do Excell")]),a._v(" "),o("p",[a._v("A maneira mais práticas de acessar as planilhas existenten em arquivo do Excell é atravé de uma biblioteca. Para criar uma biblioteca que contenha as planilas de um determinado arquivo")]),a._v(" "),o("p",[o("strong",[o("code",[a._v('LIBNAME nome_biblioteca XLSX "caminho/nome_do_arquivo.xlsx";')])])]),a._v(" "),o("p",[a._v("Onde:")]),a._v(" "),o("ul",[o("li",[o("p",[o("strong",[a._v("nome_biblioteca")]),a._v(" - é o nome que será dado a biblioteca.")])]),a._v(" "),o("li",[o("p",[o("strong",[a._v("XLSX")]),a._v(" - É a engine utilizada para trabalhar planilhas do Excell.")])]),a._v(" "),o("li",[o("p",[o("strong",[a._v("caminho/nome_do_arquivo.xlsx")]),a._v(" - Define a localização e nome do arquivo de dados. O nome do arquivo conter a extensão.")])])]),a._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",[a._v('Como o excell não determina regras para a criação de nome de colunas em suas planilhas, de forma a garantir que o comprimento de um nome não seja maior que 32 caracteres ou que sejam usados caracteres especais ou espaço "em branco" entre nos nomes, pode ser necessário instruir o SAS para fazer a adequação dos nomes das colunas para o SAS 7. Com a opção '),o("strong",[a._v("VALIDVARNAME=V7")]),a._v(", os nomes serão alterados automaticamente.")]),a._v(" "),o("p",[o("code",[a._v("OPTIONS VALIDVARNAME=V7;")])]),a._v(" "),o("p",[a._v('Os espaços e caracteres especias serão substituidos por "_" e os nomes serão trucados em 32 caracteres.')])]),a._v(" "),o("p",[a._v("Exemplo:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v('options validvarname=v7;\n\n* Carrega as planilhas da carteira de pedidos\nlibname vendas_xls xlsx "e:/analise/vendas/carteira_pedidos.xlsx";\n\n* Lê os dados da planilha pedidos_linha_branca\nproc contents data=vendas_xls.pedidos_linha_branca;\nrun;\n\nlibname vendas_xls clear;\n')])])])])},[],!1,null,null,null);e.default=i.exports}}]);