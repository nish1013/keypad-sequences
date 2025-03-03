# Keypad Sequences

This project explores generating valid 10-key sequences using knight moves on a keypad while ensuring that no sequence contains more than 2 vowels.

## Project Structure

- **src/**: Contains the TypeScript source code.
  - **keypad.ts**: Defines the KEYPAD layout, knight move offsets, and vowel set.
  - **key-navigator.ts**: Implements knight move calculation based on the keypad layout.
  - **sequence-generator.ts**: Implements the recursive sequence generation logic.
  - **index.ts**: Entry point that outputs the total number of valid 10-key sequences.
- **tests/**: Contains unit tests for the project (using Jest).

## Requirements

- Node.js (v14+ recommended)
- npm

## Scripts

The following npm scripts are available:

- **Build:**  
  Compiles the TypeScript code into JavaScript in the `dist/` folder.

  ```bash
  npm run build
  ```

- **Start:**  
  Runs the compiled project.

  ```bash
  npm start
  ```

  This will execute `node dist/index.js` and print the total valid 10-key sequences.

- **Test:**  
  Runs unit tests using Jest.

  ```bash
  npm test
  ```

- **Format:**  
  Formats the code using Prettier.

  ```bash
  npm run format
  ```

- **Lint:**  
  Checks the code format using Prettier.

  ```bash
  npm run lint
  ```

- **Clean:**  
  Removes the `dist/` folder.
  ```bash
  npm run clean
  ```

## How to Build and Run the Project

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd keypad-sequences
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Clean the Build Folder (Optional):**

   ```bash
   npm run clean
   ```

4. **Build the Project:**

   ```bash
   npm run build
   ```

5. **Run the Project:**

   ```bash
   npm start
   ```

   The output should display a header and then the total valid 10-key sequences computed.

## Running Unit Tests

The project uses Jest for unit testing. To run the tests, execute:

```bash
npm test
```

This will run all tests located in the `tests/` folder and output the results.

## Project Overview

- **Keypad Layout:**  
  The keypad is defined with a null-based layout to visually center the bottom row:

  ```typescript
  export const KEYPAD: (string | null)[][] = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    [null, '1', '2', '3', null],
  ];
  ```

- **Knight Moves:**  
  The knight moves are defined as:

  ```typescript
  export const KNIGHT_MOVES: [number, number][] = [
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
  ];
  ```

  These moves are applied relative to the position of the current key on the keypad.

- **Sequence Generation:**  
  The `SequenceGenerator` recursively builds sequences of length 10 using knight moves, with a constraint that no sequence contains more than 2 vowels.

## Conclusion

This project serves as an experiment to explore recursion, memoization, and constraint-based sequence generation. The provided scripts make it easy to build, run, test, and maintain the project.
