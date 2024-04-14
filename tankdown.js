// Bebis.js TankDown compiler
let input = document.getElementById("input")
let output = document.getElementById("output")
let preview = document.getElementById("preview")
function TankDown(input)
{
let i = input
i=i.replace(/;#(\.\[(.*)\])? (.*)/g, "<h1 class=\"$2\">$3</h1>")
i=i.replace(/;##(\.\[(.*)\])? (.*)/g, "<h2 class=\"$2\">$3</h2>")
i=i.replace(/;###(\.\[(.*)\])? (.*)/g, "<h3 class=\"$2\">$3</h3>")
i=i.replace(/;####(\.\[(.*)\])? (.*)/g, "<h4 class=\"$2\">$3</h4>")
i=i.replace(/;%(\d+)(\.\[(.*)\])? (.*)/g, "<div class=\"center-image\"><img class=\"h$1 $3\" src=\"$4\"/></div>")
i=i.replace(/;%(\d+)%(\d+)(\.\[(.*)\])? (.*)/g, "<iframe width=\"$1\" height=\"$2\" src=\"$5\" class=\"$4\"></iframe>")
i=i.replace(/;(\.\[(.*)\])? (.*)/g, "<p class=\"$2\">$3</p>")
i=i.replace(/;\*\*(.*)/g, "</ul>")
i=i.replace(/;\*(\.\[(.*)\])?(.*)/g, "<ul class=\"n $2\">")
i=i.replace(/;- (.*)/g, "<li>$1</li>")
i=i.replace(/s{ ?(.*?) ?}(\.\[(.*?)\])?/g, "<span class=\"$3\">$1</span>")
i=i.replace(/\[(.*)\]\((.*)\)(\.\[(.*)\])?/g, "<a class=\"$4\" href=\"$2\">$1</a>")
i=i.replace(/(?<!\\)\*\*(.*)(?<!\\)\*\*/g, "<b>$1</b>")
i=i.replace(/(?<!\\)\*(.*)(?<!\\)\*/g, "<i>$1</i>")
i=i.replace(/---/g, "<hr>")
return i
}
function Update()
{
let td = TankDown(input.value)
output.innerText = td
preview.innerHTML = td
}
Update()
input.addEventListener("input", () => Update())
