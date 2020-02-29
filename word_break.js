const dict = ["this", "th", "is", "famous",
                "Word", "break", "b", "r", "e", "a", "k",
                "br", "bre", "brea", "ak", "problem"];

wordBreak(dict, "Wordbreakproblem", "");

function wordBreak(dict, str, out){
    if (str.length == 0)
		{
			console.log(out);
			return;
		}

		for (let i = 1; i <= str.length; i++)
		{
			// consider all prefixes of current String
			let prefix = str.substring(0, i);

			// if the prefix is present in the dictionary, add prefix to the
			// output String and recur for remaining String

			if (dict.includes(prefix)) {
				wordBreak(dict, str.substring(i), out + " " + prefix);
			}
		}
}
