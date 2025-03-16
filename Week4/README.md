# Week 4: Greedy Algorithms, Dynamic Programming, and K-nearest neighbors

This week covers advanced algorithm paradigms that are essential for solving complex optimization and classification problems. You'll learn about greedy algorithms for making locally optimal choices, dynamic programming for breaking down problems into simpler subproblems, and K-nearest neighbors for classification.

## Topics Covered

1. Greedy Algorithm Design and Analysis
2. Dynamic Programming Principles
3. Memoization vs. Tabulation
4. K-nearest neighbors Algorithm
5. Feature Scaling and Distance Metrics
6. NP-Complete Problems and Approximation Algorithms

## Implementations  


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

## Learning Objectives

By the end of this week, you should be able to:

1. Identify problems that can be solved using greedy algorithms
2. Apply dynamic programming to solve optimization problems
3. Implement the K-nearest neighbors algorithm for classification tasks
4. Analyze the time and space complexity of these advanced algorithms
5. Understand the limitations of each algorithm paradigm and when to use each

## Exercises

1. Implement Huffman coding using a greedy approach
2. Solve the longest common subsequence problem using dynamic programming
3. Create a solution for the traveling salesman problem using approximation
4. Implement a K-nearest neighbors classifier from scratch
5. Optimize a dynamic programming solution using memoization

## Additional Resources

- [Greedy Algorithms Tutorial](https://www.geeksforgeeks.org/greedy-algorithms/)
- [Dynamic Programming - MIT OpenCourseWare](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-19-dynamic-programming-i-fibonacci-shortest-paths/)
- [K-nearest neighbors Explained](https://scikit-learn.org/stable/modules/neighbors.html)
- [Approximation Algorithms for NP-Hard Problems](https://www.cs.princeton.edu/~wayne/kleinberg-tardos/)