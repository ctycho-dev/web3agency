import axios from "axios"

export async function sendEmail(subject: string, name: string, email: string, problem: string = '') {
    const body = `
    <style>
        .btn-link {
        text-decoration: underline;
        color: #0069c2;
        }
        .title {
            margin-bottom: 10px;
        }
        .block {
            margin-bottom: 3px;
        }
    </style>
    <h3 class="title">${subject}</h3>
    <div class="block">name & company: ${name}</div>
    <div class="block">Email or telegram: ${email}</div>
    <div class="block">How can we help you?: ${problem}</div>
    `

    const data = {
        subject: subject,
        body: body,
        msg_type: 'html'
    }

    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND}/email/`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res
    } catch (error) {
        console.error(error)
    }
    return null
}