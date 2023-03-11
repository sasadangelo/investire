const form = document.getElementById("calc-form");
const risultati = document.getElementById("risultati");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const dataEmissione = document.getElementById("data-emissione").valueAsDate;  
  const prezzoEmissione = Number(document.getElementById("prezzo-emissione").value);
  const dataScadenza = document.getElementById("data-scadenza").valueAsDate;  
  const dataAcquisto = document.getElementById("data-acquisto").valueAsDate;  
  const prezzoAcquisto = Number(document.getElementById("prezzo-acquisto").value);
  const lotto = Number(document.getElementById("lotto").value);
  const commissionePercentuale = Number(document.getElementById("commissione-percentuale").value);
  const commissioneEseguito = Number(document.getElementById("commissione-eseguito").value);
  const commissioneIntermediario = Number(document.getElementById("commissione-intermediario").value);

  // Prezzo
  const prezzo = prezzoAcquisto * lotto / 100;
  console.log("Prezzo:", prezzo);

  // Commissione
  const commissione = Math.max((prezzo * commissionePercentuale/100), 3);
  console.log("Commissione:", commissione);

  const commissioniTotale = commissione + commissioneEseguito + commissioneIntermediario;
  console.log("Commissioni Totale:", commissioniTotale);

  // Data di Regolamento = Data Acquisto + 2gg
  const dataRegolamento = new Date(dataAcquisto);
  dataRegolamento.setDate(dataRegolamento.getDate() + 2);
  console.log("Data di regolamento:", dataRegolamento);

  // Giorni residui
  const millisecondiInUnGiorno = 1000 * 60 * 60 * 24;
  const differenzaTimestamp = dataScadenza.getTime() - dataRegolamento.getTime();
  const giorniResidui = Math.ceil(differenzaTimestamp / millisecondiInUnGiorno);
  console.log("Giorni residui:", giorniResidui);

  // Guadagno Lordo
  const guadagnoLordo = 100 - prezzoAcquisto;

  // Guadagno Lordo
  const guadagnoLordoTotale = guadagnoLordo*lotto/100;

  // Rendimento Lordo
  const rendimentoLordo = (guadagnoLordo*100/prezzoAcquisto)*(365/giorniResidui);

  // Imposta
  const guadagnoLordoEmissione = 100 - prezzoEmissione;
  const guadagnoLordoTotaleEmissione = guadagnoLordoEmissione*lotto/100;
  const imposta = (guadagnoLordoTotaleEmissione*0.125)*(giorniResidui/365);
  console.log("Guadagno Lordo Emissione:", guadagnoLordoEmissione);
  console.log("Guadagno Lordo Totale Emissione:", guadagnoLordoTotaleEmissione);
  console.log("Imposta:", imposta);

  // Totale Spesa
  const totaleSpesa = prezzo + commissioniTotale + imposta;
  console.log("Totale Spesa:", totaleSpesa);

  // Guadagno
  const guadagno = lotto - totaleSpesa;
  console.log("guadagno:", guadagno);

  // Rendimento Netto
  const rendimentoNetto = (guadagno * 100) / prezzo;
  console.log("rendimentoNetto:", rendimentoNetto);

  // Stampa dei risultati
  risultati.style.display = 'block';
  document.getElementById("guadagno-lordo").textContent = guadagnoLordo.toFixed(2);
  document.getElementById("guadagno-lordo-totale").textContent = guadagnoLordoTotale.toFixed(2);
  document.getElementById("rendimento-lordo").textContent = rendimentoLordo.toFixed(2);
  document.getElementById("prezzo").textContent = prezzo.toFixed(2);
  document.getElementById("commissione").textContent = commissione.toFixed(2);
  document.getElementById("commissioni-totale").textContent = commissioniTotale.toFixed(2);
  document.getElementById("imposta").textContent = imposta.toFixed(2);;
  document.getElementById("totale-spesa").textContent = totaleSpesa.toFixed(2);
  document.getElementById("guadagno").textContent = guadagno.toFixed(2);
  document.getElementById("rendimento-netto").textContent = rendimentoNetto.toFixed(2);
})
