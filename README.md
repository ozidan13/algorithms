# Algorithms Learning Repository

This repository contains interactive visualizations and implementations of various algorithms based on the "Grokking Algorithms" book. It's organized as a 4-week learning roadmap to help you understand fundamental algorithms and data structures through visual, interactive examples.

## Repository Structure

The repository is organized into four weeks, each focusing on different algorithm concepts:

- **Week 1**: Introduction to Algorithms
- **Week 2**: Arrays, Linked Lists, and Recursion
- **Week 3**: Quicksort, Hash Tables, and Graphs
- **Week 4**: Greedy Algorithms, Dynamic Programming, and K-nearest neighbors

Additionally, the repository includes:

- **CSS**: Styling files for the visualizations
- **JS**: JavaScript utility functions and shared code
- **Notifications**: An adaptive notification system that provides contextual learning tips

## UI Features

- **Responsive Design**: All visualizations are fully responsive and work on desktop and mobile devices
- **Dark/Light Theme**: Toggle between dark and light themes for comfortable viewing in any environment
- **Color Schemes**: Support for multiple color schemes including default blue and pistachio green
- **Interactive Elements**: Animated transitions, floating elements, and visual feedback enhance the learning experience

## Notification System

The repository includes a smart notification system that:

- Displays contextual tips based on the algorithm being studied
- Shows welcome messages for first-time visitors
- Provides motivational content to encourage learning
- Intelligently adapts to both local and remote deployments through dynamic path resolution
- Uses smooth animations and themed styling consistent with the main interface

## Week 1: Introduction to Algorithms

The first week covers fundamental concepts in algorithms:

### Topics Covered

1. Introduction to Algorithms
2. Binary Search
3. Big O Notation
4. Selection Sort
5. Recursion

### Implementations

- `binary_search.html` - Interactive visualization of the binary search algorithm
  - Time Complexity: O(log n)
  - Space Complexity: O(1)
  - Features: Step-by-step visualization, interactive search, code explanation

- `selection_sort.html` - Visual representation of the selection sort algorithm
  - Time Complexity: O(n²)
  - Space Complexity: O(1)
  - Features: Animated sorting process, step tracking, code walkthrough

- `recursion_examples.html` - Interactive examples of recursive functions
  - Features: Factorial calculation, Fibonacci sequence, visualization of the call stack

- `big_o_visualization.html` - Graphical representation of different time complexities
  - Features: Interactive comparison of O(1), O(log n), O(n), O(n log n), O(n²), and O(2ⁿ)

## Week 2: Arrays, Linked Lists, and Recursion

This section covers:

- Arrays and Their Limitations
- Linked Lists (Singly and Doubly Linked)
- Advanced Recursion Techniques
- Divide and Conquer Algorithms
- Memory Management in Data Structures

### Implementations

- `array_operations.html` - Interactive visualization of array operations
  - Time Complexity: Various (O(1) for access, O(n) for insertion/deletion)
  - Space Complexity: O(n)
  - Features: Visual comparison of operations, performance metrics, real-time manipulation

- `linked_list.html` - Implementation and visualization of linked lists
  - Time Complexity: O(1) for insertion/deletion at known positions, O(n) for search
  - Space Complexity: O(n)
  - Features: Interactive node creation/deletion, pointer visualization, comparison with arrays

- `recursive_divide_conquer.html` - Examples of divide and conquer algorithms
  - Features: Merge sort visualization, recursive tree exploration, step-by-step execution
  - Time Complexity: O(n log n) for merge sort
  - Space Complexity: O(n) for merge sort

- `memory_visualization.html` - Visual representation of memory allocation
  - Features: Comparison of contiguous vs linked memory allocation, fragmentation demonstration

## Week 3: Quicksort, Hash Tables, and Graphs

This section covers:

- Quicksort Algorithm and Analysis
- Hash Tables and Hash Functions
- Collision Resolution Strategies
- Graph Representation (Adjacency Lists/Matrices)
- Breadth-First Search (BFS)
- Depth-First Search (DFS)

### Implementations

- `quicksort_visualization.html` - Interactive visualization of the quicksort algorithm
  - Time Complexity: O(n log n) average case, O(n²) worst case
  - Space Complexity: O(log n)
  - Features: Animated pivot selection, partitioning visualization, performance comparison

- `hash_table.html` - Implementation and visualization of hash tables
  - Time Complexity: O(1) average for insert/search/delete, O(n) worst case
  - Space Complexity: O(n)
  - Features: Interactive hash function demonstration, collision resolution visualization

- `graph_representation.html` - Visual comparison of graph representation methods
  - Features: Interactive creation of graphs, conversion between adjacency lists and matrices

- `graph_traversal.html` - Visualization of graph traversal algorithms
  - Time Complexity: O(V + E) for both BFS and DFS
  - Space Complexity: O(V)
  - Features: Step-by-step traversal animation, path highlighting, queue/stack visualization

## Week 4: Greedy Algorithms, Dynamic Programming, and K-nearest neighbors

This section covers:

- Greedy Algorithm Design and Analysis
- Dynamic Programming Principles
- Memoization vs. Tabulation
- K-nearest neighbors Algorithm
- Feature Scaling and Distance Metrics
- NP-Complete Problems and Approximation Algorithms

### Implementations

- `greedy_algorithms.html` - Interactive visualization of greedy algorithms
  - Time Complexity: Various (typically O(n log n) due to sorting)
  - Space Complexity: O(n)
  - Features: Step-by-step decision making, visual proof of optimality/sub-optimality, real-world applications

- `dynamic_programming.html` - Visualization of dynamic programming solutions
  - Time Complexity: Various (typically O(n²) for 2D problems)
  - Space Complexity: Various (O(n) to O(n²))
  - Features: Subproblem visualization, memoization table building, optimal substructure demonstration

- `knapsack_problem.html` - Interactive solution to the classic knapsack problem
  - Time Complexity: O(n×W) where n is number of items and W is capacity
  - Space Complexity: O(n×W)
  - Features: Interactive item selection, weight/value tradeoff visualization, comparison of greedy vs. DP approaches

- `knn_classifier.html` - Implementation of K-nearest neighbors algorithm
  - Time Complexity: O(n×d) for prediction (n = dataset size, d = dimensions)
  - Space Complexity: O(n)
  - Features: Interactive data point classification, distance metric visualization, parameter tuning

## How to Use

1. Clone this repository to your local machine
2. Navigate to the week you're currently studying
3. Open any HTML file in a web browser to see the algorithm in action
4. For remote deployments, use the hosted version which automatically adapts paths and resources

Each implementation includes:

- Visual representation of the algorithm
- Step-by-step explanation
- Interactive elements to help understand the concept
- Code snippets showing the implementation
- Contextual notifications with helpful tips

## Learning Resources

- [Grokking Algorithms](https://www.manning.com/books/grokking-algorithms) by Aditya Bhargava
- [Khan Academy: Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms)
- [MIT OpenCourseWare: Introduction to Algorithms](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/)

## Technical Notes

- The applications use vanilla JavaScript with no external dependencies
- CSS variables provide theming support with smooth transitions between themes
- The notification system uses dynamic path resolution to work in both local and remote environments
- All visualizations use HTML Canvas for rendering with fallbacks when necessary

## Contributing

Contributions are welcome! If you'd like to add more algorithm visualizations or improve existing ones, please feel free to submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).