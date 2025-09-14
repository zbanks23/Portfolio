import React from "react";
import Image from "next/image";
import MyCFOPic from "../../public/MyCFO.png";
import IrisPic from "../../public/Purple-Iris-Flower-Growing-in-the-Garden.jpg";
import StockPic from "../../public/stock-price.jpg";
import ScheduleifyPic from "../../public/Scheduleify.png";
import MinesweeperPic from "../../public/minesweeper.jpg";
import SudokuPic from "../../public/Sudoku_Puzzle.png";

const MyCFO: React.FC = () => (
  <div className="relative rounded-2xl overflow-hidden">
    <Image
      src={MyCFOPic}
      alt="Picture of MyCFO"
      fill
      style={{ objectFit: "cover" }}
    />
    <a
      href="https://github.com/zbanks23/MyCFO"
      className="relative z-10 hover:bg-black/50 opacity-0 hover:opacity-100 h-full w-full flex flex-col"
    >
      <h3 className="text-xl text-center font-medium text-white">MyCFO</h3>
      <p className="text-white mt-auto text-center">
        My first fullstack web application that uses Nextjs, Flask, Supabase,
        Clerk api, and Plaid Api.
      </p>
    </a>
  </div>
);

const IrisFlowerClassification: React.FC = () => (
  <div className="relative rounded-2xl overflow-hidden">
    <Image
      src={IrisPic}
      alt="Picture of Iris Flower"
      fill
      style={{ objectFit: "cover" }}
    />
    <a
      href="https://github.com/zbanks23/Iris_Flower_Classification"
      className="relative z-10 hover:bg-black/50 opacity-0 hover:opacity-100 h-full w-full flex flex-col"
    >
      <h3 className="text-xl text-center font-medium text-white">
        Iris Flower Classification
      </h3>
      <p className="text-white mt-auto text-center">
        The Hello World of Machine Learning. Used multiple algorithms: K-Nearest
        Neighbor, Linear Regression, and SVM with Linear, RBF, and Polynomial
        Kernel to identify and predict Iris flower species.
      </p>
    </a>
  </div>
);

const GoogleStockAnalyis: React.FC = () => (
  <div className="relative rounded-2xl overflow-hidden">
    <Image
      src={StockPic}
      alt="Stock Price Analysis"
      fill
      style={{ objectFit: "cover" }}
    />
    <a
      href="https://github.com/zbanks23/Google-Stock-Analysis"
      className="relative z-10 hover:bg-black/50 opacity-0 hover:opacity-100 h-full w-full flex flex-col"
    >
      <h3 className="text-xl text-center font-medium text-white">
        Stock Price Analysis
      </h3>
      <p className="text-white mt-auto text-center">
        A mini exploratory data analysis project on Google (GOOGL) stock prices
        using Jupyter Notebook
      </p>
    </a>
  </div>
);

const Scheduleify: React.FC = () => (
  <div className="relative rounded-2xl overflow-hidden">
    <Image
      src={ScheduleifyPic}
      alt="A reference picture of scheduleify"
      fill
      style={{ objectFit: "cover" }}
    />
    <a
      href="https://github.com/tjwz1/Scheduleify"
      className="relative z-10 hover:bg-black/50 opacity-0 hover:opacity-100 h-full w-full flex flex-col"
    >
      <h3 className="text-xl text-center font-medium text-white">
        Scheduleify
      </h3>
      <p className="text-white mt-auto text-center">
        Final project for Data Structures & Algorithm. Compared Greedy Algorithm
        and Backtracking on a schedule picking application.
      </p>
    </a>
  </div>
);

const MineSweeper: React.FC = () => (
  <div className="relative rounded-2xl overflow-hidden">
    <Image
      src={MinesweeperPic}
      alt="Minesweeper game board"
      fill
      style={{ objectFit: "cover" }}
    />
    <a
      href="https://github.com/zbanks23/Minesweeper"
      className="relative z-10 hover:bg-black/50 opacity-0 hover:opacity-100 h-full w-full flex flex-col"
    >
      <h3 className="text-xl text-center font-medium text-white">
        Minesweeper
      </h3>
      <p className="text-white mt-auto text-center">
        Final project for Programming Fundamentals 2. Utilized C++ with the SFML
        library to build a modern implementation of minesweeper.
      </p>
    </a>
  </div>
);

const Sudoku: React.FC = () => (
  <div className="relative rounded-2xl overflow-hidden">
    <Image
      src={SudokuPic}
      alt="Sudoku game board"
      fill
      style={{ objectFit: "cover" }}
    />
    <a
      href="https://github.com/zbanks23/Sudoku"
      className="relative z-10 hover:bg-black/50 opacity-0 hover:opacity-100 h-full w-full flex flex-col"
    >
      <h3 className="text-xl text-center font-medium text-white">Sudoku</h3>
      <p className="text-white mt-auto text-center">
        Final project for Programming fundamentals 1. Worked in a team of 4 and
        used the Python library, Pygame, to recreate the game of Sudoku.
      </p>
    </a>
  </div>
);

const Projects: React.FC = () => {
  return (
    <>
      <MyCFO />
      <IrisFlowerClassification />
      <GoogleStockAnalyis />
      <Scheduleify />
      <MineSweeper />
      <Sudoku />
    </>
  );
};

export default Projects;
