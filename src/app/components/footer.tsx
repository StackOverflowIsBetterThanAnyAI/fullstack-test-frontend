const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <footer className="mt-auto mx-auto">
            Copyright © {date} Michael Münzenhofer. All rights reserved.
        </footer>
    )
}

export default Footer
