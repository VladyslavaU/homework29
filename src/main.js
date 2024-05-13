console.log('#14. JavaScript homework example file')

const URL = `https://jsonplaceholder.typicode.com`
const HEADERS = { 'Content-Type': 'application/json' }
const ERROR_MESSAGE = 'HTTP error! status: '
const POSTS = '/posts/'


async function getData(segment) {
  try {
    const response = await fetch(createUrl(segment), { method: 'GET' })
    const log = response.ok ? await response.json() : response.status
    console.log(log)
    return log
  } catch (error) {
    return error.message
  }
}

async function postData(segment, data) {
  try {
    return await sendData(segment, 'POST', data)
  } catch (error) {
    return error.message
  }
}

async function putData(id, data) {
  try {
    return await sendData(POSTS.concat(id), 'PUT', data)
  } catch (error) {
    return error.message
  }
}

async function patchData(id, data) {
  try {
    return await sendData(POSTS.concat(id), 'PATCH', data)
  } catch (error) {
    return error.message
  }
}

async function deleteData(id) {
  try {
    const response = await fetch(createUrl(POSTS.concat(id)), { method: 'DELETE' })
    const status = response.status
    if (response.ok) {
      console.log(`Post with id ${id} has been successfully deleted.`)
      return true
    }
    console.log(`Failed to delete post with id ${id}. Status: ${status}`)
    return status
  } catch (error) {
    return error.message
  }
}

function createUrl(data) {
  return URL.concat(data)
}

async function sendData(endpoint, method, body) {
  const response = await fetch(createUrl(endpoint), {
    method: method,
    headers: HEADERS,
    body: JSON.stringify(body)
  })
  const log = response.ok ? await response.json() : ERROR_MESSAGE.concat(response.status.toString())
  console.log(log)
  return log
}

export { getData, postData, putData, patchData, deleteData }
