import React from 'react';
import styles from './CatapultsGame.module.css';
import GameAttribute from './GameAttribute';

const CatapultsGame = () => {
  const gameAttributes = [
    { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/39c34bced2f48fa90686d6f7d09de416483e410dfc972f3265320ece0984149d?placeholderIfAbsent=true&apiKey=b2ff132bb26e475eb19524ac52384b3e", text: "2-6", alt: "Player count" },
    { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/db55637f743288521882618201085f88a1950fbc7aea853e967cd2918da5948f?placeholderIfAbsent=true&apiKey=b2ff132bb26e475eb19524ac52384b3e", text: "20'", alt: "Game duration" },
    { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/648cd47afe410c5aae7b829eab3e70f73038994174e83913f73b81d92dea9aeb?placeholderIfAbsent=true&apiKey=b2ff132bb26e475eb19524ac52384b3e", text: "EN", alt: "Language" },
  ];

  return (
    <article className={styles.gameCard}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/703aa27d57b31db506511454f9e5bdbda9779e1d4b74b0b3058d7b4a67ca3050?placeholderIfAbsent=true&apiKey=b2ff132bb26e475eb19524ac52384b3e" alt="Catapults game" className={styles.gameImage} />
      <div className={styles.gameInfo}>
        <div className={styles.gameDetails}>
          <div className={styles.gameDetailsInner}>
            <h2 className={styles.gameTitle}>Catapults</h2>
            {gameAttributes.map((attr, index) => (
              <GameAttribute key={index} {...attr} />
            ))}
            <div className={styles.difficultyLevel}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/40870216219abc3f4aee9375e5959a64fdea8ba1a68479a612a2be979e482adb?placeholderIfAbsent=true&apiKey=b2ff132bb26e475eb19524ac52384b3e" alt="Difficulty level" className={styles.attributeIcon} />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2fe291043eff2d0e932d488b6aab2d7991e4d9af06ecb089c88d4187695b6d9?placeholderIfAbsent=true&apiKey=b2ff132bb26e475eb19524ac52384b3e" alt="" className={styles.attributeIcon} />
              <div className={styles.attributeText}>Medium</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.levelIndicator}>
        <div className={styles.levelBadge}>A1</div>
        <button className={styles.nextButton} aria-label="Next">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/73ca49e48a06204140a30c542354da5891cc7b9959d300e14aabbc7a69998a90?placeholderIfAbsent=true&apiKey=b2ff132bb26e475eb19524ac52384b3e" alt="" className={styles.nextIcon} />
        </button>
      </div>
    </article>
  );
};

export default CatapultsGame;