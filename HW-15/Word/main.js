function findShortestLength(str) {
    // Розбиваємо рядок на масив слів
    const words = str.split(" ");
    
    // Знаходимо довжину найкоротшого слова
    let shortestLength = words[0].length;
    for (let i = 1; i < words.length; i++) {
      const currentWordLength = words[i].length;
      if (currentWordLength < shortestLength) {
        shortestLength = currentWordLength;
      }
    }
    
    return shortestLength;
  }
  
  // Приклад виклику функції
  const str = prompt("Введіть рядок слів:");
  const shortestLength = findShortestLength(str);
  alert(`Довжина найкоротшого слова: ${shortestLength}`);
  