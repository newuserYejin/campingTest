import axios from 'axios'
// const TEST_API_KEY_EN = `HYuPePscXWsXZj8LTa900BZgb/66OeqfpbjmL5mjoYqMmd2mZ55p1glzPRGOwRsWXISJeiRhKygjhqMiEIPQLw==`
const REACT_APP_API_KEY_DN_JIN = process.env.REACT_APP_API_KEY_DN_JIN

const apiAttraction = axios.create({
    baseURL: 'https://apis.data.go.kr/B551011',
    // timeout: 1000,
    params: {
        MobileOS: "WIN",
        MobileApp: "so",
        // radius: 20000,
        _type: "json",
        serviceKey: `${REACT_APP_API_KEY_DN_JIN}`
        // serviceKey: `HYuPePscXWsXZj8LTa900BZgb%2F66OeqfpbjmL5mjoYqMmd2mZ55p1glzPRGOwRsWXISJeiRhKygjhqMiEIPQLw%3D%3D`
    },
    headers: {
    }
})

export default apiAttraction