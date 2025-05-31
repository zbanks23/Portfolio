import React from "react";
import Image from "next/image";
import IrisPic from "../../public/Purple-Iris-Flower-Growing-in-the-Garden.jpg";
import StockPricePic from "../../public/stock-price.jpg";
import ScheduleifyPic from "../../public/Scheduleify.png";
import MineSweeperPic from "../../public/minesweeper.jpg";
import SudokuPic from "../../public/Sudoku_Puzzle.png";

const IrisFlowerClassification: React.FC = () => (
  <div>
    <h3 className="text-xl font-medium text-white">
      Iris Flower Classification
    </h3>
    <Image src={IrisPic} alt="An Iris Flower" />
    <p className="text-gray-300 mt-2 ml-2">description</p>
    <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">
      View Project
    </a>
  </div>
);

const StockPriceAnalyis: React.FC = () => (
  <div className="max-w-3xl w-full">
    <h3 className="text-xl font-medium text-white">Stock Price Analyis</h3>
    <Image src={StockPricePic} alt="A picture of stock analysis" />
    <p className="text-gray-300 mt-2 ml-2">description</p>
    <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">
      View Project
    </a>
  </div>
);

const Scheduleify: React.FC = () => (
  <div className="max-w-3xl w-full">
    <h3 className="text-xl font-medium text-white">Schedulify</h3>
    <Image src={ScheduleifyPic} alt="An picture of Scheduleify Interface" />
    <p className="text-gray-300 mt-2 ml-2">description</p>
    <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">
      View Project
    </a>
  </div>
);

const MineSweeper: React.FC = () => (
  <div className="max-w-3xl w-full">
    <h3 className="text-xl font-medium text-white">MineSweeper</h3>
    <Image src={MineSweeperPic} alt="A picture of minesweeper" />
    <p className="text-gray-300 mt-2 ml-2">description</p>
    <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">
      View Project
    </a>
  </div>
);

const Sudoku: React.FC = () => (
  <div className="max-w-3xl w-full">
    <h3 className="text-xl font-medium text-white">Sudoku</h3>
    <Image src={SudokuPic} alt="A picture of sudoku" />
    <p className="text-gray-300 mt-2 ml-2">description</p>
    <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">
      View Project
    </a>
  </div>
);

const Projects: React.FC = () => {
  return (
    <>
      <IrisFlowerClassification />
      <StockPriceAnalyis />
      <Scheduleify />
      <MineSweeper />
      <Sudoku />
    </>
  );
};

export default Projects;
