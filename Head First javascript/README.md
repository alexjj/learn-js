Basics

Each line ends in ;
// is a comment
Whitespace? who cares.


Variables

Always begin with `var`.

Name start with letter, (_ or $ - special occasions). Case sensitive. CamelCase is good.

`var myNiceVariable = "eggs";`

`var toUseLater;`  // Declared but has no value

Code blocks

Everything in {}. Doesn't need `;` at the end of }.

```javascript
while (scopes > 0) {
    document.write("Another scoop!"<br>);
    scoopes = scoops - 1;
}
```

If - Else

```javascript
if (scoops >= 5) {
    alert("Eat faster!");
} else if (scoops < 3) {
    alert("Ice cream running low!");
} // else if repeats here outside {}

```

document.write generally not good idea

use `console.log` to write a message to console's log - useful for me.