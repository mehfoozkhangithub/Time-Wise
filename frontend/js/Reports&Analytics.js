// For Date
const today = moment().format("LL");
document.getElementById("current-date").textContent = today;

// For Dropdown div
document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.custom_dropdown')

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector('.dropdown_toggle')
    const options = dropdown.querySelector('.dropdown_options')
    const optionsList = dropdown.querySelectorAll('.dropdown_option')
    const hiddenInput = dropdown.querySelector('input[type="hidden"]')
    const selectedOption = dropdown.querySelector('.selected_option')

    toggle.addEventListener('click', function (e) {
      e.stopPropagation()
      dropdown.classList.toggle('active')
    })

    optionsList.forEach((option) => {
      option.addEventListener('click', function () {
        const value = this.getAttribute('data-value')
        const text = this.textContent

        // Update UI
        selectedOption.textContent = text
        hiddenInput.value = value

        // Update active state
        optionsList.forEach((opt) => opt.classList.remove('active'))
        this.classList.add('active')

        // Close dropdown
        dropdown.classList.remove('active')

        // Trigger change event
        hiddenInput.dispatchEvent(new Event('change'))
      })
    })
  })

  // Close dropdown when clicking outside
  document.addEventListener('click', function () {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove('active')
    })
  })
})

// Bar Chart
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('workHoursChart').getContext('2d')

  const workHoursChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [
        {
          label: 'Work Hours',
          data: [8, 7.5, 8.5, 6, 9, 4],
          backgroundColor: 'var(--primary)',
          borderColor: 'var(--border)',
          borderWidth: 1,
          hoverBackgroundColor: 'var(--primary-hover)',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 12,
          ticks: {
            stepSize: 2,
            callback: function (value) {
              return value + ' hrs'
            },
            color: 'var(--text-secondary)',
          },
          grid: {
            color: 'var(--border)',
          },
        },
        x: {
          ticks: {
            color: 'var(--text-secondary)',
          },
          grid: {
            color: 'var(--border)',
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: 'var(--text-primary)',
          },
        },
      },
    },
  })

  // Update chart colors when dark mode changes
  const observer = new MutationObserver(() => {
    workHoursChart.update()
  })
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class'],
  })
})
