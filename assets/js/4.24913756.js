(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{242:function(e,a,t){"use strict";t.r(a);var r=t(0),s=Object(r.a)({},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"procedures-para-exploracao-de-dados"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procedures-para-exploracao-de-dados","aria-hidden":"true"}},[e._v("#")]),e._v(" Procedures para Exploração de Dados")]),e._v(" "),r("p",[e._v("Em estatística, a "),r("em",[e._v("análise exploratória de dados")]),e._v(" ("),r("strong",[e._v("AED")]),e._v(") é uma abordagem à análise de conjuntos de dados de modo a resumir suas características principais, frequentemente com métodos visuais. Um modelo estatístico pode ou não ser usado, mas primariamente a AED tem como objetivo observar o que os dados podem nos dizer além da modelagem formal ou do processo de teste de hipóteses."),r("a",{attrs:{href:"https://pt.wikipedia.org/wiki/An%C3%A1lise_explorat%C3%B3ria_de_dados",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wikipedia"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v('O SAS fornece uma série de "procedures" que facilitam o trabalho de análise exploratória dos dados, como CONTENTS, PRINT, MEANS, UNIVARIATE e FREQ.')]),e._v(" "),r("p",[r("em",[e._v("(Os exemplos criados com a tabela SASHELP.AIR)")])]),e._v(" "),r("h2",{attrs:{id:"procedure-contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procedure-contents","aria-hidden":"true"}},[e._v("#")]),e._v(" Procedure CONTENTS")]),e._v(" "),r("p",[e._v("Exibe um resumo sobre o arquivo ou tabela carregada.")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[e._v("Mais informações sobre CONTENTS na "),r("a",{attrs:{href:"https://go.documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.4&docsetId=proc&docsetTarget=n1hqa4dk5tay0an15nrys1iwr5o2.htm&locale=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentação oficial"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("img",{attrs:{src:t(73),alt:"Procedure CONTENTS"}})]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("data tbl_air;\n\tset sashelp.air;\nrun;\n\nproc contents data=tbl_air;\nrun;\n")])])]),r("h2",{attrs:{id:"procedure-print"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procedure-print","aria-hidden":"true"}},[e._v("#")]),e._v(" Procedure PRINT")]),e._v(" "),r("p",[e._v("Cria uma lista com todas as colunas e linhas de dados:")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[e._v("Mais informações sobre PRINT na "),r("a",{attrs:{href:"https://go.documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.4&docsetId=proc&docsetTarget=p10qiuo2yicr4qn17rav8kptnjpu.htm&locale=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentação oficial"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("img",{attrs:{src:t(74),alt:"Procedure PRINT"}})]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("data tbl_air;\n\tset sashelp.air;\nrun;\n\nproc print data=tbl_air;\nrun;\n")])])]),r("p",[e._v("A quantidades de obsevações exibidas pode ser limitada pela opção "),r("strong",[e._v("obs")]),e._v(" como a seguir:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("proc print data=sashelp.air (obs=10);\nrun;\n")])])]),r("h2",{attrs:{id:"procedure-means"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procedure-means","aria-hidden":"true"}},[e._v("#")]),e._v(" Procedure MEANS")]),e._v(" "),r("p",[e._v("Cria umum sumário de estatísticas para as colunas com dados numéricos. A procedure MEANS apresenta a frequencia de ocorrência, a média, o desvio padrão e os valores máximos e mínimos.")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[e._v("Com este sumário é possível determinar se existem valores nulos numa determinada coluna e a existência de valores inválidos.\nMais informações sobre MEANS na "),r("a",{attrs:{href:"https://go.documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.4&docsetId=proc&docsetTarget=p0f0fjpjeuco4gn1ri963f683mi4.htm&locale=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentação oficial"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("img",{attrs:{src:t(75),alt:"Procedure MEANS"}})]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("data tbl_air;\n\tset sashelp.air;\nrun;\n\nproc means data=tbl_air;\nrun;\n")])])]),r("h2",{attrs:{id:"procedure-univariate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procedure-univariate","aria-hidden":"true"}},[e._v("#")]),e._v(" Procedure UNIVARIATE")]),e._v(" "),r("p",[e._v("Também cria um sumário com estatísticas, desta vez mais relacionadas à distribuição do dados.")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[e._v("Com este sumário é possível observar os cinco menores e maiores valores.\nMais informações sobre UNIVARIATE na "),r("a",{attrs:{href:"https://go.documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.4&docsetId=procstat&docsetTarget=procstat_univariate_gettingstarted.htm&locale=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentação oficial"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("img",{attrs:{src:t(76),alt:"Procedure UNIVARIATE"}})]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("data tbl_air;\n\tset sashelp.air;\nrun;\n\nproc univariate data=tbl_air;\nrun;\n")])])]),r("h2",{attrs:{id:"procedure-freq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procedure-freq","aria-hidden":"true"}},[e._v("#")]),e._v(" Procedure FREQ")]),e._v(" "),r("p",[e._v("Cria uma tabela de frequencia para cada coluna da tabela.")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[e._v("Na tabela de frequencias é possível identificar problemas como valores inconsistentes.\nMais informações sobre FREQ na "),r("a",{attrs:{href:"https://go.documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.4&docsetId=procstat&docsetTarget=procstat_freq_toc.htm&locale=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentação oficial"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("img",{attrs:{src:t(77),alt:"Procedure FREQ"}})]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("data tbl_air;\n\tset sashelp.air;\nrun;\n\nproc freq data=tbl_air;\nrun;\n")])])]),r("h2",{attrs:{id:"filtrando-dados-em-procedures"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filtrando-dados-em-procedures","aria-hidden":"true"}},[e._v("#")]),e._v(" Filtrando Dados em Procedures")]),e._v(" "),r("p",[e._v("Para filtrar os dados durante o uso das procedures utilizamos o comando "),r("strong",[e._v("WHERE")]),e._v(" de forma semelhante ao seu uso em SQL.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("PROC nome-procedure data=.... ;\n         WHERE expressão;\nRUN;\n")])])]),r("h3",{attrs:{id:"os-operadores-de-comparacao-utilizados-sao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#os-operadores-de-comparacao-utilizados-sao","aria-hidden":"true"}},[e._v("#")]),e._v(" Os operadores de comparação utilizados são:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Descrição")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Operador")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Exemplo")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Igualdade")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("= ou EQ")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("nome = 'Lidia'")])]),e._v(" "),r("tr",[r("td",[e._v("Desigualdade")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("^= ou ~= ou NE")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v('nome ~= "Beto"')])]),e._v(" "),r("tr",[r("td",[e._v("Maior que")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("> or GT")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("idade > 25")])]),e._v(" "),r("tr",[r("td",[e._v("Menor que")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("< or LT")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("idade < 25")])]),e._v(" "),r("tr",[r("td",[e._v("Maior que ou igual")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v(">= or GE")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("idade >= 25")])]),e._v(" "),r("tr",[r("td",[e._v("Menor que ou igual")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("<= or LE")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("idade <= 25")])])])]),e._v(" "),r("h3",{attrs:{id:"os-operadores-de-comparacao-podem-ser-combinados"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#os-operadores-de-comparacao-podem-ser-combinados","aria-hidden":"true"}},[e._v("#")]),e._v(" Os operadores de comparação podem ser combinados:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[e._v("Operador")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Exemplo")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("AND")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("nome = 'Lidia'and idade>=25")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("OR")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("nome = 'Lidia'or idade>=25")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("BETWEEN")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("idade BETWEEN 18 AND 25")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("BETWEEN")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("18< idade >25")])])])]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("ul",[r("li",[e._v("SAS diferencia maiúsculo e minúsculo, logo 'LIDIA', 'Lidia' e 'lidia' são diferentes.")]),e._v(" "),r("li",[e._v("Os valores de campos caracter podem ser delimitado por "),r("strong",[e._v("'")]),e._v(" ou "),r("strong",[e._v('"')]),e._v(", como em 'Lidia' e \"Beto\".")]),e._v(" "),r("li",[e._v('Datas devem ser digitadas no fomrato "dmmmaa"d ou "ddmmmaaaa"d como em "9apr19"d ou "09APR2019"d.')])])]),e._v(" "),r("h3",{attrs:{id:"operadores-like-in-e-not-in"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operadores-like-in-e-not-in","aria-hidden":"true"}},[e._v("#")]),e._v(' Operadores "Like", "In" e "Not in"')]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[e._v("Operador")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Exemplo")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("LIKE")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v('nome LIKE "Maria%"')])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("IN")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("nome IN ('Lidia' 'Beto')")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("NOT IN")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("nome NOT IN ('Claudio','Sonia')")])])])]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("ul",[r("li",[e._v("Ao utilizar LIKE pode-se usar "),r("strong",[e._v("%")]),e._v(" ou "),r("strong",[e._v("_")])])]),e._v(" "),r("p",[r("em",[e._v('nome like "Mari%"')]),e._v(',  retornará "Maria Clara", "Mario Assis", "Marisa Sousa"')]),e._v(" "),r("p",[r("em",[e._v('nome like "Mari_ %"')]),e._v(',  retornará "Mari'),r("strong",[e._v("a")]),e._v(' Clara" e "Mari'),r("strong",[e._v("o")]),e._v(' Assis"')]),e._v(" "),r("ul",[r("li",[e._v("As listas de valores em IN e NOT IN podem ser separadas por espaços ou virgula com em ('Lidia','Beto') e ('Claudio' 'Sonia')")])])])])},[],!1,null,null,null);a.default=s.exports},73:function(e,a,t){e.exports=t.p+"assets/img/procedure_contents.c478738a.png"},74:function(e,a,t){e.exports=t.p+"assets/img/procedure_print.12caa24c.png"},75:function(e,a,t){e.exports=t.p+"assets/img/procedure_means.dd8831ab.png"},76:function(e,a,t){e.exports=t.p+"assets/img/procedure_univariate.09e3df54.png"},77:function(e,a,t){e.exports=t.p+"assets/img/procedure_freq.377d4cdd.png"}}]);