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