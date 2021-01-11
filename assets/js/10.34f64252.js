(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{356:function(e,o,a){e.exports=a.p+"assets/img/servidor_docker.c2196d45.png"},426:function(e,o,a){"use strict";a.r(o);var r=a(42),s=Object(r.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"usando-o-docker-em-analise-de-dados"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usando-o-docker-em-analise-de-dados"}},[e._v("#")]),e._v(" Usando o Docker em análise de Dados")]),e._v(" "),r("p",[e._v("Tenho usado o Docker com o mesmo enfoque que os desenvolvedores o fazem. Crio ambientes para trabalhar com dados mais rápido com contêineres. Os contêineres do Docker agrupam o software e suas dependências em uma unidade padronizada para desenvolvimento de software que inclui tudo o que é necessário para executar: código, tempo de execução, ferramentas do sistema e bibliotecas. Isso garante que o ambiente sempre execute o mesmo e simplifica a colaboração como compartilhar uma imagem de contêiner.")]),e._v(" "),r("p",[e._v("Como ensinam os "),r("a",{attrs:{href:"https://www.docker.com/get-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("mantenedores do Docker"),r("OutboundLink")],1),e._v(', os contêineres, com Windows ou Linux, são apoiados por ferramentas e APIs do Docker e ajudam a criar um software melhor: embarque mais rápido e pare de perder horas tentando configurar ambientes de desenvolvimento, criar novas instâncias. Elimina as inconsistências do ambiente e o problema "'),r("em",[e._v("funciona na minha máquina")]),e._v('", compactando o aplicativo, as configurações e as dependências em um contêiner isolado.')]),e._v(" "),r("h2",{attrs:{id:"o-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#o-docker"}},[e._v("#")]),e._v(" O Docker")]),e._v(" "),r("p",[e._v("Os ambientes criados através de imagens do Docker são diferentes daqueles que temos ao criar máquinas virtuais no QEMU, Virtual Box, VM Ware ou no Parallels.")]),e._v(" "),r("p",[e._v("Enquanto a máquina vitual é uma implementação por software de uma arquitetura que executa instruções pré-definidas da mesma forma que uma CPU física permitindo a instalação do SO e as demais aplicações, no contêiner não há qualquer sistema operacional instalado e em execução.")]),e._v(" "),r("p",[e._v("Cada contêiner obtém do sistema operacional do seu hospedeiro uma cópia virtual da tabela de processos, das interfaces de rede e dos pontos de montagem do sistema de arquivos, além de recursos de memória e processamento para utilizar em seus proprios processos.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(356),alt:"Servidor Docker"}})]),e._v(" "),r("p",[e._v("As máquinas vituais, no entanto, permitem que sejam instalados diferentes SOs seus utilitários e aplicações. Nos contêineres, no entanto, as aplicações se limitam àquelas que rodam no SO do hospedeiro, que em nosso caso, significa aplicações desenvolvidas para o Linux. Mais informações em "),r("a",{attrs:{href:"https://www.freecodecamp.org/news/docker-simplified-96639a35ff36/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Simplified: A Hands-On Guide for Absolute Beginners"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"termos-que-serao-usados-nesta-sessao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#termos-que-serao-usados-nesta-sessao"}},[e._v("#")]),e._v(" Termos que serão usados nesta sessão")]),e._v(" "),r("p",[e._v("Um pequeno resumo dos termos que usamos ao trabalhar com contêineres no Docker:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Imagens (Images)- A imagem é um arquivo, compactado que contém camadas de informações sobre o sistema de aquivos, arquivos dos programas instalados e outros recursos necessários para a criação de um contêiner.")])]),e._v(" "),r("li",[r("p",[e._v("Contêineres (Containers)- O contêiner é um arquivo que armazena as informações necessárias para criar um ambiente isolado para executar os processos que foram definidos na imagem. Nele estão definidas, quando necessário, caracteristicas de rede e armazenameto dos dados de trabalho, por exemplo.")])]),e._v(" "),r("li",[r("p",[e._v('"Docker Daemon" - É um serviço, e portanto roda em segundo plano no host, que gerencia a construção, execução e distribuição de contêineres do Docker.')])]),e._v(" "),r("li",[r("p",[e._v('Cliente do Docker (Docker Client) - É a ferramenta de linha de comando utilizada para trabalhar com os contêineres. É o cliente que interage com o "daemon". Existem ferramentas gráficas que tornam esta interação com o "deamon" mais produtiva, como o '),r("a",{attrs:{href:"https://www.portainer.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Portainer"),r("OutboundLink")],1),e._v(", que possui ma interface WEB bem intuitiva e que roda, também, à partir de um contêiner. ☻")])]),e._v(" "),r("li",[r("p",[e._v('"Docker Hub" - É o repositório oficial de imagens, mantido pela Docker. O '),r("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),r("OutboundLink")],1),e._v(" é onde estão as imagens oficiais, além de imagens de usuários.")])])]),e._v(" "),r("div",{staticClass:"custom-block danger"},[r("p",{staticClass:"custom-block-title"},[e._v("Muito Cuidado!")]),e._v(" "),r("p",[e._v("Escolha com atenção o que vai baixar, pois usuários mal intecionandos tem disponibilizado imagens com programas maliciosos.")]),e._v(" "),r("p",[e._v("Sempre que possivel, parta das imagens oficiais dos produtores do software que você está procurando e adicione as funcionalidades que precisa.")])]),e._v(" "),r("p",[e._v("fonte("),r("a",{attrs:{href:"https://docker-curriculum.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-curriculum.com"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("p",[e._v("Para dicas sobre instalação veja os artigos:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.mundodocker.com.br/tag/docker-no-windows/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker no Windows"),r("OutboundLink")],1),e._v(";")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/pt-br/virtualization/windowscontainers/manage-docker/configure-docker-daemon",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mecanismo do Docker no Windows"),r("OutboundLink")],1),e._v(";")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/como-instalar-e-usar-o-docker-no-ubuntu-18-04-pt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Como Instalar e Usar o Docker no Ubuntu 18.04"),r("OutboundLink")],1),e._v(";")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tecadmin.net/install-docker-on-fedora/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" How To Install Docker on Fedora 30/29/28"),r("OutboundLink")],1),e._v(".")])])])}),[],!1,null,null,null);o.default=s.exports}}]);