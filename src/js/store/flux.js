const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					name: "pedro",
					phone: "3428934",
					email: "pedro@gmail.com",
					address: "asjkdhasjdkh"
				},
				{
					name: "juan",
					phone: "989889",
					email: "juan@gmail.com",
					address: "yutyutytyu"
				}
			],
			diary: 'adrian'
		},
		actions: {
			getDiary: async () => {
				console.log("Ejecutando getDiary");

				await fetch(`https://playground.4geeks.com/contact/agendas/${getStore().diary}`).then(async resp => {
					if (resp.ok) {
						console.log("Agenda encontrada");
					} else {
						console.log("Agenda no encontrada");
						getActions().createDiary()
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
