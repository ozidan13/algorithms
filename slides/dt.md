
**Create a professional, elegant PowerPoint presentation for "Algorithms \& Data Structures - 4 Week Comprehensive Course" based on content from ozidan13.github.io/algorithms/ with the following complete specifications:**

***

## **VISUAL DESIGN REQUIREMENTS**

### **Color Palette:**

- **Primary:** Deep Navy (\#1e3a8a) to Royal Blue (\#3b82f6) gradients
- **Secondary:** Emerald Green (\#10b981) for success elements
- **Accent:** Warm Orange (\#f59e0b) for highlights
- **Background:** Light grays (\#f8fafc) with subtle gradients
- **Text:** White on dark backgrounds, Dark navy (\#1e293b) on light


### **Typography \& Layout:**

- **Headers:** Modern sans-serif, 32-48pt
- **Body:** Clean sans-serif, 18-20pt
- **Code:** Monospace, 16-18pt with syntax highlighting
- **Slide Style:** Professional with generous white space, consistent alignment

***

## **COMPLETE COURSE CONTENT WITH CODE**

## **WEEK 1: FOUNDATIONS OF ALGORITHMIC THINKING**

### **Slide 1-2: Course Introduction**

Create elegant title slide and overview with:

- Modern tech-themed background with geometric patterns
- 4-week learning path visualization
- Professional color gradients


### **Slide 3-4: Introduction to Algorithms**

**Include this complete code with visual explanation:**

```javascript
// Algorithm Example - Find Maximum Element
class AlgorithmDemo {
    constructor() {
        this.steps = [];
        this.currentStep = 0;
    }
    
    findMaximum(array) {
        this.steps = [];
        this.steps.push({
            step: 0,
            action: 'Start',
            array: [...array],
            maxSoFar: null,
            currentIndex: -1,
            description: 'Initialize algorithm to find maximum element'
        });
        
        if (array.length === 0) return null;
        
        let maxElement = array[0];
        let maxIndex = 0;
        
        this.steps.push({
            step: 1,
            action: 'Initialize',
            array: [...array],
            maxSoFar: maxElement,
            currentIndex: 0,
            description: `Set first element as maximum: ${maxElement}`
        });
        
        for (let i = 1; i < array.length; i++) {
            this.steps.push({
                step: this.steps.length,
                action: 'Compare',
                array: [...array],
                maxSoFar: maxElement,
                currentIndex: i,
                comparing: array[i],
                description: `Compare ${array[i]} with ${maxElement}`
            });
            
            if (array[i] > maxElement) {
                maxElement = array[i];
                maxIndex = i;
                
                this.steps.push({
                    step: this.steps.length,
                    action: 'Update',
                    array: [...array],
                    maxSoFar: maxElement,
                    currentIndex: i,
                    description: `New maximum found: ${maxElement}`
                });
            }
        }
        
        return { value: maxElement, index: maxIndex, steps: this.steps };
    }
    
    visualizeStep(stepIndex) {
        if (stepIndex < 0 || stepIndex >= this.steps.length) return null;
        const step = this.steps[stepIndex];
        
        let visualization = '\n';
        visualization += 'Array: [';
        step.array.forEach((value, index) => {
            if (index === step.currentIndex) {
                visualization += ` <${value}> `;
            } else {
                visualization += ` ${value} `;
            }
        });
        visualization += ']\n';
        visualization += `Step ${step.step}: ${step.action}\n`;
        visualization += `Description: ${step.description}\n`;
        
        return step;
    }
}

// Usage Example
const demo = new AlgorithmDemo();
const testArray = [3, 7, 2, 9, 1, 8, 4];
const result = demo.findMaximum(testArray);
console.log('Final result:', result.value);
```


### **Slide 5-7: Binary Search Deep Dive**

**Include this complete interactive binary search with step visualization:**

```javascript
// Interactive Binary Search Visualizer
class BinarySearchVisualizer {
    constructor() {
        this.steps = [];
        this.found = false;
        this.foundIndex = -1;
    }
    
    binarySearch(arr, target) {
        this.steps = [];
        this.found = false;
        this.foundIndex = -1;
        
        let left = 0;
        let right = arr.length - 1;
        let stepCount = 1;
        
        this.steps.push({
            step: 0,
            left: left,
            right: right,
            mid: null,
            array: [...arr],
            target: target,
            action: 'Start',
            description: `Search for ${target} in sorted array`
        });
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const midValue = arr[mid];
            
            this.steps.push({
                step: stepCount,
                left: left,
                right: right,
                mid: mid,
                midValue: midValue,
                array: [...arr],
                target: target,
                action: 'Calculate middle',
                description: `Middle at position ${mid} with value ${midValue}`
            });
            
            if (midValue === target) {
                this.found = true;
                this.foundIndex = mid;
                this.steps.push({
                    step: stepCount + 1,
                    left: left,
                    right: right,
                    mid: mid,
                    midValue: midValue,
                    array: [...arr],
                    target: target,
                    action: 'Found',
                    description: `Found ${target} at position ${mid}!`
                });
                break;
            } else if (midValue < target) {
                left = mid + 1;
                this.steps.push({
                    step: stepCount + 1,
                    left: left,
                    right: right,
                    mid: mid,
                    midValue: midValue,
                    array: [...arr],
                    target: target,
                    action: 'Search right half',
                    description: `${midValue} < ${target}, search right half`
                });
            } else {
                right = mid - 1;
                this.steps.push({
                    step: stepCount + 1,
                    left: left,
                    right: right,
                    mid: mid,
                    midValue: midValue,
                    array: [...arr],
                    target: target,
                    action: 'Search left half',
                    description: `${midValue} > ${target}, search left half`
                });
            }
            stepCount += 2;
        }
        
        if (!this.found) {
            this.steps.push({
                step: stepCount,
                left: left,
                right: right,
                mid: null,
                array: [...arr],
                target: target,
                action: 'Not found',
                description: `${target} not found in array`
            });
        }
        
        return {
            found: this.found,
            index: this.foundIndex,
            steps: this.steps.length - 1,
            complexity: `O(log ${arr.length}) = ${Math.ceil(Math.log2(arr.length))} max steps`
        };
    }
    
    performanceComparison(arr, target) {
        const linearSearchSteps = this.linearSearchSteps(arr, target);
        const binaryResult = this.binarySearch(arr, target);
        
        return {
            linear: linearSearchSteps,
            binary: binaryResult.steps,
            improvement: linearSearchSteps / binaryResult.steps
        };
    }
    
    linearSearchSteps(arr, target) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) return i + 1;
        }
        return arr.length;
    }
}

// Example Usage
const binarySearch = new BinarySearchVisualizer();
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];
const result = binarySearch.binarySearch(sortedArray, 15);
```


### **Slide 8-9: Big O Notation with Visual Complexity Analysis**

**Include this complete complexity analyzer:**

```javascript
// Big O Notation Interactive Visualizer
class BigOVisualizer {
    constructor() {
        this.complexities = {
            'O(1)': n => 1,
            'O(log n)': n => Math.log2(n),
            'O(n)': n => n,
            'O(n log n)': n => n * Math.log2(n),
            'O(n²)': n => n * n,
            'O(2ⁿ)': n => Math.pow(2, n),
            'O(n!)': n => this.factorial(n)
        };
    }
    
    factorial(n) {
        if (n <= 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
            if (result > 1e20) return Infinity;
        }
        return result;
    }
    
    analyzeComplexity(sizes = [1, 5, 10, 50, 100, 500, 1000]) {
        console.log('Big O Complexity Analysis:');
        console.log('='.repeat(80));
        
        let header = 'Input Size'.padEnd(12);
        Object.keys(this.complexities).forEach(complexity => {
            header += complexity.padEnd(15);
        });
        console.log(header);
        console.log('-'.repeat(80));
        
        sizes.forEach(n => {
            let row = n.toString().padEnd(12);
            
            Object.entries(this.complexities).forEach(([name, func]) => {
                const operations = func(n);
                let displayValue;
                
                if (operations === Infinity) {
                    displayValue = '∞';
                } else if (operations > 1e15) {
                    displayValue = operations.toExponential(2);
                } else if (operations > 1e6) {
                    displayValue = (operations / 1e6).toFixed(1) + 'M';
                } else if (operations > 1000) {
                    displayValue = (operations / 1000).toFixed(1) + 'K';
                } else {
                    displayValue = Math.round(operations).toString();
                }
                
                row += displayValue.padEnd(15);
            });
            
            console.log(row);
        });
    }
    
    practicalExamples() {
        const examples = {
            'O(1)': {
                description: 'Array access by index',
                code: `array[index] // Always one step`,
                example: () => {
                    const array = [10, 20, 30, 40, 50];
                    console.log(`array[2] = ${array[2]} (one step only)`);
                }
            },
            'O(log n)': {
                description: 'Binary search',
                code: `binarySearch(sortedArray, target)`,
                example: () => {
                    const steps = Math.ceil(Math.log2(1000));
                    console.log(`Search in 1000 elements: max ${steps} steps`);
                }
            },
            'O(n)': {
                description: 'Linear search',
                code: `array.find(x => x === target)`,
                example: () => {
                    const size = 1000;
                    console.log(`Search in ${size} elements: max ${size} steps`);
                }
            },
            'O(n²)': {
                description: 'Bubble sort',
                code: `for(i) for(j) if(arr[i] > arr[j]) swap`,
                example: () => {
                    const size = 100;
                    const operations = size * size;
                    console.log(`Sort ${size} elements: ${operations} comparisons`);
                }
            }
        };
        
        Object.entries(examples).forEach(([complexity, info]) => {
            console.log(`${complexity}: ${info.description}`);
            console.log(`Code: ${info.code}`);
            info.example();
        });
    }
}
```


### **Slide 10-12: Selection Sort with Complete Animation**

**Include this detailed selection sort visualizer:**

```javascript
// Selection Sort Interactive Visualizer
class SelectionSortVisualizer {
    constructor() {
        this.steps = [];
        this.comparisons = 0;
        this.swaps = 0;
    }
    
    selectionSort(arr) {
        this.steps = [];
        this.comparisons = 0;
        this.swaps = 0;
        
        const array = [...arr];
        const n = array.length;
        
        this.steps.push({
            step: 0,
            array: [...array],
            sortedBoundary: -1,
            currentMin: -1,
            comparing: -1,
            action: 'Start',
            description: 'Begin selection sort algorithm',
            comparisons: this.comparisons,
            swaps: this.swaps
        });
        
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            
            this.steps.push({
                step: this.steps.length,
                array: [...array],
                sortedBoundary: i - 1,
                currentMin: minIndex,
                comparing: -1,
                action: 'Find minimum',
                description: `Find smallest element from position ${i} to end`,
                comparisons: this.comparisons,
                swaps: this.swaps
            });
            
            for (let j = i + 1; j < n; j++) {
                this.comparisons++;
                
                this.steps.push({
                    step: this.steps.length,
                    array: [...array],
                    sortedBoundary: i - 1,
                    currentMin: minIndex,
                    comparing: j,
                    action: 'Compare',
                    description: `Compare ${array[j]} (pos ${j}) with ${array[minIndex]} (pos ${minIndex})`,
                    comparisons: this.comparisons,
                    swaps: this.swaps
                });
                
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                    
                    this.steps.push({
                        step: this.steps.length,
                        array: [...array],
                        sortedBoundary: i - 1,
                        currentMin: minIndex,
                        comparing: j,
                        action: 'New minimum',
                        description: `${array[j]} is smaller! Update pointer to position ${j}`,
                        comparisons: this.comparisons,
                        swaps: this.swaps
                    });
                }
            }
            
            if (minIndex !== i) {
                this.swaps++;
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
                
                this.steps.push({
                    step: this.steps.length,
                    array: [...array],
                    sortedBoundary: i,
                    currentMin: -1,
                    comparing: -1,
                    action: 'Swap',
                    description: `Swap elements at positions ${i} and ${minIndex}`,
                    comparisons: this.comparisons,
                    swaps: this.swaps,
                    swappedPositions: [i, minIndex]
                });
            }
            
            this.steps.push({
                step: this.steps.length,
                array: [...array],
                sortedBoundary: i,
                currentMin: -1,
                comparing: -1,
                action: 'Position complete',
                description: `Position ${i} is now sorted with value: ${array[i]}`,
                comparisons: this.comparisons,
                swaps: this.swaps
            });
        }
        
        this.steps.push({
            step: this.steps.length,
            array: [...array],
            sortedBoundary: n - 1,
            currentMin: -1,
            comparing: -1,
            action: 'Complete',
            description: 'Sorting complete! All elements in correct position',
            comparisons: this.comparisons,
            swaps: this.swaps
        });
        
        return {
            sortedArray: array,
            steps: this.steps.length - 1,
            comparisons: this.comparisons,
            swaps: this.swaps,
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(1)'
        };
    }
}
```


### **Slide 13-15: Recursion with Call Stack Visualization**

**Include this comprehensive recursion visualizer:**

```javascript
// Comprehensive Recursion Visualizer
class RecursionVisualizer {
    constructor() {
        this.callStack = [];
        this.maxDepth = 0;
        this.totalCalls = 0;
    }
    
