import React, { useState, useRef } from 'react';
import { Upload, Video, Brain, Target, CheckCircle, AlertCircle, Play, Download, Zap, Star, TrendingUp, Shield, Goal, Compass, Crosshair } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

const AIAnalysis = () => {
  const { user } = useAuth();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const positions = [
    { value: 'defender', label: 'Defender', icon: Shield, color: 'bg-red-500' },
    { value: 'goalkeeper', label: 'Goalkeeper', icon: Goal, color: 'bg-yellow-500' },
    { value: 'midfielder', label: 'Midfielder', icon: Compass, color: 'bg-green-500' },
    { value: 'striker', label: 'Striker', icon: Crosshair, color: 'bg-blue-500' }
  ];

  const skillTypes = [
    'First Touch',
    'Dribbling',
    'Passing',
    'Shooting',
    'Defending',
    'Crossing',
    'Heading',
    'Ball Control',
    'Speed & Agility',
    'Physical Training'
  ];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('video/')) {
        alert('Please select a video file');
        return;
      }
      
      // Validate file size (max 100MB)
      if (file.size > 100 * 1024 * 1024) {
        alert('File size must be less than 100MB');
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const simulateAIAnalysis = async () => {
    // Simulate AI analysis with realistic feedback
    const analysisData = {
      overallScore: Math.floor(Math.random() * 30) + 70, // 70-100
      position: selectedPosition,
      skill: selectedSkill,
      strengths: [],
      improvements: [],
      recommendations: [],
      technicalMetrics: {},
      nextSteps: []
    };

    // Position-specific analysis
    switch (selectedPosition) {
      case 'defender':
        analysisData.strengths = [
          'Good defensive positioning',
          'Strong in aerial duels',
          'Effective communication'
        ];
        analysisData.improvements = [
          'Work on first touch under pressure',
          'Improve passing accuracy to midfield',
          'Faster recovery runs needed'
        ];
        analysisData.technicalMetrics = {
          'Defensive Positioning': Math.floor(Math.random() * 20) + 80,
          'Tackling Technique': Math.floor(Math.random() * 25) + 75,
          'Aerial Ability': Math.floor(Math.random() * 30) + 70,
          'Distribution': Math.floor(Math.random() * 35) + 65
        };
        break;
      
      case 'goalkeeper':
        analysisData.strengths = [
          'Excellent shot-stopping reflexes',
          'Good command of penalty area',
          'Confident with crosses'
        ];
        analysisData.improvements = [
          'Work on distribution accuracy',
          'Improve footwork for 1v1 situations',
          'Better positioning for long shots'
        ];
        analysisData.technicalMetrics = {
          'Shot Stopping': Math.floor(Math.random() * 15) + 85,
          'Distribution': Math.floor(Math.random() * 30) + 70,
          'Command of Area': Math.floor(Math.random() * 25) + 75,
          'Footwork': Math.floor(Math.random() * 35) + 65
        };
        break;
      
      case 'midfielder':
        analysisData.strengths = [
          'Excellent first touch',
          'Good vision for through balls',
          'Strong work rate'
        ];
        analysisData.improvements = [
          'Increase passing range',
          'Work on defensive positioning',
          'Improve shooting from distance'
        ];
        analysisData.technicalMetrics = {
          'First Touch': Math.floor(Math.random() * 20) + 80,
          'Passing Accuracy': Math.floor(Math.random() * 25) + 75,
          'Vision': Math.floor(Math.random() * 30) + 70,
          'Stamina': Math.floor(Math.random() * 20) + 80
        };
        break;
      
      case 'striker':
        analysisData.strengths = [
          'Clinical finishing in the box',
          'Good movement off the ball',
          'Strong hold-up play'
        ];
        analysisData.improvements = [
          'Work on first touch with back to goal',
          'Improve link-up play with midfield',
          'Better positioning for crosses'
        ];
        analysisData.technicalMetrics = {
          'Finishing': Math.floor(Math.random() * 20) + 80,
          'Movement': Math.floor(Math.random() * 25) + 75,
          'First Touch': Math.floor(Math.random() * 30) + 70,
          'Physical Strength': Math.floor(Math.random() * 25) + 75
        };
        break;
    }

    // General recommendations based on skill level
    analysisData.recommendations = [
      `Focus on ${selectedSkill.toLowerCase()} drills 3x per week`,
      'Join our 4-day position-specific training program',
      'Practice with both feet to improve versatility',
      'Work on physical conditioning for match fitness'
    ];

    analysisData.nextSteps = [
      'Complete beginner level programs in your position',
      'Focus on identified improvement areas',
      'Upload another video in 2 weeks to track progress',
      'Consider upgrading to Pro plan for advanced analysis'
    ];

    return analysisData;
  };

  const handleAnalyze = async () => {
    if (!selectedFile || !selectedPosition || !selectedSkill) {
      alert('Please select a video file, position, and skill type');
      return;
    }

    if (!user) {
      alert('Please sign in to use AI analysis');
      return;
    }

    setIsAnalyzing(true);
    setUploadProgress(0);

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      // Simulate AI processing time
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setUploadProgress(100);
      
      // Get AI analysis
      const analysis = await simulateAIAnalysis();
      
      // Save analysis to database
      const { error } = await supabase
        .from('ai_analysis_results')
        .insert({
          user_id: user.id,
          position: selectedPosition,
          skill_type: selectedSkill,
          video_filename: selectedFile.name,
          analysis_data: analysis,
          overall_score: analysis.overallScore
        });

      if (error) {
        console.error('Error saving analysis:', error);
      }

      setAnalysisResult(analysis);
    } catch (error) {
      console.error('Analysis error:', error);
      alert('Analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
      setUploadProgress(0);
    }
  };

  const resetAnalysis = () => {
    setSelectedFile(null);
    setSelectedPosition('');
    setSelectedSkill('');
    setAnalysisResult(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-4 rounded-full w-fit mx-auto mb-6 animate-pulse">
              <Brain className="h-16 w-16 text-black" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              AI Training Analysis
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Upload your training videos and get personalized AI feedback on your technique, 
              positioning, and skills. Discover exactly what to work on to improve your game!
            </p>
          </div>
        </div>
      </section>

      {!analysisResult ? (
        /* Upload Section */
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Upload Your Training Video
              </h2>

              {/* Position Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Your Position
                </label>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {positions.map((position) => (
                    <button
                      key={position.value}
                      onClick={() => setSelectedPosition(position.value)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedPosition === position.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`${position.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2`}>
                        <position.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{position.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Skill Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  What skill are you working on?
                </label>
                <select
                  value={selectedSkill}
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a skill...</option>
                  {skillTypes.map((skill) => (
                    <option key={skill} value={skill}>{skill}</option>
                  ))}
                </select>
              </div>

              {/* File Upload */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Upload Training Video
                </label>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    selectedFile ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  
                  {selectedFile ? (
                    <div className="space-y-4">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                      <div>
                        <p className="text-lg font-medium text-gray-900">{selectedFile.name}</p>
                        <p className="text-gray-500">
                          {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Choose different file
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                      <div>
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Click to upload
                        </button>
                        <p className="text-gray-500">or drag and drop</p>
                      </div>
                      <p className="text-sm text-gray-400">
                        MP4, MOV, AVI up to 100MB
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Upload Progress */}
              {isAnalyzing && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {uploadProgress < 90 ? 'Uploading...' : 'Analyzing...'}
                    </span>
                    <span className="text-sm text-gray-500">{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Our AI is analyzing your technique and movement patterns...
                  </p>
                </div>
              )}

              {/* Analyze Button */}
              <button
                onClick={handleAnalyze}
                disabled={!selectedFile || !selectedPosition || !selectedSkill || isAnalyzing}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Brain className="h-5 w-5" />
                    <span>Analyze My Training</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      ) : (
        /* Results Section */
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">AI Analysis Results</h2>
                    <p className="text-blue-100">
                      {analysisResult.position.charAt(0).toUpperCase() + analysisResult.position.slice(1)} • {analysisResult.skill}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-1">{analysisResult.overallScore}</div>
                    <div className="text-blue-100">Overall Score</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Technical Metrics */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Target className="h-6 w-6 mr-2 text-blue-600" />
                    Technical Analysis
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(analysisResult.technicalMetrics).map(([metric, score]) => (
                      <div key={metric} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">{metric}</span>
                          <span className="text-lg font-bold text-blue-600">{score}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              score >= 80 ? 'bg-green-500' : score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strengths and Improvements */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="h-6 w-6 mr-2 text-green-600" />
                      Strengths
                    </h3>
                    <div className="space-y-3">
                      {analysisResult.strengths.map((strength, index) => (
                        <div key={index} className="flex items-start space-x-3 bg-green-50 rounded-lg p-3">
                          <Star className="h-5 w-5 text-green-600 mt-0.5" />
                          <span className="text-gray-700">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="h-6 w-6 mr-2 text-orange-600" />
                      Areas for Improvement
                    </h3>
                    <div className="space-y-3">
                      {analysisResult.improvements.map((improvement, index) => (
                        <div key={index} className="flex items-start space-x-3 bg-orange-50 rounded-lg p-3">
                          <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                          <span className="text-gray-700">{improvement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Zap className="h-6 w-6 mr-2 text-purple-600" />
                    Training Recommendations
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {analysisResult.recommendations.map((rec, index) => (
                      <div key={index} className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                        <span className="text-gray-700">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="h-6 w-6 mr-2 text-blue-600" />
                    Next Steps
                  </h3>
                  <div className="space-y-3">
                    {analysisResult.nextSteps.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-blue-50 rounded-lg p-3">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={resetAnalysis}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Upload className="h-5 w-5" />
                    <span>Analyze Another Video</span>
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>Download Report</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              AI Analysis Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced AI technology analyzes every aspect of your training
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Position-Specific Analysis</h3>
              <p className="text-gray-600">
                AI trained on position-specific movements and techniques for accurate feedback
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Metrics</h3>
              <p className="text-gray-600">
                Detailed analysis of technique, positioning, timing, and execution
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Progress Tracking</h3>
              <p className="text-gray-600">
                Track improvement over time with regular analysis and personalized recommendations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAnalysis;