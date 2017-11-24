/* global fetch */
'use strict'

const content = document.getElementById('content')
const clearAll = document.getElementById('clear-content')
const superForm = document.getElementById('main-form')
const result = document.getElementById('result')

clearAll.addEventListener('click', (e) => {
  e.preventDefault()
  e.stopPropagation()
  content.value = ''
})

superForm.addEventListener('submit', (e) => {
  e.preventDefault()
  e.stopPropagation()
  let text = content.value
  console.log('text -> ', text)
  fetch('api/process-text', {
    method: 'POST',
    body: JSON.stringify({content: text})
  })
  .then(res => res.json())
  .then(json => {
    result.innerText = json.content
  }).catch(res => {
    console.log('res -> ', res)
  })
})
