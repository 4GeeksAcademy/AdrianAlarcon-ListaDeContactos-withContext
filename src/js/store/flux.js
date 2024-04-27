const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			diary: 'adrian'
		},
		actions: {

			getDiary: async () => {
				console.log("Ejecutando getDiary");

				await fetch(`https://playground.4geeks.com/contact/agendas/${getStore().diary}`).then(async resp => {
					if (resp.ok) {
						console.log("Agenda encontrada");
						getActions().getContacts();
					} else {
						console.log("Agenda no encontrada");
						getActions().createDiary();
					}
				}).catch(err => {
					console.error("Error fetching:", err);
				});
			},

			createDiary: () => {
				console.log("Ejecutando createDiary");

				fetch(`https://playground.4geeks.com/contact/agendas/${getStore().diary}`, {
					method: 'POST',
				}).then(resp => {
					if (resp.ok) {
						console.log("Agenda creada");
					} else {
						console.log("No se pudo crear agenda");
					}
				}).catch(err => {
					console.error("Error creando agenda:", err);
				});
			},

			getContacts: async () => {
				await fetch(`https://playground.4geeks.com/contact/agendas/${getStore().diary}/contacts`, {
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						} else {
							throw new Error('Error al obtener contactos');
						}
					})
					.then(contacts => {
						setStore({ contacts: contacts.contacts });
						console.log('Contacts cargados:', contacts);
					})
					.catch(err => {
						console.error('Error en getContacts:', err);
					});
			},


			createContact: async (newContact) => {
				const store = getStore();
				console.log('newContact', newContact.name)

				await fetch(`https://playground.4geeks.com/contact/agendas/${getStore().diary}/contacts`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						name: newContact.name,
						phone: newContact.phone,
						email: newContact.email,
						address: newContact.address
					})
				}).then(resp => {
					if (resp.ok) {
						const updatedContacts = [...store.contacts, newContact];

						setStore({
							...store,
							contacts: updatedContacts,
						});
					} else {
						alert("no se pudo crear el usuario")
					}
				})
			},

			deleteContact: () => {
				const store = getStore();

				// El _ significa que no utilizamos el valor actual
				const updatedContacts = store.contacts.filter((_, index) => index !== contactIndex);

				setStore({
					...store,
					contacts: updatedContacts
				});
			}
		}
	};
};

export default getState;
