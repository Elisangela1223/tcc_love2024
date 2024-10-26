function verificaDuplicatas(event) {
    const select = event.target;
    const questionGroup = select.closest('.question').getAttribute('data-question');
    const groupSelects = document.querySelectorAll(`.question[data-question="${questionGroup}"] select`);

    // Obtenha todos os valores selecionados no grupo
    const selectedValues = Array.from(groupSelects).map(sel => sel.value).filter(value => value !== '0');

    // Resete todas as opções exceto "Selecione uma opção"
    groupSelects.forEach(sel => {
      for (let i = 1; i <= 5; i++) {
        sel.querySelector(`option[value="${i}"]`).disabled = false;
      }
    });

    // Desabilite as opções já selecionadas
    groupSelects.forEach(sel => {
      selectedValues.forEach(value => {
        if (sel.value !== value) {
          sel.querySelector(`option[value="${value}"]`).disabled = true;
        }
      });
    });
  }

  // Função para validar duplicatas e opções não selecionadas
  function validaFormulario() {
    const errors = [];
    let hasUnselected = false;
    
    document.querySelectorAll('.question').forEach(question => {
      const questionNumber = question.dataset.question;
      const values = [];
      let hasDuplicate = false;
      let hasEmpty = false;

      question.querySelectorAll('select').forEach(select => {
        const value = select.value;
        if (value === '0') {
          hasEmpty = true;
          select.style.borderColor = 'red';
        } else if (values.includes(value)) {
          hasDuplicate = true;
          select.style.borderColor = 'red';
        } else {
          select.style.borderColor = '';
          values.push(value);
        }
      });

      if (hasDuplicate) {
        errors.push(`A Pergunta ${questionNumber} tem opções duplicadas.`);
      }

      if (hasEmpty) {
        errors.push(`A Pergunta ${questionNumber} contém opções não selecionadas.`);
      }
    });

    return { errors, hasUnselected };
  }

  // Função para submeter o formulário
  function submeterFormulario() {
    const validation = validaFormulario();

    if (validation.errors.length) {
      alert(validation.errors.join('\n'));
      return;
    }

    if (confirm("Você tem certeza que deseja enviar as respostas?")) {
      const results = {};

      document.querySelectorAll('.question').forEach(question => {
        const questionNumber = question.dataset.question;
        const values = [];

        question.querySelectorAll('select').forEach(select => {
          const value = select.value;
          if (value !== '0') {
            values.push(value);
          }
        });

        if (values.length) {
          results[`q${questionNumber}`] = values;
        }
      });

      console.log(results);
      localStorage.setItem('quizResults', JSON.stringify(results));
      window.location.href = 'resultadoExpressa.html'; // Redireciona para a página de resultados
    }
  }

  // Evento de submissão do formulário
  document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    submeterFormulario();
  });