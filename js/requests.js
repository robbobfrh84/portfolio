function _get_showcase(url) {

  return new Promise((res, rej) => {
    _loaderOn()
    gasup.read.sheet({ sheetId: 1906007068 })
      .then( response => res(response) )
      .catch( error => rej(error) )
      .finally( () => _loaderOff() )

    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', url, true);
    // xhr.onreadystatechange = function () {
    //   if (this.readyState == 4) {
    //     if (this.status == 200) {
    //       res(xhr.responseText)
    //     } else {
    //       rej(xhr)
    //     }
    //     _loaderOff()
    //   }
    // }
    // xhr.send(null)

  })

}
