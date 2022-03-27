
  //vigenere cipher
//change to uniform characters
function isLetter (str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i)
  }

function isUpperCase (character) {
    if (character === character.toUpperCase()) {
      return true
    }
    if (character === character.toLowerCase()) {
      return false
    }
  }

  
  

function encrypt(plaintext, key) {
    var ciphertext = "";
    // TODO: Put your encryption logic here.  Assign the resulting ciphertext to the ciphertext variable.
     
  for (let i = 0, j = 0; i < plaintext.length; i++) {
    const c = plaintext.charAt(i)
    if (isLetter(c)) {
      if (isUpperCase(c)) {
        ciphertext += String.fromCharCode((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65) // A: 65
      } else {
        ciphertext += String.fromCharCode((c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26 + 97) // a: 97
      }
    } else {
      ciphertext += c
    }
    j = ++j % key.length
  }
  if (plaintext != typeof(string) || plaintext == "" || Number.isFinite(plaintext)) {
    throw false;
    }
    else if (key != typeof(string) || key == "" || Number.isFinite(key)) 
    {
    throw false;
    }
  
  
    return ciphertext;
}


function decrypt(ciphertext, key) {
    
    var plaintext = "";

    // TODO: Put your decryption logic here.  Assign the resulting plaintext to the plaintext variable.
    for (let i = 0, j = 0; i < ciphertext.length; i++) {
        const c = ciphertext.charAt(i)
        if (isLetter(c)) {
          if (isUpperCase(c)) {
            plaintext+= String.fromCharCode(90 - (25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
          } else {
            plaintext += String.fromCharCode(122 - (25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
          }
        } else {
          plaintext += c
        }
        j = ++j % key.length
      }
      if (ciphertext != typeof(string) || ciphertext == "" || Number.isFinite(ciphertext)) {
        throw false;
        }
        else if (key != typeof(string) || key == "" || Number.isFinite(key)) 
        {
        throw false;
        }
      
    return plaintext;
}

function checkEncrypt(){
    s =document.getElementById('plaintext').value
    k =document.getElementById('key').value
    d =encrypt(s, k)
    alert(d);
    return false;
  }
  function checkDecrypt(){
    s =document.getElementById('ciphertext').value
    k =document.getElementById('key').value
    d =decrypt(s, k)
    alert(d);
    return false;
  }