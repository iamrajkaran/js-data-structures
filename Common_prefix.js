
	function commonPrefixUtil(str1, str2) {
		let result = "";
		let n1 = str1.length, n2 = str2.length;

		for (let i = 0, j = 0; i <= n1 - 1 &&
				j <= n2 - 1; i++, j++) {
			if (str1.charAt(i) != str2.charAt(j)) {
				break;
			}
			result += str1.charAt(i);
		}
		return (result);
	}

	function commonPrefix(arr, low, high) {
		if (low == high) {
			return (arr[low]);
		}

		if (high > low) {
			// Same as (low + high)/2, but avoids overflow for
			// large low and high
			let mid = low + Math.floor((high - low) / 2);

			let str1 = commonPrefix(arr, low, mid);
			let str2 = commonPrefix(arr, mid + 1, high);

			return (commonPrefixUtil(str1, str2));
		}
		return null;
	}

// Driver program to test above function
	function main(arr) {

		let n = arr.length;

		var ans = commonPrefix(arr, 0, n - 1);

		if (ans.length != 0) {
			return ans;
		} else {
			return '';
		}
	}


main(['ga', 'gb', 'gc','gd', 'ge','gf']);
