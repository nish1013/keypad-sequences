import { KeyNavigator } from '../key-navigator';

describe('KeyNavigator', () => {
  describe('getValidKnightMoves', () => {
    test('Valid knight moves from A', () => {
      // For key "A" at (0,0):
      //   [2,1] → (2,1) = "L"
      //   [1,2] → (1,2) = "H"
      const expectedMoves = ['L', 'H'];
      const result = KeyNavigator.getValidKnightMoves('A');
      expect(result.startKey).toBe('A');
      expect(result.validMoves).toEqual(expect.arrayContaining(expectedMoves));
      expect(result.validMoves.length).toBe(expectedMoves.length);
    });

    test('Valid knight moves from 2', () => {
      // For key "2" at (3,2) in the layout:
      //   [-2,-1] → (1,1) = "G"
      //   [-2, 1] → (1,3) = "I"
      //   [-1,-2] → (2,0) = "K"
      //   [-1, 2] → (2,4) = "O"
      const expectedMoves = ['G', 'I', 'K', 'O'];
      const result = KeyNavigator.getValidKnightMoves('2');
      expect(result.startKey).toBe('2');
      expect(result.validMoves).toEqual(expect.arrayContaining(expectedMoves));
      expect(result.validMoves.length).toBe(expectedMoves.length);
    });

    test('Invalid key should throw error', () => {
      expect(() => KeyNavigator.getValidKnightMoves('Z')).toThrow("Key 'Z' not found on keypad");
    });
  });
});
