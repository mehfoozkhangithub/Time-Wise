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
  const weeklyBtn = document.getElementById('weeklyBtn')
  const monthlyBtn = document.getElementById('monthlyBtn')

  const totalHoursEl = document.getElementById('totalHours')
  const avgPerDayEl = document.getElementById('avgPerDay')
  const daysMissedEl = document.getElementById('daysMissed')

  let currentView = 'weekly'

  function getResolvedColors() {
    const rootStyles = getComputedStyle(document.documentElement)
    return {
      primary: rootStyles.getPropertyValue('--primary').trim(),
      primaryHover: rootStyles.getPropertyValue('--primary-hover').trim(),
      success: rootStyles.getPropertyValue('--success').trim(),
      successHover: '#81E6C3',
      border: rootStyles.getPropertyValue('--border').trim(),
      textPrimary: rootStyles.getPropertyValue('--text-primary').trim(),
      textSecondary: rootStyles.getPropertyValue('--text-secondary').trim(),
    }
  }

  let colors = getResolvedColors()

  // 📊 Weekly + Monthly Data
  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    data: [8, 7.5, 8.5, 6, 9, 4],
    metrics: { total: '42.7H', avg: '6.1H', missed: '1' },
    color: colors.primary,
    hoverColor: colors.primaryHover,
  }

  const monthlyData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    data: [38, 42, 35, 40],
    metrics: { total: '155.0H', avg: '38.7H', missed: '4' },
    color: colors.success,
    hoverColor: colors.successHover,
  }

  // Init chart
  let workHoursChart = new Chart(ctx, {
    type: 'bar',
    data: getChartData(weeklyData),
    options: getChartOptions(),
  })

  // Update Metrics
  function updateMetrics(metrics) {
    totalHoursEl.textContent = metrics.total
    avgPerDayEl.textContent = metrics.avg
    daysMissedEl.textContent = metrics.missed
  }
  updateMetrics(weeklyData.metrics)

  // Event listeners
  weeklyBtn.addEventListener('click', () => {
    if (currentView !== 'weekly') {
      toggleActiveButton()
      currentView = 'weekly'
      colors = getResolvedColors()
      updateChartData(weeklyData)
      updateMetrics(weeklyData.metrics)
    }
  })

  monthlyBtn.addEventListener('click', () => {
    if (currentView !== 'monthly') {
      toggleActiveButton()
      currentView = 'monthly'
      colors = getResolvedColors()
      updateChartData(monthlyData)
      updateMetrics(monthlyData.metrics)
    }
  })

  function toggleActiveButton() {
    weeklyBtn.classList.toggle('active')
    monthlyBtn.classList.toggle('active')
  }

  function updateChartData(data) {
    workHoursChart.data = getChartData(data)
    workHoursChart.options = getChartOptions()
    workHoursChart.update()
  }

  function getChartData(data) {
    return {
      labels: data.labels,
      datasets: [
        {
          label: 'Work Hours',
          data: data.data,
          backgroundColor: data.color,
          borderColor: colors.border,
          borderWidth: 1,
          hoverBackgroundColor: data.hoverColor,
          borderRadius: 6,
          barThickness: 30,
        },
      ],
    }
  }

  function getChartOptions() {
    return {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 20, bottom: 10, left: 10, right: 10 } },
      scales: {
        y: {
          beginAtZero: true,
          max: currentView === 'weekly' ? 12 : 50,
          ticks: {
            stepSize: currentView === 'weekly' ? 2 : 10,
            callback: (value) => `${value} hrs`,
            color: colors.textSecondary,
            font: { size: 12, family: 'Inter, sans-serif' },
          },
          grid: { color: colors.border, borderDash: [4, 4] },
        },
        x: {
          ticks: {
            color: colors.textSecondary,
            font: { size: 12, family: 'Inter, sans-serif' },
          },
          grid: { display: false },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: colors.textPrimary,
            font: { size: 14, weight: '500', family: 'Inter, sans-serif' },
          },
        },
        tooltip: {
          backgroundColor: colors.border,
          titleColor: colors.textPrimary,
          bodyColor: colors.textSecondary,
          titleFont: { weight: '600' },
          padding: 10,
          cornerRadius: 4,
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y} hrs`,
          },
        },
      },
    }
  }
})

// after chart.update() or after chart creation
if (typeof workHoursChart !== 'undefined' && workHoursChart) {
  setTimeout(() => workHoursChart.resize(), 120);
}



// Pie Chart Logic
document.addEventListener('DOMContentLoaded', function () {
  const pieCtx = document.getElementById('attendancePieChart').getContext('2d')
  const rootStyles = getComputedStyle(document.documentElement)

  const pieColors = {
    present: rootStyles.getPropertyValue('--success').trim() || '#4CAF50',
    late: rootStyles.getPropertyValue('--primary-hover').trim() || '#FFA500',
    absent: rootStyles.getPropertyValue('--error').trim() || '#F44336',
    border: rootStyles.getPropertyValue('--border').trim() || '#e5e7eb',
    textPrimary: rootStyles.getPropertyValue('--text-primary').trim(),
  }

  const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: ['Present (85%)', 'Late (12%)', 'Absent (3%)'],
      datasets: [
        {
          data: [85, 12, 3],
          backgroundColor: [
            pieColors.present,
            pieColors.late,
            pieColors.absent,
          ],
          borderColor: pieColors.border,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false, // Hide default legend
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || ''
              const value = context.parsed || 0
              return `${label}: ${value}%`
            },
          },
        },
      },
    },
  })

  // ---- Custom Legend Rendering ----
  const legendContainer = document.getElementById('attendanceLegend')
  if (legendContainer) {
    const labels = pieChart.data.labels
    const bgColors = pieChart.data.datasets[0].backgroundColor

    legendContainer.innerHTML = labels
      .map((label, i) => {
        return `
        <div class="legend-item">
          <span class="legend-color" style="background-color:${bgColors[i]}"></span>
          <span class="legend-label">${label}</span>
        </div>
      `
      })
      .join('')
  }
})
