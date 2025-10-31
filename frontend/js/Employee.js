document.querySelectorAll('.overview button').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelectorAll('.overview button').forEach(btn => {
      btn.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// Pie Chart

const ctx = document.getElementById('punctualityChart').getContext('2d')
const punctualityChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['On-Time', 'Late', 'Absent'],
    datasets: [
      {
        label: 'Punctuality',
        data: [94, 5, 1],
        backgroundColor: ['#3b82f6', '#f97316', '#10b981'],
        hoverOffset: 8,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#111827', font: { size: 14 } },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || ''
            let value = context.parsed
            return `${label}: ${value}%`
          },
        },
      },
    },
    cutout: '60%', // donut thickness
  },
})


// Progress Bar
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.progress_card').forEach((card) => {
    const current = parseFloat(card.getAttribute('data-current')) || 0
    const target = parseFloat(card.getAttribute('data-target')) || 1
    const pct = Math.max(0, Math.min(1, current / target)) // clamp 0..1

    // set CSS variable for scaleX
    const svg = card.querySelector('.progress_svg')
    if (svg) {
      // set a CSS custom property on the svg (used by .bar-fg transform: scaleX(var(--pct))
      svg.style.setProperty('--pct', pct)

      // small delay to allow transition (if browser paints before we set var)
      requestAnimationFrame(() => {
        // force reflow then set again for animation (helps in some browsers)
        svg.style.setProperty('--pct', pct)
      })
    }

    // update textual values if present
    const valueText = card.querySelector('.value-text')
    const targetText = card.querySelector('.target-text')
    if (valueText) valueText.textContent = current
    if (targetText) targetText.textContent = target

    // auto update remaining line if desired
    const remainingEl = card.querySelector('.progress_remaining')
    if (remainingEl) {
      const remaining = (Math.max(0, target - current).toFixed(2))
      // choose pluralization
      if (card.id === 'weeklyCard') {
        remainingEl.textContent = `${remaining} Hours Remaining`
      } else {
        remainingEl.textContent = `${remaining} Day${
          remaining === 1 ? '' : 's'
        } Remaining`
      }
    }
  })
})


// Dropdown Attendance Logic
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.days_filter_dropdown')
  const selected = dropdown.querySelector('.days_dropdown_selected')
  const options = dropdown.querySelector('.dropdown-options')

  // Toggle dropdown visibility
  selected.addEventListener('click', (e) => {
    e.stopPropagation()
    options.classList.toggle('show')
  })

  // Select an option
  options.querySelectorAll('li').forEach((option) => {
    option.addEventListener('click', () => {
      selected.textContent = option.textContent
      options.classList.remove('show')
    })
  })

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    options.classList.remove('show')
  })
})

document.addEventListener('DOMContentLoaded', () => {
  // STATUS DROPDOWN
  const statusDropdown = document.querySelector('.status_filter_dropdown')
  const statusSelected = statusDropdown.querySelector(
    '.status_dropdown_selected',
  )
  const statusOptions = statusDropdown.querySelector('.dropdown-options')

  statusSelected.addEventListener('click', (e) => {
    e.stopPropagation()
    statusOptions.classList.toggle('show')
  })

  statusOptions.querySelectorAll('li').forEach((option) => {
    option.addEventListener('click', () => {
      statusSelected.textContent = option.textContent
      statusOptions.classList.remove('show')
    })
  })

  document.addEventListener('click', () => {
    statusOptions.classList.remove('show')
  })
})
