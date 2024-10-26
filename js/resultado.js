
document.addEventListener('DOMContentLoaded', function() {
    const resultsContainer = document.getElementById('results');
    const results = JSON.parse(localStorage.getItem('quizResults'));
    console.log(results)
    if (!results) {
        resultsContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
        return;
    }

    const totalScores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let totalPoints = 0;

    // Calculating total scores for each option
    for (const question in results) {
        results[question].forEach((score, index) => {
            totalScores[index + 1] += parseInt(score);
            totalPoints += parseInt(score); // Calculating total points
        });
    }
    
    // Adding percentage calculation and display
        option = 1;
        scoreElement = document.createElement('p');
        console.log(totalScores[option]);
        percentage = totalPoints > 0 ? ((parseInt(totalScores[option]) / totalPoints) * 100).toFixed(2) : 0;
        scoreElement.textContent = `Palavra de Afirmação: ${totalScores[option]} pontos (${percentage}%)`;
        resultsContainer.appendChild(scoreElement);

        option = 2;
        scoreElement = document.createElement('p');
        console.log(totalScores[option]);
         percentage = totalPoints > 0 ? ((parseInt(totalScores[option]) / totalPoints) * 100).toFixed(2) : 0;
        scoreElement.textContent = `Tempo De Qualidade: ${totalScores[option]} pontos (${percentage}%)`;
        resultsContainer.appendChild(scoreElement);

        option = 3;
        scoreElement = document.createElement('p');
        console.log(totalScores[option]);
        percentage = totalPoints > 0 ? ((parseInt(totalScores[option]) / totalPoints) * 100).toFixed(2) : 0;
        scoreElement.textContent = `Presente: ${totalScores[option]} pontos (${percentage}%)`;
        resultsContainer.appendChild(scoreElement);

        option = 4;
        scoreElement = document.createElement('p');
        console.log(totalScores[option]);
        percentage = totalPoints > 0 ? ((parseInt(totalScores[option]) / totalPoints) * 100).toFixed(2) : 0;
        scoreElement.textContent = `Atos De Serviço ${option}: ${totalScores[option]} pontos (${percentage}%)`;
        resultsContainer.appendChild(scoreElement);

        option = 5;
        scoreElement = document.createElement('p');
        console.log(totalScores[option]);
        percentage = totalPoints > 0 ? ((parseInt(totalScores[option]) / totalPoints) * 100).toFixed(2) : 0;
        scoreElement.textContent = `Toque Fisico ${option}: ${totalScores[option]} pontos (${percentage}%)`;
        resultsContainer.appendChild(scoreElement);
});
