// LACZENIE SIE Z BAZA

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
        const blob = new Blob([skrypt.code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const data = new Date(skrypt.created_at);
        const dataFormatowana = `${data.getDate().toString().padStart(2,'0')}.${(data.getMonth()+1).toString().padStart(2,'0')}`;

        // Zamień link YouTube na embed
        let embedHTML = '';
        if (skrypt.link) {
            const videoId = skrypt.link.split('v=')[1]?.split('&')[0];
            if (videoId) {
                embedHTML = `
                    <tr>
                        <td colspan="3" style="padding: 10px;">
                            <iframe 
                                width="100%" 
                                height="200" 
                                src="https://www.youtube.com/embed/${videoId}" 
                                frameborder="0" 
                                allowfullscreen>
                            </iframe>
                        </td>
                    </tr>`;
            }
        }

        tbody.innerHTML += `
            <tr>
                <td id="nazwa"><a href="${url}" download="${skrypt.name.toLowerCase()}.py">${skrypt.name}</a></td>
                <td id="data">${dataFormatowana}</td>
                <td id="jezyk_python">PYTHON</td>
            </tr>
            ${embedHTML}
        `;
    });
}

pobierzSkrypty();

// SIDEBAR
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('otwarty');
});

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && e.target !== menuBtn) {
        sidebar.classList.remove('otwarty');
    }
});
