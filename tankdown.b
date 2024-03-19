// Bebis.js TankDown compiler

?input = #:"input"

?output = #:"output"
?preview = #:"preview"

s!TankDown: input
{
    ?i = input

    i .. replace: /;#(\.\[(.*)\])? (.*)/g, "<h1 class=\"$2\">$3</h1>"
    i .. replace: /;##(\.\[(.*)\])? (.*)/g, "<h2 class=\"$2\">$3</h2>"
    i .. replace: /;###(\.\[(.*)\])? (.*)/g, "<h3 class=\"$2\">$3</h3>"
    i .. replace: /;####(\.\[(.*)\])? (.*)/g, "<h4 class=\"$2\">$3</h4>"
    i .. replace: /;%(\d+)(\.\[(.*)\])? (.*)/g, "<div class=\"center-image\"><img class=\"h$1 $3\" src=\"$4\"/></div>"
    i .. replace: /;(\.\[(.*)\])? (.*)/g, "<p class=\"$2\">$3</p>"
    i .. replace: /;\*\*(.*)/g, "</ul>"
    i .. replace: /;\*(\.\[(.*)\])?(.*)/g, "<ul class=\"$2\">"
    i .. replace: /;- (.*)/g, "<li>$1</li>"
    i .. replace: /s{ ?(.*) ?}(\.\[(.*)\])?/g, "<span class=\"$3\">$1</span>"

    !!i
}

s!Update
{
    ?td = !TankDown: input.value
    output.innerText = td
    preview.innerHTML = td
}
!Update

listen: input, "input", Update