    factorial(n, depth = 0, callId = 1) {
        this.totalCalls++;
        const currentCall = {
            id: callId,
            function: 'factorial',
            parameter: n,
            depth: depth,
            status: 'called',
            timestamp: Date.now()
        };
        
        this.callStack.push(currentCall);
        this.maxDepth = Math.max(this.maxDepth, depth);
        
        const indent = '  '.repeat(depth);
        const arrow = '→'.repeat(depth + 1);
        
        console.log(`${indent}${arrow} factorial(${n}) - Call #${callId}`);
        console.log(`${indent}   Depth: ${depth}, Stack size: ${this.callStack.length}`);
        
        if (n <= 1) {
            console.log(`${indent}   ✓ Base case: factorial(${n}) = 1`);
            currentCall.result = 1;
            currentCall.status = 'completed';
            
            this.callStack.pop();
            console.log(`${indent}← Return 1, Stack size: ${this.callStack.length}`);
            return 1;
        }
        
        console.log(`${indent}   🔄 Recursive call: ${n} × factorial(${n-1})`);
        const subResult = this.factorial(n - 1, depth + 1, callId + 1);
        
        const result = n * subResult;
        console.log(`${indent}   ✓ Calculate: ${n} × ${subResult} = ${result}`);
        
        currentCall.result = result;
        currentCall.status = 'completed';
        
        this.callStack.pop();
        console.log(`${indent}← Return ${result}, Stack size: ${this.callStack.length}`);
        
        return result;
    }
    
