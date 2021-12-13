'use strict'

const config = require('../config')
const store = require('../store')

const create = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/movies',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
    // data: data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/movies',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const show = function (movie) {
  return $.ajax({
    url: config.apiUrl + '/movies/' + movie.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/movies/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/movies/' + data.movie.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
    // data: data
  })
}

module.exports = {
  create,
  index,
  show,
  destroy,
  update
}
