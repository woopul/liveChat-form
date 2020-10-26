export default (user) => new Promise((resolve, reject) => {
	setTimeout(() => {
		const mockedUser = {
			email: 'test@test.pl',
			password: 'Password1',
		};
		if (user.email === mockedUser.email && user.password === mockedUser.password) {
			resolve({ id: 1, isSignedIn: true });
		} else {
			const message = user.email === mockedUser.email ? "Password not correct" : "User is not Present";
			reject({isSignedIn: false, message});
		}
	}, 1000);
});