    fibonacci(n, memo = {}, depth = 0, callId = 1) {
        const indent = '  '.repeat(depth);
        const arrow = '→'.repeat(depth + 1);
        
        console.log(`${indent}${arrow} fibonacci(${n}) - Call #${callId}`);
        
        if (n in memo) {
            console.log(`${indent}   💾 Cached: fibonacci(${n}) = ${memo[n]}`);
            return memo[n];
        }
        
        if (n <= 1) {
            console.log(`${indent}   ✓ Base case: fibonacci(${n}) = ${n}`);
            memo[n] = n;
            return n;
        }
        
        console.log(`${indent}   🔄 Calculate: fibonacci(${n-1}) + fibonacci(${n-2})`);
        
        const fib1 = this.fibonacci(n - 1, memo, depth + 1, callId * 2);
        const fib2 = this.fibonacci(n - 2, memo, depth + 1, callId * 2 + 1);
        
        memo[n] = fib1 + fib2;
        console.log(`${indent}   ✓ Result: ${fib1} + ${fib2} = ${memo[n]}`);
        
        return memo[n];
    }
}
```


## **WEEK 2: DATA STRUCTURES AND RECURSIVE STRATEGIES**

### **Slide 16-18: Linked Lists Complete Implementation**

**Include this comprehensive linked list code:**

```javascript
// Singly Linked List Implementation
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    // Add to beginning - O(1)
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        this.visualize('prepend', data);
    }
    
    // Add to end - O(n)
    append(data) {
        const newNode = new Node(data);
        
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        
        this.size++;
        this.visualize('append', data);
    }
    
    // Search - O(n)
    search(data) {
        let current = this.head;
        let position = 0;
        
        while (current) {
            if (current.data === data) {
                console.log(`Found ${data} at position ${position}`);
                return position;
            }
            current = current.next;
            position++;
        }
        
        console.log(`${data} not found`);
        return -1;
    }
    
    // Delete - O(n)
    delete(data) {
        if (!this.head) return null;
        
        if (this.head.data === data) {
            const deleted = this.head;
            this.head = this.head.next;
            this.size--;
            this.visualize('delete', data);
            return deleted.data;
        }
        
        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }
        
        if (current.next) {
            const deleted = current.next;
            current.next = current.next.next;
            this.size--;
            this.visualize('delete', data);
            return deleted.data;
        }
        
        return null;
    }
    
    // Visualize the list
    visualize(operation = '', data = '') {
        let visual = 'HEAD → ';
        let current = this.head;
        
        while (current) {
            visual += `[${current.data}] → `;
            current = current.next;
        }
        visual += 'NULL';
        
        if (operation) {
            console.log(`After ${operation} operation for value ${data}:`);
        }
        console.log(visual);
        console.log(`Size: ${this.size}\n`);
    }
    
    // Convert to array for comparison
    toArray() {
        const result = [];
        let current = this.head;
        
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        
        return result;
    }
}

