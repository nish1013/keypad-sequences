import { SequenceGenerator } from '../sequence-generator';

describe('SequenceGenerator', () => {
  it('should count valid sequences of length 10 and return a positive number', () => {
    const count = SequenceGenerator.countValidSequences();
    expect(typeof count).toBe('number');
    expect(count).toBeGreaterThan(0);
  });

  it('should be deterministic across multiple invocations', () => {
    const firstCount = SequenceGenerator.countValidSequences();
    const secondCount = SequenceGenerator.countValidSequences();
    expect(firstCount).toEqual(secondCount);
  });
});
