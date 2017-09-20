class webservices {
  constructor () {
    this.base_url =  'http://PCMLM10978:8080/fmedatastreaming/webservices/REST_project.fmw'
  }

  insertProject (proj_nbr, proj_name, successFunction) {
    var token = 'token=fa5480eb054335846428cf2d833f8b8b91b9dfce'
    var opt_resp = 'opt_responseformat=json'
    var serviceUrl = this.base_url + '?' + token + '&' + opt_resp

    var project = {
      'project': [
        {
        'proj_nbr': proj_nbr,
        'proj_name': proj_name,
        'proj_id': 0
        }
      ]
    }

    $.ajax({
      type: 'POST',
      url: serviceUrl,
      contentType: 'application/json',
      data: JSON.stringify(project),
      dataType: 'json',
      success: (result) => {
        successFunction.call(result)
        console.log(result);
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
