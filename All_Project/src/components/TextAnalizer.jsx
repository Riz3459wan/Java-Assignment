import { useState } from "react";
import styles from "./TextAnalizer.module.css";

const TextAnalizer = () => {
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);
  const [char, setChar] = useState(0);
  const [readTime, setReadTime] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [noSpaces, setNoSpaces] = useState(0);
  const [avgWordsPerSentence, setAvgWordsPerSentence] = useState(0);
  const [isFlag, setIsFlag] = useState(true);

  function calculateData(inputText) {
    let charCount = 0;
    for (let i = 0; i < inputText.length; i++) {
      charCount += 1;
    }

    let noSpacesCount = 0;
    for (let i = 0; i < inputText.length; i++) {
      if (
        inputText[i] !== " " &&
        inputText[i] !== "\n" &&
        inputText[i] !== "\t"
      ) {
        noSpacesCount += 1;
      }
    }

    let word = [];
    if (text.trim() !== "") {
      word = text.trim().split(" ");
    }

    let wordCount = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== "") {
        wordCount += 1;
      }
    }

    let sentenceCount = 0;
    if (inputText.trim() !== "") {
      for (let i = 0; i < inputText.length; i++) {
        if (
          inputText[i] === "." ||
          inputText[i] === "!" ||
          inputText[i] === "?"
        ) {
          sentenceCount += 1;
        }
      }
      if (sentenceCount === 0 && inputText.trim().length > 0) {
        sentenceCount = 1;
      }
    }

    let avgWords = 0;
    if (sentenceCount > 0) {
      avgWords = (wordCount / sentenceCount).toFixed(1);
    }

    let timeIn = 0;
    if (wordCount > 0) {
      timeIn = Math.ceil((wordCount / 200) * 60);
    }

    setChar(charCount);
    setNoSpaces(noSpacesCount);
    setWords(wordCount);
    setReadTime(timeIn);
    setSentences(sentenceCount);
    setAvgWordsPerSentence(avgWords);
    setIsFlag(false);
  }

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    calculateData(newText);
    setIsFlag(true);
  };

  const analize = () => {
    calculateData(text);
    setIsFlag(false);
  };

  const write = () => {
    setIsFlag(true);
  };

  return (
    <div className={styles.container}>
      <h1>Text Analyzer</h1>

      <div className={styles.controlPanel}>
        <button
          className={`${styles.controlBtn} ${isFlag ? styles.active : ""}`}
          onClick={write}
        >
          Write
        </button>
        <button
          className={`${styles.controlBtn} ${!isFlag ? styles.active : ""}`}
          onClick={analize}
        >
          Analyze
        </button>
      </div>

      {isFlag ? (
        <div className={styles.writeView}>
          <textarea
            className={styles.textInput}
            value={text}
            onChange={handleChange}
            placeholder="Start typing or paste your text here..."
          />

          <div className={styles.stats}>
            <span>{words} words</span>
            <span>{char} chars</span>
            <span>{sentences} sentences</span>
            <span>{readTime}s read</span>
          </div>
        </div>
      ) : (
        <div className={styles.analysisResults}>
          <div className={styles.resultsGrid}>
            <div className={styles.resultItem}>
              <div className={styles.resultValue}>{words}</div>
              <div className={styles.resultLabel}>WORDS</div>
            </div>
            <div className={styles.resultItem}>
              <div className={styles.resultValue}>{char}</div>
              <div className={styles.resultLabel}>CHARACTERS</div>
            </div>
            <div className={styles.resultItem}>
              <div className={styles.resultValue}>{noSpaces}</div>
              <div className={styles.resultLabel}>NO SPACES</div>
            </div>
          </div>

          <div className={styles.secondaryGrid}>
            <div className={styles.secondaryItem}>
              <div className={styles.secondaryValue}>{sentences}</div>
              <div className={styles.secondaryLabel}>SENTENCES</div>
            </div>
            <div className={styles.secondaryItem}>
              <div className={styles.secondaryValue}>{avgWordsPerSentence}</div>
              <div className={styles.secondaryLabel}>AVG WORDS/SENTENCE</div>
            </div>
            <div className={styles.secondaryItem}>
              <div className={styles.secondaryValue}>{readTime}S</div>
              <div className={styles.secondaryLabel}>READING TIME</div>
            </div>
          </div>

          <div className={styles.topWordsSection}>
            <div className={styles.topWordsTitle}>TOP WORDS</div>
            <div className={styles.topWordsCloud}>
              a the it content of lorem ipsum and
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextAnalizer;
