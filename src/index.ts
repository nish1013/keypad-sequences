import { SequenceGenerator } from './sequence-generator';
const totalSequences = SequenceGenerator.countValidSequences();

const RESET = '\x1b[0m';
const BRIGHT = '\x1b[1m';
const FG_GREEN = '\x1b[32m';
const FG_CYAN = '\x1b[36m';

// Print a styled header.
console.log(`${BRIGHT}${FG_CYAN}=====================================${RESET}`);
console.log(`${BRIGHT}${FG_CYAN}      Valid 10-Key Sequences         ${RESET}`);
console.log(`${BRIGHT}${FG_CYAN}=====================================${RESET}\n`);

console.log(`${BRIGHT}${FG_GREEN}Total Valid 10-Key Sequences: ${totalSequences}${RESET}`);
