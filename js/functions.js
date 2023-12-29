var totalDebt = 0;
var payableDebt = 0;
var unpayableDebt = 0;

function calculate() {
  payableDebt = parseInt(document.getElementById("AmountOfCreditsPerPerson").value) * parseInt(document.getElementById("AmountOfPeople").value);
  unpayableDebt = (parseInt(document.getElementById("AmountOfCreditsPerPerson").value) * (parseInt(document.getElementById("InterestOnCredits").value) / 100)) * parseInt(document.getElementById("AmountOfPeople").value);
  totalDebt = payableDebt + unpayableDebt;
}

function display() {
  if (isNaN(totalDebt) || isNaN(payableDebt) || isNaN(unpayableDebt)) {
    document.getElementById("resultsCart").innerHTML = '<div class="app-alert-bar alert-bar-danger">' +
                                                       '<i class="icons10-cross app-color-danger"></i>' +
                                                       '<strong class="app-color-danger">All inputs must be completed with numbers!</strong>' +
                                                       '</div>';
  }
  else if (totalDebt <= 0 || payableDebt <= 0 || unpayableDebt <= 0) {
    document.getElementById("resultsCart").innerHTML = '<div class="app-alert-bar alert-bar-danger">' +
                                                       '<i class="icons10-cross app-color-danger"></i>' +
                                                       '<strong class="app-color-danger">All inputs must be greater than 0!</strong>' +
                                                       '</div>';
  }
  else {
    document.getElementById("resultsCart").innerHTML = '<div class="app-table-view-container display">' +
                                                       '<table class="app-table-view">' +
                                                       '<thead>' +
                                                       '<tr>' +
                                                       '<th align="left">Total Debt</th>' +
                                                       '<th align="left">Payable Debt</th>' +
                                                       '<th align="left">Unpayable Debt</th>' +
                                                       '</thead>' +
                                                       '<tbody>' +
                                                       '</tr>' +
                                                       '<tr>' +
                                                       '<td>' + totalDebt + ' credits</td>' +
                                                       '<td>' + payableDebt + ' credits</td>' +
                                                       '<td>' + unpayableDebt + ' credits</td>' +
                                                       '</tr>' +
                                                       '</tr>' +
                                                       '</tbody>' +
                                                       '</table>' +
                                                       '</div>';
  }
}

function calculateAndDisplay() {
  calculate();
  display();
}