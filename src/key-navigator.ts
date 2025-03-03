import { KEYPAD, KNIGHT_MOVES } from './interfaces/keypad';

export class KeyNavigator {
  /**
   * Get valid knight moves for a given key.
   * Returns an object containing the start key and an array of valid moves.
   */
  public static getValidKnightMoves(startKey: string): { startKey: string; validMoves: string[] } {
    const position = this.findKeyPosition(startKey);
    if (!position) throw new Error(`Key '${startKey}' not found on keypad`);
    const validMoves = this.computeValidMoves(position);
    console.log(
      `Key: ${startKey} found at position (${position.row}, ${position.col}). Valid moves: ${validMoves.join(', ')}`
    );
    return { startKey, validMoves };
  }

  /**
   * Find the (row, col) position of a key in the keypad.
   */
  private static findKeyPosition(key: string): { row: number; col: number } | null {
    for (let row = 0; row < KEYPAD.length; row++) {
      for (let col = 0; col < KEYPAD[row].length; col++) {
        if (KEYPAD[row][col] === key) return { row, col };
      }
    }
    return null;
  }

  /**
   * Compute valid knight moves for a given position.
   * Checks boundaries and ensures the target cell is not null.
   */
  private static computeValidMoves(position: { row: number; col: number }): string[] {
    const moves: string[] = [];
    for (const [dx, dy] of KNIGHT_MOVES) {
      const newRow = position.row + dx;
      const newCol = position.col + dy;
      if (this.isWithinBounds(newRow, newCol) && KEYPAD[newRow][newCol] !== null) {
        moves.push(KEYPAD[newRow][newCol]!);
      }
    }
    return moves;
  }

  /**
   * Check if a given (row, col) is within the keypad boundaries.
   */
  private static isWithinBounds(row: number, col: number): boolean {
    return row >= 0 && row < KEYPAD.length && col >= 0 && col < KEYPAD[row].length;
  }
}
