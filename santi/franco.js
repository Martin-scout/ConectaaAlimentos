// --- MODIFICACIÓN CLAVE AQUÍ ---
                // El botón de borrar SIEMPRE estará habilitado visualmente.
                // La lógica de permisos se manejará dentro de la función borrarDato().
                deleteButton.onclick = () => borrarDato(index);
                deleteButton.disabled = false; // Siempre habilitado
                deleteButton.title = "Borrar este dato (requiere ser Repartidor para confirmar)."; // Nuevo tooltip