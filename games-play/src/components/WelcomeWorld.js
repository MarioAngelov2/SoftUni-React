import * as gameServices from '../services/gameService'
import { useState, useEffect } from 'react'

import LatestGameCard from './LatestGamesCard';

const WelcomeWorld = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameServices.getLatest()
      .then(res => {
        setGames(res)
      })
  }, [])

  return (
    <section id="welcome-world">

      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />

      <div id="home-page">
        <h1>Latest Games</h1>

        {
          games.length > 0
            ? games.map(x => <LatestGameCard key={x._id} game={x} />)
            : <p className="no-articles">No games yet</p>
        }

      </div>
    </section>
  )
}

export default WelcomeWorld;