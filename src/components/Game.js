import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './Game.styles';

const TOTAL_SQUARES = 9;

// Gera uma sequência aleatória de N passos (números de 0 a 8)
const generateSequence = (length) => {
  const sequence = [];
  for (let i = 0; i < length; i++) {
    sequence.push(Math.floor(Math.random() * TOTAL_SQUARES));
  }
  return sequence;
};

const Game = () => {
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [level, setLevel] = useState(1); // 1 = fácil, 2 = médio, 3 = difícil
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSquares, setActiveSquares] = useState([]);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Velocidade da exibição da sequência, conforme o nível
  const getSpeed = () => {
    switch (level) {
      case 1:
        return 1000; // Fácil
      case 2:
        return 700; // Médio
      case 3:
        return 500; // Difícil
      default:
        return 1000;
    }
  };

  // Inicia uma nova partida
  const startGame = () => {
    setIsPlaying(true);
    setUserSequence([]);
    setScore(0);
    setSequence(generateSequence(level + 2));
  };

  // Pisca a sequência de quadrados para o jogador memorizar
  useEffect(() => {
    if (!isPlaying || sequence.length === 0) return undefined;

    setIsShowingSequence(true);
    let step = 0;

    const interval = setInterval(() => {
      setActiveSquares([sequence[step]]);
      step++;

      if (step === sequence.length) {
        clearInterval(interval);
        setTimeout(() => {
          setActiveSquares([]);
          setIsShowingSequence(false);
        }, 500);
      }
    }, getSpeed());

    return () => {
      clearInterval(interval);
      setActiveSquares([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, sequence]);

  // Trata o clique do jogador em um quadrado
  const handleSquareClick = (index) => {
    if (!isPlaying || isShowingSequence) return;

    const newUserSequence = [...userSequence, index];
    setUserSequence(newUserSequence);

    const stepIndex = newUserSequence.length - 1;

    // Jogador errou a sequência
    if (newUserSequence[stepIndex] !== sequence[stepIndex]) {
      Alert.alert('Erro', 'Você errou a sequência! O jogo será reiniciado.');
      setIsPlaying(false);
      setHighScore((prevHighScore) => Math.max(prevHighScore, score));
      return;
    }

    // Jogador completou a sequência corretamente: avança de nível
    if (newUserSequence.length === sequence.length) {
      setLevel((prevLevel) => {
        const nextLevel = Math.min(prevLevel + 1, 3);
        setSequence(generateSequence(nextLevel + 2));
        return nextLevel;
      });
      setUserSequence([]);
      setScore((prevScore) => prevScore + 1);
    }
  };

  // Reinicia o jogo do zero
  const restartGame = () => {
    setLevel(1);
    setIsPlaying(false);
    setUserSequence([]);
    setSequence([]);
    setActiveSquares([]);
    setScore(0);
  };

  const levelLabel =
    level === 1 ? 'Fácil' : level === 2 ? 'Médio' : 'Difícil';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>JOGO GÊNIOS</Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Pontuação: {score}</Text>
        <Text style={styles.highScoreText}>Recorde: {highScore}</Text>
      </View>

      <Text style={styles.level}>
        <Text style={styles.boldText}>Nível: {levelLabel}</Text>
      </Text>

      <View style={styles.grid}>
        {[...Array(TOTAL_SQUARES)].map((_, i) => (
          <TouchableOpacity
            key={i}
            style={[
              styles.square,
              { backgroundColor: activeSquares.includes(i) ? 'yellow' : '#add' },
            ]}
            onPress={() => handleSquareClick(i)}
          />
        ))}
      </View>

      {!isPlaying ? (
        <TouchableOpacity onPress={startGame} style={styles.startButton}>
          <Text style={styles.buttonText}>INICIAR</Text>
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity onPress={restartGame} style={styles.restartButton}>
        <Text style={styles.buttonText}>REINICIAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Game;
