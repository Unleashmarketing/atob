window.addEventListener('load', function () {
    // Range Date Picker
    flatpickr('#flatpickr-range', {
      mode: 'range',
      altInput: true,
      altFormat: 'F j, Y',
      dateFormat: 'd-m-Y',
      locale : "de",
      defaultDate: ["01-01-2025", "14-01-2025"],
    })
  })

document.addEventListener('DOMContentLoaded', function() {
  // Range Date Picker
  if (document.getElementById('flatpickr-range')) {
    flatpickr('#flatpickr-range', {
      mode: 'range',
      altInput: true,
      altFormat: 'F j, Y',
      dateFormat: 'd-m-Y',
      locale: "de",
      defaultDate: ["01-01-2025", "14-01-2025"],
    });
  }

  // Single Date Picker
  if (document.getElementById('flatpickr-date')) {
    flatpickr('#flatpickr-date', {
      altInput: true,
      altFormat: 'F j, Y',
      dateFormat: 'd-m-Y',
      locale: "de",
    });
  }

  // Initialize any other UI components here
});
