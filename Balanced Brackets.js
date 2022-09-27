function balancedBrackets(string) {
  const map = {
    ")" : "(",
    "}" : "{",
    "]" : "["
            
  }
  const open = '([{'
  const stack = []
  for(const char of string){
    if(open.includes(char)){
      stack.push(char)
    } 
    if(char in map){
      const match = stack.pop()
      if(match !== map[char]) return false 
    }
  }
  return stack.length === 0
}

// time O(n) space O(n)

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
//20. Valid Parentheses
/**
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const map = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
        const open = '([{'
        const stack = []
        for(const char of s){
            if(open.includes(char)){
                stack.push(char)
                
            }
            if(char in map){
                const match = stack.pop()
                if(match !== map[char]) return false
            }
    
        }
    return stack.length === 0
            
}

