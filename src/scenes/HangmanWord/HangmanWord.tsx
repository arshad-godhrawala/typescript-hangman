
type Props = {
  word: string;
  guessedLetters : string[],
  reveal?: boolean
};
// const DASHES = <div className="h-3 w-20 bg-black" />;
const HangmanWord = ({ word, guessedLetters, reveal= false }: Props) => {
  // let length: number = word.length; 
  // let split = word.split("")
  // let guessedLetter: string[] = []
  // guessedLetters.push(...split)
  // console.log(guessedLetter)
  // guessedLetter.push(split)
  // console.log(word);
  return (
    <div className=" w-full mx-auto flex justify-center gap-10 mt-10 font-bold text-[60px] uppercase">
      {/* {Array.apply(null, {length}).map((_, idx) => (
        <div key={idx} className="h-3 w-20 bg-black" />
      ))} */}

      {word.split("").map((letter, idx) => (
        <span key={idx} className="border-b-4 border-black w-12 text-center">
          <span className={`${guessedLetters.includes(letter) || reveal ? "visible" : "hidden"} ${!guessedLetters.includes(letter) && reveal ? "text-red-500" : ""}`}>{letter}</span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
