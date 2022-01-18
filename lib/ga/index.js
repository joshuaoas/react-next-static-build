// log the pageview with their URL
export const pageview = (url) => {
    window.gtag('config', '0000000-000000', {
        page_path: url,
    })
}

// log specific events happening.
export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}