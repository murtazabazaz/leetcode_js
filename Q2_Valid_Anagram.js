/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   
    // Check if both string has same length or not
    if (s.length != t.length) {
        return false;
    }
    
    let map = new Map();
   
    for (let i = 0; i < s.length; i++) {
        
        if (map.has(s[i])) {
            
            map.set(s[i],
                    map.get(s[i]) + 1);
        }
        else {
          
            map.set(s[i], 1);
        }
    }
    
    for (let i = 0; i < t.length; i++) {
       
        if (map.has(t[i])) {
           
            map.set(t[i],map.get(t[i]) - 1);
        }
    }
  
    let keys = map.keys();
    
    for (let key of keys) {
        if (map.get(key) != 0) {
            return false;
        }
    }
    
    return true;
};

let s = "anagram"
let t = "nagaram"

console.log(isAnagram(s, t));