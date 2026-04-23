  function showSection(sectionId, clickedLink) {
    // Skryj všechny panely
    document.querySelectorAll('.main_panel').forEach(panel => {
      panel.classList.remove('active_panel');
    });

    // Odeber active z nav linků
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });

    // Zobraz vybraný panel
    document.getElementById(sectionId).classList.add('active_panel');

    // Označ aktivní link
    clickedLink.classList.add('active');

    // Zabraň scrollování na #
    event.preventDefault();
  }