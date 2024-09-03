import { FaCheckDouble, FaPause, FaClock } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa6';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md';
import logo from '../assets/logo-ukaiplus.png';
import { useEffect, useState } from 'react';

const TryoutPage = () => {
  const [showQuestionsNumber, setShowQuestionsNumber] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  // data dummy
  const dummyQuestions = [
    {
      question: "What is the capital of France?",
      option_a: "Berlin",
      option_b: "Madrid",
      option_c: "Paris",
      option_d: "Rome",
      option_e: "Lisbon",
      correct_answer: "c",
      discussion: "Paris is the capital city of France, known for its art, fashion, and culture.",
      topic_id: 1, // Assume 1 is the ID of a related topic in the Topic table
    },
    {
      question: "What is the chemical symbol for water?",
      option_a: "O2",
      option_b: "H2O",
      option_c: "CO2",
      option_d: "HO",
      option_e: "OH",
      correct_answer: "b",
      discussion: "Water's chemical formula is H2O, consisting of two hydrogen atoms bonded to one oxygen atom.",
      topic_id: 1,
    },
    {
      question: "Which planet is known as the Red Planet?",
      option_a: "Earth",
      option_b: "Mars",
      option_c: "Jupiter",
      option_d: "Saturn",
      option_e: "Venus",
      correct_answer: "b",
      discussion: "Mars is often called the Red Planet due to its reddish appearance caused by iron oxide on its surface.",
      topic_id: 1,
    },
    {
      question: "Who wrote 'Hamlet'?",
      option_a: "Charles Dickens",
      option_b: "Jane Austen",
      option_c: "William Shakespeare",
      option_d: "Mark Twain",
      option_e: "George Orwell",
      correct_answer: "c",
      discussion: "'Hamlet' is a tragedy written by William Shakespeare, one of the most famous playwrights in history.",
      topic_id: 2, // Assume 2 is the ID of another topic
    },
    {
      question: "What is the speed of light?",
      option_a: "300,000 km/s",
      option_b: "150,000 km/s",
      option_c: "200,000 km/s",
      option_d: "250,000 km/s",
      option_e: "350,000 km/s",
      correct_answer: "a",
      discussion: "The speed of light in a vacuum is approximately 300,000 kilometers per second (km/s).",
      topic_id: 2,
    },
    {
      question: "What is the hardest natural substance on Earth?",
      option_a: "Gold",
      option_b: "Iron",
      option_c: "Diamond",
      option_d: "Silver",
      option_e: "Platinum",
      correct_answer: "c",
      discussion: "Diamonds are the hardest known natural material, often used in cutting tools and jewelry.",
      topic_id: 2,
    },
    {
      question: "Who developed the theory of general relativity?",
      option_a: "Isaac Newton",
      option_b: "Galileo Galilei",
      option_c: "Albert Einstein",
      option_d: "Nikola Tesla",
      option_e: "Stephen Hawking",
      correct_answer: "c",
      discussion: "Albert Einstein is famous for developing the theory of general relativity, which revolutionized our understanding of gravity.",
      topic_id: 3, // Another topic ID
    },
    {
      question: "Which gas is most abundant in Earth's atmosphere?",
      option_a: "Oxygen",
      option_b: "Hydrogen",
      option_c: "Nitrogen",
      option_d: "Carbon Dioxide",
      option_e: "Helium",
      correct_answer: "c",
      discussion: "Nitrogen makes up about 78% of Earth's atmosphere, making it the most abundant gas.",
      topic_id: 3,
    },
    {
      question: "What is the largest organ in the human body?",
      option_a: "Heart",
      option_b: "Liver",
      option_c: "Skin",
      option_d: "Lungs",
      option_e: "Brain",
      correct_answer: "c",
      discussion: "The skin is the largest organ of the human body, serving as a protective barrier.",
      topic_id: 3,
    },
    {
      question: "What is the main component of the sun?",
      option_a: "Oxygen",
      option_b: "Hydrogen",
      option_c: "Carbon",
      option_d: "Nitrogen",
      option_e: "Helium",
      correct_answer: "b",
      discussion: "The sun is primarily composed of hydrogen, which undergoes nuclear fusion to produce energy.",
      topic_id: 3,
    },
    {
      question: "Which ocean is the largest?",
      option_a: "Atlantic Ocean",
      option_b: "Indian Ocean",
      option_c: "Pacific Ocean",
      option_d: "Southern Ocean",
      option_e: "Arctic Ocean",
      correct_answer: "c",
      discussion: "The Pacific Ocean is the largest and deepest ocean, covering more than 63 million square miles.",
      topic_id: 4, // Another topic ID
    },
    {
      question: "What is the smallest unit of life?",
      option_a: "Atom",
      option_b: "Molecule",
      option_c: "Cell",
      option_d: "Organ",
      option_e: "Tissue",
      correct_answer: "c",
      discussion: "The cell is the smallest unit of life, considered the basic building block of all living organisms.",
      topic_id: 4,
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      option_a: "Oxygen",
      option_b: "Gold",
      option_c: "Silver",
      option_d: "Osmium",
      option_e: "Oganesson",
      correct_answer: "a",
      discussion: "The chemical symbol 'O' stands for oxygen, a vital element for respiration in living organisms.",
      topic_id: 4,
    },
    {
      question: "What is the most abundant element in the universe?",
      option_a: "Oxygen",
      option_b: "Helium",
      option_c: "Hydrogen",
      option_d: "Carbon",
      option_e: "Nitrogen",
      correct_answer: "c",
      discussion: "Hydrogen is the most abundant element in the universe, making up about 75% of its normal matter.",
      topic_id: 4,
    },
    {
      question: "Who painted the Mona Lisa?",
      option_a: "Pablo Picasso",
      option_b: "Vincent van Gogh",
      option_c: "Leonardo da Vinci",
      option_d: "Claude Monet",
      option_e: "Rembrandt",
      correct_answer: "c",
      discussion: "The Mona Lisa was painted by Leonardo da Vinci, one of the most renowned artists of the Renaissance period.",
      topic_id: 5, // Another topic ID
    },
    {
      question: "What is the smallest prime number?",
      option_a: "0",
      option_b: "1",
      option_c: "2",
      option_d: "3",
      option_e: "5",
      correct_answer: "c",
      discussion: "The smallest prime number is 2, which is the only even prime number.",
      topic_id: 5,
    },
    {
      question: "Which is the longest river in the world?",
      option_a: "Amazon River",
      option_b: "Nile River",
      option_c: "Yangtze River",
      option_d: "Mississippi River",
      option_e: "Congo River",
      correct_answer: "b",
      discussion: "The Nile River is traditionally considered the longest river in the world, stretching over 6,650 km.",
      topic_id: 5,
    },
    {
      question: "What is the square root of 64?",
      option_a: "6",
      option_b: "7",
      option_c: "8",
      option_d: "9",
      option_e: "10",
      correct_answer: "c",
      discussion: "The square root of 64 is 8, since 8 multiplied by 8 equals 64.",
      topic_id: 5,
    },
    {
      question: "Who is the author of '1984'?",
      option_a: "Aldous Huxley",
      option_b: "George Orwell",
      option_c: "Ray Bradbury",
      option_d: "F. Scott Fitzgerald",
      option_e: "J.D. Salinger",
      correct_answer: "b",
      discussion: "'1984' is a dystopian novel written by George Orwell, exploring themes of totalitarianism and surveillance.",
      topic_id: 5,
    },
    {
      question: "What is the boiling point of water at sea level?",
      option_a: "90°C",
      option_b: "100°C",
      option_c: "110°C",
      option_d: "120°C",
      option_e: "130°C",
      correct_answer: "b",
      discussion: "The boiling point of water at sea level is 100°C (212°F).",
      topic_id: 5,
    },
  ];

  const toogleShowQuestionsNumber = () => {
    setShowQuestionsNumber(!showQuestionsNumber);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < dummyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          alert('Waktu habis!');
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // clean interval after being unmounted
    return () => clearInterval(timer);
  }, []);

  // convert seconds to hh:mm:ss
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src={logo} alt="Your Company" />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <FaClock className="inline text-lg mb-1 me-2" />
                    {formatTime(timeLeft)}
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <FaCheckDouble className="inline me-2 mb-1" />
                    Selesai
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <FaPause className="inline text-lg mb-1" />
                  </a>
                </div>
              </div>
              <button
                onClick={toogleShowQuestionsNumber}
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View questions number</span>
                <BsGrid3X3GapFill className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="flex items-start space-x-4 p-4">
        {/* question */}
        <div className="flex p-4 border border-slate-300 w-full shadow rounded-lg">
          <div className='w-full'>
            <div className="flex justify-between mb-8">
              <div>
                <h1 className="text-xl font-medium text-slate-900">{currentQuestionIndex + 1} / {dummyQuestions.length}</h1>
                <p className="text-sm text-slate-500">
                  Farmakoterapi & Farmasi Klinis
                </p>
              </div>
              <div className="flex items-center space-x-4 text-xl text-slate-500">
                <MdArrowCircleLeft className="cursor-pointer" onClick={handlePreviousQuestion} />
                <MdArrowCircleRight className="cursor-pointer" onClick={handleNextQuestion} />
                <FaFlag className="cursor-pointer" />
              </div>
            </div>
            <p className="text-slate-900 font-medium mb-4">
              {dummyQuestions[currentQuestionIndex].question}
            </p>
            <div className="space-y-4">
              <div className="flex items-center ps-4 border border-gray-200 rounded-lg hover:bg-slate-800">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-1"
                  className="w-full py-4 ms-2 text-sm text-gray-900 hover:text-white"
                >
                  A. {dummyQuestions[currentQuestionIndex].option_a}
                </label>
              </div>
              <div className="flex items-center ps-4 border border-gray-200 rounded-lg hover:bg-slate-800">
                <input
                  checked
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-2"
                  className="w-full py-4 ms-2 text-sm text-gray-900 hover:text-white"
                >
                  B. {dummyQuestions[currentQuestionIndex].option_b}
                </label>
              </div>
              <div className="flex items-center ps-4 border border-gray-200 rounded-lg hover:bg-slate-800">
                <input
                  checked
                  id="bordered-radio-3"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-3"
                  className="w-full py-4 ms-2 text-sm text-gray-900 hover:text-white"
                >
                  C. {dummyQuestions[currentQuestionIndex].option_b}
                </label>
              </div>
              <div className="flex items-center ps-4 border border-gray-200 rounded-lg hover:bg-slate-800">
                <input
                  checked
                  id="bordered-radio-4"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-4"
                  className="w-full py-4 ms-2 text-sm text-gray-900 hover:text-white"
                >
                  D. {dummyQuestions[currentQuestionIndex].option_b}
                </label>
              </div>
              <div className="flex items-center ps-4 border border-gray-200 rounded-lg hover:bg-slate-800">
                <input
                  checked
                  id="bordered-radio-5"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-5"
                  className="w-full py-4 ms-2 text-sm text-gray-900 hover:text-white"
                >
                  E. {dummyQuestions[currentQuestionIndex].option_b}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`bg-white p-4 w-1/2 border border-slate-300 shadow rounded-lg h-screen overflow-y-auto ${
            showQuestionsNumber ? '' : 'hidden'
          }`}
        >
          <div className="grid grid-cols-5 gap-2">
            {dummyQuestions.map((_, index) => (
              <button
                key={index}
                className={` ${currentQuestionIndex === index ? 'bg-slate-200' : 'bg-white'} border border-slate-300 rounded shadow-sm font-medium hover:bg-slate-900 hover:text-white`}
                onClick={() => setCurrentQuestionIndex(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TryoutPage;