// Doubly Linked List Implementation
class DoublyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    prepend(data) {
        const newNode = new DoublyNode(data);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        
        this.size++;
        this.visualize('prepend', data);
    }
    
    append(data) {
        const newNode = new DoublyNode(data);
        
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        
        this.size++;
        this.visualize('append', data);
    }
    
    visualize(operation = '', data = '') {
        let forward = 'HEAD ↔ ';
        let current = this.head;
        
        while (current) {
            forward += `[${current.data}] ↔ `;
            current = current.next;
        }
        forward += 'NULL';
        
        if (operation) {
            console.log(`After ${operation} operation for value ${data}:`);
        }
        console.log('Forward:', forward);
        console.log(`Size: ${this.size}\n`);
    }
}
```


### **Slide 19-21: Merge Sort - Divide and Conquer**

**Include this detailed merge sort implementation:**

```javascript
// Merge Sort with Detailed Visualization
function mergeSort(arr, depth = 0) {
    const indent = '  '.repeat(depth);
    console.log(`${indent}→ Divide: [${arr.join(', ')}]`);
    
    // Base case
    if (arr.length <= 1) {
        console.log(`${indent}← Base case: [${arr.join(', ')}]`);
        return arr;
    }
    
    // Divide
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    console.log(`${indent}  Split into: [${left.join(', ')}] and [${right.join(', ')}]`);
    
    // Recursive calls
    const sortedLeft = mergeSort(left, depth + 1);
    const sortedRight = mergeSort(right, depth + 1);
    
    // Conquer
    const result = merge(sortedLeft, sortedRight, depth);
    console.log(`${indent}← Merge result: [${result.join(', ')}]`);
    
    return result;
}

