### Crypto Meeting

#### ACM Meeting notes - September 28, 2017
#### Performed in collaboration with the Pi Mu Epsilon (math club) local chapter

***
#### Introduction
   
#### Caesar Cipher
 - One of the earliest and simplest ciphers
 - Used by (you guessed it) Caesar himself, who is claimed to have used a shift of 3
 
 |a|b|c|d|e|f|...|u|v|w|x|y|z|
 |-|-|-|-|-|-|-|-|-|-|-|-|-|
 |d|e|f|g|h|i|...|x|y|z|a|b|c|
 
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
 - Invented at the end of WWI
 - But mainly you it talked about in context with WWII
 - Multiple Variations
   ##### So what is the Enigma Machine?
    - Consists of 3 rotors
    
#### One small problem...
 - Notice that both the Caesar Cipher and the Enigma machine rely on an assumption
  - What is it?
  
 - We need a way of distributing keys between two parties through an untrusted medium

 #### Diffie-Hellman Key Exchange
  - First published by Whitfield Diffie and Martin Hellman in 1976
    - But actually conveived before then by researchers at GCHQ, Great Britain's secret intelligence agency
  - Allows parties to decide on a secret key even in the presence of evesdroppers.
  - Not actually an encryption scheme, but a key generation scheme to be used in conjunction with some other form of encryption.
 #### The Math:
  - Let's go back to the idea of modular arithmetic
  - Choose a prime "p" and a number "g"
  It turns out that we can computer "g<sup>a</sup> mod p" quickly even for very large "a"
  
 #### Algorithm (example):
  Let p=67, g=7, a = 28 = 11100 (base 2). We can "repeatedly square" g to get
   - g<sup>2</sup> = (g)(g)     = 7 * 7 = 49 mod 67
   - g<sup>4</sup> = (g<sup>2</sup>)(g<sup>2</sup>) = 49 * 49 = 56 mod 67
   - g<sup>8</sup> = (g<sup>4</sup>)(g<sup>4</sup>) = 56 * 56 = 54 mod 67
   - g<sup>16</sup> = (g<sup>8</sup>)(g<sup>8</sup>) = 54 * 54 = 35 mod 67
   
  Since 28 = 16 + 8 + 4, we see
   - g<sup>28</sup> = (g<sup>16</sup>)(g<sup>8</sup>)(g<sup>4</sup>) = 35 * 54 * 56 = 47 mod 67
  
  Notice that this algorithm only takes log<sub>2</sub>(n) squarings. So evey very large "a" will perform relatively quickly
  
  #### Back to Diffie-Hellman
  So what do we do with this information?
   - Let us suppose we have 3 parties.
     - Alice, who wants to talk to Bob without being overheard
     - Bob, who wants to talk to Alice without being overheard
     - Eve, who wants to eavesdrop on Alice and Bob's conversation
   - Furthermore, Alice and Bob have no prior information about each other
     - That is, they haven't decided on a secret key yet
  How are Alice and Bob going to decide on a secret key?
  
  Step 1:
   - Alice and Bob (openly) communicate a prime "p" and a number "g"
   
  Step 2:
   - Alice chooses a secret number "a", calculates "g<sup>a</sup> mod p", and sends that information to Bob
   - Bob chooses a secret number "b", calculates "g<sup>b</sup> mod p", and sends that information to Alice
   
  Step 3:
   - Alice calculates (g<sup>b</sup> mod p)<sup>a</sup> mod p = g<sup>ab</sup> mod p
   - Bob calculates (g<sup>a</sup> mod p)<sup>b</sup> mod p = g<sup>ab</sup> mod p
   
  The secret key is g<sup>ab</sup> mod p
  
  ||Alice|Eve|Bob|
  |---|:---:|:---:|:---:|
  |Decide on g,p|g,p|g,p|g,p|
  |Secretly choose a number (c)|a  |   | b |
  |Calculate g<sup>c</sup> mod p|g<sup>a</sup> mod p| | g<sup>b</sup> mod p|
  |Send g<sup>c</sup> to the other party|g<sup>b</sup> mod p| g<sup>a</sup> mod p, g<sup>b</sup> mod p| g<sup>a</sup> mod p|
  |Feel secure in your secrecy ;)|(g<sup>b</sup>)<sup>a</sup> mod p |???| (g<sup>a</sup>)<sup>b</sup> mod p|
  
  ##### Going back to our example
  p = 67, g = 7 (NUMBERS ARE CURRENTLY WRONG, NEED TO WORK ON THAT)
  
  ||Alice|Eve|Bob|
  |---|:---:|:---:|:---:|
  |Decide on g,p|g=7,p=67|g=7,p=67|g=7,p=67|
  |Secretly choose a number (c)|a=28|   | b=42 |
  |Calculate g<sup>c</sup> mod p|7<sup>28</sup> mod 67 = 47| | 7<sup>42</sup> mod 67 = 24|
  |Send g<sup>c</sup> to the other party|g<sup>b</sup> mod p = 24| g<sup>a</sup> mod p = 47, g<sup>b</sup> mod p = 24| g<sup>a</sup> mod p = 47|
  |Calculate g<sup>ab</sup> mod p|(g<sup>b</sup>)<sup>a</sup> mod p = (47)<sup>28</sup> mod 67 = 36 |???| (g<sup>a</sup>)<sup>b</sup> mod p = (24)^42 mod 67 = 62|
  
  Notice that if Eve finds either "a" or "b", she knows the secret key.
   
#### Discrete Log Problem
 - The problem of finding "a" from "g<sup>a</sup> mod p" is known as the **Discrete Log Problem**. As far as we know, this is a hard problem.
 
#### Post-Quantum Cryptography
 - But, the Discrete Log problem isn't hard on a Quantum Computer!
   - Breaks using "Shor's Algorithm"

### Acknowledgements
- Thanks to Dr. Fili of the OSU Mathematics department for providing input and references for content
