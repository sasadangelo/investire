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

			// Aggiunta del filtro per la durata
			$('#filter-select').on('change', function() {
				var filterValue = $(this).val();
				var filteredData = results.data.filter(function(row) {
				if (filterValue === 'all') {
					return true;
				} else if (filterValue === 'quarterly') {
					return parseInt(row['Durata']) < 32;
				} else if (filterValue === 'semiannual') {
					return parseInt(row['Durata']) > 176 && parseInt(row['Durata']) < 184;
				} else if (filterValue === 'annual') {
					return parseInt(row['Durata']) > 360;
				}
				});

				table.clear();
				table.rows.add(filteredData);
				table.draw();
			});
		}
	});
});