function merge(left, right, depth = 0) {
    const indent = '  '.repeat(depth);
    console.log(`${indent}  → Merge: [${left.join(', ')}] with [${right.join(', ')}]`);
    
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Merge elements in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Add remaining elements
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    
    console.log(`${indent}  ← Merge result: [${result.join(', ')}]`);
    return result;
}
```


## **WEEK 3: ADVANCED SORTING, HASHING, AND GRAPH ALGORITHMS**

### **Slide 22-24: Quicksort Algorithm**

**Include this complete quicksort implementation:**

```javascript
function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        const pivotIndex = partition(array, low, high);
        quickSort(array, low, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, high);
    }
    return array;
}

function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}
```


### **Slide 25-27: Hash Tables Implementation**

**Include this comprehensive hash table code:**

```javascript
class HashTable {
    constructor(size = 50) {
        this.table = new Array(size);
        this.size = size;
    }
    
    // Simple hash function
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }
    
    // Insert key-value pair
    set(key, value) {
        const index = this.hash(key);
        
        if (!this.table[index]) {
            this.table[index] = [];
        }
        
        // Handle collisions with chaining
        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        
        bucket.push([key, value]);
    }
    
    // Get value by key
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }
        }
        return undefined;
    }
    
    // Delete key-value pair
    delete(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }
    
    // Display hash table contents
    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(`${i}: ${JSON.stringify(this.table[i])}`);
            }
        }
    }
}
```


### **Slide 28-30: Graph Algorithms - BFS and DFS**

**Include this complete graph traversal code:**

```javascript
// Breadth-First Search
function bfs(graph, startNode) {
    const visited = new Set();
    const queue = [startNode];
    const result = [];
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);
            
            // Add neighbors to queue
            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }
    
    return result;
}

