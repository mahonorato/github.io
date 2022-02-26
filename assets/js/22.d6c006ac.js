(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{398:function(t,e,a){"use strict";a.r(e);var s=a(42),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"emmet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emmet"}},[t._v("#")]),t._v(" Emmet")]),t._v(" "),a("p",[t._v("Uma das melhores extensões para editores de código é o "),a("strong",[t._v("emmet")]),t._v(". Seu uso para o trabalho com tags extendidas é um diferencial de produtividade para quem utiliza o Sublime Text, o Visual Studio Code, o Atom, o Bracket entre outros editores.")]),t._v(" "),a("p",[t._v("Estou documentando os comandos do emmet, usando o (Bracket)[http://brackets.io/] mas os mesmos funcionam da mesma maneiro nos demais editores.")]),t._v(" "),a("iframe",{attrs:{width:"580",height:"326",src:"https://www.youtube.com/embed/YJBv4P5qcxk",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),a("ol",[a("li",[a("p",[t._v("To create skeleton of HTML\nTo create a skeleton of HTML, type exclamation mark(!) and click the 'Tab' key\nOutput")]),t._v("\n <!DOCTYPE html>\n "),a("html",{attrs:{lang:"en"}},[a("head",[a("meta",{attrs:{charset:"UTF-8"}}),t._v(" "),a("title",[t._v("Document")])]),t._v(" "),a("body")])]),t._v(" "),a("li",[a("p",[t._v("To create child elements using '>'")]),t._v(" "),a("p",[t._v("If you wish to create child elements, you can do so by simply using the ‘>’ character as below –\nChild Example 1:\nul>li\nAfter typing the above command, place your cursor at the end(after li) and then press the 'Tab' key.\nOutput")]),t._v(" "),a("ul",[a("li")]),t._v(" "),a("p",[t._v("Child Example 2:\ndiv>ul>li\nAfter typing the above command, place your cursor at the end(after li) and then press the 'Tab' key.\nOutput")]),t._v(" "),a("div",[a("ul",[a("li")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("To create Sibling elements using '+'")])]),t._v(" "),a("p",[t._v("To create a sibling elements, you can do so by simply using the ‘+’ character as below –\nSibling Example:\nsection+p+bq\nAfter placing your cursor at end, press 'Tab' key.\nOutput")]),t._v(" "),a("section"),t._v(" "),a("p"),t._v(" "),a("blockquote"),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("To create ID & CLASS attributes")])]),t._v(" "),a("p",[t._v("To create an Id, just use a ‘#’ character\nID Example:\n#resnavbar-type\nAfter placing your cursor at end, press 'Tab' key.\nOutput")]),t._v(" "),a("div",{attrs:{id:"resnavbar-type"}}),t._v(" "),a("p",[t._v("To create a class, simply use a ‘.’ character\nCLASS Example:\ndiv.container\nAfter placing your cursor at end, press 'Tab' key.\nOutput")]),t._v(" "),a("div",{staticClass:"container"}),t._v(" "),a("p",[t._v("Note/Info You can also type .container to achieve the same result.")]),t._v(" "),a("p",[t._v("To create a class with Id.\nCLASS with ID Example:\n#container.x1.x2.x3\nAfter placing your cursor at end, press 'Tab' key.\nOutput")]),t._v(" "),a("div",{staticClass:"x1 x2 x3",attrs:{id:"container"}}),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("To create implicit tag names")])]),t._v(" "),a("p",[t._v("Suppose, you wish to create implicit tags, you can simply use a ‘.’ character followed by the class name.\nImplicit tag Example 1:\n.xyz\nAfter placing your cursor at end, press 'Tab' key.\nOutput")]),t._v(" "),a("div",{staticClass:"xyz"}),t._v(" "),a("p",[t._v("Implicit tag Example 2:\nem>.car\nAfter placing your cursor at end, press 'Tab' key.\nOutput")]),t._v(" "),a("p",[a("em",[a("span",{staticClass:"car"})])]),t._v(" "),a("p",[t._v("Implicit tag Example 3:\nul>.car\nAfter placing your cursor at end, press 'Tab' key.\nOutput")]),t._v(" "),a("ul",[a("li",{staticClass:"car"})]),t._v(" "),a("p",[t._v("Implicit tag Example 4:\ntable>.r>.c\nAfter placing your cursor at end, press 'Tab' key.\nOutput")]),t._v(" "),a("table",[a("tr",{staticClass:"r"},[a("td",{staticClass:"c"})])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("To create text within an element using {} character")])]),t._v(" "),a("p",[t._v("The simplest way to create text is by using the text inside the {} character.\nText Example 1:\na{Link Text}\nAfter placing your cursor at end, press 'Tab' key.\nOutput")]),t._v(" "),a("p",[a("a",{attrs:{href:""}},[t._v("Link text")])]),t._v(" "),a("p",[t._v("Text Example 2:\n.container>li>{Click }+a{Here}\nAfter placing your cursor at end, press 'Tab' key.\nOutput")]),t._v(" "),a("div",{staticClass:"container"},[a("li",[t._v("Click "),a("a",{attrs:{href:""}},[t._v("Here")])])]),t._v(" "),a("p",[t._v("Text Example 3:\ndiv>p{lorem}\nNote/Info You should place your cursor just after the lorem(i.e. just before the } & it will generate a random Lorem Ipsum texts.\nOnce done, you need to place your cursor at end & press the Tab key so that you get the complete expanded tag.\nOutput")]),t._v(" "),a("div",[a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum consequatur repudiandae repellat blanditiis sed commodi sint dolorum vero. Animi provident quod magnam, incidunt, optio earum dolores quia suscipit neque quaerat.")])]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("To create the code multiple times using *")])]),t._v(" "),a("p",[t._v("Let’s create a list of 6 items\nMultiply Example 1:\nul>li*6\nAfter placing your cursor at end, press 'Tab' key.\nOutput")]),t._v(" "),a("ul",[a("li"),t._v(" "),a("li"),t._v(" "),a("li"),t._v(" "),a("li"),t._v(" "),a("li"),t._v(" "),a("li")]),t._v(" "),a("p",[t._v("Multiply Example 2:\nol.multiplication>li.items*6>a{Item Name}\nAfter placing your cursor at end, press 'Tab' key.\nOutput")]),t._v(" "),a("ol",{staticClass:"multiplication"},[a("li",{staticClass:"items"},[a("a",{attrs:{href:""}},[t._v("Item Name")])]),t._v(" "),a("li",{staticClass:"items"},[a("a",{attrs:{href:""}},[t._v("Item Name")])]),t._v(" "),a("li",{staticClass:"items"},[a("a",{attrs:{href:""}},[t._v("Item Name")])]),t._v(" "),a("li",{staticClass:"items"},[a("a",{attrs:{href:""}},[t._v("Item Name")])]),t._v(" "),a("li",{staticClass:"items"},[a("a",{attrs:{href:""}},[t._v("Item Name")])]),t._v(" "),a("li",{staticClass:"items"},[a("a",{attrs:{href:""}},[t._v("Item Name")])])]),t._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[t._v("To add numbers using $")])]),t._v(" "),a("p",[t._v("Assume that your requirement is to create a table with 3 columns like below\nNumbers Example 1:\ntable>tr>th{version$}*3\nStep 1- After placing your cursor at end, press 'Tab' key.\nOutput")]),t._v(" "),a("table",[a("tr",[a("th",[t._v("version1")]),t._v(" "),a("th",[t._v("version2")]),t._v(" "),a("th",[t._v("version3")])])]),t._v(" "),a("p",[t._v("Step 2- To create another row , you can write tr>td>{java$}*3. Now, place your cursor after number 3 and press 'Tab' key")]),t._v(" "),a("table",[a("tr",[a("th",[t._v("version1")]),t._v(" "),a("th",[t._v("version2")]),t._v(" "),a("th",[t._v("version3")])]),a("tr",[a("td",[t._v("java1")]),t._v(" "),a("td",[t._v("java2")]),t._v(" "),a("td",[t._v("java3")])])]),t._v(" "),a("p",[t._v("Numbers Example 2:\n.container>img.image$*5\nKeep your cursor at the end & press 'Tab' key.\nOutput")]),t._v(" "),a("div",{staticClass:"container"},[a("img",{staticClass:"image1",attrs:{src:"",alt:""}}),t._v(" "),a("img",{staticClass:"image2",attrs:{src:"",alt:""}}),t._v(" "),a("img",{staticClass:"image3",attrs:{src:"",alt:""}}),t._v(" "),a("img",{staticClass:"image4",attrs:{src:"",alt:""}}),t._v(" "),a("img",{staticClass:"image5",attrs:{src:"",alt:""}})]),t._v(" "),a("p",[t._v("Numbers Example 3:\nh$[title=\"title$\"]{Heading $}*3\nKeep your cursor at the end & press 'Tab' key.\nOutput")]),t._v(" "),a("h1",{attrs:{title:"title1"}},[t._v("Heading 1")]),t._v(" "),a("h2",{attrs:{title:"title2"}},[t._v("Heading 2")]),t._v(" "),a("h3",{attrs:{title:"title3"}},[t._v("Heading 3")]),t._v(" "),a("p",[t._v("Numbers Example 4 - Start number in different format\n.vehicle>ul>li.tmodel_$$$*6\nKeep your cursor at the end & press 'Tab' key.\nOutput")]),t._v(" "),a("div",{staticClass:"vehicle"},[a("ul",[a("li",{staticClass:"tmodel_001"}),t._v(" "),a("li",{staticClass:"tmodel_002"}),t._v(" "),a("li",{staticClass:"tmodel_003"}),t._v(" "),a("li",{staticClass:"tmodel_004"}),t._v(" "),a("li",{staticClass:"tmodel_005"}),t._v(" "),a("li",{staticClass:"tmodel_006"})])]),t._v(" "),a("p",[t._v("Note/Info:\nHere, the numbers are shown in the format 001, 002, 003, etc because the definition has $$$.")]),t._v(" "),a("p",[t._v("Similarly, if we give $$ in the definition, it will display 01, 02, 03, etc in the output.\nNumbers Example 5 - Start number other than 1 in ascending order\n.vehicle>ul>li.tmodel$@4*6\nKeep your cursor at the end & press 'Tab' key.")]),t._v(" "),a("p",[t._v("Note/Info:\nHere, we are using the symbol $@ to start from number 4.\nOutput")]),t._v(" "),a("div",{staticClass:"vehicle"},[a("ul",[a("li",{staticClass:"tmodel4"}),t._v(" "),a("li",{staticClass:"tmodel5"}),t._v(" "),a("li",{staticClass:"tmodel6"}),t._v(" "),a("li",{staticClass:"tmodel7"}),t._v(" "),a("li",{staticClass:"tmodel8"}),t._v(" "),a("li",{staticClass:"tmodel9"})])]),t._v(" "),a("p",[t._v("Numbers Example 6 - Start number other than 1 in descending order\n.vehicle>ul>li.tmodel$@-*8\nKeep your cursor at the end & press 'Tab' key.\nOutput")]),t._v(" "),a("div",{staticClass:"vehicle"},[a("ul",[a("li",{staticClass:"tmodel8"}),t._v(" "),a("li",{staticClass:"tmodel7"}),t._v(" "),a("li",{staticClass:"tmodel6"}),t._v(" "),a("li",{staticClass:"tmodel5"}),t._v(" "),a("li",{staticClass:"tmodel4"}),t._v(" "),a("li",{staticClass:"tmodel3"}),t._v(" "),a("li",{staticClass:"tmodel2"}),t._v(" "),a("li",{staticClass:"tmodel1"})])]),t._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[t._v("To show the custom attributes")])]),t._v(" "),a("p",[t._v("Emmet allows us to expand custom attributes as well.\nCustom Attribute Example 1\n.Insurance>img[class=\"life-insurance\"]*3\nKeep your cursor at the end & press 'Tab' key.\nOutput")]),t._v(" "),a("div",{staticClass:"Insurance"},[a("img",{staticClass:"life-insurance",attrs:{src:"",alt:""}}),t._v(" "),a("img",{staticClass:"life-insurance",attrs:{src:"",alt:""}}),t._v(" "),a("img",{staticClass:"life-insurance",attrs:{src:"",alt:""}})]),t._v(" "),a("p",[t._v("Custom Attribute Example 2\ndiv.Insurance>p[title=\"Welcome to TutorialBrain\"]\nKeep your cursor at the end & press 'Tab' key.\nOutput")]),t._v(" "),a("div",{staticClass:"Insurance"},[a("p",{attrs:{title:"Welcome to TutorialBrain"}})]),t._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[t._v("Climb-up")])]),t._v(" "),a("p",[t._v("Let’s assume that you need to add 2 paragraphs with a div along with some other elements.")]),t._v(" "),a("p",[t._v("As the symbol > enables to create child elements which means everything after the > symbol will be the child of its previous element.")]),t._v(" "),a("p",[t._v("So, in this case, you will get unexpected result\nClimb Up Example-1(Unexpected Result)\ndiv>p>img+p\nKeep your cursor at the end & press 'Tab' key.\nOutput")]),t._v(" "),a("div",[a("p",[a("img",{attrs:{src:"",alt:""}})]),a("p"),t._v(" "),a("p")]),t._v(" "),a("p",[t._v("But, we want 2 separate paragraphs and you can achieve this by the climb-up process by simply using a caret symbol(^).\nClimb Up Example-1(Expected Result)\ndiv>p>img^p\nKeep your cursor at the end & press 'Tab' key.\nOutput")]),t._v(" "),a("div",[a("p",[a("img",{attrs:{src:"",alt:""}})]),t._v(" "),a("p")]),t._v(" "),a("ol",{attrs:{start:"11"}},[a("li",[t._v("Grouping")])]),t._v(" "),a("p",[t._v("Grouping is a clear way to group elements to avoid an unexpected error.")]),t._v(" "),a("p",[t._v("Now, if you do not want to apply the Climb-up on the above example i.e. div>p>img+p but wish to fix this using Grouping.")]),t._v(" "),a("p",[t._v("In this case, you can simply separate the different elements using a parentheses.\nGrouping Example-1\ndiv>(p>img)+p\nKeep your cursor at the end & press 'Tab' key.\nOutput")]),t._v(" "),a("div",[a("p",[a("img",{attrs:{src:"",alt:""}})]),t._v(" "),a("p")]),t._v(" "),a("p",[t._v("Grouping Example-2\n.container>(nav>ul>li*4)+article>p\nKeep your cursor at the end & press 'Tab' key.\nOutput")]),t._v(" "),a("div",{staticClass:"container"},[a("nav",[a("ul",[a("li"),t._v(" "),a("li"),t._v(" "),a("li"),t._v(" "),a("li")])]),t._v(" "),a("article",[a("p")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);