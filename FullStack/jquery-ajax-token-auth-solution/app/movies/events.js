'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateMovie = function (event) {
  event.preventDefault()
  console.log('onCreateMovie ran!')

  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndexMovies = function (event) {
  event.preventDefault()
  console.log('onIndexMovies ran!')

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowMovie = function (event) {
  event.preventDefault()
  console.log('onShowMovie ran!')

  const data = getFormFields(event.target)
  const movie = data.movie

  if (movie.id.length !== 0) {
    api.show(movie)
      .then(ui.onShowSuccess)
      .catch(ui.onShowFailure)
  } else {
    $('#message').html('<p>Please provide an movie id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please enter an movie id!')
  }
}

const onDeleteMovie = function (event) {
  event.preventDefault()
  console.log('onDeleteMovie ran!')

  const data = getFormFields(event.target)
  const movie = data.movie

  if (movie.id.length !== 0) {
    api.destroy(movie.id)
      .then(ui.onDeleteSuccess)
      .catch(ui.onDeleteFailure)
  } else {
    $('#message').html('<p>Please provide an movie id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide an movie id!')
  }
}

const onUpdateMovie = function (event) {
  event.preventDefault()
  console.log('onUpdateMovie ran!')

  const data = getFormFields(event.target)
  const movie = data.movie

  if (movie.text === '') {
    $('#message').html('<p>Text is required</p>')
    $('#message').css('background-color', 'red')
    console.log('Text is required!')
    return false
  }
  if (movie.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#message').html('<p>Please provide an movie id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide an movie id!')
  }
}

const addHandlers = () => {
  $('#movie-create').on('submit', onCreateMovie)
  $('#movie-index').on('submit', onIndexMovies)
  $('#movie-show').on('submit', onShowMovie)
  $('#movie-delete').on('submit', onDeleteMovie)
  $('#movie-update').on('submit', onUpdateMovie)
}

module.exports = {
  addHandlers
}
