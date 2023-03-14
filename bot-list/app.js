$(document).ready(function() {
	// Caricamento del file CSV
	Papa.parse('https://sasadangelo.github.io/investire/bot-list/elenco_bot.csv', {
		header: true,
		download: true,
		worker: true,
		complete: function(results) {
			// Aggiunta dei dati alla tabella HTML
			var table = $('#bot-table').DataTable({
				data: results.data,
				columns: [
					{ data: 'ISIN' },
					{ data: 'Nome' },
					{ data: 'Durata' },
					{ data: 'Data Emissione' },
					{ data: 'Prezzo Emissione' },
					{ data: 'Scadenza' },
					{ data: 'Guadagno Lordo' },
					{ data: 'Rendimento Lordo' }
				],
				pageLength: 25,
				order: [[0, 'desc']]
			});
		}
	});
});