// Depth-First Search (Recursive)
function dfs(graph, startNode, visited = new Set(), result = []) {
    visited.add(startNode);
    result.push(startNode);
    
    for (const neighbor of graph[startNode]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited, result);
        }
    }
    
    return result;
}

// Depth-First Search (Iterative)
function dfsIterative(graph, startNode) {
    const visited = new Set();
    const stack = [startNode];
    const result = [];
    
    while (stack.length > 0) {
        const node = stack.pop();
        
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);
            
            // Add neighbors to stack (in reverse order for consistent traversal)
            for (let i = graph[node].length - 1; i >= 0; i--) {
                const neighbor = graph[node][i];
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
    
    return result;
}

// Example graph representation
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

// Usage examples
console.log("BFS traversal:", bfs(graph, 'A'));
console.log("DFS traversal:", dfs(graph, 'A'));
console.log("DFS iterative:", dfsIterative(graph, 'A'));
```


## **WEEK 4: OPTIMIZATION AND PROXIMITY ALGORITHMS**

### **Slide 31-33: Greedy Algorithms**

**Include this complete greedy algorithm implementation:**

```javascript
// Coin Change Problem (Greedy Approach)
function coinChangeGreedy(coins, amount) {
    coins.sort((a, b) => b - a); // Sort in descending order
    const result = [];
    let remaining = amount;
    
    for (const coin of coins) {
        while (remaining >= coin) {
            result.push(coin);
            remaining -= coin;
        }
    }
    
    return remaining === 0 ? result : null;
}

// Activity Selection Problem
function activitySelection(activities) {
    // Sort by end time
    activities.sort((a, b) => a.end - b.end);
    
    const selected = [activities[0]];
    let lastSelected = activities[0];
    
    for (let i = 1; i < activities.length; i++) {
        if (activities[i].start >= lastSelected.end) {
            selected.push(activities[i]);
            lastSelected = activities[i];
        }
    }
    
    return selected;
}

// Huffman Coding (Greedy approach for compression)
class HuffmanNode {
    constructor(char, freq) {
        this.char = char;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }
}

function huffmanCoding(text) {
    // Calculate frequency
    const frequency = {};
    for (const char of text) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    
    // Create priority queue (min heap)
    const pq = Object.entries(frequency)
        .map(([char, freq]) => new HuffmanNode(char, freq))
        .sort((a, b) => a.freq - b.freq);
    
    // Build Huffman tree
    while (pq.length > 1) {
        const left = pq.shift();
        const right = pq.shift();
        
        const merged = new HuffmanNode(null, left.freq + right.freq);
        merged.left = left;
        merged.right = right;
        
        // Insert in sorted position
        let inserted = false;
        for (let i = 0; i < pq.length; i++) {
            if (merged.freq <= pq[i].freq) {
                pq.splice(i, 0, merged);
                inserted = true;
                break;
            }
        }
        if (!inserted) pq.push(merged);
    }
    
    // Generate codes
    const codes = {};
    function generateCodes(node, code = '') {
        if (node.char) {
            codes[node.char] = code;
            return;
        }
        generateCodes(node.left, code + '0');
        generateCodes(node.right, code + '1');
    }
    
    if (pq[0]) generateCodes(pq[0]);
    return codes;
}
```


### **Slide 34-36: Dynamic Programming**

**Include this comprehensive dynamic programming implementation:**

```javascript
// Knapsack Problem
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i-1] <= w) {
                dp[i][w] = Math.max(
                    values[i-1] + dp[i-1][w - weights[i-1]], // Include item
                    dp[i-1][w] // Exclude item
                );
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    
    // Backtrack to find selected items
    const selectedItems = [];
    let w = capacity;
    for (let i = n; i > 0; i--) {
        if (dp[i][w] !== dp[i-1][w]) {
            selectedItems.push(i-1);
            w -= weights[i-1];
        }
    }
    
    return {
        maxValue: dp[n][capacity],
        selectedItems: selectedItems.reverse(),
        dp: dp
    };
}

