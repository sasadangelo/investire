const form = document.getElementById("calc-form");
const risultati = document.getElementById("risultati");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const prezzoUnitario = Number(document.getElementById("prezzo-unitario").value);
  const lotto = Number(document.getElementById("lotto").value);
  const commissioneEseguito = Number(document.getElementById("commissione-eseguito").value);
  const commissioneIntermediario = Number(document.getElementById("commissione-intermediario").value);

  const prezzo = prezzoUnitario * lotto / 100;
  const commissione = Math.max(prezzo * 0.0024, 3.5);
  const commissioniTotale = commissione + commissioneEseguito + commissioneIntermediario;

  // Imposta su Rateo
  const imposta = Math.floor(((lotto - prezzo) * 0.125) * 100)/100;
  console.log("imposta:", imposta);

  // Totale Spesa
  const totaleSpesa = prezzo + commissioniTotale + imposta;
  console.log("totaleSpesa:", totaleSpesa);

  // Guadagno
  const guadagno = lotto - totaleSpesa;
  console.log("guadagno:", guadagno);

  // Rendimento Netto
  const rendimentoNetto = (guadagno * 100) / prezzo;
  console.log("rendimentoNetto:", rendimentoNetto);

  // Stampa dei risultati
  risultati.style.display = 'block';
  document.getElementById("prezzo-calcolato").textContent = prezzo.toFixed(2);
  document.getElementById("commissione").textContent = commissione.toFixed(2);
  document.getElementById("commissioni-totale").textContent = commissioniTotale.toFixed(2);
  document.getElementById("imposta").textContent = Math.floor(imposta * 100)/100;
  document.getElementById("totale-spesa").textContent = totaleSpesa.toFixed(2);
  document.getElementById("ricavo").textContent = lotto.toFixed(2);
  document.getElementById("guadagno").textContent = guadagno.toFixed(2);
  document.getElementById("rendimento-netto").textContent = rendimentoNetto.toFixed(2);
})
