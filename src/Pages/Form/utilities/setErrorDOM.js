import anime from "animejs"


const errorDOM = (item, booleano) => {
    return {
        targets: item,
        scale: {
            value: booleano ? 1 : 0,
            duration: 1,
            easing: 'easeInOutQuart'
        }
    }
}


export const setErrorDOM = (result, refs) => {

    for (let ref of refs) {
        const item = ref.current
        const name = item.id

        if (result.error) {

            item.innerHTML =
                result[name].error
                    ? result[name].length
                        ? "El campo está vacío"
                        : "El valor ingresado es inválido"
                    : "Correcto!"

            item.style.padding =
                result[name].error
                    ? '0.2em 0'
                    : '0'

            item.style.background =
                result[name].error
                    ? 'linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(200,73,73,1) 100%)'
                    : 'linear-gradient(45deg, rgba(6,186,17,1) 0%, rgba(90,205,76,1) 100%)'

            anime(errorDOM(item,
                result[name].error
                    ? true : false))
        }
    }
}