// Longest Common Subsequence
function lcs(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i-1] === str2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    // Reconstruct LCS
    let i = m, j = n;
    const lcsString = [];
    
    while (i > 0 && j > 0) {
        if (str1[i-1] === str2[j-1]) {
            lcsString.unshift(str1[i-1]);
            i--;
            j--;
        } else if (dp[i-1][j] > dp[i][j-1]) {
            i--;
        } else {
            j--;
        }
    }
    
    return {
        length: dp[m][n],
        sequence: lcsString.join(''),
        dp: dp
    };
}

// Fibonacci with Tabulation vs Memoization
function fibonacciTabulation(n) {
    if (n <= 1) return n;
    
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}

function fibonacciMemoization(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacciMemoization(n-1, memo) + fibonacciMemoization(n-2, memo);
    return memo[n];
}
```


### **Slide 37-39: K-Nearest Neighbors**

**Include this complete KNN implementation:**

```javascript
class KNN {
    constructor(k = 3) {
        this.k = k;
        this.data = [];
    }
    
    // Train the model
    fit(features, labels) {
        this.data = features.map((feature, i) => ({
            point: feature,
            label: labels[i]
        }));
    }
    
    // Calculate Euclidean distance
    euclideanDistance(point1, point2) {
        return Math.sqrt(
            point1.reduce((sum, val, i) => 
                sum + Math.pow(val - point2[i], 2), 0)
        );
    }
    
    // Calculate Manhattan distance
    manhattanDistance(point1, point2) {
        return point1.reduce((sum, val, i) => 
            sum + Math.abs(val - point2[i]), 0);
    }
    
    // Predict classification
    predict(queryPoint, distanceMetric = 'euclidean') {
        // Calculate distances to all points
        const distances = this.data.map(item => ({
            distance: distanceMetric === 'euclidean' ? 
                this.euclideanDistance(queryPoint, item.point) :
                this.manhattanDistance(queryPoint, item.point),
            label: item.label,
            point: item.point
        }));
        
        // Sort by distance and take k nearest
        distances.sort((a, b) => a.distance - b.distance);
        const kNearest = distances.slice(0, this.k);
        
        // Count votes with weighted voting (closer points have more weight)
        const votes = {};
        kNearest.forEach(item => {
            const weight = 1 / (item.distance + 1e-10); // Avoid division by zero
            votes[item.label] = (votes[item.label] || 0) + weight;
        });
        
        // Return most frequent label and confidence
        const sortedVotes = Object.entries(votes)
            .sort(([,a], [,b]) => b - a);
        
        const totalWeight = Object.values(votes).reduce((sum, weight) => sum + weight, 0);
        const confidence = sortedVotes[0][1] / totalWeight;
        
        return {
            prediction: sortedVotes[0][0],
            confidence: confidence,
            nearestNeighbors: kNearest,
            allVotes: votes
        };
    }
    
