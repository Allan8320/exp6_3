$(document).ready(function () { function calculateGST() {
const amount = parseFloat($('#amount').val()); const gstRate = parseFloat($('#gst').val());
if (!isNaN(amount) && !isNaN(gstRate)) { const gstAmount = (gstRate / 100) * amount; const totalAmount = amount + gstAmount;
$('#actualAmount').text(amount.toFixed(2));
$('#gstAmount').text(gstAmount.toFixed(2));
$('#totalAmount').text(totalAmount.toFixed(2));
} else {
// Clear results if input is invalid
$('#actualAmount').text('--');
$('#gstAmount').text('--');
$('#totalAmount').text('--');
}
}
$('#amount').keyup(function () { calculateGST();
});
$('#gst').change(function () { calculateGST();
});
$('#resetBtn').click(function () {
$('#amount').val('');
$('#gst').val('');
$('#actualAmount').text('--');
$('#gstAmount').text('--');
$('#totalAmount').text('--');
});
});
