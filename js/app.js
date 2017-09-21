//import webServices from './../js/webServises.js'
$.diary.app = function () {
  var self = this
  self.proj_nbr = []
  this.init()
}


$.diary.proj_nbr = null // projcts (nbr) currently in db



$.diary.insertProjectSuccessCallback = function (result) {
  console.log(result)
}

$.diary.getyProjectByNbrSuccessCallback = function (result) {
  // TODO: if (result === empyt) {}
  var self = this
  $.each(result.project, function(i, proj) {
    self.proj_nbr.push(proj.proj_nbr)
  })
  return
}



$.diary.getAllProjects = function () {
  var self = this
  var proj_nbr = ''
  self.getProjectByNbr (proj_nbr, self.getyProjectByNbrSuccessCallback, self)
}

$.diary.loadData = function () {
  var self = this
  $.diary.addToSelect($.diary.proj_nbr)
}


$('#proj_nbr').keyup(function () {
  var self = this
//  alert('wqer')
  var value = $('#proj_nbr').val()
  var result = matchRegex(value)
  if (result !== []) {
    $.diary.addToSelect(result)
  } else {
    clearSelect()
  }

})

matchRegex = function (value) {
  var self = this
  var match = [1,2,3]
  $.each($.diary.proj_nbr, function (projects, proj) { //känner inte av denna instansen av $.diary.proj_nbr
    var is_match = proj.match(value) //funkar ej
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

$.diary.init = function () {
  var self = this
  self.getAllProjects()
  self.addToSelect($.diary.proj_nbr)
}

$.diary.app()

/*

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


var ws = new webServices()
ws.insertProject($.form.proj_nbr, $.form.proj_name, $.diary.app.insertProjectSuccessCallback)


 $.diary.getProjectByNbr ($.form.proj_nbr, $.diary.app.insertProjectSuccessCallback)

 $.diary.updateProjectByNbr ($.form.proj_nbr, $.form.proj_name, 'LISETTE', $.diary.app.insertProjectSuccessCallback)

 $.diary.insertProject ($.form.proj_nbr, $.form.proj_name, $.diary.app.insertProjectSuccessCallback)
 event.preventDefault()
 return false

}) */
