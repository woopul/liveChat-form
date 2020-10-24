export default (user) => new Promise((resolve, reject) => {
	setTimeout(() => {
		const mockedUser = {
			email: 'test@test.pl',
			password: 'Password1',
		};
		if (user.emial === mockedUser.email && user.password === mockedUser.password) {
			resolve({ message: "SUCCESS "});
		} else {
			reject({message: "USER IS NOT PRESENT"});
		}
	}, 5000);
});