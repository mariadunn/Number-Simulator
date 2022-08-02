let theme = "dark"

let number = 0;

  function changeNumber(e) {
    key = e.keyCode
    switch (key) {
      case 38:
      case 49:
        number += 1
        break;
      case 50:
        number += 2
        break;
      case 51:
        number += 3
        break;
      case 52:
        number += 4
        break;
      case 53:
        number += 5
        break;
      case 54:
        number += 6
        break;
      case 55:
        number += 7
        break;
      case 56:
        number += 8
        break;
      case 57:
        number += 9
        break;
      case 40:
      case 97:
        number -= 1
        break;
      case 98:
        number -= 2
        break;
      case 99:
        number -= 3
        break;
      case 100:
        number -= 4
        break;
      case 101:
        number -= 5
        break;
      case 102:
        number -= 6
        break;
      case 103:
        number -= 7
        break;
      case 104:
        number -= 8
        break;
      case 105:
        number -= 9
        break;
      case 81:
        number += 10
        break;
      case 65:
        number -= 10
        break
      case 87:
        number += 100
        break;
      case 83:
        number -= 100
        break;
      case 69:
        number += 1000
        break;
      case 68:
        number -= 1000
        break;
      case 82:
        number += 10000
        break;
      case 70:
        number -= 10000
        break;
      case 84:
        number += 100000
        break;
      case 71:
        number -= 100000
        break;
      case 89:
        number += 1000000
        break;
      case 72:
        number -= 1000000
        break;
      case 85:
        number += 10000000
        break;
      case 74:
        number -= 10000000
        break;
      case 73:
        number += 100000000
        break;
      case 75:
        number -= 100000000
        break;
      case 79:
        number += 1000000000
        break;
      case 76:
        number -= 1000000000
        break;
      case 80:
        number += 10000000000
        break;
      case 186:
        number -= 10000000000
        break;
      case 32:
      case 8:
        randomNumber(key)
        break;
      case 16:
        togglePureNumber()
        break;
    }
    outputNumber()
  }

  function randomNumber(key) {
    let x = Math.floor((Math.random() * 10000000000) + 1);
    if (key == 32) {
      number = number + x;
    } else if (key == 8) {
      number = number - x;
    }
  }

  function outputNumber() {
    $("#number-house").empty()
    let numberArray = []
    for (let x of String(number)) {
      numberArray.push(x)
    }
    for (let y of numberArray) {
      $("#number-house").append(`<div class="n${y}">${y}</div>`)
    }
  }

  function changeTheme() {
    sheet = this.id
    theme = sheet
    $("#stylesheet").attr({href : `./styles/${sheet}.css`});
    $(".style-button").removeClass("selected")
    $(`#${theme}`).addClass("selected")
  }

  function toggleControls() {
    controls = $("#controls")
    if (controls.hasClass("hidden")) {
      controls.removeClass("hidden")
      $("#controls-button").addClass("selected")
    } else {
      controls.addClass("hidden")
      $("#controls-button").removeClass("selected")
    }
  }

  function togglePureNumber() {
    buttons = $(".buttons")
    if (buttons.hasClass("hidden")) {
      buttons.removeClass("hidden")
    } else {
      buttons.addClass("hidden")
    }
  }

  $(document).ready( function() {
    outputNumber()
    $(document).keydown(changeNumber)
    $(".style-button").click(changeTheme)
    $("#controls-button").click(toggleControls)
  })
