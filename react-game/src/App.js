import React, { Component } from 'react'
import Fullscreen from 'react-fullscreen-crossbrowser';
import music from './nadia.mp3'
import clickSound from './click.wav'
import Layout from 'UI/Layout'
import Field from 'UI/Field'
import ControllPanel from 'UI/ControllPanel'
import Footer from 'UI/Footer'
import Button from 'UI/Button'
import Score from 'UI/Score'
import {
  increaseAndRemoveCells,
  getInitCells,
  direction,
  moveCells,
  populateCells,
} from 'logic'

const gameStates = {
  IDLE: 'IDLE',
  PROCESSING: 'PROCESSING',
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitState()
  }
  
  mapKeyCodesToDirections = {
    KeyA: direction.LEFT,
    KeyS: direction.DOWN,
    KeyD: direction.RIGHT,
    KeyW: direction.UP,
    ArrowLeft: direction.LEFT,
    ArrowDown: direction.DOWN,
    ArrowRight: direction.RIGHT,
    ArrowUp: direction.UP,
  }

  getInitState = () => {
    const localState = localStorage.getItem("2048state");
    const state = !localState ? this.getNewState() : JSON.parse(localState)
    return state
  }

  getNewState = () => ({
    cells: getInitCells(),
    gameState: gameStates.IDLE,
    moveDirection: null,
    score: 0,
    theme: true,
    sound: true,
    music: true,
    isFullscreenEnabled: false,
    modal: false
  })

  getNewCells = () => {
    this.setState(state => ({
      ...state,
      score: 0,
      cells: getInitCells()
    }))
    localStorage.setItem("2048state", JSON.stringify(this.state))
  }

  startNewGame = () => {
    this.setState(this.getNewCells())
  }

  toggleSound = () => {
    this.setState(state => ({
      ...state,
      sound: !this.state.sound,
    }))
    localStorage.setItem("2048state", JSON.stringify(this.state))
  }
  
  playMusic = () => {
      const musical = new Audio(music);
      if (this.state.music) {
        musical.play();
        // musical.currentTime = 0;  
      }
      if (!this.state.music){
        musical.pause();
    }
  }

  toggleMusic = () => {
       this.setState(state => ({
      ...state,
      music: !this.state.music,
    }))
    localStorage.setItem("2048state", JSON.stringify(this.state));
  }

  toggleTheme = () => {
       this.setState(state => ({
      ...state,
      theme: !this.state.theme,
    }))
    localStorage.setItem("2048state", JSON.stringify(this.state))
  }

  toggleFullscreen = () => {
       this.setState(state => ({
      ...state,
      isFullscreenEnabled: !this.state.isFullscreenEnabled,
    }))
   localStorage.setItem("2048state", JSON.stringify(this.state))
  }

  soundPlay = (sound) => {
    if (this.state.sound) {
      const audio = new Audio(sound);
      audio.play();
      audio.currentTime = 0;  
    }
      }

  scoreDialog = () => {
       this.setState(state => ({
      ...state,
      modal: !this.state.modal,
    }))
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
    if (this.state.music) {
      // this.musicPlay(music);
    }    
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.gameState !== this.state.gameState &&
      this.state.gameState === gameStates.PROCESSING
    ) {
      this.processGame();
      if (this.state.sound) {
      this.soundPlay(clickSound);
      }    
    }
  }
  
  async processGame() {
    this.setState(state => ({
      ...state,
      cells: moveCells(state.cells, state.moveDirection),
    }))
    await delay(150)

    this.setState(state => ({
      ...state,
      ...increaseAndRemoveCells(state.cells, state.score),
    }))

    this.setState(state => ({
      ...state,
      cells: [...state.cells, ...populateCells(state.cells)],
    }))

    this.setState(state => ({
      ...state,
      gameState: gameStates.IDLE,
      moveDirection: null,
    }))
    localStorage.setItem("2048state", JSON.stringify(this.state))
  }

  handleKeyPress = event => {
    if (['ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'KeyA', 'KeyS', 'KeyD', 'KeyW'].includes(event.code)) {
      this.setState(state => {
        if (state.gameState === gameStates.IDLE) {
          return {
            ...state,
            gameState: gameStates.PROCESSING,
            moveDirection: this.mapKeyCodesToDirections[event.code],
          }
        }
        return undefined
      })
    }
  }

  render() {
    const { cells, score, theme } = this.state;
    const themeClass = theme ? "dark" : "light"
    return (
      <Fullscreen enabled={this.state.isFullscreenEnabled}
        onChange={isFullscreenEnabled => this.setState({isFullscreenEnabled})}>
      <Layout className={themeClass}>
        <ControllPanel>
          <Button onClick={this.startNewGame}>New</Button>
          <Button onClick={this.toggleSound}><i className="material-icons">{this.state.sound ? "notifications" : "notifications_off"}</i></Button>
          <Button onClick={this.toggleMusic}><i className="material-icons">{this.state.music ? "music_note" : "music_off"}</i></Button>
          <Button onClick={this.toggleTheme}><i className="material-icons">{this.state.theme ? "dark_mode" : "light_mode"}</i></Button>
          <Button onClick={this.showInfo}><i className="material-icons">info</i></Button>
          <Button onClick={this.toggleFullscreen}><i className="material-icons">{this.state.isFullscreenEnabled ? "fullscreen_exit" : "fullscreen"}</i></Button>
          <Score onClick={this.scoreDialog}>{score}</Score>
        </ControllPanel>
        <Field cells={cells} />
        <Footer />
    </Layout>
    </Fullscreen>
    )
  }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export default App
