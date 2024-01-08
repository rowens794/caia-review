import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
import { data } from "../data/data";

export default function Home() {
  const [reviewType, setReviewType] = useState("all");
  const [section, setSection] = useState("all");
  const [state, setState] = useState("setup");
  const [cards, setCards] = useState<
    { front: string; back: string; type: string; subSection: string }[]
  >([]);

  const goToReview = () => {
    setState("review");
    let cards = setupCards(data, section, reviewType);
    setCards(cards);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-12 p-8 ${inter.className} h-full`}
    >
      {state === "setup" ? (
        <>
          <div className="w-full">
            <h2 className="font-bold text-xl p-4">Review Type</h2>
            <div className="flex flex-row justify-between">
              <Button
                name="All"
                tag="all"
                setReveiwType={setReviewType}
                reviewType={reviewType}
              />
              <Button
                name="Definitions"
                tag="definitions"
                setReveiwType={setReviewType}
                reviewType={reviewType}
              />
              <Button
                name="Questions"
                tag="questions"
                setReveiwType={setReviewType}
                reviewType={reviewType}
              />
              <Button
                name="Formulas"
                tag="formulas"
                setReveiwType={setReviewType}
                reviewType={reviewType}
              />
            </div>
          </div>

          <div className="w-full">
            <h2 className="font-bold text-xl p-4">Section</h2>
            <div className="flex flex-row justify-between">
              <SectionButton
                name="All"
                tag="all"
                setReveiwType={setSection}
                reviewType={section}
              />
              <SectionButton
                name="1"
                tag="1"
                setReveiwType={setSection}
                reviewType={section}
              />
              <SectionButton
                name="2"
                tag="2"
                setReveiwType={setSection}
                reviewType={section}
              />
              <SectionButton
                name="3"
                tag="3"
                setReveiwType={setSection}
                reviewType={section}
              />
              <SectionButton
                name="4"
                tag="4"
                setReveiwType={setSection}
                reviewType={section}
              />
              <SectionButton
                name="5"
                tag="5"
                setReveiwType={setSection}
                reviewType={section}
              />
              <SectionButton
                name="6"
                tag="6"
                setReveiwType={setSection}
                reviewType={section}
              />
              <SectionButton
                name="7"
                tag="7"
                setReveiwType={setSection}
                reviewType={section}
              />
              <SectionButton
                name="8"
                tag="8"
                setReveiwType={setSection}
                reviewType={section}
              />
              <SectionButton
                name="9"
                tag="9"
                setReveiwType={setSection}
                reviewType={section}
              />
            </div>
          </div>

          <button
            className="w-full bg-green-800 text-white border-green-100 border rounded-sm py-2"
            onClick={goToReview}
          >
            GO
          </button>
        </>
      ) : null}

      {state === "review" ? (
        <CardsLayout cards={cards} setState={setState} />
      ) : null}
    </main>
  );
}

const randomizeCards = (
  cards: { front: string; back: string; type: string; subSection: string }[]
) => {
  let randomizedCards = cards.sort(() => Math.random() - 0.5);
  return randomizedCards;
};

const CardsLayout = ({
  cards,
  setState,
}: {
  cards: { front: string; back: string; type: string; subSection: string }[];
  setState: (state: string) => void;
}) => {
  const [randomizedCards, setRandomizedCards] = useState(randomizeCards(cards));
  const [cardIndex, setCardIndex] = useState(0);
  const [cardPosition, setCardPosition] = useState("front");

  const handleCardClick = () => {
    if (cardPosition === "front") {
      setCardPosition("back");
    } else {
      //check if on last card
      if (cardIndex === randomizedCards.length - 1) {
        setRandomizedCards(randomizeCards(cards));
        setCardIndex(0);
        setCardPosition("front");
      } else {
        setCardIndex(cardIndex + 1);
        setCardPosition("front");
      }
    }
  };

  return (
    <div
      className="w-full h-full flex justify-center flex-col min-h-full"
      onClick={handleCardClick}
    >
      <div>
        {/* @ts-ignore */}
        {cardPosition === "front" ? (
          <div className="bg-gray-700 p-4 rounded border border-gray-600">
            <p className="text-white">{randomizedCards[cardIndex].front}</p>
          </div>
        ) : (
          <>
            <div className="bg-green-950 p-4 rounded border border-gray-600">
              <p className="text-white">{randomizedCards[cardIndex].back}</p>
            </div>
          </>
        )}
      </div>

      <span className="absolute top-6 font-bold text-lg w-full text-center text-white p-2">
        {randomizedCards[cardIndex].type} -{" "}
        {randomizedCards[cardIndex].subSection}
      </span>

      <span className="absolute bottom-0 right-0 text-white text-sm p-2">
        {cardIndex + 1}/{randomizedCards.length}
      </span>

      <button
        className="absolute top-4 left-4 text-white text-sm p-2"
        onClick={() => setState("setup")}
      >
        Go Back
      </button>
    </div>
  );
};

const Button = ({
  name,
  tag,
  setReveiwType,
  reviewType,
}: {
  name: string;
  tag: string;
  setReveiwType: (reviewType: string) => void;
  reviewType: string;
}) => {
  const handleClick = () => {
    setReveiwType(tag);
  };

  return (
    <button
      className={`px-4 py-2 border-white mx-4 border rounded-sm w-28 ${
        reviewType === tag ? "bg-white text-black" : ""
      }`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

const SectionButton = ({
  name,
  tag,
  setReveiwType,
  reviewType,
}: {
  name: string;
  tag: string;
  setReveiwType: (reviewType: string) => void;
  reviewType: string;
}) => {
  const handleClick = () => {
    setReveiwType(tag);
  };

  return (
    <button
      className={`px-2 py-2 border-white mx-2 border rounded-sm w-12 text-center ${
        reviewType === tag ? "bg-white text-black" : ""
      }`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

const setupCards = (
  data: any,
  section: any,
  type: any
): { front: string; back: string; type: string; subSection: string }[] => {
  const getSubSectionDefinitions = (section: any, subSection: any) => {
    let sectionObj = data[section];
    let subSectionObj = sectionObj ? sectionObj[subSection] : null;

    let cardsInSection = subSectionObj.definitions;

    cardsInSection.forEach((card: { term: string; definition: string }) => {
      cards.push({
        front: card.term,
        back: card.definition,
        type: "Definition",
        subSection: subSection,
      });
    });

    return cards;
  };

  const getQuestions = (section: any, subSection: any) => {
    let sectionObj = data[section];
    let subSectionObj = sectionObj ? sectionObj[subSection] : null;

    let cardsInSection = subSectionObj.questions;

    cardsInSection.forEach((card: { question: string; answer: string }) => {
      cards.push({
        front: card.question,
        back: card.answer,
        type: "Question",
        subSection: subSection,
      });
    });

    return cards;
  };

  const getFormulas = (section: any, subSection: any) => {
    let sectionObj = data[section];
    let subSectionObj = sectionObj ? sectionObj[subSection] : null;

    let cardsInSection = subSectionObj.formulas;

    cardsInSection.forEach((card: { name: string; formula: string }) => {
      cards.push({
        front: card.name,
        back: card.formula,
        type: "Formula",
        subSection: subSection,
      });
    });

    return cards;
  };

  //@ts-ignore
  let subSections = Object.keys(data[section]);

  let cards: {
    front: string;
    back: string;
    type: string;
    subSection: string;
  }[] = [];

  if (type === "definitions") {
    subSections.forEach((subSection) => {
      cards = getSubSectionDefinitions(section, subSection);
    });
  } else if (type === "questions") {
    subSections.forEach((subSection) => {
      cards = getQuestions(section, subSection);
    });
  } else if (type === "formulas") {
    subSections.forEach((subSection) => {
      cards = getFormulas(section, subSection);
    });
  } else if (type === "all") {
    subSections.forEach((subSection) => {
      cards = getSubSectionDefinitions(section, subSection);
      cards = getQuestions(section, subSection);
      cards = getFormulas(section, subSection);
    });
  }

  return cards;
};
