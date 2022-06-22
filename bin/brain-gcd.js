#!/usr/bin/env node
import { generateRound, gamePhrase } from '../src/games/gcd.js';
import { gameLogic } from '../src/index.js';

gameLogic(gamePhrase, generateRound);
