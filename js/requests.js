function _get_showcase(url) {

  return new Promise((res, rej) => {
    _loaderOn()
    gasup.read.sheet({ sheetId: 1906007068 })
      .then( response => res(response) )
      .catch( error => rej(error) )
      .finally( () => _loaderOff() )
  })

}
