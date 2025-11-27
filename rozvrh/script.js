document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('edit-modal');
    const subjectInput = document.getElementById('subject-input');
    const saveBtn = document.getElementById('save-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    let currentCell = null;

    // Load saved schedule from localStorage
    loadSchedule();

    // Event delegation for subject cells
    document.querySelector('.schedule-grid').addEventListener('click', (e) => {
        if (e.target.classList.contains('subject-cell')) {
            openModal(e.target);
        }
    });

    // Modal Actions
    saveBtn.addEventListener('click', saveSubject);
    cancelBtn.addEventListener('click', closeModal);
    
    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Enter key to save
    subjectInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') saveSubject();
    });

    function openModal(cell) {
        currentCell = cell;
        subjectInput.value = cell.innerText;
        modal.classList.remove('hidden');
        subjectInput.focus();
    }

    function closeModal() {
        modal.classList.add('hidden');
        currentCell = null;
    }

    function saveSubject() {
        if (currentCell) {
            const newSubject = subjectInput.value.trim();
            if (newSubject) {
                currentCell.innerText = newSubject;
                saveToLocalStorage();
            }
            closeModal();
        }
    }

    function saveToLocalStorage() {
        const scheduleData = {};
        document.querySelectorAll('.subject-cell').forEach(cell => {
            const day = cell.dataset.day;
            const time = cell.dataset.time;
            const subject = cell.innerText;
            
            if (!scheduleData[day]) {
                scheduleData[day] = {};
            }
            scheduleData[day][time] = subject;
        });
        localStorage.setItem('schoolSchedule', JSON.stringify(scheduleData));
    }

    function loadSchedule() {
        const savedData = localStorage.getItem('schoolSchedule');
        if (savedData) {
            const scheduleData = JSON.parse(savedData);
            document.querySelectorAll('.subject-cell').forEach(cell => {
                const day = cell.dataset.day;
                const time = cell.dataset.time;
                if (scheduleData[day] && scheduleData[day][time]) {
                    cell.innerText = scheduleData[day][time];
                }
            });
        }
    }
});
