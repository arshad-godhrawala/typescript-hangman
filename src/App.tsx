import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "@/scenes/HangmanDrawing/HangmanDrawing";
import HangmanWord from "@/scenes/HangmanWord/HangmanWord";
import Keyboard from "@/scenes/Keyboard/Keyboard";

function App() {
  const [wordToGuess, _] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);

  const incorrectLetters = guessedLetter.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetter.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetter.includes(letter) || isLoser || isWinner) return;

      setGuessedLetter((currentLetter) => [...currentLetter, letter]);
    },
    [guessedLetter, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => document.removeEventListener("keypress", handler);
  }, [guessedLetter]);

  return (
    <div className="flex items-center justify-center w-5/6 mx-auto gap-4 flex-col mt-4">
      <div className="text-2xl text-center">
        {isWinner && "Winner! - Refresh to Try Next"}
        {isLoser && "Nice Try - Refresh to Try Again"}
      </div>
      <HangmanDrawing noOfGuesses={incorrectLetters.length} />
      <HangmanWord
        word={wordToGuess}
        guessedLetters={guessedLetter}
        reveal={isLoser}
      />
      <div className="self-stretch">
        <Keyboard
          disabled={isLoser || isWinner}
          activeLetters={guessedLetter.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inActiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
