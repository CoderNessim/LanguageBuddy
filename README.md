# Language Buddy

An app designed to help others learn languages

## Table of Contents

- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Demo](#demo)

## Usage

- this app includes four main components/functionalities:

  1. A translator using DeepL translator API
  2. Sentence/word generator that allows users to try and guess translations to certain phrases in up to 30 languages.

  - the random words and phrases are generated via chatgpt API.
  - there is also a similarity score for users to use to see how correct their answer is in response to the actual translation of a phrase or word(s)

  3. A flashcard maker that can be paired up with the translated phrases and their actual translations. Also allows for the support of making custom flashcards via user input

  - flashcards can be edited and deleted

  4. A modal that displays all flashcards created. This option exists for users that want to view all flashcards at a time rather than just one (which appears on a carousel).

-- Small FYI on the backend: it is mainly used for bypassing a CORS policy and does not make up a big part of my project (it did take me a long time to configure though)

## Technologies

Languages: HTML, CSS, Javascript

Framework: ExpressJS

Environment: NodeJS

Libraries: React, MantineUI

Flashcard component link: https://classic.yarnpkg.com/en/package/react-quizlet-flashcard

A string similarity package: https://www.npmjs.com/package/string-similarity-js

## Contributing

If youd like to contribute, please let me know! I would be glad to work on it more if someone wants to work on it with me.

Currently, the only thing that would make this app more complete in my opinion is a login page, other than that, I think this app is fully complete.

## License

no license, but you can use this code, however, please credit me

## Contact

- If you have any questions or want to contribute somehow, email me at nessimyohros@gmail.com

## Demo

Heres a deployed version of the app on Netlify:

https://translator-app-nessim.netlify.app/
