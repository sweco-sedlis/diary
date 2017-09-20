$.diary.dataRemote = function () { // Constructor
}

$.diary.insertProject = function (proj_nbr, proj_name, successFunction) {

  var token = 'token=fa5480eb054335846428cf2d833f8b8b91b9dfce'
  var opt_resp = 'opt_responseformat=json'
  var serviceUrl = 'http://PCMLM10978:8080/fmedatastreaming/webservices/REST_project.fmw' + '?' + token + '&' + opt_resp

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


$.diary.getProjectByNbr = function (proj_nbr, successFunction) {

  var token = 'token=fa5480eb054335846428cf2d833f8b8b91b9dfce'
  var opt_resp = 'opt_responseformat=json'
  var serviceUrl = 'http://PCMLM10978:8080/fmedatastreaming/webservices/REST_project.fmw' +'?proj_nbr=' + proj_nbr + '&' + token + '&' + opt_resp

  $.ajax({
    type: 'GET',
    url: serviceUrl,
    contentType: 'application/json',
    success: (result) => {
      successFunction.call(result)
    },
    error: (error) => {
      console.log(error)
    }
  })
}

$.diary.getProjectByName = function (proj_name, successFunction) {

  var token = 'token=fa5480eb054335846428cf2d833f8b8b91b9dfce'
  var opt_resp = 'opt_responseformat=json'
  var serviceUrl = 'http://PCMLM10978:8080/fmedatastreaming/webservices/REST_project.fmw' +'?proj_name=' + proj_name + '&' + token + '&' + opt_resp

  $.ajax({
    type: 'GET',
    url: serviceUrl,
    contentType: 'application/json',
    success: (result) => {
      successFunction.call(result)
    },
    error: (error) => {
      console.log(error)
    }
  })
}

$.diary.updateProjectByNbr = function (proj_nbr, proj_old_name, proj_new_name, successFunction) {

  var token = 'token=fa5480eb054335846428cf2d833f8b8b91b9dfce'
  var opt_resp = 'opt_responseformat=json'
  var serviceUrl = 'http://PCMLM10978:8080/fmedatastreaming/webservices/REST_project.fmw' + '/' + proj_new_name + '?' + token + '&' + opt_resp

  var project = {
    'project': [
      {
      'proj_nbr': proj_nbr,
      'proj_name': proj_old_name,
      'proj_id': 0
      }
    ]
  }

  $.ajax({
    type: 'PUT',
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
