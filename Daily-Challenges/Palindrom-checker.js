function isPalindrome(str) {
    let cleaned= str.toLowerCase().replace(/ /g,"");
        let reversed = cleaned.split("").reverse().join("");
        return cleaned === reversed;
    };
    console.log(isPalindrome("racecar"));

    function isPalindrome(str) {
        let cleaned=str.toLoweCase().replace(/ /g, "");
        for (let i= 0; i <cleaned.length / 2; i ++){
            if (cleaned[i] !==cleaned[cleaned.length -1-i]){
                return false;
            }
        }
        return true;
    }