const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			editContactInfo: null,
			diary: 'adrian'
		},
		actions: {

			editInfoContact: (contact) => {
				const store = getStore();
				setStore({
					...store,
					editContactInfo: contact,
				});
			},


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

			editContact: async (contact) => {

				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${getStore().diary}/contacts/${contact.id}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							name: contact.name,
							phone: contact.phone,
							email: contact.email,
							address: contact.address,
						}),
					});

					if (response.ok) {
						const updatedContact = await response.json();
						const store = getStore();

						const updatedContacts = store.contacts.map((contact) =>
							contact.id === updatedContact.id ? updatedContact : contact
						);

						setStore({
							...store,
							contacts: updatedContacts,
						});
						getActions().getContacts()
					} else {
						console.error("Error al editar el contacto", await response.text());
					}
				} catch (error) {
					console.error("Ocurrió un error al editar el contacto:", error);
				}
			},

			deleteContact: async (contact_id) => {
				const store = getStore();

				await fetch(`https://playground.4geeks.com/contact/agendas/${getStore().diary}/contacts/${contact_id}`, {
					method: 'DELETE',
				}).then(resp => {
					if (resp.ok) {
						const updatedContacts = store.contacts.filter((_, index) => index !== contact_id);

						setStore({
							...store,
							contacts: updatedContacts
						});
						getActions().getContacts();
					} else {
						alert('No se pudo eliminar el contacto');
					}
				})
			}
		}
	};
};

export default getState;
