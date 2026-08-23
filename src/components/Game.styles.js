import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7C9A6D',
    padding: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scoreContainer: {
    width: 280,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4CAF50',
    padding: 10,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  highScoreText: {
    fontSize: 18,
    color: '#FF6347',
    fontWeight: 'bold',
  },
  level: {
    fontSize: 18,
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  square: {
    width: 90,
    height: 90,
    margin: 5,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
  },
  startButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  restartButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
