function _get(url) {

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
