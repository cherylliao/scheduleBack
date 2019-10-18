import { API } from './config';

const Schedule = (appointment) => {
    // console.log(name, email, password)
    return fetch(`${API}/create`, {
        method: "POST",
        headers:{
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body:JSON.stringify(appointment)

    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err);
    });

};
export default Schedule;