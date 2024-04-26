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
			]
		},
		actions: {
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
