### Cryptography Workshop

#### ACM Meeting notes - September 28, 2017
#### Performed in collaboration with the Pi Mu Epsilon (math club) local chapter

***
### Introduction
   
### Caesar Cipher and Vigenère Cipher

#### Caesar Cipher
 - One of the earliest and simplest ciphers
 - Used by (you guessed it) Caesar himself, who is claimed to have used a shift of 3
 
 |a|b|c|d|e|f|...|u|v|w|x|y|z|
 |-|-|-|-|-|-|-|-|-|-|-|-|-|
 |d|e|f|g|h|i|...|x|y|z|a|b|c|
 
  ##### Let's define some terminology:
  - We don't want to actually deal with letters, words, etc. Modern cryptography deals almost solely with numbers. We use an **encoding** function to transform letters (or words) into numbers, and vice versa.
  - We also need a **secret key** (sometimes just **key**) to perform our encryption and decryption.
  - The **keyspace** is the set of possible keys. Usually we want the **keyspace** to be prohibitively large -- this way, using brute force to find the key is no longer feasible.
  
 ##### So what does this mean with reference to the Caesar Cipher?
  - What should be our encoding scheme?
  - What should our encryption and decryption functions look like?
  - What does our keyspace look like?
  
  #####
   - Encoding scheme: a↦0, b↦1 seem reasonable
   - Encryption function: f(x,k)=x+k (mod 26)
   - Decryption function: f<sup>-1</sup>(x,k)=x-k (mod 26)
   - Keyspace: technically infinite, but really only 26 possibilities
  
  ##### Modular Arithmetic (a digression)
   - In a mod *N* arithmetic system, one counts \[0, *N*). Upon reaching *N*, the system wraps around and begins counting at 0 again.
      - Clocks are modular arithmetic systems, hence modular arithmetic is sometimes called *clock arithmetic*.
         - The 24-hour clock counts 0..23, and then starts back over at 0 again.
   - Notation:
      - **Computer Science:** *x* mod *N* is a function that spits out the remainder of *x*/*N*
      - **Mathematics *(and this workshop)*:** *x* ≡ *a* mod *N* ― *x* is **congruent** to *a* mod *N*, that is to say that the remainder of *x*/*N* is *a*, so *x* maps to *a* in the mod *N* system.
  ##### Examples
   - 3 ≡ 3 mod 5
   - 10 ≡ 0 mod 5
   - 25 ≡ 4 mod 7
   - -1 ≡ 6 mod 7
  
  ##### Back to the Caesar Cipher
  - Let's work through some examples:
  - Encrypt `CRYPTOWORKSHOP` using a key of 3
  - Decrypt `WLSJNI CM WIIF` using a key of 20 (or a key of -6)
  
  ##### Reflections on Caesar Cipher
  - Notice that if the key is 13, we don't actually need a decryption function -- it would be the same as the encryption function
    - Has a special name: [ROT13](https://en.wikipedia.org/wiki/ROT13)
    - *f(x, 13)* = *x* + 13 ≡ (*x* + 13) mod 26
    - *f(x+13, 13)* = *x* + 26 ≡ *x* mod 26
    - (Supposedly) used in forums to hide spoilers
  - Who thinks the Caesar cipher is secure?
    - The keyspace is too small, so brute force attacks are almost trivial
    - Notice that each letter is mapped to exactly one other letter (and always that letter)
     - i.e., `BANANA` with a key of 11 is `MLYLYL`
       - Notice `A` -> `L` every time
     - So there's another inherent weakness in the Caesar cipher
       - It reflects the natural frequency of letters in a language
       - [*e* is the most common letter in the English alphabet](http://letterfrequency.org/)
  - Can we make the Caesar cipher more secure?
     - We can use the Vigenère cipher, which uses words as keys. For instance, encrypting `CRYPTOGRAPHY` with the key of `KEY` gives us...
     
| C | R | Y | P | T | O | G | R | A | P | H | Y |
|---|---|---|---|---|---|---|---|---|---|---|---|
| K | E | Y | K | E | Y | K | E | Y | K | E | Y |
| **M** | **V** | **W** | **Z** | **X** | **M** | **Q** | **V** | **Y** | **Z** | **L** | **W** |

- It's worth noting that [Vigenère is pretty easy to crack too](http://www.dcode.fr/vigenere-cipher), given a sufficiently large cipher.

### Enigma Machine
 - Invented at the end of WWI
 - But mainly you see it talked about in context with WWII
 - Multiple Variations
 
   #### So what is the Enigma Machine?

![Enigma Machine](https://upload.wikimedia.org/wikipedia/commons/b/bd/Enigma_%28crittografia%29_-_Museo_scienza_e_tecnologia_Milano.jpg)
   
   #### Facts
   - Has a total of 150,738,274,937,250 (151 trillion) different ways pairs of letters could be interchanged
   - The Polish and British cryptographers and mathematicians spearheaded the attack on the Enigma Machine
   - (Extremely) short video showing an Enigma Machine in action: [Working Enigma]{https://www.youtube.com/watch?v=5SBNc-lpJXU}
   
   #### How it works
   
![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Enigma-action.svg/1000px-Enigma-action.svg.png)

   - Courtesy of Wikipedia
   - Paper enigma: http://dave-reed.com/DIYenigma/
   
#### Breaking the Enigma
 - Notice that a letter can't encode to itself
 - Notice that if a letter X maps to Y, then Y also maps to X
 - Poor security or thought in how the Enigma was used
  - **Cribs** are common phrases that you might see expect to see in the plaintext
     - For example, you might expect the first word of a letter to be "Hello"
     - Or, every message ended in "Heil Hitler"
  - Common rotor settings such as "AAA" or "BBB"
  - Retransmitting a message (or a nearly identital message) using a different cipher (or different key)
    
    
#### Real-world crypto (courtesy of xkcd)

  ![](https://imgs.xkcd.com/comics/security.png)
    
    

#### Problems with Caesar Cipher and the Enigma Machine
 - Notice that both the Caesar Cipher and the Enigma machine rely on an assumption
 - **They both assume that the parties have communicated some secret**

### Diffie-Hellman Key Exchange
  - First published by Whitfield Diffie and Martin Hellman in 1976
    - But actually conveived before then by researchers at GCHQ, Great Britain's secret intelligence agency
  - Allows parties to decide on a secret key even in the presence of evesdroppers.
  - Not actually an encryption scheme, but a key generation scheme to be used in conjunction with some other form of encryption.
 #### The Math:
  - Let's go back to the idea of modular arithmetic
  - Choose a prime *p* and a number *g*
  It turns out that we can compute *g*<sup>*a*</sup> mod *p* quickly even for very large *a*'s.
  
 #### Efficiently Calculating *g*<sup>a</sup> mod *p*
  Let *p* = 67, *g* = 7, *a* = 28. We need to find *g*<sup>28</sup> mod 67. Because *g*<sup>28</sup> = *g*<sup>16</sup> · *g*<sup>8</sup> · *g*<sup>4</sup>, we can find what *g*<sup>28</sup> is congruent to in mod 67 using repeated squaring:
   - *g*<sup>2</sup> = *g* · *g* = 7 · 7 = 49 ≡ 49 mod 67
   - *g*<sup>4</sup> = *g*<sup>2</sup> · *g*<sup>2</sup> = 49 · 49 = 2401 ≡ 56 mod 67
   - *g*<sup>8</sup> = *g*<sup>4</sup> · *g*<sup>4</sup> = 56 · 56 = 3136 ≡ 54 mod 67
   - *g*<sup>16</sup> = *g*<sup>8</sup> · *g*<sup>8</sup> = 54 · 54 = 2916 ≡ 35 mod 67
   
  Since 28 = 16 + 8 + 4, we see
   - *g*<sup>28</sup> = *g*<sup>16</sup> · *g*<sup>8</sup> · *g*<sup>4</sup> = 35 · 54 · 56 = 105840 ≡ 47 mod 67
  
  Notice that this algorithm only takes log<sub>2</sub>(*n*) squarings. So even very large *a*'s will perform relatively quickly.
  
  #### Back to Diffie-Hellman
  So what do we do with this information?
   - Let us suppose we have 3 parties.
     - **Alice**, who wants to talk to Bob without being overheard
     - **Bob**, who wants to talk to Alice without being overheard
     - **Eve**, who wants to eavesdrop on Alice and Bob's conversation
   - Furthermore, Alice and Bob have no prior information about each other
     - That is, they haven't decided on a secret key yet
  How are Alice and Bob going to decide on a secret key?
  
 **Step 1:**
   - Alice and Bob (openly) communicate a prime *p* and a number *g*
   
 **Step 2:**
   - Alice chooses a secret number *a*, calculates *g*<sup>*a*</sup> mod *p*, and sends that information to Bob
   - Bob chooses a secret number *b*, calculates *g*<sup>*b*</sup> mod *p*, and sends that information to Alice
   
 **Step 3:**
   - Alice calculates (*g*<sup>*b*</sup> mod *p*)<sup>*a*</sup> mod *p* = *g*<sup>*ab*</sup> mod *p*
   - Bob calculates (*g*<sup>*a*</sup> mod *p*)<sup>*b*</sup> mod *p* = *g*<sup>*ab*</sup> mod *p*
   
  The secret key is *g*<sup>*ab*</sup> mod *p*
  
  ||Alice|Eve|Bob|
  |---|:---:|:---:|:---:|
  |Decide on *g*, *p*|*g*, *p*| *g*, *p* | *g*, *p*|
  |Secretly choose a number (*c*)| *a* |   | *b* |
  |Calculate *g*<sup>*c*</sup> mod *p*|*g*<sup>*a*</sup> mod *p*| | *g*<sup>*b*</sup> mod *p*|
  |Send *g*<sup>*c*</sup> to the other party|*g*<sup>*b*</sup> mod *p*| *g*<sup>*a*</sup> mod *p*, *g*<sup>*b*</sup> mod *p*| *g*<sup>*a*</sup> mod *p*|
  |Feel secure in your secrecy ;)|(*g*<sup>*b*</sup>)<sup>*a*</sup> mod *p* |???| (*g*<sup>*a*</sup>)<sup>*b*</sup> mod *p*|
  
  ##### Going back to our example
  *p* = 67, *g* = 7
  
  ||Alice|Eve|Bob|
  |---|:---:|:---:|:---:|
  |Decide on *g*, *p* | *g* = 7, *p* = 67| *g* = 7, *p* = 67| *g* = 7, *p* = 67|
  |Secretly choose a number (*c*) | *a* = 28|   | *b* = 15 |
  |Calculate *g*<sup>*c*</sup> mod *p*| 7<sup>28</sup> mod 67 = 47| | 7<sup>15</sup> mod 67 = 5|
  |Send *g*<sup>*c*</sup> to the other party| *g*<sup>*b*</sup> mod *p* = 5| *g*<sup>*a*</sup> mod *p* = 47, *g*<sup>*b*</sup> mod *p* = 5| *g*<sup>*a*</sup> mod *p* = 47|
  |Calculate *g*<sup>*ab*</sup> mod *p*|(*g*<sup>*b*</sup>)<sup>*a*</sup> mod *p* = 47<sup>28</sup> mod 67 = 14 |???| (*g*<sup>*a*</sup>)<sup>*b*</sup> mod *p* = 47<sup>5</sup> mod 67 = 14|
  
  Notice that if Eve finds either *a* or *b*, she knows the secret key.
   
#### Discrete Log Problem
 - The problem of finding *a* from *g*<sup>*a*</sup> mod *p* is known as the **Discrete Log Problem**. As far as we know, this is a hard problem.
 
#### Post-Quantum Cryptography
 - While we've chosen to focus on Diffie-Hellman for our discussions on Public Key Cryptography, there are other methods by which PKC can be accomplished. One of the most famous and widely used encryption schemes, [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)), relies on *prime factorization* being a hard problem to solve efficiently.
 
   - Our best solutions at the time are the [General Number Field Sieve](https://en.wikipedia.org/wiki/General_number_field_sieve) (faster for integers greater than 10<sup>100</sup>) and the [Quadratic Sieve](https://en.wikipedia.org/wiki/Quadratic_sieve) (faster for integers less than 10<sup>100</sup>)
   
      - It's worth keeping in mind that RSA can use up to 4,096-bit keys, resulting in keys greater than 10<sup>1000</sup>
   
 - Even with optimizations such as the General Number Field Sieve, with our *current, classical* computing power, it could take the lifetime of the universe to crack problems of prime factorization or the Discrete Log Problem

 - But, the Discrete Log problem isn't hard on a Quantum Computer!
   - Breaks using "Shor's Algorithm"

### Acknowledgements
- Thanks to Dr. Fili of the OSU Mathematics department for providing input and references for content
