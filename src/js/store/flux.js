const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					name: "pedro",
					email: "pedro@gmail.com",
					phone: "3428934",
					address: "asjkdhasjdkh"
				},
				{
					name: "juan",
					email: "juan@gmail.com",
					phone: "989889",
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


			createContact: async (diary, body) => {
				await fetch(`https://playground.4geeks.com/contact/agendas/${getStore().diary}/contacts`, {
					method: 'POST',
					body: JSON.stringify(body)
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