    // Cross-validation for model evaluation
    crossValidate(features, labels, folds = 5) {
        const foldSize = Math.floor(features.length / folds);
        let totalAccuracy = 0;
        
        for (let i = 0; i < folds; i++) {
            const testStart = i * foldSize;
            const testEnd = testStart + foldSize;
            
            const testFeatures = features.slice(testStart, testEnd);
            const testLabels = labels.slice(testStart, testEnd);
            
            const trainFeatures = [
                ...features.slice(0, testStart),
                ...features.slice(testEnd)
            ];
            const trainLabels = [
                ...labels.slice(0, testStart),
                ...labels.slice(testEnd)
            ];
            
            this.fit(trainFeatures, trainLabels);
            
            let correct = 0;
            for (let j = 0; j < testFeatures.length; j++) {
                const prediction = this.predict(testFeatures[j]);
                if (prediction.prediction === testLabels[j]) {
                    correct++;
                }
            }
            
            totalAccuracy += correct / testFeatures.length;
        }
        
        return totalAccuracy / folds;
    }
    
    // Feature scaling for better distance calculations
    static scaleFeatures(features) {
        const numFeatures = features[0].length;
        const scaled = features.map(row => [...row]);
        
        for (let i = 0; i < numFeatures; i++) {
            const column = features.map(row => row[i]);
            const min = Math.min(...column);
            const max = Math.max(...column);
            const range = max - min;
            
            if (range > 0) {
                for (let j = 0; j < scaled.length; j++) {
                    scaled[j][i] = (scaled[j][i] - min) / range;
                }
            }
        }
        
        return scaled;
    }
}

// Example usage and visualization
function demonstrateKNN() {
    // Sample dataset: [x, y] coordinates with labels
    const features = [
        [1, 1], [2, 2], [3, 3], // Class A
        [6, 6], [7, 7], [8, 8], // Class B
        [1, 8], [2, 7], [3, 6], // Class C
        [8, 1], [7, 2], [6, 3]  // Class D
    ];
    
    const labels = ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'D'];
    
    // Scale features for better performance
    const scaledFeatures = KNN.scaleFeatures(features);
    
    const knn = new KNN(3);
    knn.fit(scaledFeatures, labels);
    
    // Test predictions
    const testPoints = [
        [2.5, 2.5], // Should be close to A
        [6.5, 6.5], // Should be close to B
        [2, 7],     // Should be close to C
        [7, 2]      // Should be close to D
    ];
    
    const scaledTestPoints = KNN.scaleFeatures([...features, ...testPoints])
        .slice(-testPoints.length);
    
    testPoints.forEach((point, i) => {
        const result = knn.predict(scaledTestPoints[i]);
        console.log(`Point [${point.join(', ')}]: Predicted ${result.prediction} with ${(result.confidence * 100).toFixed(1)}% confidence`);
    });
    
    // Cross-validation
    const accuracy = knn.crossValidate(scaledFeatures, labels);
    console.log(`Cross-validation accuracy: ${(accuracy * 100).toFixed(2)}%`);
}
```


***

## **VISUAL DESIGN SPECIFICATIONS FOR SLIDES**

**Create each slide with:**

1. **Professional layout** with consistent header styling using deep blue (\#1e3a8a) gradients
2. **Code syntax highlighting** with dark editor backgrounds and proper indentation
3. **Step-by-step visualizations** showing algorithm execution with animations
4. **Interactive elements** like clickable navigation and smooth transitions
5. **Color-coded complexity indicators** (green for O(1), yellow for O(n), red for O(n²))
6. **Clean typography** with modern sans-serif fonts for headers and monospace for code
7. **Professional charts and diagrams** showing data structures and algorithm flows
8. **Performance comparison tables** with visual indicators
9. **Memory layout diagrams** for linked lists and arrays
10. **Graph visualizations** with nodes and edges for BFS/DFS examples

**Total slides:** ~50-60 slides with smooth transitions and educational animations suitable for professional presentation delivery.

***
