
type Props = {
  noOfGuesses: number;
};

const HEAD = (
  <div className="w-14 h-14 rounded-full border-black border-[10px] absolute top-12 -right-6" />
);

const BODY = (
  <div className="h-[150px] w-3 bg-black absolute right-0 top-[100px]" />
);

const LEFT_HAND = (
  <div className="h-[120px] w-3 bg-black -rotate-[60deg] absolute right-[50px] top-20" />
);

const RIGHT_HAND = (
  <div className="h-[120px] w-3 bg-black rotate-[60deg] absolute -right-[50px] top-20" />
);

const LEFT_LEG = (
  <div className="h-[100px] w-3 bg-black rotate-45 absolute right-8 -bottom-2" />
);

const RIGHT_LEG = (
  <div className="h-[100px] w-3 bg-black -rotate-45 absolute -right-8 -bottom-2" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_HAND, LEFT_HAND, RIGHT_LEG, LEFT_LEG];

const HangmanDrawing = ({ noOfGuesses }: Props) => {
  return (
    <div className="relative">
      <div className="h-14 w-3 bg-black absolute top-0 right-0" />
      <div className="w-[200px] h-3 bg-black ml-[100px]" />
      <div className="h-[300px] w-3 bg-black text-center ml-[100px]" />
      <div className="w-[200px] h-3 bg-black" />
      {BODY_PARTS.slice(0, noOfGuesses)}
    </div>
  );
};

export default HangmanDrawing;
