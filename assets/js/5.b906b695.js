(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{370:function(t,e,a){t.exports=a.p+"assets/img/procedure_contents.c478738a.png"},371:function(t,e,a){t.exports=a.p+"assets/img/procedure_print.12caa24c.png"},372:function(t,e,a){t.exports=a.p+"assets/img/procedure_means.dd8831ab.png"},373:function(t,e,a){t.exports=a.p+"assets/img/procedure_univariate.09e3df54.png"},374:function(t,e,a){t.exports=a.p+"assets/img/procedure_freq.377d4cdd.png"},406:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"procedures-para-exploracao-de-dados"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#procedures-para-exploracao-de-dados"}},[t._v("#")]),t._v(" Procedures para Exploração de Dados")]),t._v(" "),s("p",[t._v("Em estatística, a "),s("em",[t._v("análise exploratória de dados")]),t._v(" ("),s("strong",[t._v("AED")]),t._v(") é uma abordagem à análise de conjuntos de dados de modo a resumir suas características principais, frequentemente com métodos visuais. Um modelo estatístico pode ou não ser usado, mas primariamente a AED tem como objetivo observar o que os dados podem nos dizer além da modelagem formal ou do processo de teste de hipóteses."),s("a",{attrs:{href:"https://pt.wikipedia.org/wiki/An%C3%A1lise_explorat%C3%B3ria_de_dados",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wikipedia"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v('O SAS fornece uma série de "procedures" que facilitam o trabalho de análise exploratória dos dados, como CONTENTS, PRINT, MEANS, UNIVARIATE e FREQ.')]),t._v(" "),s("p",[s("em",[t._v("(Os exemplos criados com a tabela SASHELP.AIR)")])]),t._v(" "),s("h2",{attrs:{id:"procedure-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#procedure-contents"}},[t._v("#")]),t._v(" Procedure CONTENTS")]),t._v(" "),s("p",[t._v("Exibe um resumo sobre o arquivo ou tabela carregada.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Mais informações sobre CONTENTS na "),s("a",{attrs:{href:"https://go.documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.4&docsetId=proc&docsetTarget=n1hqa4dk5tay0an15nrys1iwr5o2.htm&locale=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentação oficial"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("img",{attrs:{src:a(370),alt:"Procedure CONTENTS"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("data tbl_air;\n\tset sashelp.air;\nrun;\n\nproc contents data=tbl_air;\nrun;\n")])])]),s("h2",{attrs:{id:"procedure-print"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#procedure-print"}},[t._v("#")]),t._v(" Procedure PRINT")]),t._v(" "),s("p",[t._v("Cria uma lista com todas as colunas e linhas de dados:")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Mais informações sobre PRINT na "),s("a",{attrs:{href:"https://go.documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.4&docsetId=proc&docsetTarget=p10qiuo2yicr4qn17rav8kptnjpu.htm&locale=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentação oficial"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("img",{attrs:{src:a(371),alt:"Procedure PRINT"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("data tbl_air;\n\tset sashelp.air;\nrun;\n\nproc print data=tbl_air;\nrun;\n")])])]),s("p",[t._v("A quantidades de obsevações exibidas pode ser limitada pela opção "),s("strong",[t._v("obs")]),t._v(" como a seguir:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("proc print data=sashelp.air (obs=10);\nrun;\n")])])]),s("h2",{attrs:{id:"procedure-means"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#procedure-means"}},[t._v("#")]),t._v(" Procedure MEANS")]),t._v(" "),s("p",[t._v("Cria umum sumário de estatísticas para as colunas com dados numéricos. A procedure MEANS apresenta a frequencia de ocorrência, a média, o desvio padrão e os valores máximos e mínimos.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Com este sumário é possível determinar se existem valores nulos numa determinada coluna e a existência de valores inválidos.\nMais informações sobre MEANS na "),s("a",{attrs:{href:"https://go.documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.4&docsetId=proc&docsetTarget=p0f0fjpjeuco4gn1ri963f683mi4.htm&locale=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentação oficial"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("img",{attrs:{src:a(372),alt:"Procedure MEANS"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("data tbl_air;\n\tset sashelp.air;\nrun;\n\nproc means data=tbl_air;\nrun;\n")])])]),s("h2",{attrs:{id:"procedure-univariate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#procedure-univariate"}},[t._v("#")]),t._v(" Procedure UNIVARIATE")]),t._v(" "),s("p",[t._v("Também cria um sumário com estatísticas, desta vez mais relacionadas à distribuição do dados.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Com este sumário é possível observar os cinco menores e maiores valores.\nMais informações sobre UNIVARIATE na "),s("a",{attrs:{href:"https://go.documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.4&docsetId=procstat&docsetTarget=procstat_univariate_gettingstarted.htm&locale=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentação oficial"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("img",{attrs:{src:a(373),alt:"Procedure UNIVARIATE"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("data tbl_air;\n\tset sashelp.air;\nrun;\n\nproc univariate data=tbl_air;\nrun;\n")])])]),s("h2",{attrs:{id:"procedure-freq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#procedure-freq"}},[t._v("#")]),t._v(" Procedure FREQ")]),t._v(" "),s("p",[t._v("Cria uma tabela de frequencia para cada coluna da tabela.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Na tabela de frequencias é possível identificar problemas como valores inconsistentes.\nMais informações sobre FREQ na "),s("a",{attrs:{href:"https://go.documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.4&docsetId=procstat&docsetTarget=procstat_freq_toc.htm&locale=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentação oficial"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("img",{attrs:{src:a(374),alt:"Procedure FREQ"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("data tbl_air;\n\tset sashelp.air;\nrun;\n\nproc freq data=tbl_air;\nrun;\n")])])]),s("h2",{attrs:{id:"filtrando-dados-em-procedures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filtrando-dados-em-procedures"}},[t._v("#")]),t._v(" Filtrando Dados em Procedures")]),t._v(" "),s("p",[t._v("Para filtrar os dados durante o uso das procedures utilizamos o comando "),s("strong",[t._v("WHERE")]),t._v(" de forma semelhante ao seu uso em SQL.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PROC nome-procedure data=.... ;\n         WHERE expressão;\nRUN;\n")])])]),s("h3",{attrs:{id:"os-operadores-de-comparacao-utilizados-sao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os-operadores-de-comparacao-utilizados-sao"}},[t._v("#")]),t._v(" Os operadores de comparação utilizados são:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Descrição")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Operador")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Exemplo")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Igualdade")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("= ou EQ")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("nome = 'Lidia'")])]),t._v(" "),s("tr",[s("td",[t._v("Desigualdade")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("^= ou ~= ou NE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v('nome ~= "Beto"')])]),t._v(" "),s("tr",[s("td",[t._v("Maior que")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("> or GT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("idade > 25")])]),t._v(" "),s("tr",[s("td",[t._v("Menor que")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("< or LT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("idade < 25")])]),t._v(" "),s("tr",[s("td",[t._v("Maior que ou igual")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v(">= or GE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("idade >= 25")])]),t._v(" "),s("tr",[s("td",[t._v("Menor que ou igual")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("<= or LE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("idade <= 25")])])])]),t._v(" "),s("h3",{attrs:{id:"os-operadores-de-comparacao-podem-ser-combinados"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os-operadores-de-comparacao-podem-ser-combinados"}},[t._v("#")]),t._v(" Os operadores de comparação podem ser combinados:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Operador")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Exemplo")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("AND")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("nome = 'Lidia'and idade>=25")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("OR")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("nome = 'Lidia'or idade>=25")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("BETWEEN")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("idade BETWEEN 18 AND 25")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("BETWEEN")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("18< idade >25")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[t._v("SAS diferencia maiúsculo e minúsculo, logo 'LIDIA', 'Lidia' e 'lidia' são diferentes.")]),t._v(" "),s("li",[t._v("Os valores de campos caracter podem ser delimitado por "),s("strong",[t._v("'")]),t._v(" ou "),s("strong",[t._v('"')]),t._v(", como em 'Lidia' e \"Beto\".")]),t._v(" "),s("li",[t._v('Datas devem ser digitadas no fomrato "dmmmaa"d ou "ddmmmaaaa"d como em "9apr19"d ou "09APR2019"d.')])])]),t._v(" "),s("h3",{attrs:{id:"operadores-like-in-e-not-in"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operadores-like-in-e-not-in"}},[t._v("#")]),t._v(' Operadores "Like", "In" e "Not in"')]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Operador")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Exemplo")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("LIKE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v('nome LIKE "Maria%"')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("IN")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("nome IN ('Lidia' 'Beto')")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("NOT IN")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("nome NOT IN ('Claudio','Sonia')")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[t._v("Ao utilizar LIKE pode-se usar "),s("strong",[t._v("%")]),t._v(" ou "),s("strong",[t._v("_")])])]),t._v(" "),s("p",[s("em",[t._v('nome like "Mari%"')]),t._v(',  retornará "Maria Clara", "Mario Assis", "Marisa Sousa"')]),t._v(" "),s("p",[s("em",[t._v('nome like "Mari_ %"')]),t._v(',  retornará "Mari'),s("strong",[t._v("a")]),t._v(' Clara" e "Mari'),s("strong",[t._v("o")]),t._v(' Assis"')]),t._v(" "),s("ul",[s("li",[t._v("As listas de valores em IN e NOT IN podem ser separadas por espaços ou virgula com em ('Lidia','Beto') e ('Claudio' 'Sonia')")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);