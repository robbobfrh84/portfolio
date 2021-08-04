function _get(url) {

  /*
    NOTE: Sometime the google sheet 404s, we handle the "try again" part
    in the "page_handler.js" .catch for the showcase
    - BOB! When you come back in here to add the new google sheet.
    Update this to .fetch and handle the "try again" part here... somehow..
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
