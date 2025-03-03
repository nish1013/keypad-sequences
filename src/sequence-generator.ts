import { KEYPAD, VOWELS } from './interfaces/keypad';
import { KeyNavigator } from './key-navigator';

export class SequenceGenerator {
  /**
   * Count the total number of valid sequences of length 10.
   * Uses recursion with memoization and early pruning based on vowel count.
   */
  public static countValidSequences(): number {
    let total = 0;
    const memo = new Map<string, number>();
    console.log('Starting count of valid sequences...');
    // Iterate over every cell; skip null cells.
    for (let row = 0; row < KEYPAD.length; row++) {
      for (let col = 0; col < KEYPAD[row].length; col++) {
        const key = KEYPAD[row][col];
        if (key !== null) {
          const initialVowelCount = VOWELS.has(key) ? 1 : 0;
          total += this.countSequences(key, 1, initialVowelCount, memo);
        }
      }
    }
    console.log(`Total valid sequences: ${total}`);
    return total;
  }

  /**
   * Recursive helper to count sequences.
   * @param currentKey - the current key in the sequence.
   * @param length - current length of the sequence.
   * @param vowelCount - number of vowels used so far.
   * @param memo - memoization cache for state [currentKey, length, vowelCount].
   */
  private static countSequences(
    currentKey: string,
    length: number,
    vowelCount: number,
    memo: Map<string, number>
  ): number {
    if (length === 10) return 1;
    const memoKey = `${currentKey}-${length}-${vowelCount}`;
    if (memo.has(memoKey)) return memo.get(memoKey)!;
    let count = 0;
    const nextMoves = KeyNavigator.getValidKnightMoves(currentKey).validMoves;
    for (const nextKey of nextMoves) {
      const newVowelCount = vowelCount + (VOWELS.has(nextKey) ? 1 : 0);
      if (newVowelCount <= 2) {
        count += this.countSequences(nextKey, length + 1, newVowelCount, memo);
      }
    }
    memo.set(memoKey, count);
    return count;
  }
}
