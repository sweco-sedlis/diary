//import webServices from './../js/webServises.js'

$.diary.app = function () {
}

  $.diary.app.insertProjectSuccessCallback = function (result) {
    console.log(result)
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

$('#combobox_input_nbr').keyup(function () {
//  alert('wqer')
  var value = $('#combobox_input_nbr').val()
  var match = []
  var result = matchRegex(value)
  if (result !== []) {
    addToSelect(result)
  } else {
    clearSelect()
  }

})

matchRegex = function (value) {
  var match = []
  $.each($.diary.proj_data, function (projects, proj) {
    var is_match = proj.proj_nbr.match(value)
    if(is_match !== null) {
      match.push(is_match)
    }
  })
  return (match)
}



addToSelect = function (match) {
  clearSelect()
  match.forEach(function (match_val) {
    $('#combobox_select_nbr').append($('<option>', {
      text: match_val.input
    }))
  })
  $('#combobox_select_nbr').show()
}

clearSelect = function () {
//  $.each($('#combobox_select_nbr')[0], function (i) {
//    $('#combobox_select_nbr').remove()
  //})
}



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
