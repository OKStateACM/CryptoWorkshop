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
##### Mathematics Background
 - Modular Arithmetic
 - Calculating powers mod a number? - should probably be under Diffie-Hellman section
#### Caesar Cipher
 - One of the earliest and simplest ciphers
 - Used by (you guessed it) Caesar himself, who is claimed to have used a shift of 3
 
 |a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|
 |-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
 |d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|a|b|c|
 
  ##### Let's define some terminology:
  - We don't want to actually deal with letters, words, etc. Modern cryptography deals almost soley with numbers. We use an **enciphering** scheme to transform letters (or words) into numbers, and vice versa.
  - We also need a **secret key** (sometimes just **key**) to perform our encryption and decryption.
  - The **keyspace** is the set of possible keys. Usually we want the **keyspace** to be prohibitively large.
  
 ##### So what does this mean with reference to the Caesar Cipher?
  - What should be our encoding scheme? (a->0, b->1. ASCII is another reasonable answer)
  - What should our encryption and decryption functions look like?
    - f(x,k)=x+k
    - f^-1(x,k)=x-k
  - What does our keyspace look like? (technically infinite, but really only 26)
  
  ##### So how secure is the Caesar cipher?
  - For the time? Probably reasonable.
#### Cryptanalysis? Are we including this section, and where?
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
