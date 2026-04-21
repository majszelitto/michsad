
        const SUPABASE_URL = 'https://nsblozqghfvdpzumfqhl.supabase.co';
        const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zYmxvenFnaGZ2ZHB6dW1mcWhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3MTE5MDgsImV4cCI6MjA5MjI4NzkwOH0.oEK-fkp1hUsKn3xVDC4HyT-nZUrlcEvO1RQ5NMqut9I';

        async function pobierzSkrypty() {
            const response = await fetch(`${SUPABASE_URL}/rest/v1/scripts?select=*&order=created_at.asc`, {
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                }
            });

            const skrypty = await response.json();
            const tbody = document.getElementById('skrypty-lista');
            tbody.innerHTML = '';

            skrypty.forEach(skrypt => {
                // Generuj link do pobrania z tekstu w bazie
                const blob = new Blob([skrypt.code], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);

                // Formatuj datę
                const data = new Date(skrypt.created_at);
                const dataFormatowana = `${data.getDate().toString().padStart(2,'0')}.${(data.getMonth()+1).toString().padStart(2,'0')}`;

                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td id="nazwa"><a href="${url}" download="${skrypt.name.toLowerCase()}.py">${skrypt.name}</a></td>
                    <td id="data">${dataFormatowana}</td>
                    <td id="jezyk_python">PYTHON</td>
                `;
                tbody.appendChild(tr);
            });
        }

        pobierzSkrypty();
