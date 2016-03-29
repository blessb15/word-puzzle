$(document).ready(function() {

  $("form#calculator").submit(function(event) {
    var phrase = $("input#input1").val();

    for (var index = 0; index < phrase.length; index += 1) {
    phrase = phrase.replace("a","-");
    phrase = phrase.replace("e","-");
    phrase = phrase.replace("i","-");
    phrase = phrase.replace("o","-");
    phrase = phrase.replace("u","-");
    }

    alert(phrase);



    event.preventDefault();

  });
});
