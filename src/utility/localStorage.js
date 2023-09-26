// get data from local storage
const getStoredDonation = () => {
    const storedDonateApplication = localStorage.getItem('donate_application');
    if (storedDonateApplication) {
        return JSON.parse(storedDonateApplication);
    }
    return [];
}

//set data or save donation to local storage by user
const saveDonateApplication = (id) => {
    const preStoredDonateApplications = getStoredDonation();

    const exist = preStoredDonateApplications.find(donateId => donateId.id === id);
    if (!exist) {
        preStoredDonateApplications.push(id);
        localStorage.setItem('donate_application', JSON.stringify(preStoredDonateApplications));
    }
}

export { getStoredDonation, saveDonateApplication };