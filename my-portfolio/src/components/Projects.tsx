import React from "react";

const IrisFlowerClassification: React.FC = () => (
  <div
    className="bg-cover bg-center"
    style={{
      backgroundImage: "url('/Purple-Iris-Flower-Growing-in-the-Garden.jpg')",
    }}
  >
    <a
      href="https://github.com/zbanks23/Iris_Flower_Classification"
      className="hover:bg-black/40 opacity-0 hover:opacity-100 h-full w-full flex flex-col"
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
  <div
    className="bg-cover bg-center"
    style={{
      backgroundImage: "url('/stock-price.jpg')",
    }}
  >
    <a
      href="https://github.com/zbanks23/Google-Stock-Analysis"
      className="hover:bg-black/40 opacity-0 hover:opacity-100 h-full w-full flex flex-col"
    >
      <h3 className="text-xl text-center font-medium text-white">
        Stock Price Analysis
      </h3>
      <p className="text-white mt-auto text-center">
        An exploratory data analysis mini project on Google (GOOGL) stock prices
        using Jupyter Notebook
      </p>
    </a>
  </div>
);

const Scheduleify: React.FC = () => (
  <div
    className="bg-cover bg-center"
    style={{
      backgroundImage: "url('/Scheduleify.png')",
    }}
  >
    <a
      href="https://github.com/tjwz1/Scheduleify"
      className="hover:bg-black/40 opacity-0 hover:opacity-100 h-full w-full flex flex-col"
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
  <div
    className="bg-cover bg-center"
    style={{
      backgroundImage: "url('/minesweeper.jpg')",
    }}
  >
    <a
      href="https://github.com/zbanks23/Minesweeper"
      className="hover:bg-black/40 opacity-0 hover:opacity-100 h-full w-full flex flex-col"
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
  <div
    className="bg-cover bg-center"
    style={{
      backgroundImage: "url('/Sudoku_Puzzle.png')",
    }}
  >
    <a
      href="https://github.com/zbanks23/Sudoku"
      className="hover:bg-black/40 opacity-0 hover:opacity-100 h-full w-full flex flex-col"
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
      <IrisFlowerClassification />
      <GoogleStockAnalyis />
      <Scheduleify />
      <MineSweeper />
      <Sudoku />
    </>
  );
};

export default Projects;
