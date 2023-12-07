const themeSelect = document.querySelector('#multiTheme');


navigator.geolocation.getCurrentPosition((position) => {
    let sunset = new Date().sunset(position.coords.latitude, position.coords.longitude);
    let sunrise = new Date().sunrise(position.coords.latitude, position.coords.longitude);
    if (isDay(sunset, sunrise)) {
        selectTheme('theme-light');
    } else {
        selectTheme('theme-dark');
    }

    function isDay(sunset, sunrise) {
        const nowHours = new Date().getHours();
        return nowHours >= sunrise.getHours() && nowHours < sunset.getHours();
    }
});

const defaultTheme = localStorage.getItem('theme') || 'theme-light';

selectTheme(defaultTheme)



function selectTheme (theme) {
    theme = theme || 'theme-light'
    document.documentElement.classList = theme;
    theme = localStorage.setItem('theme',theme)
}

themeSelect.addEventListener('change',(e) =>{
    // console.log(e.target.value);/
    selectTheme(e.target.value);
})