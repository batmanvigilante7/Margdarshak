export const ASSESSMENT_QUESTIONS = [
  {
    id: 1,
    competency: 'PYTHON PROGRAMMING',
    competencyId: 'python',
    tier: 'Foundation',
    question: 'In Python, what is the key difference between a list and a tuple?',
    scenario: 'You are designing an in-memory buffer to hold fixed hyperparameter configurations that should never be mutated during a training run.',
    options: [
      { id: 'a', text: 'Lists are immutable and hashable, while tuples are mutable and dynamic.' },
      { id: 'b', text: 'Tuples are immutable sequence types, while lists are mutable sequence types.' },
      { id: 'c', text: 'Lists can only store homogeneous data types, while tuples store heterogeneous types.' },
      { id: 'd', text: 'Tuples execute slower than lists for index lookup operations.' }
    ],
    correctId: 'b',
    clarification: 'This question tests your understanding of Python memory models and data immutability.'
  },
  {
    id: 2,
    competency: 'PYTHON PROGRAMMING',
    competencyId: 'python',
    tier: 'Foundation',
    question: 'How do Python list comprehensions and generator expressions differ in memory usage?',
    scenario: 'You need to process 10 million streaming sensor readings row-by-row without causing an Out-Of-Memory (OOM) crash.',
    options: [
      { id: 'a', text: 'List comprehensions evaluate lazily on-demand, using O(1) memory.' },
      { id: 'b', text: 'Generator expressions yield items one at a time via an iterator, consuming minimal memory.' },
      { id: 'c', text: 'Both allocate the entire dataset in RAM before iterating.' },
      { id: 'd', text: 'Generator expressions are converted automatically to NumPy arrays.' }
    ],
    correctId: 'b',
    clarification: 'This question assesses your grasp of iterator protocols and lazy evaluation for large data pipelines.'
  },
  {
    id: 3,
    competency: 'STATISTICS & PROBABILITY',
    competencyId: 'statistics',
    tier: 'Foundation',
    question: 'When evaluating a severely imbalanced dataset (e.g., 99% negative vs 1% positive fraud cases), which metric is LEAST informative?',
    scenario: 'A fraud detection model predicts "No Fraud" for every single transaction and achieves 99.0% accuracy.',
    options: [
      { id: 'a', text: 'Precision' },
      { id: 'b', text: 'Recall / Sensitivity' },
      { id: 'c', text: 'Raw Classification Accuracy' },
      { id: 'd', text: 'F1-Score (Harmonic Mean)' }
    ],
    correctId: 'c',
    clarification: 'This question measures your ability to choose statistical evaluation metrics that resist majority-class bias.'
  },
  {
    id: 4,
    competency: 'STATISTICS & PROBABILITY',
    competencyId: 'statistics',
    tier: 'Foundation',
    question: 'What does the Central Limit Theorem (CLT) state regarding sample means?',
    scenario: 'You are collecting empirical sample averages from an unknown non-normal underlying distribution with a sample size n > 30.',
    options: [
      { id: 'a', text: 'The distribution of sample means approaches a normal distribution as sample size grows sufficiently large.' },
      { id: 'b', text: 'The variance of sample means increases proportionally with the sample size.' },
      { id: 'c', text: 'The sample median always matches the population mode.' },
      { id: 'd', text: 'It guarantees that all individual observations follow a uniform distribution.' }
    ],
    correctId: 'a',
    clarification: 'This question tests foundational probabilistic theory necessary for statistical hypothesis testing.'
  },
  {
    id: 5,
    competency: 'MACHINE LEARNING',
    competencyId: 'machine-learning',
    tier: 'Core Competency',
    question: 'A gradient boosted tree model achieves 99.4% training accuracy, but only 68.2% test validation accuracy. What is the primary diagnosis?',
    scenario: 'Your model performs exceptionally on seen data but fails to generalize on hold-out validation batches.',
    options: [
      { id: 'a', text: 'High Bias / Underfitting — the model lacks expressive capacity.' },
      { id: 'b', text: 'High Variance / Overfitting — the model memorized training noise and patterns that do not generalize.' },
      { id: 'c', text: 'Data Normalization failure — features must always be strictly between 0 and 1.' },
      { id: 'd', text: 'Learning rate is too low to converge.' }
    ],
    correctId: 'b',
    clarification: 'This question evaluates your diagnostic intuition regarding the bias-variance tradeoff in machine learning.'
  },
  {
    id: 6,
    competency: 'MACHINE LEARNING',
    competencyId: 'machine-learning',
    tier: 'Core Competency',
    question: 'Why must feature scaling (such as StandardScaler or MinMaxScaler) be applied prior to training Distance-Based algorithms like KNN or SVM?',
    scenario: 'Feature A represents "Salary in Rupees" (range 20,000–500,000) and Feature B represents "Years of Experience" (range 1–25).',
    options: [
      { id: 'a', text: 'Without scaling, features with larger numerical magnitudes dominate Euclidean distance calculations.' },
      { id: 'b', text: 'Feature scaling prevents categorical strings from causing execution runtime errors.' },
      { id: 'c', text: 'Tree-based algorithms like Random Forests strictly require scaled features to split nodes.' },
      { id: 'd', text: 'It converts non-linear relationships into linear equations.' }
    ],
    correctId: 'a',
    clarification: 'This question tests preprocessing requirements and geometry-sensitive model mechanics.'
  },
  {
    id: 7,
    competency: 'DATA MODELING & SQL',
    competencyId: 'sql',
    tier: 'Core Competency',
    question: 'In SQL, what is the primary difference between a WHERE clause and a HAVING clause?',
    scenario: 'You want to filter aggregate groups of learners where the average course score exceeds 80%.',
    options: [
      { id: 'a', text: 'WHERE filters rows before aggregation; HAVING filters aggregated groups after GROUP BY.' },
      { id: 'b', text: 'HAVING can only be used with JOIN queries; WHERE is for single tables.' },
      { id: 'c', text: 'WHERE is executed after HAVING in the query execution pipeline.' },
      { id: 'd', text: 'Both clauses perform identical filtering operations without differences.' }
    ],
    correctId: 'a',
    clarification: 'This question tests relational query execution order and aggregation constraints.'
  },
  {
    id: 8,
    competency: 'DEEP LEARNING & PYTORCH',
    competencyId: 'deep-learning',
    tier: 'Advanced Specialist',
    question: 'In neural networks, what is the primary role of a non-linear activation function (like ReLU or GELU)?',
    scenario: 'You are stacking multiple linear transformation layers without non-linearities between them.',
    options: [
      { id: 'a', text: 'To enable the network to learn and approximate non-linear complex functions.' },
      { id: 'b', text: 'To prevent weights from ever becoming negative during backpropagation.' },
      { id: 'c', text: 'To automatically compute cross-entropy loss values.' },
      { id: 'd', text: 'To speed up file reading from disk storage.' }
    ],
    correctId: 'a',
    clarification: 'This question tests your understanding of universal approximation theorems and multi-layer perceptron design.'
  },
  {
    id: 9,
    competency: 'STRUCTURED PROBLEM SOLVING',
    competencyId: 'problem-solving',
    tier: 'Engineering Competency',
    question: 'What is the average time complexity of searching for a key in a standard hash map / Python dictionary?',
    scenario: 'You need to perform frequent lookups across 1,000,000 unique user IDs in real-time.',
    options: [
      { id: 'a', text: 'O(1) Constant Time on average.' },
      { id: 'b', text: 'O(log n) Logarithmic Time.' },
      { id: 'c', text: 'O(n) Linear Time.' },
      { id: 'd', text: 'O(n²) Quadratic Time.' }
    ],
    correctId: 'a',
    clarification: 'This question measures computational complexity awareness and optimal data structure selection.'
  },
  {
    id: 10,
    competency: 'AI SYSTEMS ARCHITECTURE',
    competencyId: 'model-deployment',
    tier: 'Specialist Benchmark',
    question: 'In a Retrieval-Augmented Generation (RAG) system, what is the purpose of a vector database and embedding model?',
    scenario: 'An enterprise wants an LLM assistant to answer queries strictly based on proprietary internal technical documentation.',
    options: [
      { id: 'a', text: 'To convert unstructured text into semantic vector embeddings and retrieve the most relevant context chunks.' },
      { id: 'b', text: 'To replace the need for an LLM entirely by executing regex searches.' },
      { id: 'c', text: 'To compress video files into audio streams.' },
      { id: 'd', text: 'To fine-tune transformer weights on every individual user prompt.' }
    ],
    correctId: 'a',
    clarification: 'This question tests modern industry AI architecture patterns including semantic search and context injection.'
  }
];
