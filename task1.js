//1.Given a string, reverse each word in the sentence.

function revStr(string_org) {
    var str_rev = "";
    for (let i = string_org.length - 1; i >= 0; i--) {
        str_rev += string_org[i];
    }
    return str_rev;
}

const string_org ="1.Given a string, reverse each word in the sentence.";

const result_revString = revStr(string_org);
console.log(result_revString);