import React from "react";

export const PROJECT_IDS = [
  "portfolio",
  "irisFlowerClassification",
  "stockPriceAnalysis",
  "schedulify",
  "mineSweeper",
  "Sudoku",
];

const Portfolio: React.FC = () => (
  <>
    <section
      id="portfolio"
      className="h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-900"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-semibold dark:text-gray-100 mb-8 text-center md:text-left">
          Personal Portfolio
        </h2>
        <p className="text-gray-400 mt-2">
          Short description of the project. Highlight key technologies and your
          role.
        </p>
        <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">
          View Project
        </a>
      </div>
    </section>
  </>
);

const IrisFlowerClassification: React.FC = () => (
  <>
    <section
      id="irisFlowerClassification"
      className="h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-900"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-semibold dark:text-gray-100 mb-8 text-center md:text-left">
          Iris Flower Classification
        </h2>
        <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
          <li>
            Utilized Pandas, matplotlib, and Seaborn to visualize the
            relationship between Iris Petal length and width
          </li>
          <li>
            Utilized the K-Nearest Neighbor Algorithm to predict the Iris flower
            species with 100 percent accuracy
          </li>
          <li>
            Utilized Linear Regression to achieve 100 percent Iris flower
            species prediction rate
          </li>
          <li>
            Predicted Iris flower species with 100% accuracy utilizing SVM with
            Linear, RBF, and Polynomial Kernel
          </li>
        </ul>
        <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">
          View Project
        </a>
      </div>
    </section>
  </>
);

const StockPriceAnalyis: React.FC = () => (
  <>
    <section
      id="stockPriceAnalyis"
      className="h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-900"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-semibold dark:text-gray-100 mb-8 text-center md:text-left">
          Stock Price Analyis
        </h2>
        <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
          <li>
            Analyzed trends in Google (GOOGL) Stock price by comparing the daily
            volume with daily price changes
          </li>
          <li>
            Utilized Pandas to manipulate and clean raw data downloaded from
            Kaggle for data analysis
          </li>
          <li>
            Utilized Matplotlib and Seaborn to create insightful data
            visualizations
          </li>
        </ul>
        <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">
          View Project
        </a>
      </div>
    </section>
  </>
);

const Schedulify: React.FC = () => (
  <>
    <section
      id="schedulify"
      className="h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-900"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-semibold dark:text-gray-100 mb-8 text-center md:text-left">
          Schedulify
        </h2>
        <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
          <li>
            Developed a web based schedule generator with the UF courses API
            using user inputs
          </li>
          <li>
            Leveraged two different algorithms: Greedy and Backtracking, to
            generate and compare different schedules
          </li>
          <li>Created a visually appeasing user interface with HTML and CSS</li>
        </ul>
        <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">
          View Project
        </a>
      </div>
    </section>
  </>
);

const MineSweeper: React.FC = () => (
  <>
    <section
      id="mineSweeper"
      className="h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-900"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-semibold dark:text-gray-100 mb-8 text-center md:text-left">
          MineSweeper
        </h2>
        <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
          <li>
            Developed a modern implementation of the classic game of Minesweeper
            using C++
          </li>
          <li>
            Implemented a visually appealing interface for MineSweeper using the
            SFML library
          </li>
          <li>
            Incorporated a timer function to track game duration and a
            leaderboard system to rank the top 5 fastest times
          </li>
        </ul>
        <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">
          View Project
        </a>
      </div>
    </section>
  </>
);

const Sudoku: React.FC = () => (
  <>
    <section
      id="sudoku"
      className="h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-900"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-semibold dark:text-gray-100 mb-8 text-center md:text-left">
          Sudoku
        </h2>
        <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
          <li>
            Spearheaded the coding development of the classic game of Sudoku
            using Python in a team of 4 students
          </li>
          <li>
            Effectively utilized Git to communicate updates and changes to my
            teammates
          </li>
          <li>Implemented the visuals for Sudoku using the Pygame library</li>
        </ul>
        <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">
          View Project
        </a>
      </div>
    </section>
  </>
);

const Projects: React.FC = () => {
  return (
    <>
      <Portfolio />
      <IrisFlowerClassification />
      <StockPriceAnalyis />
      <Schedulify />
      <MineSweeper />
      <Sudoku />
    </>
  );
};

export default Projects;
