### Crypto Meeting

#### ACM Meeting notes - September 28, 2017
#### Performed in collaboration with the Pi Mu Epsilon (math club) local chatper

***
#### Introduction
 - Information
  - Paraphrase Queen Semiramis tale from Friedman lecture I? https://www.nsa.gov/news-features/declassified-documents/friedman-documents/assets/files/lectures-speeches/FOLDER_172/41758929079807.pdf
   - I should worry about the introduction later
   
##### Terminology
 - Possibly should be under Introduction
 - **Plaintext** is a message before it has been **encrypted**. **Ciphertext** is the result of encryption on plaintext, and is the enciphered message
  - 

#### Caesar Cipher
 - One of the earliest and simplest ciphers
 - Used by (you guessed it) Caesar himself, who is claimed to have used a shift of 3
 
 |a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|
 |-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
 |d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|a|b|c|
 
  ##### Let's define some terminology:
  - We don't want to actually deal with letters, words, etc. Modern cryptography deals almost soley with numbers. We use an **encoding** function to transform letters (or words) into numbers, and vice versa.
  - We also need a **secret key** (sometimes just **key**) to perform our encryption and decryption.
  - The **keyspace** is the set of possible keys. Usually we want the **keyspace** to be prohibitively large.
  
 ##### So what does this mean with reference to the Caesar Cipher?
  - What should be our encoding scheme?
  - What should our encryption and decryption functions look like?
  - What does our keyspace look like?
  
  #####
   - Encoding scheme: a->0, b->1 seems reasonable
   - Encryption function: f(x,k)=x+k (mod 26)
   - Decryption function: f^-1(x,k)=x-k (mod 26)
   - Keyspace: technically infinite, but really only 26 possibilities
  
  ##### Modular Arithmetic (a digression)
   - Also known as "clock" arithmetic
   - Intuitively, "x mod n" is the remainder of "x / r" (x divided by r).
   - Technically, "x = y mod n" if there exists an integer "k" with "x + kn =  y"
  ##### Example
   -  3 mod 5 = 3 (k = 0)
   - 10 mod 5 = 0 (k = -2)
   - 25 mod 7 = 4 (k = -4)
   - -1 mod 7 = 6 (k = 1)
  
  ##### Back to the Caesar Cipher
  - Let's work through some examples:
  - Encrypt "CryptoWorkshop" using a key of 3
  - Decrypt "WLSJNI CM WIIF" using a key of 20 (or a key of -6)
  
  ##### Parting Thoughts
  - Who thinks the Caesar cipher is secure?
    - The keyspace is too small, so brute force attacks are almost trivial
    - Notice that each letter is mapped to exactly one other letter (and always that letter)
     - i.e., "BANANA" with a key of 11 is "MLYLYL"
       - Notice "A -> L" every time
     - So there's another inherrent weakness in the Caesar cipher
       - it reflects the natural frequency of letters in a language
       - "e" is the most common letter in the English Alphabet
  - Notice that if the key is "13", we don't actually need a decryption function
   - Has a special name: Rot13
   - "f(x,13)=x+13"
   - "f(x+13, 13) = x+26 = x mod 26"
   - (Supposedly) used in Forums to hide spoilers

#### Notes on the Enigma Machine:
 - http://wiki.franklinheath.co.uk/index.php/Enigma/Paper_Enigma
   - Paper printout of the Enigma machine
 - Need Picture

#### Enigma Machine
- Used in WWII by the Germans (Who's seem the "Imitation Game"?)
- Not the first use of machinery (for some definition of machinery) being used to encrypt/decrypt messages
   - But arguably the first one we care about.
   ##### So what is the Enigma Machine?
    - Consists of 3 rotors
    
#### Diffie-Hellman
 - Notice that both the Caesar Cipher and the Enigma machine rely make an assumption (what is it?)
#### Discrete Log Problem

#### Post-Quantum Cryptography
