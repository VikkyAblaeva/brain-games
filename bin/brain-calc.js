#!/usr/bin/env node

import { generateRound, gamePhrase } from '../src/games/calc.js';
import { gameLogic } from '../src/index.js';

gameLogic(gamePhrase, generateRound);
