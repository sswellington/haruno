const base = {
    data() {
        return {
            title: 'Haruno',
            subtitle: 'Sarada'
        }
    }
}

Vue.createApp(base).mount('#base')


const main = {
    data() {
        return {
            msg: 'If you think privacy is unimportant for you because you have nothing to hide, you might as well say free speech is unimportant for you because you have nothing useful to say.',
            paragraph: 'This is paragraph text. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: 'screenshot/time7.jpg'
        }
    }
}

Vue.createApp(main).mount('#main')


const footer = {
    data() {
        return {
            name: '2022 © Haruno',
            version: 'Version Beta',
            by: 'sswellington'
        }
    }
}

Vue.createApp(footer).mount('#copyright')