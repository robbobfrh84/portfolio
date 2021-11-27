function _get(url) {

/*
  ---- BOB! Update this not area!!!!! 👇

  NOTE: Sometime the google sheet 404s, we handle the "try again" part
  in the "page_handler.js" .catch for the showcase

  - BOB! When you come back in here to add the new google sheet.
  Update this to .fetch and handle the "try again" part here... somehow..

  - Ok... we pulled the plug on this, aug 21, 2021 and used this link
  to get json.txt file and copied it into staticJson.js
    - https://docs.google.com/spreadsheets/d/1lJHYKgkaQJrU9OVbODz-L9r7xT3w0FpzpQZVuv9pRK8/gviz/tq?tqx=out:json

  ---- BOB! Update this not area!!!!! 👆
*/

  return new Promise((res, rej) => {
    _loaderOn()
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          res(xhr.responseText)
        } else {
          rej(xhr)
        }
        _loaderOff()
      }
    }
    xhr.send(null)
  })

}
