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
