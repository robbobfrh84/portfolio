function _get_showcase(url) {

  return new Promise((res, rej) => {
    _loaderOn()
    gasup.read.sheet({ sheetId: 1906007068 })
      .then( response => res(response) )
      .catch( error => rej(error) )
      .finally( () => _loaderOff() )
  })

}

function _page_count() {
  gasup.update.row({
    sheetId: 780153928,
    rowId: "r_3nhsHI5k_kwp7ccf3",
    type: {
      increment: "value"
    }
  })
    .then( response => console.log("Page Count response: ", response) )
    .catch( error => console.log("Page Count Error: ", error) )
}
