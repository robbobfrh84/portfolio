_get = (url)=>{

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

// AWS.config.region = 'us-east-1'; // Region
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-east-1:5450f169-ebe7-48b5-93a5-5ebc3bd2f729',
// });
//
// const _lambda = new AWS.Lambda();
//
// _get = (func, table, item)=>{
//
//   return new Promise((res, rej) => {
//     _loaderOn()
//     const params = {
//       table: table,
//       item: item
//     };
//
//     _lambda.invoke({
//       FunctionName: func,
//       Payload: JSON.stringify(params)
//     }, function(err, data) {
//       if (err) rej(err, err.stack);
//       else {
//         _projects_Data = JSON.parse(data.Payload)
//         res(_projects_Data)
//       }
//       _loaderOff()
//     });
//   })
//
// }
