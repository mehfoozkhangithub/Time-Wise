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

// Add Notes Logic

// Modal open/close
const addNoteBtn = document.querySelector('.add_note');
const modal = document.getElementById('noteModal');
const overlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');

addNoteBtn.onclick = () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
};
[closeModal, cancelBtn, overlay].forEach(el =>
  el.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  })
);

// Custom dropdown logic
document.querySelectorAll('.custom_dropdown').forEach(dropdown => {
  const selected = dropdown.querySelector('.selected_option');
  const list = dropdown.querySelector('.dropdown_list');
  const items = list.querySelectorAll('.dropdown_item');

  // Toggle dropdown visibility
  selected.onclick = () => {
    dropdown.classList.toggle('active');
  };

  // Handle item selection
  items.forEach(item => {
    item.onclick = () => {
      items.forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
      selected.innerHTML = `${item.textContent.trim()} <i class="fa-solid fa-chevron-down"></i>`;
      dropdown.classList.remove('active');
    };
  });
});

// Close dropdowns if clicked outside
document.addEventListener('click', e => {
  document.querySelectorAll('.custom_dropdown').forEach(d => {
    if (!d.contains(e.target)) d.classList.remove('active');
  });
});

// Edit/Delete functionabilty
document.addEventListener('DOMContentLoaded', () => {
  const notesContainer = document.querySelector('.manager_notes_list')

  notesContainer.addEventListener('click', (e) => {
    const noteCard = e.target.closest('.note_card')
    if (!noteCard) return

    // DELETE FUNCTION
    if (e.target.classList.contains('delete-note')) {
      noteCard.remove()
      return
    }

    // EDIT FUNCTION
    if (e.target.classList.contains('edit-note')) {
      const p = noteCard.querySelector('p')
      const originalText = p.textContent.trim()

      // Create editable textarea
      const textarea = document.createElement('textarea')
      textarea.classList.add('note_edit_area')
      textarea.value = originalText
      p.replaceWith(textarea)
      textarea.focus()
      textarea.select()

      // Replace icons with save/cancel buttons
      const actions = noteCard.querySelector('.note_actions')
      actions.innerHTML = `
        <button class="save_btn">Save</button>
        <button class="cancel_btn">Cancel</button>
      `

      // SAVE BUTTON
      actions.querySelector('.save_btn').addEventListener('click', () => {
        const updatedText = textarea.value.trim() || 'No content provided.'
        const newParagraph = document.createElement('p')
        newParagraph.textContent = updatedText
        textarea.replaceWith(newParagraph)
        resetActions(actions)
      })

      // CANCEL BUTTON
      actions.querySelector('.cancel_btn').addEventListener('click', () => {
        const newParagraph = document.createElement('p')
        newParagraph.textContent = originalText
        textarea.replaceWith(newParagraph)
        resetActions(actions)
      })
    }

    function resetActions(actions) {
      actions.innerHTML = `
        <i class="fa-solid fa-pen edit-note"></i>
        <i class="fa-solid fa-trash delete-note"></i>
      `
    }
  })
})

