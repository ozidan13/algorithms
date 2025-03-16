# Algorithms Learning Repository

This repository contains interactive visualizations and implementations of various algorithms based on the "Grokking Algorithms" book. It's organized as a 4-week learning roadmap to help you understand fundamental algorithms and data structures through visual, interactive examples.

## Repository Structure

The repository is organized into four weeks, each focusing on different algorithm concepts:

- **Week 1**: Introduction to Algorithms
- **Week 2**: Arrays, Linked Lists, and Recursion
- **Week 3**: Quicksort, Hash Tables, and Graphs
- **Week 4**: Greedy Algorithms, Dynamic Programming, and K-nearest neighbors (Coming Soon)

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

## Week 4: Greedy Algorithms, Dynamic Programming, and K-nearest neighbors (Coming Soon)

This section will cover:

- Greedy Algorithm Design and Analysis
- Dynamic Programming Principles
- Memoization vs. Tabulation
- K-nearest neighbors Algorithm
- Feature Scaling and Distance Metrics
- NP-Complete Problems and Approximation Algorithms

## How to Use

1. Clone this repository to your local machine
2. Navigate to the week you're currently studying
3. Open any HTML file in a web browser to see the algorithm in action

Each implementation includes:

- Visual representation of the algorithm
- Step-by-step explanation
- Interactive elements to help understand the concept
- Code snippets showing the implementation

## Learning Resources

- [Grokking Algorithms](https://www.manning.com/books/grokking-algorithms) by Aditya Bhargava
- [Khan Academy: Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms)
- [MIT OpenCourseWare: Introduction to Algorithms](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/)

## Contributing

Contributions are welcome! If you'd like to add more algorithm visualizations or improve existing ones, please feel free to submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).