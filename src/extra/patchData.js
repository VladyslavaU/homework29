/*
 ! Функціональні вимоги:

 1. Вхідні параметри:
    - `id`: Ідентифікатор об'єкта, який потрібно оновити.
    - `data`: Об'єкт з даними для оновлення.

 2. Виконання запиту:
    - Виконати асинхронний HTTP PATCH запит до `https://jsonplaceholder.typicode.com/posts/${id}` з використанням `id` та `data`.
    - Встановити заголовок `Content-Type: application/json`.

 3. Обробка відповідей:
    - У разі успішної відповіді, конвертувати відповідь у формат JSON і повернути отримані дані.
    - Якщо відповідь вказує на помилку (наприклад, неіснуючий ресурс або проблеми з сервером), повернути повідомлення про помилку.

 4. Логування:
    - Логувати у консоль результат або повідомлення про помилку.

 Технічні Вимоги:

 - Використання асинхронних функцій (`async/await`) для обробки HTTP запитів.
 - Належне управління помилками та відповідями від API.
*/

async function patchData(id, data) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const result = await response.json()
    console.log(result)
    return result
  } catch (error) {
    console.error('Error updating data: ', error)
    return error.message
  }
}

export { patchData }
