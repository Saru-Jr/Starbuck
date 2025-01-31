const menu = document.querySelector(".menu")
const navLinks = document.querySelector(".nav-links")

menu.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu')
})

async function checkAuthStatus() {
        try {
                const reponse = await fetch('/api/check-auth', {
                        method: 'GET',
                        credentials: 'include',
                });
                if (!reponse.ok) {
                        throw new Error(Error('You must log in to view this page'));
                }

                const data = await reponse.json();

                if (data.isLoggedIn) {
                        window.location.href = "/siteteste/contact/about/about.html";
                } else {
                        if (data.hasAccount) {
                                window.location.href = "/siteteste/contact/contact.html";
                        } else {
                                window.location.href = "/siteteste/contact/register/register.html";
                        }
                }
        }catch (error) {
                console.error('Erreur: ',error);
        }
}

window.onload = checkAuthStatus;