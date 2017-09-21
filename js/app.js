//import webServices from './../js/webServises.js'

$.diary.app = function () {
}


$.diary.proj_nbr = [] // projcts (nbr) currently in db



$.diary.app.insertProjectSuccessCallback = function (result) {
  console.log(result)
}

$.diary.app.getyProjectByNbrSuccessCallback = function (result) {
  // TODO: if (result === empyt) {}
  var self = this
  $.each(result.project, function(i, proj) {
    $.diary.proj_nbr.push(proj.proj_nbr)
  })
  self.loadData()
  return
}



$.diary.getAllProjects = function () {
  var self = this
  var proj_nbr = ''
  $.diary.getProjectByNbr (proj_nbr, $.diary.app.getyProjectByNbrSuccessCallback, self)
}

$.diary.loadData = function () {
  var self = this
  $.diary.addToSelect($.diary.proj_nbr)
}



var data =
{
 "project" : [
    {
       "proj_nbr" : "0213213",
       "proj_name" : "LISETTE",
       "proj_id" : "23"
    },
    {
       "proj_nbr" : "000",
       "proj_name" : "LISETTE",
       "proj_id" : "24"
    }
  ]
}

$.diary.proj_data = data.project
/*
$.each(proj_data, function (projects, proj) {
    $('#proj_nbr').append($('<option>', {
      text: proj.proj_nbr
    }))
    $('#proj_name').append($('<option>', {
      text: proj.proj_name
    }))
}) */

$('#proj_nbr').keyup(function () {
//  alert('wqer')
  var value = $('#proj_nbr').val()
  var match = []
  var result = matchRegex(value)
  if (result !== []) {
    self.addToSelect(result)
  } else {
    clearSelect()
  }

})

matchRegex = function (value) {
  var self = this
  var match = []
  $.each($.diary.proj_nbr, function (projects, proj) { //känner inte av denna instansen av $.diary.proj_nbr
    var is_match = proj.proj_nbr.match(value)
    if(is_match !== null) {
      match.push(is_match.input)
    }
  })
  return (match)
}



$.diary.addToSelect = function (projects) {
  var self = this
  clearSelect()
  projects.forEach(function (proj) {
    $('#suggestions_nbr').append($('<option>', {
      value: proj
    }))
  })
}

clearSelect = function () {
  $('#suggestions_nbr').empty()
  $.diary.proj_nbr = []
}

$.diary.getAllProjects()


$('#diary').submit(function (event) {
  event.preventDefault()

 $.form = $('#diary')

 $.form.week = $.form.find('#week').val()
 $.form.date = $.form.find('#date').val()
 $.form.time_from = $.form.find('#time_from').val()
 $.form.time_to = $.form.find('#time_to').val()
 $.form.time_dur = $.form.find('#time_dur').val()

 $.form.proj_nbr = $.form.find('#proj_nbr').val()
 $.form.proj_name = $.form.find('#proj_name').val()

 $.form.descript = $.form.find('#descript').val()
 $.form.comment = $.form.find('#comment').val()

/*
var ws = new webServices()
ws.insertProject($.form.proj_nbr, $.form.proj_name, $.diary.app.insertProjectSuccessCallback)
*/

 $.diary.getProjectByNbr ($.form.proj_nbr, $.diary.app.insertProjectSuccessCallback)

 $.diary.updateProjectByNbr ($.form.proj_nbr, $.form.proj_name, 'LISETTE', $.diary.app.insertProjectSuccessCallback)

 $.diary.insertProject ($.form.proj_nbr, $.form.proj_name, $.diary.app.insertProjectSuccessCallback)
 event.preventDefault()
 return false

})
