import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Trophy, Clock, CheckCircle, X, ArrowRight, Star, Target, Shield, Goal, Compass, Crosshair } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

const LevelExam = () => {
  const { level, position } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [examStarted, setExamStarted] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState(false);

  const positionIcons = {
    defender: Shield,
    goalkeeper: Goal,
    midfielder: Compass,
    striker: Crosshair
  };

  const examQuestions = {
    beginner: {
      defender: [
        {
          question: "What is the most important aspect of defensive positioning?",
          options: ["Staying close to the attacker", "Maintaining proper distance and angle", "Always going for the tackle", "Standing still"],
          correct: 1
        },
        {
          question: "When should you make a tackle?",
          options: ["Immediately when the attacker gets the ball", "When you're certain you can win the ball", "Never", "Only in the penalty area"],
          correct: 1
        },
        {
          question: "What is the key to winning aerial duels?",
          options: ["Being the tallest player", "Timing your jump and body positioning", "Jumping as high as possible", "Using your hands"],
          correct: 1
        },
        {
          question: "How should you communicate with teammates?",
          options: ["Only when there's danger", "Constantly and clearly", "Only with the goalkeeper", "Never during play"],
          correct: 1
        },
        {
          question: "What's the first priority when defending?",
          options: ["Win the ball immediately", "Delay the attack and stay organized", "Make a sliding tackle", "Run towards goal"],
          correct: 1
        }
      ],
      goalkeeper: [
        {
          question: "What is the correct hand position for catching a ball at chest height?",
          options: ["Thumbs together behind the ball", "Fingers spread wide apart", "One hand only", "Palms facing down"],
          correct: 0
        },
        {
          question: "When should you come off your line?",
          options: ["Never", "When the ball is crossed into the box", "Only for penalties", "Every time the opponent attacks"],
          correct: 1
        },
        {
          question: "What's the key to good distribution?",
          options: ["Always kick as far as possible", "Accuracy and timing to teammates", "Only throw the ball", "Wait for teammates to get close"],
          correct: 1
        },
        {
          question: "How should you position yourself for a 1v1 situation?",
          options: ["Stay on the goal line", "Rush out immediately", "Make yourself big and narrow the angle", "Dive to one side"],
          correct: 2
        },
        {
          question: "What's most important when organizing your defense?",
          options: ["Staying quiet", "Clear, loud communication", "Only talking to center-backs", "Pointing without speaking"],
          correct: 1
        }
      ],
      midfielder: [
        {
          question: "What makes a good first touch?",
          options: ["Stopping the ball completely", "Controlling the ball into space away from pressure", "Always using your strongest foot", "Touching the ball as many times as possible"],
          correct: 1
        },
        {
          question: "When should you make a forward pass?",
          options: ["Every time you get the ball", "When there's a clear opportunity", "Never", "Only when you're in the attacking third"],
          correct: 1
        },
        {
          question: "What's the key to effective dribbling?",
          options: ["Speed only", "Close ball control and body feints", "Using only one foot", "Always going in a straight line"],
          correct: 1
        },
        {
          question: "How should you position yourself to receive a pass?",
          options: ["Stand still and wait", "Check your shoulder and find space", "Always face the goal", "Stay close to opponents"],
          correct: 1
        },
        {
          question: "What's most important for a midfielder's fitness?",
          options: ["Only speed", "Endurance to last the full game", "Only strength", "Flexibility only"],
          correct: 1
        }
      ],
      striker: [
        {
          question: "What's the key to clinical finishing?",
          options: ["Always shoot with power", "Placement and composure", "Only use your strong foot", "Shoot from any distance"],
          correct: 1
        },
        {
          question: "How should you move in the penalty area?",
          options: ["Stay in one position", "Make intelligent runs to lose markers", "Always run towards goal", "Never move"],
          correct: 1
        },
        {
          question: "What's important for your first touch as a striker?",
          options: ["Always control with your back to goal", "Set yourself up for the next action", "Stop the ball completely", "Use only your feet"],
          correct: 1
        },
        {
          question: "When should you make a run behind the defense?",
          options: ["Constantly", "When your teammate is ready to pass", "Never", "Only in the second half"],
          correct: 1
        },
        {
          question: "What's key to being a complete striker?",
          options: ["Only scoring goals", "Link-up play and creating chances for others", "Only physical strength", "Staying in the penalty area"],
          correct: 1
        }
      ]
    },
    intermediate: {
      defender: [
        {
          question: "What is the offside trap and when should it be used?",
          options: ["Never use it", "Step up in unison to catch attackers offside", "Only the goalkeeper decides", "Always stay deep"],
          correct: 1
        },
        {
          question: "How do you defend against a quick counter-attack?",
          options: ["Sprint back immediately", "Delay and force wide while teammates recover", "Make an immediate tackle", "Let the goalkeeper handle it"],
          correct: 1
        },
        {
          question: "What's the best way to defend set pieces?",
          options: ["Mark zonally only", "Combine zonal and man-marking", "Only man-mark", "Let everyone defend freely"],
          correct: 1
        },
        {
          question: "How should you start an attack from defense?",
          options: ["Always clear long", "Look for short passes to build play", "Only pass to the goalkeeper", "Dribble forward yourself"],
          correct: 1
        },
        {
          question: "What's key to defending crosses?",
          options: ["Always head the ball", "Attack the ball at the highest point", "Let the goalkeeper handle everything", "Stay on the ground"],
          correct: 1
        }
      ],
      goalkeeper: [
        {
          question: "How do you deal with a deflected shot?",
          options: ["Give up on the ball", "Stay alert and react quickly to the new trajectory", "Always dive the original direction", "Call for help"],
          correct: 1
        },
        {
          question: "What's the best distribution in different game situations?",
          options: ["Always kick long", "Vary between short and long based on game state", "Only throw", "Always pass to center-backs"],
          correct: 1
        },
        {
          question: "How should you position for corners?",
          options: ["Stay on the goal line", "Position near the front post", "Stand in the center of goal", "Go to the back post"],
          correct: 2
        },
        {
          question: "What's key to shot-stopping technique?",
          options: ["Always dive", "Get your body behind the ball when possible", "Use only your hands", "Stay standing"],
          correct: 1
        },
        {
          question: "How do you organize your wall for free kicks?",
          options: ["Let players organize themselves", "Position wall to cover near post, you cover far post", "Cover the near post yourself", "Don't use a wall"],
          correct: 1
        }
      ],
      midfielder: [
        {
          question: "What's the key to press resistance?",
          options: ["Run away from pressure", "Use your body to shield and find passing options", "Always pass backwards", "Dribble in circles"],
          correct: 1
        },
        {
          question: "How do you create space in midfield?",
          options: ["Stand still", "Make intelligent runs and drag markers", "Always stay central", "Follow the ball everywhere"],
          correct: 1
        },
        {
          question: "What's important for through ball timing?",
          options: ["Pass as soon as you see the run", "Wait for the perfect moment when runner beats the line", "Never attempt through balls", "Always pass early"],
          correct: 1
        },
        {
          question: "How should you defend as a midfielder?",
          options: ["Only attack", "Press intelligently and cut passing lanes", "Always tackle", "Stay in attacking positions"],
          correct: 1
        },
        {
          question: "What's key to box-to-box play?",
          options: ["Only defend", "Balance attacking and defensive duties", "Only attack", "Stay in the center circle"],
          correct: 1
        }
      ],
      striker: [
        {
          question: "How do you create space for teammates?",
          options: ["Stay in the penalty area", "Make runs to drag defenders and create gaps", "Never move", "Always ask for the ball"],
          correct: 1
        },
        {
          question: "What's key to hold-up play?",
          options: ["Always turn immediately", "Use your body to shield and bring teammates into play", "Pass backwards immediately", "Dribble towards goal"],
          correct: 1
        },
        {
          question: "How should you finish in different situations?",
          options: ["Always shoot with power", "Adapt technique based on situation and goalkeeper position", "Only use placement", "Always chip the keeper"],
          correct: 1
        },
        {
          question: "What's important for link-up play?",
          options: ["Only score goals", "Quick passing and movement to involve teammates", "Hold the ball as long as possible", "Always shoot"],
          correct: 1
        },
        {
          question: "How do you time your runs?",
          options: ["Run constantly", "Time runs with teammate's ability to pass", "Never make runs", "Only run when called"],
          correct: 1
        }
      ]
    }
  };

  const currentQuestions = examQuestions[level]?.[position] || [];
  const PositionIcon = positionIcons[position] || Target;

  useEffect(() => {
    if (examStarted && timeLeft > 0 && !examCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !examCompleted) {
      handleExamComplete();
    }
  }, [timeLeft, examStarted, examCompleted]);

  const startExam = () => {
    setExamStarted(true);
    setAnswers(new Array(currentQuestions.length).fill(-1));
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleExamComplete();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleExamComplete = async () => {
    const correctAnswers = answers.reduce((count, answer, index) => {
      return answer === currentQuestions[index]?.correct ? count + 1 : count;
    }, 0);

    const finalScore = Math.round((correctAnswers / currentQuestions.length) * 100);
    const examPassed = finalScore >= 70;

    setScore(finalScore);
    setPassed(examPassed);
    setExamCompleted(true);

    // Save exam result to database
    if (user) {
      try {
        await supabase.from('level_exams').insert({
          user_id: user.id,
          level: level,
          position: position,
          score: finalScore,
          passed: examPassed,
          answers: answers,
          completed_at: new Date().toISOString()
        });
      } catch (error) {
        console.error('Error saving exam result:', error);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!examStarted) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <PositionIcon className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {level?.charAt(0).toUpperCase() + level?.slice(1)} Level Final Exam
            </h1>
            <h2 className="text-xl text-blue-600 mb-6">
              {position?.charAt(0).toUpperCase() + position?.slice(1)} Position
            </h2>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-8 border-2 border-yellow-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Exam Instructions:</h3>
              <div className="text-left space-y-2 text-gray-700">
                <p>• {currentQuestions.length} multiple choice questions</p>
                <p>• 30 minutes time limit</p>
                <p>• 70% score required to pass</p>
                <p>• You can review and change answers before submitting</p>
                <p>• This exam tests your understanding of {position} fundamentals</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>30 minutes</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Target className="h-5 w-5" />
                <span>{currentQuestions.length} questions</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Trophy className="h-5 w-5" />
                <span>70% to pass</span>
              </div>
            </div>
            
            <button
              onClick={startExam}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (examCompleted) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
              passed ? 'bg-gradient-to-r from-green-500 to-blue-500' : 'bg-gradient-to-r from-red-500 to-orange-500'
            }`}>
              {passed ? <Trophy className="h-10 w-10 text-white" /> : <X className="h-10 w-10 text-white" />}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Exam {passed ? 'Completed!' : 'Not Passed'}
            </h1>
            
            <div className="text-6xl font-bold mb-4">
              <span className={passed ? 'text-green-600' : 'text-red-600'}>{score}%</span>
            </div>
            
            <p className="text-xl text-gray-600 mb-8">
              {passed 
                ? `Congratulations! You've mastered the ${level} level ${position} skills!`
                : `You need 70% to pass. Review the training materials and try again.`
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-900">{currentQuestions.length}</div>
                <div className="text-gray-600">Total Questions</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">
                  {answers.reduce((count, answer, index) => 
                    answer === currentQuestions[index]?.correct ? count + 1 : count, 0
                  )}
                </div>
                <div className="text-gray-600">Correct Answers</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">{score}%</div>
                <div className="text-gray-600">Final Score</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {passed ? (
                <button
                  onClick={() => navigate('/programs')}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Continue to Next Level
                </button>
              ) : (
                <button
                  onClick={() => navigate('/programs')}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Review Training Materials
                </button>
              )}
              
              <button
                onClick={() => navigate('/')}
                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = currentQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
                <PositionIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {level?.charAt(0).toUpperCase() + level?.slice(1)} Level Exam
                </h1>
                <p className="text-blue-600">{position?.charAt(0).toUpperCase() + position?.slice(1)}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span className={`font-mono ${timeLeft < 300 ? 'text-red-600' : ''}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
              <div className="text-gray-600">
                {currentQuestion + 1} / {currentQuestions.length}
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            {currentQ?.question}
          </h2>
          
          <div className="space-y-4 mb-8">
            {currentQ?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  answers[currentQuestion] === index
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    answers[currentQuestion] === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQuestion] === index && (
                      <CheckCircle className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <span className="text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="px-6 py-3 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all duration-200"
            >
              Previous
            </button>
            
            <div className="text-gray-500">
              Question {currentQuestion + 1} of {currentQuestions.length}
            </div>
            
            <button
              onClick={nextQuestion}
              disabled={answers[currentQuestion] === -1}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2"
            >
              <span>{currentQuestion === currentQuestions.length - 1 ? 'Finish Exam' : 'Next'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelExam;