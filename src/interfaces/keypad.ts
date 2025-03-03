export const KEYPAD: (string | null)[][] = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['K', 'L', 'M', 'N', 'O'],
  [null, '1', '2', '3', null],
];

/**
 * KNIGHT_MOVES: The eight possible moves for a knight in chess.
 * Each move is represented as a tuple [dx, dy], where:
 * - dx: the change in the row index (negative means up, positive means down)
 * - dy: the change in the column index (negative means left, positive means right)
 *
 * The moves are:
 *   [-2, -1]: Move 2 rows up and 1 column left.
 *   [-2,  1]: Move 2 rows up and 1 column right.
 *   [ 2, -1]: Move 2 rows down and 1 column left.
 *   [ 2,  1]: Move 2 rows down and 1 column right.
 *   [-1, -2]: Move 1 row up and 2 columns left.
 *   [-1,  2]: Move 1 row up and 2 columns right.
 *   [ 1, -2]: Move 1 row down and 2 columns left.
 *   [ 1,  2]: Move 1 row down and 2 columns right.
 *
 * These moves are universal for a chess knight.
 * Reference: https://en.wikipedia.org/wiki/Knight_(chess)
 */
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

export const VOWELS = new Set(['A', 'E', 'I', 'O']);
