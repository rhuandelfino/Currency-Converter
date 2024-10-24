function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || amount <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    // Simulando as taxas de conversão (valores fictícios)
    const rates = {
        BRL: { USD: 0.18, EUR: 0.16, GBP: 0.14 },
        USD: { BRL: 5.60, EUR: 0.91, GBP: 0.78 },
        EUR: { BRL: 6.18, USD: 1.10, GBP: 0.86 },
        GBP: { BRL: 7.25, USD: 1.28, EUR: 1.16 }
    };

    if (fromCurrency === toCurrency) {
        document.getElementById('resultText').innerHTML = `Resultado: ${amount} ${fromCurrency}`;
        return;
    }

    const conversionRate = rates[fromCurrency][toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);

    document.getElementById('resultText').innerHTML = `Resultado: ${convertedAmount} ${toCurrency}`;
}
