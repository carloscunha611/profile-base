import Profile from "./components/Profile"

export default function App() {

  return (
    <div className="app">
      <Profile
        avatar = 'userImage'
        name = 'Carlos Cunha Jr.'
        bio = 'Dev Web (Front-End)'
        phone = '+00 (00) 0 0000-0000'
        email = 'userEmail@email.com'
        githubUrl = 'https://github.com/carloscunha611'
        linkedinUrl = 'https://www.linkedin.com/in/carloscunha611/'
        portfolioUrl = 'https://carloscunha611.github.io/portfolio/'
      />
    </div>
  )
}
